import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    let topBar = document.getElementById('top-bar-logo');
  }
  scrollPosition(e) {
    let scrollTop = e.detail.scrollTop;

    // When user has scrolled passed Header
    if(scrollTop > 330) {
      let toolbarBackground = document.getElementById('top-bar');
      toolbarBackground.style.background = "#fff"
    } 

    // When user has scrolled back to Header
    else {
      let toolbarBackground = document.getElementById('top-bar');
      toolbarBackground.style.background = "none"
    }
    // console.log('Scroll Position: ' + scrollTop)
  }
  login() {
    this.router.navigateByUrl('/login')
  }
  getLatestProducts() {

  }
  getLatestBlogs() {
    
  }
  goToContactPage() {
    
  }
}
