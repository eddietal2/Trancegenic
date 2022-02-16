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
    private ProductsService: ProductsService,
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

  cart$ = new BehaviorSubject([])
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
        this.cartSub = this.ProductsService.getCart(userEmail)
          .subscribe((cart: Array<Product>) => {
            this.cart$.next(cart);
            this.cart$.subscribe((cart) => {
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

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

  goBackToProductsPage() {
    this.router.navigateByUrl('/products');
  }

}
