import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { ProductsService } from 'src/app/services/products/products.service';


interface Product {
  _id: string,
  title: string,
  description?: string,
  category: string,
  rating: number,
  duration: number,
  price: number,
  sample: string,
  reviews?: Array<Review>,
}

interface Review {
  _id: string,
  reviewerUsername: string,
  reviewerEmail: string,
  reviewerProfilePicture: string,
  date: string,
  rating: number,
  review: string,
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private productsService: ProductsService,
    private loginService: LoginService,
    // private iab: InAppBrowser,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.tryGetCart();
  }
  
  @HostListener('unloaded')
  ngOnDestroy() {
    this.loginSub.unsubscribe();
    this.cartSub.unsubscribe();
  }

  
  cart;
  loginSub: Subscription;
  cartSub: Subscription;
  userEmail: string;
  cartLength: number;


  /**
   * Get the Cart
   */
  tryGetCart() {
    this.loginSub = this.loginService.userEmail
      .subscribe((userEmail: string) => {
        this.cartSub = this.productsService.getCart(userEmail)
          .subscribe((cart: Array<Product>) => {
            this.productsService.cart$.next(cart);
            this.loginService.userCart.next(cart);
            this.productsService.cart$.subscribe((cart) => {
              this.userEmail = userEmail;
              this.cart = cart;
              this.cartLength = cart.length;

              console.log(cart);
              return;
            })
          })
      })
  }

  /**
   * Complete Order
   */
   async tryCompleteOrder() {
    //  Reduce Cart to just an Array of Api Param IDs.
    let urlParams: [] = await this.cart.reduce(function (acc, cartItem) {
      return [...acc, cartItem.apiID]
    }, [])

    console.log(urlParams);

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Complete Order',
          id: 'complete-order-button',
          handler: async () => {
            // Format each URL Param to match HypnosisDownloads.com API format
            let formattedUrlParams = [];

            urlParams.forEach(id => {
              formattedUrlParams.push('item-' + id + '=1&amp;')
            });

            // console.log(formattedUrlParams)

            // Create URL with Fomatted Params
            let apiURL = `https://www.hypnosisdownloads.com/cgi-bin/sgx2/shop.cgi?add_to_cart_button=1&amp;${formattedUrlParams.join('')}alt_page=shopping.html#5896!stc`;

            // console.log(apiURL);

            // Create Loading Element
            const loading = await this.loadingController.create({
              cssClass: 'cart-transition-loading',
              message: 'Navigating to Hypnosis Downloads Final Cart ...',
              duration: 4000
            });

            // Set Client Location to Formatted URL
            window.location.href = apiURL;

            // Present Loading screen AFTER Location is changed,
            // because it takes a few seconds for the page to reload.
            return loading.present();
            
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
   }

  /**
   * Remove From Cart
   */
   removeFromCartSub: Subscription;

   async tryRemoveFromCart(id, title) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remove item from cart?',
      message: `Are you sure you want to remove ${title} from your Cart?`,
      buttons:  [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.removeFromCartSub = this.productsService.removeFromCart(id, this.userEmail)
            .pipe()
            .subscribe( async updatedCart => {
              console.log(updatedCart);
              this.productsService.cart$.next(Object.values(updatedCart))
      
            })
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
   }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

  goBackToProductsPage() {
    this.router.navigateByUrl('/products');
  }
  
  /**
   * Go to Contact us Page
   */
 goToContactPage() {
   this.router.navigateByUrl("/contact");
 }

}
