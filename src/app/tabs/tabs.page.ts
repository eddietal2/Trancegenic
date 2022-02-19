import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/onboarding/login.service';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  userEmail: string;
  userFullName: string;
  userPicture: string;
  cartLength: number;
  getCartAmountSub: any;
  

  constructor(
    private router: Router,
    private loginService: LoginService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.tabBarStyling();
    this.getCartAmount();
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
    this.getCartAmountSub = this.productsService.cart$.subscribe(data => {
      console.log('Getting Cart Length: ')
      console.log(data)
      this.cartLength = data.length;
    })

    this.loginService.authenticationState.subscribe(state => {
      this.authState = state;
    });

    setTimeout(() => {
      return this.addToCartSub.unsubscribe();
    }, 3000);
  }


}
