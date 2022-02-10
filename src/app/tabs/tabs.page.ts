import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '../services/onboarding/login.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  userEmail: string;
  userFullName: string;
  userPicture: string;
  

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

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


  



}
