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
    // this.getRouterLocation();

    // console.log(this.router)
  }

  /**
   * Handles Tabbar Icon Styling
   */
  tabBarStyling() {
    this.router.events.subscribe(data => {
      if(data instanceof NavigationEnd) {
        let cartIcon = document.getElementById('desktop-cart-icon');
        let navWrapper = document.getElementById('nav-wrapper');
        let links = document.getElementsByTagName('a');

        if (data.url == '/cart') {          
          cartIcon.style.color = '#3171e0';
        } 
        // if (data.url == '/products' || data.url == '/profile' || data.url == '/cart') {
        //   // Set Active Link
        //   // console.log('Router Active: ');
        //   // console.log();

        //   if(this.router.isActive(data.url, false)) {
        //     for (let i = 0; i < links.length; i++) {
        //       if(links[i].classList.value == 'active-link') {
        //         links[i].style.color = '#3880ff';
        //       }
        //     }

        //   }

        //   navWrapper.style.background = "#fff"; 

        //   for (let i = 0; i < links.length; i++) {
        //     if(links[i].classList.value != 'active-link') {
        //       links[i].style.color = '#999';
        //     }
        //   }


        // }
        else {
          let navWrapper = document.getElementById('nav-wrapper');
          cartIcon.style.color = '#999';
        }
      }
    })
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

//   routerLocation: string;

//   getRouterLocation() {
//     this.router.events
//     .pipe(
//       filter((e): e is NavigationEnd => e instanceof NavigationEnd), 
//       map(e => { return e 
//       })
//     )
//     .subscribe(e => {
//       this.routerLocation = e.urlAfterRedirects;
//       console.log(this.routerLocation);
//     })
// }

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
