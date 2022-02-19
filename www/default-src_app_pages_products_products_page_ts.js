"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_products_products_page_ts"],{

/***/ 8898:
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page.html?ngResource */ 9225);
/* harmony import */ var _products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss?ngResource */ 7204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products/products.service */ 6423);
/* harmony import */ var src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/onboarding/login.service */ 3145);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 9985);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);












swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay]);
let ProductsPage = class ProductsPage {
    constructor(actionSheetController, router, productsService, profileService, loginService, toastController, changeDetectorRef) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.productsService = productsService;
        this.profileService = profileService;
        this.loginService = loginService;
        this.toastController = toastController;
        this.changeDetectorRef = changeDetectorRef;
        this.skeletonData = false;
        this.skeletonDataLg = false;
        this.noSearchResults = false;
        this.searching = false;
        this.activeCategory = "all";
        this.filterPopoverOpen = false;
        this.filtering = false;
        this.filterOption = "Newest";
        this.filterSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('Newest');
        this.featuredSliderVisible = true;
        this.allProductsFabVisibile = false;
        this.categoryLg = 'featured';
        this.accordianGroupValue = "all";
        this.accordianBSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('featured');
        this.favoriteProducts = [];
        this.categorySwiperConfig = {
            slidesPerView: 3.5,
            spaceBetween: 20,
            navigation: true,
            pagination: { clickable: true },
            scrollbar: { draggable: true },
        };
        this.featuredSwiperConfig = {
            slidesPerView: 1.3,
            spaceBetween: 20,
            // autoplay: {
            //   delay: 3000,
            // },
            navigation: true,
        };
    }
    ngAfterViewInit() {
        this.initializeView();
    }
    ngOnInit() {
        console.clear();
        this.initializeData();
    }
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
    initializeData() {
        // Get all Products
        this.getAllProductsSub = this.productsService.getAllProducts()
            .subscribe(products => {
            this.searchLoadedProducts = products;
            this.searchLoadedProductsLength = Object.values(products).length;
            ;
            this.allProducts = products;
            this.allProductsInitialLoad = products;
            console.log(products);
            // Get Featured Products
            this.featuredProductsSub = this.productsService.getFeaturedProductsForLanding()
                .subscribe(data => {
                this.featuredProducts = data;
                this.featuredProductsLength = Object.values(data).length;
                console.log(data);
            });
        });
        // Get User's Auth State
        this.authStateSub = this.loginService.authenticationState.subscribe(data => {
            this.authState = data;
            if (data) {
                // Get User's Email
                this.userEmailSub = this.loginService.userEmail.subscribe(data => {
                    this.userEmail = data;
                    console.log(this.userEmail);
                    // Get User's favorite Products
                    this.userFavoriteProductsSub = this.profileService.getFavoriteProducts(this.userEmail)
                        .subscribe((data) => {
                        data.forEach((userFavorites) => {
                            this.allProductsInitialLoad.forEach((product) => {
                                if (product._id == userFavorites) {
                                    this.favoriteProducts.push(product);
                                }
                            });
                        });
                        this.favoriteProductsLength = Object.values(data).length;
                    });
                });
            }
        });
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
        if (searchInput == '' || searchInput == null) {
            this.searchLoadedProducts = this.allProductsInitialLoad;
            this.triggerSearchView(screenSize);
            return;
        }
        else {
            console.log('Searching...');
            this.allProducts.filter((product) => {
                if (product.title.includes(searchInput)) {
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
    searchToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                cssClass: 'dark-toast',
                message: `'All Products' have been updated. &#10003;`,
                duration: 2000
            });
            toast.present();
        });
    }
    /**
     * Trigger Skeleton Data, Sucess Toast, and switching to
     * the all products accordian. If there are no search results,
     * that is being handled here.
     */
    triggerSearchView(screenSize) {
        if (screenSize == 'lg') {
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
        if (screenSize == 'mobile') {
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
        console.log('Search Loaded Product:');
        console.log(this.searchLoadedProducts.length);
        console.log('Static Products:');
        console.log(this.allProducts.length);
        console.log('Initial Static Products:');
        console.log(this.allProductsInitialLoad.length);
    }
    /**
     * Send user to that product's page
     * @param productID
     * @param userEmail
     */
    goToProductPage(product) {
        console.log(product);
        this.router.navigate(["/products/product-page", product._id]);
    }
    /**
     * Toggle the product's favorite state
     * @param productID
     * @param userEmail
     */
    favoriteToggle(productID, userEmail) {
        console.clear();
        console.log('Email: ' + userEmail);
        console.log('Product: ' + productID);
        // Check for this Products Favorite State
    }
    openFilterActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Filter Products',
                cssClass: 'filter-action-sheet',
                buttons: this.actionSheetButtons()
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    closeFilterPopover() {
        this.filterPopoverOpen = false;
    }
    /**
     * Semantic Method.
     * @returns Array<ActionSheetButton>
     */
    actionSheetButtons() {
        return [
            {
                text: 'Lowest Price',
                handler: () => {
                    this.triggerFilteringView('Lowest Price');
                }
            },
            {
                text: 'Highest Price',
                handler: () => {
                    this.triggerFilteringView('Highest Price');
                }
            },
            {
                text: 'Most Reviews',
                handler: () => {
                    this.triggerFilteringView('Most Reviews');
                }
            },
            {
                text: 'Least Reviews',
                handler: () => {
                    this.triggerFilteringView('Least Reviews');
                }
            },
            {
                text: 'Highest Ratings',
                handler: () => {
                    this.triggerFilteringView('Highest Ratings');
                }
            },
            {
                text: 'Lowest Ratings',
                handler: () => {
                    this.triggerFilteringView('Lowest Ratings');
                }
            },
            {
                text: 'Newest',
                handler: () => {
                    this.triggerFilteringView('Newest');
                }
            },
            {
                text: 'Oldest',
                handler: () => {
                    this.triggerFilteringView('Oldest');
                }
            },
            {
                text: 'Longest Duration',
                handler: () => {
                    this.triggerFilteringView('Longest Duration');
                }
            },
            {
                text: 'Shortest Duration',
                handler: () => {
                    this.triggerFilteringView('Shortest Duration');
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
        ];
    }
    /**
     * Triggered specifically when filtering products
     * @param filterOption
     */
    triggerFilteringView(filterOption) {
        console.clear();
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
                this.searchLoadedProducts.sort((a, b) => {
                    return a.price - b.price;
                });
                break;
            case 'Highest Price':
                this.searchLoadedProducts.sort((a, b) => {
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
                this.searchLoadedProducts.sort((a, b) => {
                    return b.rating - a.rating;
                });
                break;
            case 'Lowest Ratings':
                this.searchLoadedProducts.sort((a, b) => {
                    return a.rating - b.rating;
                });
                break;
            case 'Most Reviews':
                this.searchLoadedProducts.sort((a, b) => {
                    return b.reviews.length - a.reviews.length;
                });
                break;
            case 'Least Reviews':
                this.searchLoadedProducts.sort((a, b) => {
                    return a.reviews.length - b.reviews.length;
                });
                break;
            case 'Shortest Duration':
                this.searchLoadedProducts.sort((a, b) => {
                    return a.duration - b.duration;
                });
                break;
            case 'Longest Duration':
                this.searchLoadedProducts.sort((a, b) => {
                    return b.duration - a.duration;
                });
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.searching = false;
            this.skeletonData = false;
            this.changeDetectorRef.detectChanges();
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
        if (accordian == 'all' || this.searching) {
            this.accordianBSubject$.next(accordian);
            this.searchBarMessage = 'Search All Products';
            featuredProductsIonItem.style.background = "#ededed";
            favoriteProductsIonItem.style.background = "#ededed";
            allProductsIonItem.style.background = "#ffdcca";
            searchBar.style.opacity = '1';
            searchBar.style.pointerEvents = 'auto';
            filterButton.style.opacity = '1';
            filterButton.style.pointerEvents = 'auto';
            this.insertAfter(favoriteProductsIonAccordian, allProductsIonAccordian);
        }
        // Favorite Products
        if (accordian == 'favorites') {
            this.accordianBSubject$.next(accordian);
            this.searchBarMessage = 'Search Favorite Products';
            featuredProductsIonItem.style.background = "#ededed";
            favoriteProductsIonItem.style.background = "#ffdcca";
            allProductsIonItem.style.background = "#ededed";
            searchBar.style.opacity = '1';
            searchBar.style.pointerEvents = 'auto';
            filterButton.style.opacity = '1';
            filterButton.style.pointerEvents = 'auto';
            this.insertAfter(allProductsIonAccordian, favoriteProductsIonAccordian);
        }
        // Featured Products
        if (accordian == 'featured') {
            featuredProductsIonItem.style.background = "#ffdcca";
            favoriteProductsIonItem.style.background = "#ededed";
            allProductsIonItem.style.background = "#ededed";
            searchBar.style.opacity = '0';
            searchBar.style.pointerEvents = 'none';
            filterButton.style.opacity = '0';
            filterButton.style.pointerEvents = 'none';
            this.accordianBSubject$.next(accordian);
        }
        // Undefined Products
        if (accordian === undefined) {
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
    changeCategory(category, e) {
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
        if (category === 'all') {
            console.log('Products Filted By Category: All');
            this.searchLoadedProducts = searchLoadedProductsCopy;
            return;
        }
        let catergoryFilteredProducts = searchLoadedProductsCopy
            .filter(product => {
            console.log(product.category);
            return product.category == this.activeCategory;
        });
        console.log('\n');
        console.log('Products Filted By Category: ');
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
                this.featuredSliderVisible = false;
                featuredReturnPosition.scrollIntoView();
                featuredSlideWrapper.style.height = '0px';
                break;
            case false:
                this.featuredSliderVisible = true;
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
    addToCart(id, title, button) {
        let cartCount = document.getElementById('cart-count');
        this.addToCartSub = this.productsService.addToCart(id, this.userEmail)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((e) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let errorMessage = e.error.msg;
            if (errorMessage == 'User already has this product in their cart.') {
                const toast = yield this.toastController.create({
                    message: `You already have this Product to your Cart!`,
                    duration: 10000,
                    color: 'danger',
                    position: 'top',
                    buttons: [
                        {
                            side: 'end',
                            icon: 'close',
                            role: 'cancel',
                            handler: () => {
                                toast.dismiss();
                            }
                        }
                    ]
                });
                toast.present();
            }
            throw Error(e);
        })))
            .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            button.el.style.transform = 'scale(1.4)';
            button.el.style.color = 'red';
            setTimeout(() => {
                button.el.style.transform = 'scale(1)';
                button.el.style.color = '#222';
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
            const toast = yield this.toastController.create({
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
                        handler: () => {
                            toast.dismiss();
                        }
                    }
                ]
            });
            toast.present();
            // setTimeout(() => {
            //   return this.addToCartSub.unsubscribe();
            // }, 3000);
        }));
    }
};
ProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService },
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService },
    { type: src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef }
];
ProductsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['productsPageContent',] }],
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener, args: ['unloaded',] }]
};
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-products',
        template: _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewEncapsulation.None,
        styles: [_products_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsPage);



