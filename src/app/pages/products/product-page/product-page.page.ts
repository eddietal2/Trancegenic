import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper, { SwiperOptions } from 'swiper';
import {Howl, Howler} from 'howler';

interface Product {
  _id: string,
  title: string,
  description?: string,
  category: string,
  rating: number,
  duration: number,
  price: number,
  sample: string,
  reviews?: Array<Review>,
}

// Make FeaturedProduct with Timer?
interface Review {
  _id: string,
  reviewerUsername: string,
  reviewerEmail: string,
  reviewerProfilePicture: string,
  date: string,
  rating: number,
  review: string,
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit, OnDestroy {
  productID: string;
  reviewLength: number;
  reviewButtonMessage = 'Show Reviews (3)';
  skeletonData = true;
  

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

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Products Page destroyed');
    this.sound.unload();
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

   sampleToggle = false;
   sampleButtonText = 'Play Sample';
   sampleButtonIcon = 'play';
   sampleDuration: number;
   sampleCurrentPosition = 0;
   sampleMasterVolume = 0.5;
   sound = new Howl({
    html5: true,
    seek: 23000,
    src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3']
  });

  increaseVolume() {
    if(this.sampleMasterVolume >= 1) {
      console.log('Maximum Volume');
      return;
    }

    this.sampleMasterVolume += 0.05;
    console.log(this.sampleMasterVolume);
    Howler.volume(this.sampleMasterVolume);
   
  }

  decreaseVolume() {
    if(this.sampleMasterVolume <= 0) {
      console.log('Maximum Volume');
      return;
    }

    this.sampleMasterVolume -= 0.05;
    console.log(this.sampleMasterVolume);
    Howler.volume(this.sampleMasterVolume);
  }
  

   playSample(buttonIcon) {

    console.clear();
    console.log('Sample button icon state: ' + buttonIcon)
    console.log(this.sound);

    let sampleTrackWrapper = document.getElementById('sample-track');

    // Play & Change button to Pause button
    if(this.sampleToggle == false) {
      console.log('Playing Sample...');
      this.sampleToggle = true;
      this.sampleButtonText = 'Pause Sample';
      this.sampleButtonIcon = 'pause';
      this.sound.play();

      // Show Sample Track Wrapper
      sampleTrackWrapper.style.opacity = '1';
      sampleTrackWrapper.style.pointerEvents = 'auto';

      // Show Restart button when sample is finished
      // if() {

      // }
      
      return;
      }
    
    
    // Pause
    else {
      console.log('Pausing Sample...');
      this.sampleToggle = false;
      this.sampleButtonIcon = 'play';
      this.sampleButtonText = 'Play Sample';
      this.sound.pause();
    }
     
   }


   /**
    * To be used with playSample()
    * @param i 
    * @param d 
    * @param s 
    * @param callback 
    * @returns 
    */
   sampleCurrentPositionTracker(i, d, s, callback) {
    return function() {
      return callback(++i, d, s);
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
