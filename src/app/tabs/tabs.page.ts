import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoginService } from '../services/onboarding/login.service';
import { ProductsService } from '../services/products/products.service';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, AfterViewInit {
  userEmail: string;
  userFullName: string;
  userPicture: string;
  cartLength: number;
  cart = [];
  getCartLengthSub: any;
  getCartSub: Subscription;
  

  constructor(
    private router: Router,
    private loginService: LoginService,
    private profileService: ProfileService,
    private productsService: ProductsService,
    private alertController: AlertController,
  ) {}
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.initializeData();

    // console.log(this.router)
  }

  /**
   * Get Cart Amount
   */
  addToCartSub: Subscription;
  authState: boolean;
  /**
   * Cart, Email, Favorites, State
   * Login Service has access to JWT
   */
  initializeData() {

    this.getCartSub = this.loginService.userCart.subscribe(data => {
      this.cart = data;
      this.cartLength = data.length;
      return;
    })

    this.loginService.authenticationState.subscribe(state => {
      this.authState = state;
    });

    this.loginService.userEmail.subscribe(email => {
      this.userEmail = email;

      if(email != 'none') {
        this.getCart(email);
      }
    
    });

    console.log('Auth State:');
    console.log(this.authState);
    

  }

  tabDidChange(e: any) {
    // console.log(e);
    
  }
  tabWillChange(e: any) {
    // console.log(e);

  }

  getAuthState() {
    this.loginService.authenticationState.subscribe( state => {
      this.authState = state;
    })
  }

  getEmail() {
    this.loginService.userEmail.subscribe( email => {
      this.userEmail = email;
    })
  }
  getCart(email: string) {
    
    this.getCartSub = this.productsService.getCart(email)
      .subscribe( cart => {
        // console.log(cart);        
        this.cart = Object.values(cart);
      });
  }

  async tryLogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout',
      message: 'Are you sure you want to LOGOUT?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Logout',
          id: 'confirm-button',
          handler: () => {
            return this.loginService.logout();
          }
        }
      ]
    });

    await alert.present();

  }


}