/***/ }),

/***/ 9985:
/*!*****************************************************!*\
  !*** ./src/app/services/profile/profile.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _onboarding_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onboarding/login.service */ 3145);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let ProfileService = class ProfileService {
    constructor(http, loginService, alertController, toastController, router, loadingController) {
        this.http = http;
        this.loginService = loginService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.TOKEN_KEY = 'access_token';
    }
    /**
     * Change User's name
     * @returns
     */
    changeName(name, password, email) {
        console.log(name, password);
        return this.http.post(`${this.BACKEND_URL}/user-profile/change-name`, { fullName: name, password, email })
            .pipe(
        // 
        )
            .subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(response);
            // Create Toast
            const toast = yield this.toastController.create({
                message: 'You have successfully changed your Name!',
                cssClass: 'success-toast',
                duration: 2000,
            });
            // Create Loading
            const loading = yield this.loadingController.create({
                cssClass: 'default-loading',
                message: 'Updating Profile ..',
                duration: 2000
            });
            loading.present();
            loading.onDidDismiss()
                .then(() => {
                toast.present();
                // Change Name on Profile Page
                this.loginService.userFullName.next(name);
                return;
            });
        }));
    }
    /**
     * Change User's Email
     */
    changeEmail(newEmail, email, password) {
        return this.http.post(`${this.BACKEND_URL}/user-profile/change-email`, { newEmail, email, password })
            .pipe(
        // 
        )
            .subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(response);
            // Create Toast
            const toast = yield this.toastController.create({
                message: 'You have successfully changed your Email!',
                cssClass: 'success-toast',
                duration: 2000,
            });
            // Create Loading
            const loading = yield this.loadingController.create({
                cssClass: 'default-loading',
                message: 'Updating Profile ..',
                duration: 2000
            });
            loading.present();
            loading.onDidDismiss()
                .then(() => {
                toast.present();
                // Change Name on Profile Page
                this.loginService.userEmail.next(newEmail);
                return;
            });
        }));
    }
    /**
     * Change User's Picture
     */
    changePicture() {
    }
    /**
     * Change User's Password
     */
    changePassword(newPassword, oldPassword, email) {
        return this.http.post(`${this.BACKEND_URL}/user-profile/change-password`, { newPassword, oldPassword, email })
            .pipe(
        // 
        )
            .subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(response);
            // Create Toast
            const toast = yield this.toastController.create({
                message: 'You have successfully changed your Password!',
                cssClass: 'success-toast',
                duration: 2000,
            });
            // Create Loading
            const loading = yield this.loadingController.create({
                cssClass: 'default-loading',
                message: 'Updating Profile ..',
                duration: 2000
            });
            loading.present();
            loading.onDidDismiss()
                .then(() => {
                toast.present();
                return;
            });
        }));
    }
    /**
     * Unsubscribe From Newsletter
     */
    unsubscribeFromNewsLetter() {
    }
    /**
     * Subscribe to Newsletter
     */
    subscribeFromNewsLetter() {
    }
    getFavoriteProducts(email) {
        console.log(email);
        return this.http.post(`${this.BACKEND_URL}/user-profile/get-favorite-products`, { email });
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _onboarding_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ 7204:
/*!**************************************************************!*\
  !*** ./src/app/pages/products/products.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n/**\n * Swiper 7.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 24, 2021\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n#featured-products-item,\n#favorite-products-item,\n#all-products-item {\n  background: #ededed;\n}\n#featured-products-lg,\n#favorite-products-lg,\n#all-products-lg {\n  margin: 5em;\n}\n.acc-title {\n  display: inline-block;\n  width: 100px;\n}\n#featured-swiper {\n  height: 30vh;\n}\n#featured-swiper .product-wrapper {\n  height: auto;\n  border-radius: 5px;\n  background: #f2f2f2;\n  margin-bottom: 10px;\n  padding: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n}\n#featured-swiper .product-wrapper .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n#featured-swiper .product-wrapper .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#featured-swiper .product-wrapper .product-reviews-length {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#featured-swiper .product-wrapper .product-title {\n  height: 40px;\n  margin-bottom: 1em;\n}\n#featured-swiper .product-wrapper .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n#featured-swiper .product-wrapper .product-photo {\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 200px;\n}\n#featured-swiper .product-wrapper ion-toolbar ion-buttons .favorite-this-product-button {\n  --background: #ffbbbb;\n  --border-radius: 50px;\n  text-align: center;\n  border-radius: 57px;\n  height: 40px;\n  padding-left: 6px;\n}\n#featured-swiper .product-wrapper ion-toolbar ion-buttons #cart-button {\n  height: 50px;\n  width: 50px;\n  --background: #999;\n  --border-radius: 50px;\n}\n#featured-swiper .product-wrapper ion-toolbar ion-buttons #cart-button ion-icon {\n  color: white;\n}\n#featured-swiper .product-wrapper ion-icon {\n  font-size: 2em;\n}\n#featured-swiper .product-wrapper .product-message-green {\n  border-left: 4px solid red;\n}\n#featured-swiper .product-wrapper .product-message-red {\n  border-left: 4px solid green;\n}\n#featured-products-accordian {\n  margin-top: 57px;\n}\n#favorite-products-accordian .product-wrapper {\n  height: auto;\n  border-radius: 5px;\n  background: #f2f2f2;\n  margin-bottom: 10px;\n  padding: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n}\n#favorite-products-accordian .product-wrapper .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n#favorite-products-accordian .product-wrapper .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#favorite-products-accordian .product-wrapper .product-reviews-length {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#favorite-products-accordian .product-wrapper .product-title {\n  height: 40px;\n  margin-bottom: 1em;\n}\n#favorite-products-accordian .product-wrapper .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n#favorite-products-accordian .product-wrapper .product-photo {\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 200px;\n}\n#favorite-products-accordian .product-wrapper ion-toolbar ion-buttons .favorite-this-product-button {\n  --background: #ffbbbb;\n  --border-radius: 50px;\n  text-align: center;\n  border-radius: 57px;\n  height: 40px;\n  padding-left: 6px;\n}\n#favorite-products-accordian .product-wrapper ion-toolbar ion-buttons #cart-button {\n  height: 50px;\n  width: 50px;\n  --background: #999;\n  --border-radius: 50px;\n}\n#favorite-products-accordian .product-wrapper ion-toolbar ion-buttons #cart-button ion-icon {\n  color: white;\n}\n#favorite-products-accordian .product-wrapper ion-icon {\n  font-size: 2em;\n}\n#favorite-products-accordian .product-wrapper .product-message-green {\n  border-left: 4px solid red;\n}\n#favorite-products-accordian .product-wrapper .product-message-red {\n  border-left: 4px solid green;\n}\n#all-products-accordian .product-wrapper {\n  height: auto;\n  border-radius: 5px;\n  background: #f2f2f2;\n  margin-bottom: 10px;\n  padding: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n}\n#all-products-accordian .product-wrapper .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n#all-products-accordian .product-wrapper .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#all-products-accordian .product-wrapper .product-reviews-length {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#all-products-accordian .product-wrapper .product-title {\n  height: 40px;\n  margin-bottom: 1em;\n}\n#all-products-accordian .product-wrapper .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n#all-products-accordian .product-wrapper .product-photo {\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 200px;\n}\n#all-products-accordian .product-wrapper ion-toolbar ion-buttons .favorite-this-product-button {\n  --background: #ffbbbb;\n  --border-radius: 50px;\n  text-align: center;\n  border-radius: 57px;\n  height: 40px;\n  padding-left: 6px;\n}\n#all-products-accordian .product-wrapper ion-toolbar ion-buttons #cart-button {\n  height: 50px;\n  width: 50px;\n  --background: #999;\n  --border-radius: 50px;\n}\n#all-products-accordian .product-wrapper ion-toolbar ion-buttons #cart-button ion-icon {\n  color: white;\n}\n#all-products-accordian .product-wrapper ion-icon {\n  font-size: 2em;\n}\n#all-products-accordian .product-wrapper .product-message-green {\n  border-left: 4px solid red;\n}\n#all-products-accordian .product-wrapper .product-message-red {\n  border-left: 4px solid green;\n}\n#featured-page-message-lg {\n  background: #fea;\n  border-left: 7px solid #ffd427;\n  padding: 1em 2em;\n  border-radius: 5px;\n  opacity: 0;\n  animation: featured-message-lg-slide 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;\n}\n@keyframes featured-message-lg-slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#results-header {\n  padding: 0.4em;\n  border-radius: 5px;\n  background: #ececec;\n  margin: 1em auto;\n}\nion-icon {\n  color: #333;\n  margin-right: 0.5em;\n}\n.searchbar-input {\n  color: #333 !important;\n}\n.filter-action-sheet {\n  --color: #333;\n  --button-color: #0270ff;\n  --background: #f1f1f1;\n}\n.filter-action-sheet .action-sheet-title {\n  background: #e4e4e4;\n  font-weight: 600;\n}\n.filter-action-sheet .filter-action-sheet-cancel-button {\n  color: #999;\n}\n.featured-product {\n  width: 95%;\n  float: left;\n  justify-content: left;\n}\n.featured-product #featured-product-lg-lower-toolbar {\n  height: 100px;\n}\n#no-search-results {\n  text-align: center;\n  background: #999;\n  padding: 1em;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 1.1em;\n  margin: 5em auto;\n}\n#no-search-results ion-icon {\n  color: white;\n}\n@keyframes products-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#product-lg-toolbar {\n  border-bottom: 1px solid #e3e3e3;\n}\n#product-lg-toolbar ion-buttons ion-button {\n  --background: #e6f3ff;\n  --color: #0055a5;\n  width: 83px;\n  font-size: 0.7em;\n}\n#product-lg-toolbar ion-buttons .active-category-lg {\n  --background: #0055a5;\n  --color: #e6f3ff;\n  width: 83px;\n  font-size: 0.7em;\n}\n.product-lg {\n  height: 500px;\n  width: auto;\n  background: #f2f2f2;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);\n  box-shadow: 1px 1px 5px #d4d4d4;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 1em;\n  opacity: 0;\n}\n.product-lg .product-lg-image {\n  height: 50%;\n  width: 100%;\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.product-lg .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n.product-lg .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n.product-lg .product-reviews-length {\n  font-size: 0.6em;\n}\n.product-lg .product-title {\n  height: 40px;\n}\n.product-lg .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n.product-lg .product-lg-lower-toolbar {\n  --background: none;\n  position: relative;\n  top: 40px;\n}\n.product-lg:hover {\n  background: #dfdede;\n}\n.product-lg:nth-child(1) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s forwards;\n}\n.product-lg:nth-child(2) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;\n}\n.product-lg:nth-child(3) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s forwards;\n}\n.product-lg:nth-child(4) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s forwards;\n}\n.product-lg:nth-child(5) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s forwards;\n}\n.product-lg:nth-child(6) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s forwards;\n}\n.product-lg:nth-child(7) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s forwards;\n}\n.product-lg:nth-child(8) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s forwards;\n}\n.product-lg:nth-child(9) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;\n}\n@keyframes products-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#categories {\n  background: #f3f3f3;\n  position: relative;\n  top: -14px;\n}\n#logo {\n  margin: auto 1em;\n}\n#fab-button {\n  opacity: 0;\n}\n#category-swiper {\n  margin-left: 1em;\n  height: 35px;\n  padding-bottom: 1em;\n}\n#category-swiper .active-category {\n  --border-color: orangered !important;\n  --border-style: solid !important;\n  --border-width: 2px !important;\n  color: #222 !important;\n}\n#category-swiper .category {\n  font-size: 0.53em;\n  width: auto;\n  text-align: center;\n  position: relative;\n  top: 2px;\n  width: 122px !important;\n  --background: none;\n  --box-shadow: none;\n  border-radius: 20px;\n  height: 25px;\n  color: #222;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#feature-swiper-overlay {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(90deg, #00000033, transparent);\n  z-index: 9999;\n  position: absolute;\n  top: 0px;\n  pointer-events: none;\n}\n#featured-swiper {\n  height: 315px;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLnNjc3MiLCJwcm9kdWN0cy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0c0VBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0FDSEY7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDRkY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVBOztFQUVFLGlDQUFBO0FDQ0Y7QURDQTtFQUNFLG1CQUFBO0FDRUY7QURERTtFQUNFLG1CQUFBO0FDR0o7QURBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBREZBLGdCQUFBO0FBRUU7O0VBRUUsWUFBQTtBQ0lKO0FEREU7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FDR0o7QURDQSxlQUFBO0FBRUU7RUFFRSxtQkFBQTtBQ0FKO0FERUU7Ozs7Ozs7O0VBUUUsNEJBQUE7QUNBSjtBREVFOzs7OztFQUtFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUU7RUFDRSwrQkFBQTtBQ0FKO0FERUU7RUFDRSxnRkFBQTtBQ0FKO0FERUU7RUFDRSxpRkFBQTtBQ0FKO0FERUU7RUFDRSwrRUFBQTtBQ0FKO0FERUU7RUFDRSxrRkFBQTtBQ0FK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LG1CQUFBO0VBQ0EsdUJBQUE7QUFvT1I7QUE5TkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBEQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FBZ09KO0FBOU5BO0VBQ0ksYUFBQTtFQUVBLGdCQUFBO0FBZ09KIiwiZmlsZSI6InByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N3aXBlci12YXJzLnNjc3MnO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdzd2lwZXItaWNvbnMnO1xuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKVxuICAgIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICN7JHRoZW1lQ29sb3J9O1xufVxuLnN3aXBlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG4uc3dpcGVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5zd2lwZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuLnN3aXBlci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICYuc3dpcGVyLXZlcnRpY2FsIHtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xuICB9XG59XG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuLnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4vKiBBdXRvIEhlaWdodCAqL1xuLnN3aXBlci1hdXRvaGVpZ2h0IHtcbiAgJixcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnN3aXBlci13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcbiAgfVxufVxuXG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLTNkIHtcbiAgJixcbiAgJi5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVyIHtcbiAgICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xuICB9XG4gIC5zd2lwZXItd3JhcHBlcixcbiAgLnN3aXBlci1zbGlkZSxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3csXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbiAgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxufVxuXG4vKiBDU1MgTW9kZSAqL1xuLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydCBzdGFydDtcbiAgfVxufVxuLnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgfVxufVxuLnN3aXBlci12ZXJ0aWNhbC5zd2lwZXItY3NzLW1vZGUge1xuICA+IC5zd2lwZXItd3JhcHBlciB7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG4gIH1cbn1cbi5zd2lwZXItY2VudGVyZWQge1xuICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBvcmRlcjogOTk5OTtcbiAgfVxuICAmLnN3aXBlci1ob3Jpem9udGFsIHtcbiAgICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpO1xuICAgIH1cbiAgICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcbiAgICB9XG4gIH1cbiAgJi5zd2lwZXItdmVydGljYWwge1xuICAgID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKTtcbiAgICB9XG4gICAgPiAuc3dpcGVyLXdyYXBwZXI6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcik7XG4gICAgfVxuICB9XG5cbiAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyIGNlbnRlcjtcbiAgfVxufVxuXG5cblxuIiwiQGltcG9ydCAnc3dpcGVyL3Njc3MnO1xuQGltcG9ydCBcIn5zd2lwZXIvY3NzXCI7XG5cbiNmZWF0dXJlZC1wcm9kdWN0cy1pdGVtLFxuI2Zhdm9yaXRlLXByb2R1Y3RzLWl0ZW0sXG4jYWxsLXByb2R1Y3RzLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG4jZmVhdHVyZWQtcHJvZHVjdHMtbGcsXG4jZmF2b3JpdGUtcHJvZHVjdHMtbGcsXG4jYWxsLXByb2R1Y3RzLWxnIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgIC8vIGhlaWdodDogODAwcHg7XG4gICAgbWFyZ2luOiA1ZW07XG59XG4uYWNjLXRpdGxlIHsgICAgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuI2ZlYXR1cmVkLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuXG5cbi5wcm9kdWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYW5pbWF0aW9uOiBwcm9kdWN0cy1zbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSkgZm9yd2FyZHM7XG5cbiAgICAucHJvZHVjdC1kdXJhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhdGVnb3J5IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgY29sb3I6ICM1YTVhNWE7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcmV2aWV3cy1sZW5ndGgge1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LXJhdGluZyB7XG5cbiAgICB9XG5cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwNTVhNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICAgIC5wcm9kdWN0LXBob3RvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcGxhY2Vob2xkZXJzL3BsYWNlaG9sZGVyLWxvZ28uc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYm90dG9tOiAwO1xuXG4gICAgICAgIGlvbi1idXR0b25zIHtcblxuICAgICAgICAgICAgLmZhdm9yaXRlLXRoaXMtcHJvZHVjdC1idXR0b24ge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmYmJiYjtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjY2FydC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW1lc3NhZ2UtZ3JlZW4ge1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZDtcbiAgICB9XG4gICAgLnByb2R1Y3QtbWVzc2FnZS1yZWQge1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGdyZWVuO1xuICAgIH1cbn1cbn1cblxuI2ZlYXR1cmVkLXByb2R1Y3RzLWFjY29yZGlhbiB7XG4gICAgbWFyZ2luLXRvcDogNTdweDtcbn1cbiNmYXZvcml0ZS1wcm9kdWN0cy1hY2NvcmRpYW4ge1xuICAgIC5wcm9kdWN0LXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSBmb3J3YXJkcztcbiAgICBcbiAgICAgICAgLnByb2R1Y3QtZHVyYXRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LWNhdGVnb3J5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHJvZHVjdC1yZXZpZXdzLWxlbmd0aCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LXJhdGluZyB7XG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDU1YTU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kdWN0LXBob3RvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BsYWNlaG9sZGVycy9wbGFjZWhvbGRlci1sb2dvLnN2ZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgICAgICAvLyAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyBib3R0b206IDA7XG4gICAgXG4gICAgICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgXG4gICAgICAgICAgICAgICAgLmZhdm9yaXRlLXRoaXMtcHJvZHVjdC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmJiYmI7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1N3B4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAjY2FydC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LW1lc3NhZ2UtZ3JlZW4ge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3QtbWVzc2FnZS1yZWQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBncmVlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiNhbGwtcHJvZHVjdHMtYWNjb3JkaWFuIHtcbiAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9kdWN0cy1zbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSkgZm9yd2FyZHM7XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LWR1cmF0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByb2R1Y3QtcmV2aWV3cy1sZW5ndGgge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LXRpdGxlIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHJvZHVjdC1yYXRpbmcge1xuICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA1NWE1O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgcGFkZGluZzogMC4zZW07XG4gICAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdC1waG90byB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wbGFjZWhvbGRlcnMvcGxhY2Vob2xkZXItbG9nby5zdmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgLy8gYm90dG9tOiAwO1xuICAgIFxuICAgICAgICAgICAgaW9uLWJ1dHRvbnMge1xuICAgIFxuICAgICAgICAgICAgICAgIC5mYXZvcml0ZS10aGlzLXByb2R1Y3QtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZiYmJiO1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTdweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgI2NhcnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHJvZHVjdC1tZXNzYWdlLWdyZWVuIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kdWN0LW1lc3NhZ2UtcmVkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZ3JlZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNmZWF0dXJlZC1wYWdlLW1lc3NhZ2UtbGcge1xuICAgIGJhY2tncm91bmQ6ICNmZWE7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZmZkNDI3O1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBmZWF0dXJlZC1tZXNzYWdlLWxnLXNsaWRlIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmZWF0dXJlZC1tZXNzYWdlLWxnLXNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblxuICAgIH1cbn1cblxuI2FsbC1wcm9kdWN0cy1pdGVtIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZkY2NhO1xufVxuXG4jcmVzdWx0cy1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG59XG5pb24taWNvbntcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uc2VhcmNoYmFyLWlucHV0IHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuLmZpbHRlci1hY3Rpb24tc2hlZXQge1xuICAgIC0tY29sb3I6ICMzMzM7XG4gICAgLS1idXR0b24tY29sb3I6ICMwMjcwZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gICAgLmFjdGlvbi1zaGVldC10aXRsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmZpbHRlci1hY3Rpb24tc2hlZXQtY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cbn1cblxuLmZlYXR1cmVkLXByb2R1Y3Qge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuXG4gICAgI2ZlYXR1cmVkLXByb2R1Y3QtbGctbG93ZXItdG9vbGJhciB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG4jbm8tc2VhcmNoLXJlc3VsdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBtYXJnaW46IDVlbSBhdXRvO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG5cbkBrZXlmcmFtZXMgcHJvZHVjdHMtc2xpZGUtdXAge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cbiAgICB9XG59XG5cbiNwcm9kdWN0LWxnLXRvb2xiYXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgIFxuICAgIGlvbi1idXR0b25zIHtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlNmYzZmY7XG4gICAgICAgICAgICAtLWNvbG9yOiAjMDA1NWE1O1xuICAgICAgICAgICAgd2lkdGg6IDgzcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUtY2F0ZWdvcnktbGcge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDA1NWE1O1xuICAgICAgICAgICAgLS1jb2xvcjogI2U2ZjNmZjtcbiAgICAgICAgICAgIHdpZHRoOiA4M3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5wcm9kdWN0LWxnIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggI2Q0ZDRkNDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3BhY2l0eTogMDtcblxuICAgIC5wcm9kdWN0LWxnLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wbGFjZWhvbGRlcnMvcGxhY2Vob2xkZXItbG9nby5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWR1cmF0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtY2F0ZWdvcnkge1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1yZXZpZXdzLWxlbmd0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcmF0aW5nIHtcblxuICAgIH1cblxuICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA1NWE1O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgcGFkZGluZzogMC4zZW07XG4gICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1sZy1sb3dlci10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNDBweDtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWxnOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZWRlO1xufVxuXG4vLyBGb3IgZGVsYXllZCBjYXNjYWRpbmcgZmFkZSBpbiBlZmZlY3Rcbi5wcm9kdWN0LWxnOm50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uOiBwcm9kdWN0cy1zbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSkgMC4ycyBmb3J3YXJkcztcbn1cbi5wcm9kdWN0LWxnOm50aC1jaGlsZCgyKSB7XG5hbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjNzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjRzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjVzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjZzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjdzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjhzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDgpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjlzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDkpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcm9kdWN0cy1zbGlkZS11cCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblxuICAgIH1cbn1cblxuI2NhdGVnb3JpZXMge1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE0cHg7XG5cbn1cbiNsb2dvIHtcbiAgICBtYXJnaW46IGF1dG8gMWVtO1xufVxuI2ZhYi1idXR0b24ge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8vIFN3aXBlclxuI2NhdGVnb3J5LXN3aXBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcblxuICAgIC5hY3RpdmUtY2F0ZWdvcnkge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogb3JhbmdlcmVkICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNhdGVnb3J5IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjUzZW07XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIHdpZHRoOiAxMjJweCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG59XG5cblxuI2ZlYXR1cmUtc3dpcGVyLW92ZXJsYXkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDkwZGVnLCAjMDAwMDAwMzMsIHRyYW5zcGFyZW50KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiNmZWF0dXJlZC1zd2lwZXIge1xuICAgIGhlaWdodDogMzE1cHg7XG4gICAgLy8gYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4iLCIvKipcbiAqIFN3aXBlciA3LjMuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBOb3ZlbWJlciAyNCwgMjAyMVxuICovXG5cbkBmb250LWZhY2V7Zm9udC1mYW1pbHk6c3dpcGVyLWljb25zO3NyYzp1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJyk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfTpyb290ey0tc3dpcGVyLXRoZW1lLWNvbG9yOiMwMDdhZmZ9LnN3aXBlcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LDAsMCl9LnN3aXBlci1wb2ludGVyLWV2ZW50c3t0b3VjaC1hY3Rpb246cGFuLXl9LnN3aXBlci1wb2ludGVyLWV2ZW50cy5zd2lwZXItdmVydGljYWx7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItc2xpZGV7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtfS5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5re3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItYXV0b2hlaWdodCwuc3dpcGVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZXtoZWlnaHQ6YXV0b30uc3dpcGVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVye2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0fS5zd2lwZXItM2QsLnN3aXBlci0zZC5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVye3BlcnNwZWN0aXZlOjEyMDBweH0uc3dpcGVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci0zZCAuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3d7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b217YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye292ZXJmbG93OmF1dG87c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0IHN0YXJ0fS5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnl9LnN3aXBlci12ZXJ0aWNhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eSBtYW5kYXRvcnl9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtjb250ZW50OicnO2ZsZXgtc2hyaW5rOjA7b3JkZXI6OTk5OX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDoxcHg7d2lkdGg6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWJsb2NrLXN0YXJ0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXt3aWR0aDoxMDAlO21pbi13aWR0aDoxcHg7aGVpZ2h0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpfS5zd2lwZXItY2VudGVyZWQ+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246Y2VudGVyIGNlbnRlcn0iXX0= */";

/***/ }),

