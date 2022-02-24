import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, HostListener } from '@angular/core';
import Swiper, { SwiperOptions, Autoplay } from 'swiper';
import { ActionSheetController, IonContent, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FavoriteIconComponent } from 'src/app/components/favorite-icon/favorite-icon.component';
import { ProductsService } from 'src/app/services/products/products.service';
import { LoginService } from 'src/app/services/onboarding/login.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { catchError } from 'rxjs/operators';


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
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ProductsPage implements OnInit, AfterViewInit {
  skeletonData = false;
  skeletonDataLg = false;
  noSearchResults = false;
  searching = false;
  activeCategory = "all"
  searchBarMessage: string;

  filterPopoverOpen = false;
  filtering = false;
  filterOption = "Newest";
  filterSubject$ = new BehaviorSubject('Newest');

  featuredSliderVisible = true;
  allProductsFabVisibile = false;

  categoryLg = 'featured';

  accordianGroupValue = "all";
  accordianBSubject$ = new BehaviorSubject('featured');

  @ViewChild('productsPageContent') content: IonContent;

  // Static Data before Backend Integration
  // I only need _id, title, category, and duration for main Products page
  
  searchLoadedProducts;
  allProducts;
  allProductsInitialLoad;
  featuredProducts;
  favoriteProducts = [];
  authState: boolean;
  userEmail: string;

  categorySwiperConfig: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  featuredSwiperConfig: SwiperOptions = {
    slidesPerView: 1.3,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 3000,
    // },
    navigation: true,
  };
  featuredProductsLength: any;
  favoriteProductsLength: number;
  searchLoadedProductsLength: number;
  addToCartSub: Subscription;
  removeFromCartSub: Subscription;

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router,
    private productsService: ProductsService,
    private profileService: ProfileService,
    private loginService: LoginService,
    private toastController: ToastController,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

   ngAfterViewInit() {
    this.initializeView();
   }

  ngOnInit() { 
    console.clear();
    this.initializeData();
  }
  
  @HostListener('unloaded')
  ngOnDestroy() {
    this.authStateSub.unsubscribe();
    this.getAllProductsSub.unsubscribe();
    this.userFavoriteProductsSub.unsubscribe();
    this.userEmailSub.unsubscribe();
  }


  /**
   * Initialize View to highlight Featured section
   * Hide Product Searchbar & Filter Button
   * (When use selects Favorites or All Products, Product Searchbar & Filter Button
   * will be visible.)
   */
  initializeView() {
    let accordianGroup = document.getElementById("accordian-group");
    let featuredProductsIonItem = document.getElementById('featured-products-item');
    let allProductsIonItem = document.getElementById('all-products-item');
    let searchBar = document.getElementById('search-bar');
    let filterButton = document.getElementById('filter-button');

    featuredProductsIonItem.style.background = "#ffdcca";
    // allProductsIonItem.style.background = "none";
    accordianGroup.attributes[0].value = 'featured';
    searchBar.style.opacity = '0';
    searchBar.style.pointerEvents = 'none';
    filterButton.style.opacity = '0';
    filterButton.style.pointerEvents = 'none';
    
    
  }

  /**
   * Load page with initial Product Data, as well as subscribing
   * to Accordian and Filter Behavior Subjects.
   */
  
  authStateSub: Subscription;
  getAllProductsSub: Subscription;
  userFavoriteProductsSub: Subscription;
  userEmailSub: Subscription;
  featuredProductsSub: Subscription;
  userCartSub: Subscription;
  cart = [];

  initializeData() {

    // Get all Products
    this.getAllProductsSub = this.productsService.getAllProducts()
      .subscribe(products => {
        this.searchLoadedProducts = products;
        this.searchLoadedProductsLength = Object.values(products).length;;
        this.allProducts = products;
        this.allProductsInitialLoad = products;
        console.log(products);

        // Get Featured Products
        this.featuredProductsSub = this.productsService.getFeaturedProductsForLanding()
        .subscribe( data => {
          this.featuredProducts = data;
          this.featuredProductsLength = Object.values(data).length;
          console.log(data)
        })
      });
    
    // Get User's Auth State
    this.authStateSub = this.loginService.authenticationState.subscribe(data => {
      this.authState = data;

      if(data) {

        // Get User's Email
        this.userEmailSub = this.loginService.userEmail.subscribe(data => {
          this.userEmail = data;
          console.log(this.userEmail)
    
          // Get User's favorite Products
          this.userFavoriteProductsSub = this.profileService.getFavoriteProducts(this.userEmail)
          .subscribe( (data: Array<string>) => {
            data.forEach((userFavorites: string) => {
              
              this.allProductsInitialLoad.forEach((product: Product) => {
                if(product._id == userFavorites) {
                  this.favoriteProducts.push(product);
                }
              })
            })
            this.favoriteProductsLength = Object.values(data).length;
          })

          this.userCartSub = this.loginService.userCart.subscribe( data => {
            this.cart = data;
            console.log(data);
          })
        })

      }
    })
    return;
  }

  /**
   * Track Scroll Position
   */
  scrollPosition(e) {
     console.clear();
     let scrollDetail = e.detail;
     let fabButton = document.getElementById('fab-button');

     console.log(scrollDetail);
     if (scrollDetail.scrollTop >= 400) {
      fabButton.style.opacity = '1';
      fabButton.style.pointerEvents = 'auto';
     }

     else {
      fabButton.style.opacity = '0';
      fabButton.style.pointerEvents = 'none';
     }

  }

  /**
    * Searching Products
    */
  onSearchChange(e, screenSize) {
    console.clear();
    // Reset Loaded Product on each character change
    this.searchLoadedProducts = [];
    let searchInput = e.detail.value;

    // Check to see if Search Input is Empty
    if(searchInput == '' || searchInput == null) {

      this.searchLoadedProducts = this.allProductsInitialLoad;
      this.triggerSearchView(screenSize);
      return;

    } else {

      console.log('Searching...');
      this.allProducts.filter((product) => {

        if(product.title.includes(searchInput)) {
            this.searchLoadedProducts.push(product);
            this.allProducts = this.searchLoadedProducts;
            this.triggerSearchView(screenSize);
        } 
      });

      // If there are no search results,
      // add initial products data that was
      // loaded during construction.
      console.log(this.searchLoadedProducts);
      if (this.searchLoadedProducts.length === 0) {
  
        console.log('Search Data is Empty!');
        this.allProducts = this.allProductsInitialLoad;
        this.triggerSearchView(screenSize);
      }
      
      // If there are no results, and a user needs to backspace
      // to correct spelling.
      this.allProducts = this.allProductsInitialLoad;
    }

  }

  /**
   * Everytime I user does a successful search, a toast presents.
   */
   async searchToast() {
    const toast = await this.toastController.create({
      cssClass: 'dark-toast',
      message: `'All Products' have been updated. &#10003;`,
      duration: 2000
    });
    toast.present();
  }


  /**
   * Trigger Skeleton Data, Sucess Toast, and switching to
   * the all products accordian. If there are no search results,
   * that is being handled here.
   */
  triggerSearchView(screenSize) {

    if(screenSize == 'lg') {
      this.searching = true;
      this.skeletonDataLg = true;
  
      setTimeout(() => {
        this.searching = false;
        this.skeletonDataLg = false;
  
        this.searchToast();
        this.searchResultLog();
        this.changeDetectorRef.detectChanges();
      }, 2000);
    }

    if(screenSize == 'mobile') {
      this.searching = true;
      this.skeletonData = true;
  
      setTimeout(() => {
        this.searching = false;
        this.skeletonData = false;
  
        this.searchToast();
        this.searchResultLog();
        this.changeDetectorRef.detectChanges();
      }, 2000);
    }

    return;
  }

  /**
   * Log for keeping track of Search & Product Data
   */
  searchResultLog() {
    console.log('Search Loaded Product:')
    console.log(this.searchLoadedProducts.length)

    console.log('Static Products:')
    console.log(this.allProducts.length)

    console.log('Initial Static Products:')
    console.log(this.allProductsInitialLoad.length)
  }

  /**
   * Send user to that product's page
   * @param productID
   * @param userEmail
   */
  goToProductPage(product) {
    console.log(product)
    this.router.navigate(["/products/product-page", product._id]);

  }

/**
 * Toggle the product's favorite state
 * @param productID
 * @param userEmail
 */

favoriteToggle(productID: string, userEmail: string) {
    console.clear();
    console.log('Email: ' + userEmail);
    console.log('Product: ' + productID);

    // Check for this Products Favorite State
  }

async openFilterActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Filter Products',
      cssClass: 'filter-action-sheet',
      buttons: this.actionSheetButtons()
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
}

  closeFilterPopover() {
    this.filterPopoverOpen = false;
  }

  /**
   * Semantic Method.
   * @returns Array<ActionSheetButton>
   */
  actionSheetButtons(){
    return [
      {
        text: 'Lowest Price',
        handler: () => {
          this.triggerFilteringView('Lowest Price')
        }
      },
      {
        text: 'Highest Price',
        handler: () => {
          this.triggerFilteringView('Highest Price')
        }
      },
      {
        text: 'Most Reviews',
        handler: () => {
          this.triggerFilteringView('Most Reviews')
        }
      },
      {
        text: 'Least Reviews',
        handler: () => {
          this.triggerFilteringView('Least Reviews')
        }
      },
      {
        text: 'Highest Ratings',
        handler: () => {
          this.triggerFilteringView('Highest Ratings')
        }
      },
      {
        text: 'Lowest Ratings',
        handler: () => {
          this.triggerFilteringView('Lowest Ratings')
        }
      },
      {
        text: 'Newest',
        handler: () => {
          this.triggerFilteringView('Newest')
        }
      },
      {
        text: 'Oldest',
        handler: () => {
          this.triggerFilteringView('Oldest')
        }
      },
      {
        text: 'Longest Duration',
        handler: () => {
          this.triggerFilteringView('Longest Duration')
        }
      },
      {
        text: 'Shortest Duration',
        handler: () => {
          this.triggerFilteringView('Shortest Duration')
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'return-down-back-outline',
        cssClass: 'filter-action-sheet-cancel-button',
        handler: () => {
          console.log('Filtering Cancelled!');
        }
      },
    ]
  }

  /**
   * Triggered specifically when filtering products
   * @param filterOption
   */
  triggerFilteringView(filterOption: string) {
    console.clear()
      this.filterOption = filterOption;
      this.searching = true;
      this.skeletonData = true;
      console.log(this.searchLoadedProducts);

      // Lowest Price
      // Highest Price
      // Newest
      // Oldest
      // Longest Duration
      // Shortest Duration
      // Highest Ratings
      // Lowest Ratings
      // Most Reviews
      // Least Reviews

      switch (filterOption) {
        case 'Lowest Price':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return a.price - b.price;
          });
          break;
        case 'Highest Price':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return b.price - a.price;
          });
          break;
        case 'Newest':
          this.searchLoadedProducts.sort();
          
          break;
        case 'Oldest':
          this.searchLoadedProducts.sort();
          
          break;
        case 'Highest Ratings':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return b.rating - a.rating;
          });
          
          break;
        case 'Lowest Ratings':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return a.rating - b.rating;
          });
          
          break;
        case 'Most Reviews':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return b.reviews.length - a.reviews.length;
          });
          
          break;
        case 'Least Reviews':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return a.reviews.length - b.reviews.length;
          });
          
          break;
        case 'Shortest Duration':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return a.duration - b.duration;
          });
          
          break;
        case 'Longest Duration':
          this.searchLoadedProducts.sort((a: Product, b: Product) => {
            return b.duration - a.duration;
          });
          
          break;
      
        default:
          break;
      }


    setTimeout(() => {
      this.searching = false;
      this.skeletonData = false;
      this.changeDetectorRef.detectChanges()
    }, 2000);
  }

  /**
   * When a User selects a Products section with each
   * accordian button, the IonList's elements will re-arrange.
   * This only applies to both the All & Favorite IonItems.
   * 
   * When you tap those IonItems, it will drop down to the bottom
   * of the list. This way, the accordian is never open with
   * an IonItem underneath it.
   * @param e Accordian change Event
   */
  accordianChange(e) {

    let accordian = e.detail.value;
    let featuredProductsIonItem = document.getElementById('featured-products-item');

    let favoriteProductsIonAccordian = document.getElementById('favorite-products-accordian');
    let favoriteProductsIonItem = document.getElementById('favorite-products-item');

    let allProductsIonAccordian = document.getElementById('all-products-accordian');
    let allProductsIonItem = document.getElementById('all-products-item');

    let searchBar = document.getElementById('search-bar');
    let filterButton = document.getElementById('filter-button');

    // All Products
    if(accordian == 'all' || this.searching) {
      this.accordianBSubject$.next(accordian)
      this.searchBarMessage = 'Search All Products';
      featuredProductsIonItem.style.background = "#ededed";
      favoriteProductsIonItem.style.background = "#ededed";
      allProductsIonItem.style.background = "#ffdcca";
      searchBar.style.opacity = '1';
      searchBar.style.pointerEvents = 'auto';
      filterButton.style.opacity = '1';
      filterButton.style.pointerEvents = 'auto';
      this.insertAfter(favoriteProductsIonAccordian, allProductsIonAccordian)
      
    }

    // Favorite Products
    if(accordian == 'favorites') {
      this.accordianBSubject$.next(accordian);
      this.searchBarMessage = 'Search Favorite Products';
      featuredProductsIonItem.style.background = "#ededed";
      favoriteProductsIonItem.style.background = "#ffdcca";
      allProductsIonItem.style.background = "#ededed";
      searchBar.style.opacity = '1';
      searchBar.style.pointerEvents = 'auto';
      filterButton.style.opacity = '1';
      filterButton.style.pointerEvents = 'auto';
      this.insertAfter(allProductsIonAccordian, favoriteProductsIonAccordian)
    }

    // Featured Products
    if(accordian == 'featured') {
      featuredProductsIonItem.style.background = "#ffdcca";
      favoriteProductsIonItem.style.background = "#ededed";
      allProductsIonItem.style.background = "#ededed";
      searchBar.style.opacity = '0';
      searchBar.style.pointerEvents = 'none';
      filterButton.style.opacity = '0';
      filterButton.style.pointerEvents = 'none';

      this.accordianBSubject$.next(accordian)
    }

    // Undefined Products
    if(accordian === undefined) {
      featuredProductsIonItem.style.background = "none";
      favoriteProductsIonItem.style.background = "none";
      allProductsIonItem.style.background = "none";

    }
    
  }

  /**
   * Function for handling changing the node positions in the
   * DOM for IonItems in the AccordianGroup
   * @param referenceNode 
   * @param newNode 
   */
  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  /**
   * Filtering this.searchLoadedProducts: Product by Category
   * @param category being changed from #category-swiper
   * @param e being click $event from IonButton in #category-swiper
   */
  changeCategory(category: string, e: Event): void {
    // this.searchLoadedProducts = this.allProductsInitialLoad;
    let searchLoadedProductsCopy = this.allProductsInitialLoad;

    this.activeCategory = category;

    console.clear();
    console.log(category, e);
    console.log('Search Results / Changed Category');
    console.log(this.searchLoadedProducts);
    console.log(category, e);
    console.log('Search Results Copy / Changed Category');
    console.log(searchLoadedProductsCopy);

    if(category === 'all') {
      console.log('Products Filted By Category: All')
      this.searchLoadedProducts = searchLoadedProductsCopy;
      return;
    }

    let catergoryFilteredProducts = searchLoadedProductsCopy
      .filter(product => {
        console.log(product.category);
        return product.category == this.activeCategory;
    });
    
    console.log('\n');
    console.log('Products Filted By Category: ')
    console.log(catergoryFilteredProducts);
    this.searchLoadedProducts = catergoryFilteredProducts;
    return;
  }

  
  // Swiper
  onSwiper(swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
  }

  /**
   * Enables the user to hide the featured products from the UI
   */
  toggleFeaturedVisibility() {
    let featuredSlideWrapper = document.getElementById('featured-swiper');
    let featuredReturnPosition = document.getElementById('featured-return-position');

    switch (this.featuredSliderVisible) {
      case true:
        this.featuredSliderVisible = false
        featuredReturnPosition.scrollIntoView();
        featuredSlideWrapper.style.height = '0px';
        break;
      case false:
        this.featuredSliderVisible = true
        featuredReturnPosition.scrollIntoView();
        featuredSlideWrapper.style.height = '400px';
        break;
    
      default:
        break;
    }
  }

  /**
   * Scroll to the Top of the page.
   */
  scrollToTop() {
    this.content.scrollToTop();
  }

  /**
   * 
   */
   favorites() {
     
   }

   /**
    * 
    */
   featuredLg() {
    console.log('Featured Products Large');
    this.categoryLg = 'none';
    this.skeletonDataLg = true;

    setTimeout(() => {
      this.categoryLg = 'featured';
      this.skeletonDataLg = false;
      this.changeDetectorRef.detectChanges();
    }, 2000);
   }

   /**
    * 
    */
    favoritesLg() {
      console.log('Favorite Products Large');
      this.categoryLg = 'none';
      this.skeletonDataLg = true;
  
      setTimeout(() => {
        this.categoryLg = 'favorites';
        this.skeletonDataLg = false;
        this.changeDetectorRef.detectChanges();
      }, 2000);
   }

   /**
    * 
    */
    allLg() {
      console.log('All Products Large');
      this.categoryLg = 'none';
      this.skeletonDataLg = true;
  
      setTimeout(() => {
        this.categoryLg = 'all';
        this.skeletonDataLg = false;
        this.changeDetectorRef.detectChanges();
      }, 2000);
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
        this.productsService.cart$.next(data['userCart']);
        this.loginService.userCart.next(data['userCart']);
        this.cart = data['userCart'];
        
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
            duration: 10000,
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
        this.productsService.cart$.next(data['userCart']);
        this.loginService.userCart.next(data['userCart']);
        this.cart = data['userCart'];
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
            duration: 10000,
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

    /**
     * Go to Hypnosis Download.com's Cart
     */
     hpcom() {
      
    }
}
