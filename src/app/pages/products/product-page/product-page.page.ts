import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper, { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
  productID: string;
  reviewLength: number;
  reviewButtonMessage = 'Show Reviews (3)';
  skeletonData = true;
  sampleButtonIcon = 'play';

  relatedProductsSwiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private auth: AuthSevice
    ) {
      // this.userEmail = this.auth.userEmail;
     }

  ngOnInit() {
    this.skeletonTrigger();
    // Get Post ID from navigation params on the main posts tab
    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.productID = id;
    console.log(id);
  }

  /**
   * 
   */
  skeletonTrigger() {  
    setTimeout(() => {
      this.skeletonData = false;
      // this.changeDetectorRef.detectChanges();
    }, 2000);
  }

  /**
   * 
   */
   close() {
     this.router.navigateByUrl("products");
   }

  /**
   * 
   */
  addToCart() {
    console.log('Adding to Cart ...');
  }

  /**
   * Show the player UI when the user hits the sample button
   * When the sample is finished, show the 'replay' icon
   * If the sample hasn't been played yet, show the 'play' button
   * If the sample is playing, show the 'pause' button.
   * uses this.sampleButtonIcon
   * @param buttonIcon Either 'play', 'pause', or 'replay' 
   */
   playSample(buttonIcon) {
    console.clear();
    console.log('Sample button icon state: ' + buttonIcon);
    let sampleDone = true;
    let samepeTrack = document.getElementById('sample-track');

    if(buttonIcon == 'play') {
      this.sampleButtonIcon = 'pause';
      samepeTrack.style.opacity = '1';
      samepeTrack.style.pointerEvents = 'auto';
    }

    if(buttonIcon == 'pause') {
      this.sampleButtonIcon = 'play';
    }

    if(buttonIcon == 'refresh-outline') {
      this.sampleButtonIcon = 'play';
    }

    if(buttonIcon == 'pause' && sampleDone) {
      sampleDone = false;
      this.sampleButtonIcon = 'refresh-outline';
    }

   }

  /**
   * 
   */
  // Swiper
  onSwiper(swiper) {
    // console.log(swiper);
  }

  /**
   * Toggle Product Reviews UI view
   */

  reviewDisplay = false;

  toggleReviews() {

    console.clear();
    console.log('Review display: ');
    console.log(this.reviewDisplay);
    let reviewsScrollTo = document.getElementById('reviews-scroll-to');

    // Show Reviews
    if(this.reviewDisplay == false) {
      this.reviewDisplay = true;
      this.reviewButtonMessage = 'Hide Reviews (3)';
      reviewsScrollTo.scrollIntoView(true);
      return;
    }

    // Hide Reviews
    if(this.reviewDisplay == true) {
      this.reviewDisplay = false;
      this.reviewButtonMessage = 'Show Reviews (3)';
      reviewsScrollTo.scrollIntoView(true);
      return;
    }


    
  }


}