/***/ 9225:
/*!**************************************************************!*\
  !*** ./src/app/pages/products/products.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content #productsPageContent [scrollEvents]=\"true\" (ionScroll)=\"scrollPosition($event)\">\n  \n  <div id=\"featured-return-position\"></div>\n  <ion-grid>\n\n    <!-- Skeleton UI Mobile -->\n    <div *ngIf=\"this.skeletonData\">\n      <div class=\"ion-padding custom-skeleton\">\n        <ion-list>\n          <ion-item lines=\"none\">\n            <ion-label>\n              <h3>\n                <ion-skeleton-text class=\"is-square\" animated></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text class=\"is-text\" animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text class=\"is-text\" animated style=\"width: 70%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text class=\"is-text\" animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n    <!-- Products / Mobile -->\n    <ng-container>\n      <ion-accordion-group \n        class=\"ion-hide-lg-up\"\n        value=\"all\" \n        id=\"accordian-group\"\n        (ionChange)=\"accordianChange($event)\">\n\n        <!-- Featured Products -->\n        <ion-accordion value=\"featured\" id=\"featured-products-accordian\">\n          \n          <ion-item id=\"featured-products-item\" lines=\"none\" slot=\"header\">\n            <ion-label><span class=\"acc-title\">Featured</span> | {{this.featuredProductsLength}}</ion-label>\n            <ion-icon name=\"pricetag-outline\" slot=\"start\"></ion-icon>\n          </ion-item>\n\n          <ion-list slot=\"content\">\n\n            <!-- <div id=\"feature-swiper-overlay\"></div> -->\n\n            <!-- Featured Products -->\n            <swiper\n              id=\"featured-swiper\"\n              [config]=\"featuredSwiperConfig\" \n              (swiper)=\"onSwiper($event)\">\n                <ng-template swiperSlide *ngFor=\"let featuredProduct of featuredProducts\">\n                    <ion-row \n                    class=\"featured-product product-wrapper ion-justify-content-center\">\n                      <ion-col class=\"product-photo\" size=\"6\"\n                      (click)=\"goToProductPage(featuredProduct)\">\n\n                      </ion-col>\n                      <ion-col size=\"6\"\n                      (click)=\"goToProductPage(featuredProduct._id)\">\n                        <div (click)=\"goToProductPage()\">\n                          <p class=\"product-price\">${{featuredProduct.price}}</p>\n                          \n                          <h6 class=\"product-title\">{{featuredProduct.title}}</h6>\n                          <app-ratings-stars [rating]=\"featuredProduct.rating\"></app-ratings-stars>\n                          <p class=\"product-duration\">Duration: {{featuredProduct.duration}} Mins</p>\n                          <p class=\"product-category\"># {{featuredProduct.category}}</p>\n                          <h5 class=\"product-reviews-length\">Reviews {{featuredProduct.reviews}}</h5>\n                        </div>                 \n                        \n                      </ion-col>\n                      <ion-toolbar *ngIf=\"this.authState\" style=\"z-index: 9999;\">\n                      <ion-buttons slot=\"start\">\n                        <ion-button  id=\"cart-button\" (click)=\"addToCart(featuredProduct._id, featuredProduct.title, cartButton)\">\n                          <ion-icon #cartButton slot=\"start\" name=\"cart-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-buttons>\n                      <ion-buttons slot=\"end\">\n\n                        <a rel=\"nofollow\" href=\"https://www.hypnosisdownloads.com/cgi-bin/sgx2/shop.cgi?add_to_cart_button=1&amp;item-CSCONVREF=1&amp;alt_page=shopping.html#5896!stc\">Add Conversational Reframing Online Course to Shopping Basket and View Basket</a>                        <app-favorite-icon\n                        [id]=\"featuredProduct._id\"\n                        [email]=\"this.userEmail\"></app-favorite-icon>\n                      </ion-buttons>\n                      </ion-toolbar>  \n                    </ion-row>\n                </ng-template>\n            </swiper>\n          </ion-list>\n        </ion-accordion>\n        \n        <!-- Favorite Products -->\n        <ion-accordion *ngIf=\"this.authState\" value=\"favorites\" id=\"favorite-products-accordian\">\n          \n          <ion-item id=\"favorite-products-item\" lines=\"none\" slot=\"header\">\n            <ion-label><span class=\"acc-title\">Favorites</span> | {{this.favoriteProductsLength}}</ion-label>\n            <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n          </ion-item>\n      \n          <ion-list slot=\"content\">\n            <!-- If User has no Favorites -->\n            <!-- <ion-item *ngIf=\"this.favoriteProducts.length == 0\" lines=\"none\">\n              <p>You have no Favorites! Please hit the [heart] icon on a product to favorite it.</p>\n            </ion-item> -->\n            <!-- Products -->\n            <!-- Using same data from Featured data for now -->\n            <div>\n                <ion-row\n                *ngFor=\"let product of favoriteProducts\"\n                style=\"width: 100%;\"\n                class=\"product-wrapper ion-justify-content-center\">\n                <ion-col (click)=\"this.goToProductPage()\" class=\"product-photo\" size=\"6\">\n          \n                </ion-col>\n                <ion-col size=\"6\">\n                  <div (click)=\"this.goToProductPage()\">\n                    <p class=\"product-price\">${{product.price}}</p>\n                    <h6 class=\"product-title\">{{product.title}}</h6>\n                    <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                    <p class=\"-product-duration\">Duration: {{product.duration}} Mins</p>\n                    <p class=\"product-category\"># {{product.category}}</p>\n                    <!-- user's favoriteProducts collection on has IDs -->\n                    <p class=\"product-reviews-length\">Reviews {{product.reviews}}</p>\n                  </div>\n                </ion-col>\n \n                <!-- Cart + Favorites Toolbar -->\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button #cartButton id=\"cart-button\" (click)=\"addToCart(product._id, product.title, cartButton)()\">\n                      <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"\n                    ></app-favorite-icon>\n                  </ion-buttons>\n                </ion-toolbar> \n\n                </ion-row>\n            </div>\n          </ion-list>\n\n        </ion-accordion>\n\n        <!-- All Products -->\n        <ion-accordion value=\"all\" id=\"all-products-accordian\">\n          \n          <ion-item id=\"all-products-item\" slot=\"header\" lines=\"none\">\n            <ion-label><span class=\"acc-title\">All Products</span> | {{this.searchLoadedProductsLength}}</ion-label>\n            <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\n          </ion-item>\n      \n          <!-- Results Bar -->\n          <ion-list slot=\"content\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n                <h3>Categories:</h3>\n              </ion-col>\n\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"10\" size-lg=\"8\">\n\n                <!-- Categories Swiper -->\n                <swiper\n                  id=\"category-swiper\"\n                  [config]=\"categorySwiperConfig\" \n                  (swiper)=\"onSwiper($event)\">\n\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('all', $event)\"\n                        [ngClass]=\"this.activeCategory == 'all' ? 'active-category category' : 'category'\">\n                        All\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('relaxation', $event)\" \n                        [ngClass]=\"this.activeCategory == 'relaxation' ? 'active-category category' : 'category'\">\n                        Relaxation\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('sleep', $event)\" \n                        [ngClass]=\"this.activeCategory == 'sleep' ? 'active-category category' : 'category'\">\n                        Sleep\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('relationships', $event)\"  \n                        [ngClass]=\"this.activeCategory == 'relationships' ? 'active-category category' : 'category'\">\n                        Relationships\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('self-improvement', $event)\"\n                        [ngClass]=\"this.activeCategory == 'self-improvement' ? 'active-category category' : 'category'\">\n                        Self-Improvement\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('business', $event)\" \n                        [ngClass]=\"this.activeCategory == 'business' ? 'active-category category' : 'category'\">\n                        Business\n                      </ion-button>\n                    </ng-template>\n                </swiper>\n\n              </ion-col>\n\n              <h5 id=\"results-header\">Results: {{filterOption}} ({{this.searchLoadedProductsLength}})</h5>\n            </ion-row> \n\n            <!-- If No Search Results -->\n            <ion-row *ngIf=\"searchLoadedProductsLength == 0\" class=\"ion-justify-content-center\">\n              <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n                <p id=\"no-search-results\">\n                  <ion-icon name=\"search-outline\"></ion-icon>\n                  No Search Results. Please try again</p>\n              </ion-col>\n            </ion-row>\n\n            <div id=\"fab-visible-position\"></div>\n\n            <!-- Products -->\n            <div >\n                <ion-row\n                *ngFor=\"let product of this.searchLoadedProducts\"\n                style=\"width: 100%;\"\n                class=\"product-wrapper ion-justify-content-center\">\n                <ion-col (click)=\"this.goToProductPage()\" class=\"product-photo\" size=\"6\">\n          \n                </ion-col>\n                <ion-col size=\"6\">\n                  <div (click)=\"this.goToProductPage()\">\n                    <p class=\"product-price\">${{product.price}}</p>\n                    <h6 class=\"product-title\">{{product.title}}</h6>\n                    <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                    <p class=\"duration\">Duration: {{product.duration}} Mins</p>\n                    <p class=\"product-category\"># {{product.category}}</p>\n                    <p class=\"product-reviews-length\">Reviews {{product.reviews.length}}</p>\n                  </div>\n                  <!-- <div class=\"product-message-green\"></div>\n                  <div class=\"product-message-red\"></div> -->\n                                \n                  \n                </ion-col>\n\n                <!-- Cart + Favorites Toolbar -->\n                <ion-toolbar *ngIf=\"this.authState\">\n                  <ion-buttons slot=\"start\">\n                    <ion-button #cartButton id=\"cart-button\" (click)=\"addToCart(product._id, product.title, cartButton)()\">\n                      <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                  </ion-buttons>\n                </ion-toolbar> \n\n                </ion-row>\n            </div>\n\n          </ion-list>\n\n        </ion-accordion>\n\n      </ion-accordion-group>\n    </ng-container>\n\n    <ion-row *ngIf=\"!this.authState\" >\n      <ion-col size=\"12\">\n        <div class=\"spacer-1x\"></div>\n        <p class=\"static-alert-yellow\">Please login to see you Favorites.</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- Products / Lg -->\n    <ion-row class=\"spacer-5x ion-hide-lg-down ion-justify-content-center\">\n      \n      <!-- ProductsLg Toolbar -->\n      <ion-col size=\"6.7\">\n        <ion-toolbar id=\"product-lg-toolbar\">\n\n          <!-- Category Buttons -->\n          <ion-buttons slot=\"start\">\n            <ion-button [ngClass]=\"this.categoryLg == 'featured' ? 'active-category-lg' : ''\" (click)=\"featuredLg()\">\n              Featured\n            </ion-button>\n            <ion-button [ngClass]=\"this.categoryLg == 'favorites' ? 'active-category-lg' : ''\" (click)=\"favoritesLg()\">\n              Favorites\n            </ion-button>\n            <ion-button [ngClass]=\"this.categoryLg == 'all' ? 'active-category-lg' : ''\" (click)=\"allLg()\">\n              All\n            </ion-button>\n          </ion-buttons>\n\n          <!-- All Products Search Bar -->\n          <ion-searchbar \n            *ngIf=\"this.categoryLg == 'all'\" \n            placeholder=\"Search All Products\" \n            inputmode=\"decimal\" \n            type=\"decimal\" \n            (ionChange)=\"onSearchChange($event, 'lg')\" \n            [debounce]=\"250\" \n            showCancelButton=\"always\">\n          </ion-searchbar>\n\n\n          <!-- Filter -->\n          <ion-buttons *ngIf=\"this.categoryLg == 'all'\" id=\"filter-button\" slot=\"end\">\n            <ion-button (click)=\"openFilterActionSheet()\">\n              <ion-icon name=\"filter-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n\n      <!-- Skeleton UI Lg -->\n      <ion-col size=\"6.7\" *ngIf=\"this.skeletonDataLg\">\n        <div class=\"ion-padding custom-skeleton\">\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label>\n                <h3>\n                  <ion-skeleton-text class=\"is-square\" animated></ion-skeleton-text>\n                </h3>\n                <p>\n                  <ion-skeleton-text class=\"is-text\" animated style=\"width: 80%\"></ion-skeleton-text>\n                </p>\n                <p>\n                  <ion-skeleton-text class=\"is-text\" animated style=\"width: 70%\"></ion-skeleton-text>\n                </p>\n                <p>\n                  <ion-skeleton-text class=\"is-text\" animated style=\"width: 60%\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n\n      <!-- Products Message -->\n      <ion-col *ngIf=\"this.categoryLg == 'featured' && !this.skeletonDataLg\" size=\"6.7\">\n        <p id=\"featured-page-message-lg\">This is a message.</p>\n      </ion-col>\n\n      <!-- FeaturedLg -->\n      <ion-col \n        *ngIf=\"this.categoryLg == 'featured'\" \n        size=\"6.7\">\n\n        <ion-row>\n          <ion-col \n            *ngFor=\"let featuredProduct of featuredProducts\"\n            (click)=\"goToProductPage(featuredProduct._id)\"\n            class=\"product-lg\" \n            size-lg=\"3.8\" size-xl=\"3.8\">\n            <div class=\"product-lg-image\">\n\n            </div>\n            <div class=\"spacer-2x\"></div>\n            <div>\n              <p class=\"product-price\">${{featuredProduct.price}}</p>\n              <h6 class=\"product-title\">{{featuredProduct.title}}</h6>\n              <p class=\"product-duration\">Duration: {{featuredProduct.duration}} Mins</p>\n              <p class=\"product-category\"># {{featuredProduct.category}}</p>\n              <p class=\"product-reviews-length\">Reviews {{featuredProduct.reviews.length}}</p>\n              \n              <!-- Ratings Stars -->\n              <ion-toolbar class=\"product-lg-lower-toolbar\">\n                <app-ratings-stars [rating]=\"featuredProduct.rating\"></app-ratings-stars>\n                \n                <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    *ngIf=\"this.authState\"\n                    [id]=\"featuredProduct._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- FavoritesLg -->\n      <ion-col *ngIf=\"this.categoryLg == 'favorites' && this.favoriteProducts.length == 0 && !this.skeletonDataLg\" size=\"6.7\">\n        <h1>You have no favorites! To add a favorite product, tap the Heart icon.</h1>\n      </ion-col>\n      \n      <!-- FavoritesLg -->\n      <ion-col\n        *ngIf=\"this.categoryLg == 'favorites' && !this.skeletonDataLg\" \n        size=\"6.7\">\n        <ion-row>\n          <ion-col *ngFor=\"let product of favoriteProducts\" \n            class=\"product-lg\" \n            size=\"3.8\">\n            <div class=\"product-lg-image\">\n\n            </div>\n            <div class=\"spacer-2x\"></div>\n            <div>\n              <p class=\"product-price\">${{product.price}}</p>\n              <h6 class=\"product-title\">{{product.title}}</h6>\n              <p class=\"product-duration\">Duration: {{product.duration}} Mins</p>\n              <p class=\"product-category\"># {{product.category}}</p>\n              <p class=\"product-reviews-length\">Reviews {{product.reviews.length}}</p>\n              \n              <!-- Ratings Stars -->\n              <ion-toolbar class=\"product-lg-lower-toolbar\">\n                <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                \n                <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    *ngIf=\"this.authState\"\n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          \n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- AllProductsLg -->\n      <ion-col *ngIf=\"this.categoryLg == 'all' && !this.skeletonDataLg\" \n        size=\"6.7\">\n\n        <ion-row>\n          <ion-col *ngFor=\"let product of searchLoadedProducts\" \n            class=\"product-lg\" \n            size=\"3.8\">\n            <div class=\"product-lg-image\" alt=\"Hypnosis MP3 Download\">\n\n            </div>\n            <div class=\"spacer-2x\"></div>\n            <div>\n              <p class=\"product-price\">${{product.price}}</p>\n              <h6 class=\"product-title\">{{product.title}}</h6>\n              <p class=\"product-duration\">Duration: {{product.duration}} Mins</p>\n              <p class=\"product-category\"># {{product.category}}</p>\n              <p class=\"product-reviews-length\">Reviews {{product.reviews.length}}</p>\n\n              <!-- Ratings Stars -->\n              <ion-toolbar class=\"product-lg-lower-toolbar\">\n                <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                \n                <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    *ngIf=\"this.authState\"\n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          \n          </ion-col>\n        </ion-row>\n        \n      </ion-col>\n    \n      <!-- No Search Results Message -->\n      <ion-col *ngIf=\"this.categoryLg == 'all' && this.searchLoadedProducts.length == 0 && !this.skeletonDataLg\" size=\"6.7\">\n        <h1>No results from search was found.</h1>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-fab\n    class=\"ion-hide-lg-up\"\n    (click)=\"scrollToTop()\"\n    id=\"fab-button\" \n    vertical=\"bottom\" \n    horizontal=\"end\" \n    slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chevron-up-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_products_products_page_ts.js.map