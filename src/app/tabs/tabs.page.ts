import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/onboarding/login.service';
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
  getCartLengthSub: any;
  

  constructor(
    private router: Router,
    private loginService: LoginService,
    private profileService: ProfileService,
    private alertController: AlertController,
  ) {}
  ngAfterViewInit(): void {
    this.getCartAmount();
    this.tabBarStyling();
  }

  ngOnInit() {
    this.getAuthState();

    // console.log(this.router)
  }

  /**
   * Handles Tabbar Icon Styling
   */
  tabBarStyling() {
    this.router.events.subscribe(data => {
      console.log();
      if(data instanceof NavigationEnd) {
        let cartIcon = document.getElementById('desktop-cart-icon');
        if (data.url == '/cart') {          
          cartIcon.style.color = '#3171e0';
        } 
        // if (data.url == '/products' || data.url == '/blog' || data.url == '/profile') {
        //   let navWrapper = document.getElementById('nav-wrapper');
        //   navWrapper.style.background = "#fff";

        // }
        else {
          let navWrapper = document.getElementById('nav-wrapper');
          cartIcon.style.color = '#999';
          navWrapper.style.background = "#none";
        }
      }
    })
  }

  /**
   * Get Cart Amount
   */
  addToCartSub: Subscription;
  authState: boolean;

  getCartAmount() {
    this.getCartLengthSub = this.loginService.userCartLength.subscribe(data => {
      console.log('Getting Cart Length: ')
      console.log(data)
      this.cartLength = data;
      return;
    })

    this.loginService.authenticationState.subscribe(state => {
      this.authState = state;
    });

    setTimeout(() => {
      return this.getCartLengthSub.unsubscribe();
    }, 800);
  }

  tabDidChange(e: CustomEvent) {
    console.log(e);
    
  }
  tabWillChange(e: CustomEvent) {
    console.log(e);

  }

  getAuthState() {
    this.loginService.authenticationState.subscribe( state => {
      this.authState = state;
    })
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
