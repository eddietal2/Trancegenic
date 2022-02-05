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
  membershipForm: FormGroup;
  sample = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
  };

  config: SwiperOptions = {
    slidesPerView: 1.25,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  hypIllustration: HTMLElement;

  staticFeaturedProducts: Array<Product> = [
    {
      _id: "1",
      title: "Product Name",
      duration: 120,
      rating: 1,
      category: "sleep",
      price: 5,
      sample: '/Users/ferro/Desktop/Affiliate-Template/src/assets/placeholders/feel_good_inc.mp3',
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: [
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "Jane Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4.5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
      ]
    },
    {
      _id: "2",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: 120,      
      rating: 5,
      sample: '/Users/ferro/Desktop/Affiliate-Template/src/assets/placeholders/feel_good_inc.mp3',
      category: "sleep",
      price: 50,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: 630,      
      rating: 2.5,
      category: "sleep",
      price: 100,
      sample: '/Users/ferro/Desktop/Affiliate-Template/src/assets/placeholders/feel_good_inc.mp3',
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "4",
      title: "Product Name",
      duration: 120,
      rating: 1,
      category: "sleep",
      price: 5,
      sample: '/Users/ferro/Desktop/Affiliate-Template/src/assets/placeholders/feel_good_inc.mp3',
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: [
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "Jane Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4.5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
      ]
    },
    {
      _id: "5",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: 120,      
      rating: 5,
      sample: '/Users/ferro/Desktop/Affiliate-Template/src/assets/placeholders/feel_good_inc.mp3',
      category: "sleep",
      price: 50,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "6",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: 630,      
      rating: 2.5,
      category: "sleep",
      price: 100,
      sample: '/Users/ferro/Desktop/Affiliate-Template/src/assets/placeholders/feel_good_inc.mp3',
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    }
  ]
  authState: boolean;
  getSearchProductsSub: Subscription;
  searchProducts: any;
  dynanimcSearchArray: any;
  searching = false;
  

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
    this.getSearchProductsSub = this.productsService.getAllProductsForLandingSearch()
    .subscribe(searchProducts => {
      this.searchProducts = searchProducts;
    });
    this.hypIllustration = document.getElementById('hyp-illustration');
    console.log('\nHypnosis Illustration Scrolltop: ');
    console.log(this.hypIllustration.scrollTop);

    this.membershipForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
    })

        this.landingService.getLandingFeaturedPosts();
  }

  /**
   * @param e - ionChange Event for Searchbar
   */
  searchUpdate(e: CustomEvent) {
    let searchBarValue = e.detail.value;
    this.dynanimcSearchArray = this.searchProducts.filter(product => product.title.includes(searchBarValue))


    console.log("Search Input: " + searchBarValue);
    console.log(this.dynanimcSearchArray);

    return this.searching = true;
  }

  goToProductPage(id, searchBar) {
    console.log(searchBar)
    this.searching = false;
    this.router.navigate(["/products/product-page", id]);

    setTimeout(() => {
      searchBar.value = "";
      this.searching = false;
      
    }, 500);

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
    sampleProgressBarType = 'determinate';
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
 
     console.clear();
     console.log('Sample button icon state: ' + buttonIcon)
 
     let sampleTrackWrapper = document.getElementById('landing-sample-track');
     let sampleIcon = document.getElementById('landing-sample-icon');
     
 
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
}
