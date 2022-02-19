import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
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

}
