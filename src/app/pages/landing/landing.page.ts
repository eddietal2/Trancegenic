import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swiper, { SwiperOptions, Autoplay } from 'swiper';
import {Howl, Howler} from 'howler';
import { LandingService } from 'src/app/services/landing/landing.service';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

Swiper.use([Autoplay]);

// interface LandingPageInfo {
//   welcomeMessage: string,
//   sample: string,
//   featuredProducts: Array<String>,
//   whyHypnosis: string,
//   membershipMessage: string,
// }

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
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPage implements OnInit {
  sample = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
  };

  config: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 15,
    // autoplay: {
    //   delay: 3000,
    // },
    navigation: true,
  };
  hypIllustration: HTMLElement;

  dynanimcSearchArray = [];
  searchBarValue = "";

  userCartSub: Subscription;
  removeFromCartSub: Subscription;
  addToCartSub: Subscription;
  getLandingPageInfoSub: Subscription;
  

  constructor(
    private landingService: LandingService,
    private loginService: LoginService,
    private productsService: ProductsService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.initializeData();
  }


  authState: boolean;
  userEmail: string;
  welcomeMessage: any;
  featuredProducts: any;
  whyHypnosis: any;
  membershipMessage: any;
  cart = [];
  userFavorites = [];
  landingFeaturedProducts = [];
  searchProducts = [];
  getFeaturedProductsForLandingSub: Subscription;
  getSearchProductsSub: Subscription;
  membershipForm: FormGroup;

  /**
   * 
   * @param e 
   * @returns 
   */
   async initializeData() {

      // Get User's Auth State
      await this.loginService.authenticationState.subscribe(data => {
        this.authState = data;
      });

      // Get Landing Page Info
      this.getLandingPageInfoSub = await this.landingService.langingPageInfoHTTP().subscribe(
        landingPageInfo => {
          console.log(landingPageInfo['landingPageInfo']);    
          this.welcomeMessage = landingPageInfo['landingPageInfo'][0].welcomeMessage;
          this.sample = landingPageInfo['landingPageInfo'][0].sample;
          this.featuredProducts = landingPageInfo['landingPageInfo'][0].featuredProducts;
          this.whyHypnosis = landingPageInfo['landingPageInfo'][0].whyHypnosis;
          this.membershipMessage = landingPageInfo['landingPageInfo'][0].membershipMessage;

        }
      )

      // Get User's Favorite Products (for Featured Posts)
      await this.loginService.userFavorites.subscribe(data => {
        this.userFavorites = data;
      })

      // Get User's Email Address
      await this.loginService.userEmail.subscribe(data => {
          
          this.userEmail = data;   
          
          // Get Cart
          if(data != 'none') {
            this.getCart(data);
          }
    
    
          return;
      })

      // Get Featured Products
      await this.getLandingFeaturedProducts();

      // Get Products for Search bar
      this.getSearchProductsSub = await this.productsService.getAllProductsForLandingSearch()
      .subscribe(searchProducts => {
        // Use searchProducts with Favorite Icon Components on Landing Page
        this.searchProducts = searchProducts;
      });

      // Set Membership Form
      this.membershipForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]], 
      });

      // Testing
      // this.triggerHeaderVisualAnimation();
      

   }

   /**
    * Header Photo Visual Effect Animation
    */
   triggerHeaderVisualAnimation() {

     let headerBackgroundPhoto = document.getElementById('header-background-photo');
     console.log('Starting Header Visual Animation');
     console.log(headerBackgroundPhoto);
    
     let visualInterval = setInterval(() => {
      headerBackgroundPhoto.style.backgroundPositionX = '1000px'
     }, 100)
     
   }

  /**
   * @param e - ionChange Event for Searchbar
   */

  searchLength = null;
  searchItemIDs = [];

  searchUpdate(e: any) {
    // Get Search Items
    this.searchBarClicked = true;

    setTimeout(() => {

      let searchItem = document.getElementsByClassName('search-item');
      let searchItemIDs = [];

      for (let i = 0; i < searchItem.length; i++) {
        searchItem.item(i).addEventListener('mouseover', (e: MouseEvent) => {
          searchItem.item(i).id = `search-item-${i}`;
          searchItemIDs.push(searchItem.item(i).id);
          console.log(searchItem.item(i).id)          
        })

        this.searchLength = searchItem.length;
        this.searchItemIDs = searchItemIDs;
        
      }
      
    }, 800);

    this.searchBarValue = e.detail.value;
    this.dynanimcSearchArray = this.searchProducts
      .filter(
        product => {
          product.title.startsWith(this.searchBarValue.toLowerCase())
        })


    // console.log("Search Input: " + this.searchBarValue);
    // console.log(this.dynanimcSearchArray);
    // console.log(this.dynanimcSearchArray.length);

    if(!this.searchBarValue) {
      console.log("Search is empty" + this.searchBarValue );
      return this.dynanimcSearchArray = [];
    }


    
  }

  searchBarClicked = false;
  searching = false;

  searchingOn() {
    console.clear();
    this.searching = true;
  }

  searchingOff(e: any) {

    if (this.searchBarClicked == true) {
      e.preventDefault();
      console.log(this.searchLength);
      console.log(this.searchItemIDs);
      console.log('Default Prevented: ' + e.defaultPrevented);

      setTimeout(() => {
        this.searching = false;
        this.searchBarClicked == false;

        // Fix this (timeout time) if Search Bar Blur isn't working.
      }, 500);
    }

    if (!e.defaultPrevented) {
      this.searching = false;
      // this.searchBarClicked = false;
    }
 
    
  }

  goToProductPageSearchBar(id, searchBar) {
    console.log('Going to Products Page from Search Bar');

    this.searchBarClicked = true;

    if(this.searchBarClicked = true) {
      console.log('Navigating');
      this.router.navigate(["/products/product-page", id]);
      searchBar.value = '';
      return;
    }
    
    // setTimeout(() => {
    //   this.searchingOff();
    //   searchBar.value = "";
    // }, 500);

  }

  viewProduct(id) {
    console.log('Going to Products Page from Featured Product on Landing Page.');
    this.router.navigate(["/products/product-page", id]);
  }
  
  goToProductPage(id, searchBar) {
    this.router.navigate(["/products/product-page", id]);
    setTimeout(() => {
      searchBar.value = '';
    }, 500);
    return;

  }

  getLandingFeaturedProducts() {
    this.getFeaturedProductsForLandingSub = this.productsService.getFeaturedProductsForLanding()
      .subscribe( featuredProducts => {
        // console.log(featuredProducts)
        this.landingFeaturedProducts = Object.values(featuredProducts);
      });
  }

  getCartSub: Subscription;

  /**
   * 
   * @param email 
   */
  getCart(email: string) {    
    this.getCartSub = this.productsService.getCart(email)
      .subscribe( cart => {        
        this.cart = Object.values(cart);
      });
  }

  // General
  scrollPosition(e: any) {
    let scrollTop = e.detail.scrollTop;


    // When user has scrolled passed Header
    // if(scrollTop > 330) {

    //   let navWrapper = document.getElementById('nav-wrapper');
    //   let links = document.getElementsByTagName('a');
      
    //   navWrapper.style.background = "#fff"
    //   navWrapper.style.boxShadow = "1px 1px 10px #cec7c7"
      
    //   for (let i = 0; i < links.length; i++) {
    //     if(links[i].classList.value != 'active-link') {
    //       links[i].style.color = '#999';
    //     }
    //   }
    // } 

    // When user has scrolled back to Header
    // else {
    //   let navWrapper = document.getElementById('nav-wrapper');
    //   let links = document.getElementsByTagName('a');

    //   navWrapper.style.background = "none"      
    //   navWrapper.style.boxShadow = "none"


    //   for (let i = 0; i < links.length; i++) {
    //     if(links[i].classList.value != 'active-link') {
    //       links[i].style.color = 'white';
    //     }
    //   }
    // }
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
  logout() {
     this.loginService.logout();
  }

  async logoutLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async logoutToast() {
    const toast = await this.toastController.create({
      message: 'You have been logged out.',
      cssClass: 'danger-toast',
      duration: 2000
    });
    toast.present();
  }

  register() {
    this.router.navigateByUrl('/register')
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

  onClick() {

  }

  /**
   * Toggle visibility of Membership Form
   */
  showMembershipFrom = false

  membershipFormToggle() {
    console.clear();
    console.log(this.showMembershipFrom);
    this.showMembershipFrom = !this.showMembershipFrom;
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
    sampleButtonText = 'Play Sample';
    sampleButtonIcon = 'play';
    sampleDuration = 0;
    sampleMasterVolume = 0.5;
    sound = new Howl({
     html5: true,
     src: [this.sample],
     sprite: {
       sample: [14000, 20000]
     },
   });
 
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
 
     console.log('Sample button icon state: ' + buttonIcon)
 
     let sampleIcon = document.getElementById('landing-sample-music-icon');
 
     // 
     if(!this.sampleToggle) {
       this.timeInterval = setInterval(() => {
     
         // Fires every interval to update sample time and UI
         updateSampleTime(this.sound, () => {
           this.sampleDuration = this.sampleDuration + 0.005;
           console.log(this.sampleDuration);
           console.log(this.sound);
   
           // When sample is finished playing, change sample button to
           // refresh, change UI timer to 0, stop progress bar animation,
           // unload song, and stop Interval timer.
           if(this.sampleDuration >= 1) {
             
             this.sampleDuration = 1;
             this.sampleButtonIcon = 'refresh-outline';

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
   
       }, 100);
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
  
       // Increase size of Sample Icon
       sampleIcon.style.color = '#ff9158';
       sampleIcon.style.transform = 'scale(1.25)';
 
       // Change Icon & Text in Sample Button to Pause
       this.sampleButtonText = 'Stop Sample';
       this.sampleButtonIcon = 'pause';
 
       // Play Track
       this.sound.play('sample');
       this.sound.seek();
       return;
       }
 
     // Stop
     else if(this.sampleToggle == true) {
       this.sampleToggle = false;
 
       // Return sample icon to normal size when sample is paused
       sampleIcon.style.color = '#fff';
       sampleIcon.style.transform = 'scale(1)';
 
       // Change Icon & Text in Sample Button to Play
       // Change progress bar type
       this.sampleButtonIcon = 'play';
       this.sampleButtonText = 'Play Sample';
 
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
    * Add product to Cart
    */
    tryAddToCart(id, title, button) {
      let cartCount = document.getElementById('cart-tab-bar-count');
      let cartButton = button;

      this.addToCartSub = this.productsService.addToCart(id, this.userEmail)
      .subscribe(async data => {
        console.log(data);
        
        this.productsService.cart$.next(Object.values(data));
        this.loginService.userCart.next(Object.values(data));
        this.loginService.userCartLength.next(Object.values(data).length);
        
        cartButton.el.style.transform = 'scale(1.4)';
        cartButton.el.style.color = 'red';
        setTimeout(() => {
          cartButton.el.style.transform = 'scale(1)';
          cartButton.el.style.color = '#222';
          cartCount.style.transform = 'scale(4)';
          cartCount.style.background = 'green';
          setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
            cartCount.style.background = 'blue';
            
          }, 800);
          
        }, 200);

          /**
           * Toast that displays when a user adds this Product to their Cart
           * '&#x2713;' is HTML escape character for a check mark ✓
           */

          const toast = await this.toastController.create({
            message: `&#x2713;   You have added ${title} to your Cart!`,
            duration: 1500,
            color: 'success',
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
        
          // 
        // setTimeout(() => {
        //   return this.addToCartSub.unsubscribe();
        // }, 3000);
      })
    }

    tryRemoveFromCart(id, title, button) {
      let cartCount = document.getElementById('cart-tab-bar-count');
      let cartButton = button;

      this.removeFromCartSub = this.productsService.removeFromCart(id, this.userEmail)
      .subscribe(async data => {
        console.log(data);
        this.productsService.cart$.next(Object.values(data));
        this.loginService.userCart.next(Object.values(data));
        this.loginService.userCartLength.next(Object.values(data).length);
        
        cartButton.el.style.transform = 'scale(1.4)';
        cartButton.el.style.color = 'red';
        setTimeout(() => {
          cartButton.el.style.transform = 'scale(1)';
          cartButton.el.style.color = '#222';
          cartCount.style.transform = 'scale(4)';
          cartCount.style.background = 'green';
          setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
            cartCount.style.background = 'blue';
            
          }, 800);
          
        }, 200);

          /**
           * Toast that displays when a user adds this Product to their Cart
           * '&#x2713;' is HTML escape character for a check mark ✓
           */

          const toast = await this.toastController.create({
            message: `&#x2713;   You have added ${title} to your Cart!`,
            duration: 1500,
            color: 'success',
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
        
          // 
        // setTimeout(() => {
        //   return this.addToCartSub.unsubscribe();
        // }, 3000);
      })

    }
}
