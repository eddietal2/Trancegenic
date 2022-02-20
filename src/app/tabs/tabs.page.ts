import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
    private profileService: ProfileService
  ) {}
  ngAfterViewInit(): void {
    this.getCartAmount();
  }

  ngOnInit() {
    this.tabBarStyling();
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
        if (data.url == '/products' || data.url == '/blog' || data.url == '/profile') {
          let navWrapper = document.getElementById('nav-wrapper');
          navWrapper.style.background = "#fff";

        }
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
      return this.addToCartSub.unsubscribe();
    }, 3000);
  }


}
