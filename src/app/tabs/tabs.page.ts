import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
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
