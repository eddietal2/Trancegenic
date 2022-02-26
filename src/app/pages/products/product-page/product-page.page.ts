import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swiper, { Autoplay, SwiperOptions } from 'swiper';
import {Howl, Howler} from 'howler';
import { LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products/products.service';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { formatDistance } from 'date-fns';
import { BehaviorSubject } from 'rxjs';


Swiper.use([Autoplay]);

interface Product {
  _id: string,
  title: string,
  description?: string,
  category: string,
  rating: number,
  duration: number,
  price: string,
  sample: string,
  reviews?: Array<Review>,
}

// Make FeaturedProduct with Timer?
interface Review {
  _id: string,
  email: string,
  date: string,
  rating: number,
  review: string,
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductPagePage implements OnInit, OnDestroy {

  reviewsSub = new BehaviorSubject([]);
  productInfo;

  relatedProducts: Array<Product> = [
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    },
    {
      _id: null,
      title: "This is the title of the Product",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      category: "Sleep",
      rating: 5,
      duration: 50,
      price: "19.99",
      sample: "'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'",
      reviews: [
        {
          _id: "1",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "2",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        },
        {
          _id: "3",
          email: 'eddielacrosse2@gmail.com',
          date: "Posted 3 Days ago",
          rating: 4,
          review: 'This is the review',
        }
      ]
    }
  ]

  skeletonData = true;
  isMobileProductPage = true;
  

  relatedProductsSwiperConfig: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 20,
    navigation: true
  };
  reviewButtonMessage: string;
  sound: any;
  authState: boolean;
  reviewRating = null;
  userEmail: string;
  id: string;
  reviewsLength: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private location: Location,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private loginService: LoginService
    ) {
      // this.userEmail = this.auth.userEmail;
     }

  ngOnInit() {
    this.skeletonTrigger();
    // Get Post ID from navigation params on the main posts tab
    this.id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.productsService.getProductInfo(this.id)
      .subscribe(info => {
        console.clear();
        this.productInfo = info;

        this.productInfo.reviews.forEach(review => {
            review.date = formatDistance(review.date, Date.now(), {includeSeconds: true, addSuffix: true})
        });


        this.reviewsSub.next(this.productInfo.reviews.reverse())
        this.reviewsSub.subscribe( data => {
          this.reviewsLength = data.length;
        })

        console.log(this.productInfo)
        this.reviewButtonMessage = `Show Reviews (${info['reviews'].length})`;
        this.sound = new Howl({
          html5: true,
          src: [this.productInfo.sample],
          sprite: {
            sample: [14000, 20000]
          },
        });


      this.loginService.authenticationState.subscribe(state => {
        this.authState = state
      })

      this.loginService.userEmail.subscribe(email => {
        this.userEmail = email
      })

      this.loginService.userFavorites.subscribe(favorites => {
        console.log(favorites)
        this.favorites.next(favorites);
        if(favorites.length == 0) {
          console.log('User has no favorites');
          this.favoriteButtonMessage = 'Favorite';
          return;
        }

        favorites.forEach(fav => {
          console.log(fav)
          if(fav == this.id) {
            this.favoriteButtonMessage = 'Unfavorite';
            return;
          }
        })
      })
        
      })


  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Products Page destroyed');
    this.sound.unload();
    this.reviewRating = null;
  }

  getRating(e) {
    this.reviewRating = e;
    console.log('Review Rating: ' + this.reviewRating);
    return;
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
    //  this.router.navigateByUrl("products");
    this.location.back();
   }

  /**
   * 
   */
  addToCart() {
    console.clear();
    console.log('Adding to Cart ...');
    // The IonBadge next to the Cart Icon in the Tabbar
    let cartCount = document.getElementById('cart-count');
    this.addToCartLoading()
      .then(() => {
        console.log(cartCount);
        cartCount.style.transform = 'scale(4)';
        setTimeout(() => {
          cartCount.style.transform = 'scale(1)';
          
        }, 800);
        this.addToCartToast();
      })
  }

  /**
   * Toast that displays when a user adds this Product to their Cart
   * '&#x2713;' is HTML escape character for a check mark ✓
   */
   async addToCartToast() {
    const toast = await this.toastController.create({
      message: '&#x2713;   You have added this Product to your Cart!',
      duration: 20000,
      color: 'danger',
      position: 'top',
      cssClass: 'add-to-cart-toast',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel',
          handler:  () => {
            toast.dismiss();
          }
        }
      ]
    });
    toast.present();
  }

  /**
   * Loading that appears before 'Add To Cart Toast'
   */
   async addToCartLoading() {
    // TODO
    // Request Data
    // 

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      showBackdrop: true,
      spinner: 'crescent',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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
   timeInterval = null;
   sampleProgressBarType = 'determinate';
   sampleButtonText = 'Play Sample';
   sampleButtonIcon = 'play';
   sampleDuration = 0;
   sampleMasterVolume = 0.5;
   

  increaseVolume(button) {
    console.log(button);
    button.el.style.transform = 'scale(1.4)';
    button.el.style.color = 'red';
    setTimeout(() => {
      button.el.style.transform = 'scale(1)';
      button.el.style.color = '#222';
      
    }, 200);
    if(this.sampleMasterVolume >= 1) {
      console.log('Maximum Volume');
      // TODO Add Toast here
      return;
    }

    this.sampleMasterVolume += 0.05;
    console.log(this.sampleMasterVolume);
    Howler.volume(this.sampleMasterVolume);
   
  }

  decreaseVolume(button) {
    console.log(button);
    button.el.style.transform = 'scale(1.4)';
    button.el.style.color = 'red';
    setTimeout(() => {
        button.el.style.transform = 'scale(1)';
        button.el.style.color = '#222';
    }, 200);
    if(this.sampleMasterVolume <= 0) {
      console.log('Maximum Volume');
      // TODO Add Toast here
      console.log(Howler)
      return;
    }

    this.sampleMasterVolume -= 0.05;
    console.log(this.sampleMasterVolume);
    Howler.volume(this.sampleMasterVolume);
  }
  
  playSample(buttonIcon) {

    console.clear();
    console.log('Sample button icon state: ' + buttonIcon)

    let sampleTrackWrapper = document.getElementById('sample-track');
    let sampleIcon = document.getElementById('sample-icon');
    

    // 
    if(!this.sampleToggle) {
      this.timeInterval = setInterval(() => {
    
        // Fires every interval to update sample time and UI
        updateSampleTime(this.sound, () => {
          this.sampleDuration++;
          console.log(this.sampleDuration);
          console.log(this.sound);
  
          // When sample is finished playing, change sample button to
          // refresh, change UI timer to 0, stop progress bar animation,
          // unload song, and stop Interval timer.
          if(this.sampleDuration == 20) {
            
            this.sampleDuration = 0;
            this.sampleButtonIcon = 'refresh-outline';
            this.sampleButtonText = 'Replay Sample';
            this.sampleProgressBarType = 'determinate';
            clearInterval(this.timeInterval);
            this.sound.pause();
            return;
          }
  
          // 
          if(this.sampleToggle == false) {
            clearInterval(this.timeInterval);
            return;
          }
  
        }); 
  
      }, 1000);
    }

    function updateSampleTime(sound, callback) {
      if (sound.playing()) {
        // let width = (sound.seek()/sound.duration())/100;
        let width = (sound.seek()/sound.duration());
        return callback(width);
      }
    }

    // Play
    if(this.sampleToggle == false) {

      // Toggle Track Player & Volume Control display
      this.sampleToggle = true;


      // Display Sample Track Wrapper
      sampleTrackWrapper.style.opacity = '1';
      sampleTrackWrapper.style.pointerEvents = 'auto';

      // Increase size of Sample Icon
      sampleIcon.style.color = 'red';
      sampleIcon.style.transform = 'scale(1.4)';

      // Change Icon & Text in Sample Button to Pause
      this.sampleButtonText = 'Stop Sample';
      this.sampleButtonIcon = 'stop';

      // Change progress bar type
      this.sampleProgressBarType = 'indeterminate';

      // Play Track
      this.sound.play('sample');
      this.sound.seek();
      return;
      }

    // Stop
    else if(this.sampleToggle == true) {
      this.sampleToggle = false;

      // Return sample icon to normal size when sample is paused
      sampleIcon.style.color = '#333';
      sampleIcon.style.transform = 'scale(1)';

      // Change Icon & Text in Sample Button to Play
      // Change progress bar type
      this.sampleButtonIcon = 'play';
      this.sampleButtonText = 'Play Sample';

      // Change progress bar type
      this.sampleProgressBarType = 'determinate';

      // Pause Track
      this.sound.stop();
      clearInterval(this.timeInterval);
      this.sampleDuration = 0;
      return;
    }
    
    return;
     
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
    console.log(swiper);
  }


  favoriteButtonMessage: string;
  favorites = new BehaviorSubject([]);

  /**
   * Favorite the Product
   */
  
  favoriteToggle() {
    console.log(this.favorites.value);
    console.log(this.id);
    console.log(this.favorites.value.includes(this.id));

    // User has NOT Favorited Product
    if(!this.favorites.value.includes(this.id)) {
      this.favoriteButtonMessage = 'Unfavorite';
      this.productsService.favoriteProduct(this.id, this.userEmail)
        .subscribe(data => {
          console.log(data);
          return;
        })
    }

    // User HAS Favorited Product
    if(this.favorites.value.includes(this.id)) {
      this.favoriteButtonMessage = 'Favorite';
      this.productsService.unFavoriteProduct(this.id, this.userEmail)
        .subscribe(data => {
          console.log(data);
          return;
        })
    }
  }

  /**
   * Toggle Review Input
   */
  reviewInputToggle = false;

  tryAddReview() {
    this.reviewInputToggle = !this.reviewInputToggle;
    console.log(this.reviewInputToggle);
  }

  /**
   * Post a Review
   * @param input 
   * @returns void
   */
  postReview(review: string) {
    this.productsService.postReview(this.id, this.userEmail, this.reviewRating, review)
      .subscribe( updatedReviews => {
        console.log(updatedReviews)
        this.productInfo.reviews = updatedReviews;
        this.productInfo.reviews.forEach(review => {
            review.date = formatDistance(review.date, Date.now(), {includeSeconds: true, addSuffix: true})
        });

        this.reviewsSub.next(this.productInfo.reviews.reverse())
        
      })
  }

  /**
   * Toggle Product Reviews UI view
   */

  reviewDisplay = false;

  toggleReviews() {

    console.clear();
    console.log('Review display: ');
    console.log(this.reviewDisplay);
    let reviewsScrollTo = document.getElementById('reviews-scroll-position');
    let reviewsButton = document.getElementById('reviews-button');

    // Show Reviews
    if(this.reviewDisplay == false) {
      this.reviewDisplay = true;
      this.reviewButtonMessage = `Hide Reviews (${this.reviewsLength})`;
      reviewsScrollTo.scrollIntoView(true);
      return;
    }

    // Hide Reviews
    if(this.reviewDisplay == true) {
      reviewsButton.scrollIntoView(true);
      this.reviewDisplay = false;
      this.reviewButtonMessage = `Show Reviews (${this.reviewsLength})`;
      return;
    }


    
  }

  /**
   * Track scroll location of page for animations
   * @param e - Event Object
   */

   footerScrollIntoView = false;

   trackPageLocation(e) {
    let scrollDetail = e.detail;
    // console.log(scrollDetail);

    if(scrollDetail.scrollTop >= 1300) {
      console.log('show footer');
      this.footerScrollIntoView = true;
    }
    else {
      console.log('hide footer');
      this.footerScrollIntoView = false;
    }
   }

   /**
    * Go to Login Page from when user scrolls near Show Reviews button (and they aren't logged in)
    */
  goToLoginPage() {
    this.router.navigateByUrl('login');
  }

   /**
    * Go to Contact us Page
    */
    contactUs() {
      this.router.navigateByUrl('/contact');
    }

}
