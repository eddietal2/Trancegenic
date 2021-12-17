import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPage implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1.25,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  hypIllustration: HTMLElement;
  

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
        this.hypIllustration = document.getElementById('hyp-illustration');
        console.log('\nHypnosis Illustration Scrolltop: ');
        console.log(this.hypIllustration.scrollTop);
  }

  // General
  scrollPosition(e: any) {
    let scrollTop = e.detail.scrollTop;


    // When user has scrolled passed Header
    if(scrollTop > 330) {

      let toolbarBackground = document.getElementById('top-bar');
      let navWrapper = document.getElementById('nav-wrapper');
      let links = document.getElementsByTagName('a');
      
      navWrapper.style.background = "#fff"
      navWrapper.style.boxShadow = "1px 1px 10px #cec7c7"
      toolbarBackground.style.background = "#fff"
      
      for (let i = 0; i < links.length; i++) {
        if(links[i].classList.value != 'active-link') {
          links[i].style.color = '#999';
        }
      }
    } 

    // When user has scrolled back to Header
    else {
      let toolbarBackground = document.getElementById('top-bar');
      let navWrapper = document.getElementById('nav-wrapper');
      let links = document.getElementsByTagName('a');

      toolbarBackground.style.background = "none"      
      navWrapper.style.background = "none"      
      navWrapper.style.boxShadow = "none"


      for (let i = 0; i < links.length; i++) {
        if(links[i].classList.value != 'active-link') {
          links[i].style.color = 'white';
        }
      }
    }
    // console.log('Scroll Position: ' + scrollTop)
  }
  // Header
  playHeaderAudio() {
  }

  // Intro
  hypAnimationTrigger() {
    
  }
  // Products
  // Blogs
  // Footer
  onSwiper(swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
  }
  login() {
    this.router.navigateByUrl('/login')
  }
  goToProductsPage() {
    this.router.navigateByUrl("/products");
  }
  goToBlogsPage() {
    this.router.navigateByUrl("/blog");
  }
  goToContactPage() {
    this.router.navigateByUrl("/contact");
  }
}
