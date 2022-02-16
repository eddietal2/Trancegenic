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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products/products.service */ 6423);
/* harmony import */ var src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/onboarding/login.service */ 3145);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 9985);











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
    addToCart(id) {
        this.addToCartSub = this.productsService.addToCart(id, this.userEmail)
            .subscribe(data => {
            console.log(data);
            // this.
            // setTimeout(() => {
            //   return this.addToCartSub.unsubscribe();
            // }, 3000);
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService },
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService },
    { type: src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
ProductsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['productsPageContent',] }],
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ['unloaded',] }]
};
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-products',
        template: _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
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

module.exports = "@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n/**\n * Swiper 7.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 24, 2021\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n#featured-products-item,\n#favorite-products-item,\n#all-products-item {\n  background: #ededed;\n}\n#featured-products-lg,\n#favorite-products-lg,\n#all-products-lg {\n  margin: 5em;\n}\n#featured-swiper {\n  height: 30vh;\n}\n#featured-swiper .product-wrapper {\n  height: auto;\n  border-radius: 5px;\n  background: #f2f2f2;\n  margin-bottom: 10px;\n  padding: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n}\n#featured-swiper .product-wrapper .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n#featured-swiper .product-wrapper .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#featured-swiper .product-wrapper .product-reviews-length {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n#featured-swiper .product-wrapper .product-title {\n  height: 40px;\n  margin-bottom: 1em;\n}\n#featured-swiper .product-wrapper .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n#featured-swiper .product-wrapper .product-photo {\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 200px;\n}\n#featured-swiper .product-wrapper ion-toolbar ion-buttons .favorite-this-product-button {\n  --background: #ffbbbb;\n  --border-radius: 50px;\n  text-align: center;\n  border-radius: 57px;\n  height: 40px;\n  padding-left: 6px;\n}\n#featured-swiper .product-wrapper ion-toolbar ion-buttons #cart-button {\n  height: 50px;\n  width: 50px;\n  --background: #999;\n  --border-radius: 50px;\n}\n#featured-swiper .product-wrapper ion-toolbar ion-buttons #cart-button ion-icon {\n  color: white;\n}\n#featured-swiper .product-wrapper ion-icon {\n  font-size: 2em;\n}\n#featured-swiper .product-wrapper .product-message-green {\n  border-left: 4px solid red;\n}\n#featured-swiper .product-wrapper .product-message-red {\n  border-left: 4px solid green;\n}\n#featured-products-accordian {\n  margin-top: 57px;\n}\n#featured-page-message-lg {\n  background: #fea;\n  border-left: 7px solid #ffd427;\n  padding: 1em 2em;\n  border-radius: 5px;\n  opacity: 0;\n  animation: featured-message-lg-slide 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;\n}\n@keyframes featured-message-lg-slide {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#results-header {\n  padding: 0.4em;\n  border-radius: 5px;\n  background: #ececec;\n  margin: 1em auto;\n}\nion-icon {\n  color: #333;\n  margin-right: 0.5em;\n}\n.searchbar-input {\n  color: #333 !important;\n}\n.filter-action-sheet {\n  --color: #333;\n  --button-color: #0270ff;\n  --background: #f1f1f1;\n}\n.filter-action-sheet .action-sheet-title {\n  background: #e4e4e4;\n  font-weight: 600;\n}\n.filter-action-sheet .filter-action-sheet-cancel-button {\n  color: #999;\n}\n.featured-product {\n  width: 95%;\n  float: left;\n  justify-content: left;\n}\n.featured-product #featured-product-lg-lower-toolbar {\n  height: 100px;\n}\n#no-search-results {\n  text-align: center;\n  background: #999;\n  padding: 1em;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 1.1em;\n  margin: 5em auto;\n}\n#no-search-results ion-icon {\n  color: white;\n}\n@keyframes products-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#product-lg-toolbar {\n  border-bottom: 1px solid #e3e3e3;\n}\n#product-lg-toolbar ion-buttons ion-button {\n  --background: #e6f3ff;\n  --color: #0055a5;\n  width: 83px;\n  font-size: 0.7em;\n}\n#product-lg-toolbar ion-buttons .active-category-lg {\n  --background: #0055a5;\n  --color: #e6f3ff;\n  width: 83px;\n  font-size: 0.7em;\n}\n.product-lg {\n  height: 500px;\n  width: auto;\n  background: #f2f2f2;\n  transition: 0.5s;\n  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);\n  box-shadow: 1px 1px 5px #d4d4d4;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 1em;\n  opacity: 0;\n}\n.product-lg .product-lg-image {\n  height: 50%;\n  width: 100%;\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.product-lg .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n.product-lg .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n.product-lg .product-reviews-length {\n  font-size: 0.6em;\n}\n.product-lg .product-title {\n  height: 40px;\n}\n.product-lg .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n.product-lg .product-lg-lower-toolbar {\n  --background: none;\n  position: relative;\n  top: 40px;\n}\n.product-lg:hover {\n  background: #dfdede;\n}\n.product-lg:nth-child(1) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s forwards;\n}\n.product-lg:nth-child(2) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;\n}\n.product-lg:nth-child(3) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s forwards;\n}\n.product-lg:nth-child(4) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s forwards;\n}\n.product-lg:nth-child(5) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s forwards;\n}\n.product-lg:nth-child(6) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s forwards;\n}\n.product-lg:nth-child(7) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s forwards;\n}\n.product-lg:nth-child(8) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s forwards;\n}\n.product-lg:nth-child(9) {\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1s forwards;\n}\n@keyframes products-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#categories {\n  background: #f3f3f3;\n  position: relative;\n  top: -14px;\n}\n#logo {\n  margin: auto 1em;\n}\n#fab-button {\n  opacity: 0;\n}\n#category-swiper {\n  margin-left: 1em;\n  height: 35px;\n  padding-bottom: 1em;\n}\n#category-swiper .active-category {\n  --border-color: orangered !important;\n  --border-style: solid !important;\n  --border-width: 2px !important;\n  color: #222 !important;\n}\n#category-swiper .category {\n  font-size: 0.53em;\n  width: auto;\n  text-align: center;\n  position: relative;\n  top: 2px;\n  width: 122px !important;\n  --background: none;\n  --box-shadow: none;\n  border-radius: 20px;\n  height: 25px;\n  color: #222;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#feature-swiper-overlay {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(90deg, #00000033, transparent);\n  z-index: 9999;\n  position: absolute;\n  top: 0px;\n  pointer-events: none;\n}\n#featured-swiper {\n  height: 315px;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLnNjc3MiLCJwcm9kdWN0cy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0c0VBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0FDSEY7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDRkY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVBOztFQUVFLGlDQUFBO0FDQ0Y7QURDQTtFQUNFLG1CQUFBO0FDRUY7QURERTtFQUNFLG1CQUFBO0FDR0o7QURBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBREZBLGdCQUFBO0FBRUU7O0VBRUUsWUFBQTtBQ0lKO0FEREU7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FDR0o7QURDQSxlQUFBO0FBRUU7RUFFRSxtQkFBQTtBQ0FKO0FERUU7Ozs7Ozs7O0VBUUUsNEJBQUE7QUNBSjtBREVFOzs7OztFQUtFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUU7RUFDRSwrQkFBQTtBQ0FKO0FERUU7RUFDRSxnRkFBQTtBQ0FKO0FERUU7RUFDRSxpRkFBQTtBQ0FKO0FERUU7RUFDRSwrRUFBQTtBQ0FKO0FERUU7RUFDRSxrRkFBQTtBQ0FK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alJBO0VBQ0ksaUZBQUE7QUFvUko7QUFsUkE7RUFDSSxpRkFBQTtBQXFSSjtBQW5SQTtFQUNJLGlGQUFBO0FBc1JKO0FBcFJBO0VBQ0ksaUZBQUE7QUF1Uko7QUFyUkE7RUFDSSwrRUFBQTtBQXdSSjtBQXJSQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBd1JOO0VBdFJFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBd1JOO0FBQ0Y7QUFwUkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXNSSjtBQW5SQTtFQUNJLGdCQUFBO0FBc1JKO0FBcFJBO0VBQ0ksVUFBQTtBQXVSSjtBQW5SQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBc1JKO0FBcFJJO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFzUlI7QUFuUkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXFSUjtBQS9RQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMERBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUFpUko7QUEvUUE7RUFDSSxhQUFBO0VBRUEsZ0JBQUE7QUFpUkoiLCJmaWxlIjoicHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3dpcGVyLXZhcnMuc2Nzcyc7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpXG4gICAgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOnJvb3Qge1xuICAtLXN3aXBlci10aGVtZS1jb2xvcjogI3skdGhlbWVDb2xvcn07XG59XG4uc3dpcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cbiAgei1pbmRleDogMTtcbn1cbi5zd2lwZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLnN3aXBlci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG4uc3dpcGVyLXBvaW50ZXItZXZlbnRzIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgJi5zd2lwZXItdmVydGljYWwge1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gIH1cbn1cbi5zd2lwZXItc2xpZGUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi8qIEF1dG8gSGVpZ2h0ICovXG4uc3dpcGVyLWF1dG9oZWlnaHQge1xuICAmLFxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuc3dpcGVyLXdyYXBwZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xuICB9XG59XG5cbi8qIDNEIEVmZmVjdHMgKi9cbi5zd2lwZXItM2Qge1xuICAmLFxuICAmLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG4gIH1cbiAgLnN3aXBlci13cmFwcGVyLFxuICAuc3dpcGVyLXNsaWRlLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuICAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3cge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG59XG5cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xuICB9XG59XG4uc3dpcGVyLWhvcml6b250YWwuc3dpcGVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICB9XG59XG4uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgfVxufVxuLnN3aXBlci1jZW50ZXJlZCB7XG4gID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG9yZGVyOiA5OTk5O1xuICB9XG4gICYuc3dpcGVyLWhvcml6b250YWwge1xuICAgID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSk7XG4gICAgfVxuICAgID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpO1xuICAgIH1cbiAgfVxuICAmLnN3aXBlci12ZXJ0aWNhbCB7XG4gICAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpO1xuICAgIH1cbiAgICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcbiAgICB9XG4gIH1cblxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXIgY2VudGVyO1xuICB9XG59XG5cblxuXG4iLCJAaW1wb3J0ICdzd2lwZXIvc2Nzcyc7XG5AaW1wb3J0IFwifnN3aXBlci9jc3NcIjtcblxuI2ZlYXR1cmVkLXByb2R1Y3RzLWl0ZW0sXG4jZmF2b3JpdGUtcHJvZHVjdHMtaXRlbSxcbiNhbGwtcHJvZHVjdHMtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cy1sZyxcbiNmYXZvcml0ZS1wcm9kdWN0cy1sZyxcbiNhbGwtcHJvZHVjdHMtbGcge1xuICAgIC8vIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gICAgLy8gaGVpZ2h0OiA4MDBweDtcbiAgICBtYXJnaW46IDVlbTtcbn1cblxuI2ZlYXR1cmVkLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuXG5cbi5wcm9kdWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYW5pbWF0aW9uOiBwcm9kdWN0cy1zbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSkgZm9yd2FyZHM7XG5cbiAgICAucHJvZHVjdC1kdXJhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhdGVnb3J5IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgY29sb3I6ICM1YTVhNWE7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcmV2aWV3cy1sZW5ndGgge1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LXJhdGluZyB7XG5cbiAgICB9XG5cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwNTVhNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICAgIC5wcm9kdWN0LXBob3RvIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcGxhY2Vob2xkZXJzL3BsYWNlaG9sZGVyLWxvZ28uc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gYm90dG9tOiAwO1xuXG4gICAgICAgIGlvbi1idXR0b25zIHtcblxuICAgICAgICAgICAgLmZhdm9yaXRlLXRoaXMtcHJvZHVjdC1idXR0b24ge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmYmJiYjtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjY2FydC1idXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW1lc3NhZ2UtZ3JlZW4ge1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZDtcbiAgICB9XG4gICAgLnByb2R1Y3QtbWVzc2FnZS1yZWQge1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGdyZWVuO1xuICAgIH1cbn1cbn1cblxuI2ZlYXR1cmVkLXByb2R1Y3RzLWFjY29yZGlhbiB7XG4gICAgbWFyZ2luLXRvcDogNTdweDtcbn1cblxuI2ZlYXR1cmVkLXBhZ2UtbWVzc2FnZS1sZyB7XG4gICAgYmFja2dyb3VuZDogI2ZlYTtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmZmQ0Mjc7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGZlYXR1cmVkLW1lc3NhZ2UtbGctc2xpZGUgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDFzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZlYXR1cmVkLW1lc3NhZ2UtbGctc2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXG4gICAgfVxufVxuXG4jYWxsLXByb2R1Y3RzLWl0ZW0ge1xuICAgIC8vIGJhY2tncm91bmQ6ICNmZmRjY2E7XG59XG5cbiNyZXN1bHRzLWhlYWRlciB7XG4gICAgcGFkZGluZzogMC40ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVyLWFjdGlvbi1zaGVldCB7XG4gICAgLS1jb2xvcjogIzMzMztcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzAyNzBmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG5cbiAgICAuYWN0aW9uLXNoZWV0LXRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWFjdGlvbi1zaGVldC1jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxufVxuXG4uZmVhdHVyZWQtcHJvZHVjdCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG5cbiAgICAjZmVhdHVyZWQtcHJvZHVjdC1sZy1sb3dlci10b29sYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cbiNuby1zZWFyY2gtcmVzdWx0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIG1hcmdpbjogNWVtIGF1dG87XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBwcm9kdWN0cy1zbGlkZS11cCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblxuICAgIH1cbn1cblxuI3Byb2R1Y3QtbGctdG9vbGJhciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgXG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2U2ZjNmZjtcbiAgICAgICAgICAgIC0tY29sb3I6ICMwMDU1YTU7XG4gICAgICAgICAgICB3aWR0aDogODNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZS1jYXRlZ29yeS1sZyB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwMDU1YTU7XG4gICAgICAgICAgICAtLWNvbG9yOiAjZTZmM2ZmO1xuICAgICAgICAgICAgd2lkdGg6IDgzcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICB9XG4gICAgfVxufVxuLnByb2R1Y3QtbGcge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjZDRkNGQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgLnByb2R1Y3QtbGctaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BsYWNlaG9sZGVycy9wbGFjZWhvbGRlci1sb2dvLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZHVyYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LXJldmlld3MtbGVuZ3RoIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1yYXRpbmcge1xuXG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDU1YTU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWxnLWxvd2VyLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA0MHB4O1xuICAgIH1cbn1cblxuLnByb2R1Y3QtbGc6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkZmRlZGU7XG59XG5cbi8vIEZvciBkZWxheWVkIGNhc2NhZGluZyBmYWRlIGluIGVmZmVjdFxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb246IHByb2R1Y3RzLXNsaWRlLXVwIDFzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKSAwLjJzIGZvcndhcmRzO1xufVxuLnByb2R1Y3QtbGc6bnRoLWNoaWxkKDIpIHtcbmFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuM3MgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuNHMgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuNXMgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuNnMgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuN3MgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuOHMgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDAuOXMgZm9yd2FyZHM7XG59XG4ucHJvZHVjdC1sZzpudGgtY2hpbGQoOSkge1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIDFzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHByb2R1Y3RzLXNsaWRlLXVwIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXG4gICAgfVxufVxuXG4jY2F0ZWdvcmllcyB7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTRweDtcblxufVxuI2xvZ28ge1xuICAgIG1hcmdpbjogYXV0byAxZW07XG59XG4jZmFiLWJ1dHRvbiB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLy8gU3dpcGVyXG4jY2F0ZWdvcnktc3dpcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuXG4gICAgLmFjdGl2ZS1jYXRlZ29yeSB7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2F0ZWdvcnkge1xuICAgICAgICBmb250LXNpemU6IDAuNTNlbTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgd2lkdGg6IDEyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbn1cblxuXG4jZmVhdHVyZS1zd2lwZXItb3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgOTBkZWcsICMwMDAwMDAzMywgdHJhbnNwYXJlbnQpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuI2ZlYXR1cmVkLXN3aXBlciB7XG4gICAgaGVpZ2h0OiAzMTVweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbiIsIi8qKlxuICogU3dpcGVyIDcuMy4xXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIxIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDI0LCAyMDIxXG4gKi9cblxuQGZvbnQtZmFjZXtmb250LWZhbWlseTpzd2lwZXItaWNvbnM7c3JjOnVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9OnJvb3R7LS1zd2lwZXItdGhlbWUtY29sb3I6IzAwN2FmZn0uc3dpcGVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nOjA7ei1pbmRleDoxfS5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uc3dpcGVyLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7ZGlzcGxheTpmbGV4O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3aXBlci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsLnN3aXBlci13cmFwcGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsMCwwKX0uc3dpcGVyLXBvaW50ZXItZXZlbnRze3RvdWNoLWFjdGlvbjpwYW4teX0uc3dpcGVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci12ZXJ0aWNhbHt0b3VjaC1hY3Rpb246cGFuLXh9LnN3aXBlci1zbGlkZXtmbGV4LXNocmluazowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm19LnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmt7dmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1hdXRvaGVpZ2h0LC5zd2lwZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXJ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHR9LnN3aXBlci0zZCwuc3dpcGVyLTNkLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXJ7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLTNkIC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdywuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvd3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7b3ZlcmZsb3c6YXV0bztzY3JvbGxiYXItd2lkdGg6bm9uZTstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQgc3RhcnR9LnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeX0uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7c2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeX0uc3dpcGVyLWNlbnRlcmVkPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle2NvbnRlbnQ6Jyc7ZmxleC1zaHJpbms6MDtvcmRlcjo5OTk5fS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjFweDt3aWR0aDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHttYXJnaW4tYmxvY2stc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle3dpZHRoOjEwMCU7bWluLXdpZHRoOjFweDtoZWlnaHQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpjZW50ZXIgY2VudGVyfSJdfQ== */";

/***/ }),

/***/ 9225:
/*!**************************************************************!*\
  !*** ./src/app/pages/products/products.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content #productsPageContent [scrollEvents]=\"true\" (ionScroll)=\"scrollPosition($event)\">\n  \n  <div id=\"featured-return-position\"></div>\n  <ion-grid>\n\n    <!-- Skeleton UI Mobile -->\n    <div *ngIf=\"this.skeletonData\">\n      <div class=\"ion-padding custom-skeleton\">\n        <ion-list>\n          <ion-item lines=\"none\">\n            <ion-label>\n              <h3>\n                <ion-skeleton-text class=\"is-square\" animated></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text class=\"is-text\" animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text class=\"is-text\" animated style=\"width: 70%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text class=\"is-text\" animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n    <!-- Products / Mobile -->\n    <ng-container>\n      <ion-accordion-group \n        class=\"ion-hide-lg-up\"\n        value=\"all\" \n        id=\"accordian-group\"\n        (ionChange)=\"accordianChange($event)\">\n\n        <!-- Featured Products -->\n        <ion-accordion value=\"featured\" id=\"featured-products-accordian\">\n          \n          <ion-item id=\"featured-products-item\" lines=\"none\" slot=\"header\">\n            <ion-label>Featured | {{this.featuredProductsLength}}</ion-label>\n            <ion-icon name=\"pricetag-outline\" slot=\"start\"></ion-icon>\n          </ion-item>\n\n          <ion-list slot=\"content\">\n\n            <div id=\"feature-swiper-overlay\"></div>\n\n            <!-- Featured Products -->\n            <swiper\n              id=\"featured-swiper\"\n              [config]=\"featuredSwiperConfig\" \n              (swiper)=\"onSwiper($event)\">\n                <ng-template swiperSlide *ngFor=\"let featuredProduct of featuredProducts\">\n                    <ion-row \n                    class=\"featured-product product-wrapper ion-justify-content-center\">\n                      <ion-col class=\"product-photo\" size=\"6\"\n                      (click)=\"goToProductPage(featuredProduct)\">\n\n                      </ion-col>\n                      <ion-col size=\"6\"\n                      (click)=\"goToProductPage(featuredProduct._id)\">\n                        <div (click)=\"goToProductPage()\">\n                          <p class=\"product-price\">${{featuredProduct.price}}</p>\n                          \n                          <h6 class=\"product-title\">{{featuredProduct.title}}</h6>\n                          <app-ratings-stars [rating]=\"featuredProduct.rating\"></app-ratings-stars>\n                          <p class=\"product-duration\">Duration: {{featuredProduct.duration}} Mins</p>\n                          <p class=\"product-category\"># {{featuredProduct.category}}</p>\n                          <h5 class=\"product-reviews-length\">Reviews {{featuredProduct.reviews}}</h5>\n                        </div>                 \n                        \n                      </ion-col>\n                      <ion-toolbar *ngIf=\"this.authState\" style=\"z-index: 9999;\">\n                      <ion-buttons slot=\"start\">\n                        <ion-button id=\"cart-button\" (click)=\"addToCart(featuredProduct._id)\">\n                          <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-buttons>\n                      <ion-buttons slot=\"end\">\n                        <app-favorite-icon\n                        [id]=\"featuredProduct._id\"\n                        [email]=\"this.userEmail\"></app-favorite-icon>\n                      </ion-buttons>\n                      </ion-toolbar>  \n                    </ion-row>\n                </ng-template>\n            </swiper>\n          </ion-list>\n        </ion-accordion>\n        \n        <!-- Favorite Products -->\n        <ion-accordion *ngIf=\"this.authState\" value=\"favorites\" id=\"favorite-products-accordian\">\n          \n          <ion-item id=\"favorite-products-item\" lines=\"none\" slot=\"header\">\n            <ion-label>Favorites | {{this.favoriteProductsLength}}</ion-label>\n            <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n          </ion-item>\n      \n          <ion-list slot=\"content\">\n            <!-- If User has no Favorites -->\n            <!-- <ion-item *ngIf=\"this.favoriteProducts.length == 0\" lines=\"none\">\n              <p>You have no Favorites! Please hit the [heart] icon on a product to favorite it.</p>\n            </ion-item> -->\n            <!-- Products -->\n            <!-- Using same data from Featured data for now -->\n            <div>\n                <ion-row\n                *ngFor=\"let product of favoriteProducts\"\n                style=\"width: 100%;\"\n                class=\"product-wrapper ion-justify-content-center\">\n                <ion-col (click)=\"this.goToProductPage()\" class=\"product-photo\" size=\"6\">\n          \n                </ion-col>\n                <ion-col size=\"6\">\n                  <div (click)=\"this.goToProductPage()\">\n                    <p class=\"product-price\">${{product.price}}</p>\n                    <h6 class=\"product-title\">{{product.title}}</h6>\n                    <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                    <p class=\"-product-duration\">Duration: {{product.duration}} Mins</p>\n                    <p class=\"product-category\"># {{product.category}}</p>\n                    <!-- user's favoriteProducts collection on has IDs -->\n                    <p class=\"product-reviews-length\">Reviews {{product.reviews}}</p>\n                  </div>\n                </ion-col>\n \n                <!-- Cart + Favorites Toolbar -->\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button id=\"cart-button\" (click)=\"onClick()\">\n                      <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <!-- <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"\n                    ></app-favorite-icon>\n                  </ion-buttons> -->\n                </ion-toolbar> \n\n                </ion-row>\n            </div>\n          </ion-list>\n        </ion-accordion>\n\n        <!-- All Products -->\n        <ion-accordion value=\"all\" id=\"all-products-accordian\">\n          \n          <ion-item id=\"all-products-item\" slot=\"header\" lines=\"none\">\n            <ion-label>All | {{this.searchLoadedProductsLength}}</ion-label>\n            <ion-icon name=\"list-outline\" slot=\"start\"></ion-icon>\n          </ion-item>\n      \n          <!-- Results Bar -->\n          <ion-list slot=\"content\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n                <h3>Categories:</h3>\n              </ion-col>\n\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"10\" size-lg=\"8\">\n\n                <!-- Categories Swiper -->\n                <swiper\n                  id=\"category-swiper\"\n                  [config]=\"categorySwiperConfig\" \n                  (swiper)=\"onSwiper($event)\">\n\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('all', $event)\"\n                        [ngClass]=\"this.activeCategory == 'all' ? 'active-category category' : 'category'\">\n                        All\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('relaxation', $event)\" \n                        [ngClass]=\"this.activeCategory == 'relaxation' ? 'active-category category' : 'category'\">\n                        Relaxation\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('sleep', $event)\" \n                        [ngClass]=\"this.activeCategory == 'sleep' ? 'active-category category' : 'category'\">\n                        Sleep\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('relationships', $event)\"  \n                        [ngClass]=\"this.activeCategory == 'relationships' ? 'active-category category' : 'category'\">\n                        Relationships\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('self-improvement', $event)\"\n                        [ngClass]=\"this.activeCategory == 'self-improvement' ? 'active-category category' : 'category'\">\n                        Self-Improvement\n                      </ion-button>\n                    </ng-template>\n                    <ng-template swiperSlide>\n                      <ion-button \n                        (click)=\"changeCategory('business', $event)\" \n                        [ngClass]=\"this.activeCategory == 'business' ? 'active-category category' : 'category'\">\n                        Business\n                      </ion-button>\n                    </ng-template>\n                </swiper>\n\n              </ion-col>\n\n              <h5 id=\"results-header\">Results: {{filterOption}} ({{this.searchLoadedProductsLength}})</h5>\n            </ion-row> \n\n            <!-- If No Search Results -->\n            <ion-row *ngIf=\"searchLoadedProductsLength == 0\" class=\"ion-justify-content-center\">\n              <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n                <p id=\"no-search-results\">\n                  <ion-icon name=\"search-outline\"></ion-icon>\n                  No Search Results. Please try again</p>\n              </ion-col>\n            </ion-row>\n\n            <div id=\"fab-visible-position\"></div>\n\n            <!-- Products -->\n            <div >\n                <ion-row\n                *ngFor=\"let product of this.searchLoadedProducts\"\n                style=\"width: 100%;\"\n                class=\"product-wrapper ion-justify-content-center\">\n                <ion-col (click)=\"this.goToProductPage()\" class=\"product-photo\" size=\"6\">\n          \n                </ion-col>\n                <ion-col size=\"6\">\n                  <div (click)=\"this.goToProductPage()\">\n                    <p class=\"product-price\">${{product.price}}</p>\n                    <h6 class=\"product-title\">{{product.title}}</h6>\n                    <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                    <p class=\"duration\">Duration: {{product.duration}} Mins</p>\n                    <p class=\"product-category\"># {{product.category}}</p>\n                    <p class=\"product-reviews-length\">Reviews {{product.reviews.length}}</p>\n                  </div>\n                  <!-- <div class=\"product-message-green\"></div>\n                  <div class=\"product-message-red\"></div> -->\n                                \n                  \n                </ion-col>\n\n                <!-- Cart + Favorites Toolbar -->\n                <ion-toolbar *ngIf=\"this.authState\">\n                  <ion-buttons slot=\"start\">\n                    <ion-button id=\"cart-button\" (click)=\"onClick()\">\n                      <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                  </ion-buttons>\n                </ion-toolbar> \n\n                </ion-row>\n            </div>\n\n          </ion-list>\n\n        </ion-accordion>\n\n      </ion-accordion-group>\n    </ng-container>\n\n    <ion-row *ngIf=\"!this.authState\" >\n      <ion-col size=\"12\">\n        <div class=\"spacer-1x\"></div>\n        <p class=\"static-alert-yellow\">Please login to see you Favorites.</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- Products / Lg -->\n    <ion-row class=\"spacer-5x ion-hide-lg-down ion-justify-content-center\">\n      \n      <!-- ProductsLg Toolbar -->\n      <ion-col size=\"6.7\">\n        <ion-toolbar id=\"product-lg-toolbar\">\n\n          <!-- Category Buttons -->\n          <ion-buttons slot=\"start\">\n            <ion-button [ngClass]=\"this.categoryLg == 'featured' ? 'active-category-lg' : ''\" (click)=\"featuredLg()\">\n              Featured\n            </ion-button>\n            <ion-button [ngClass]=\"this.categoryLg == 'favorites' ? 'active-category-lg' : ''\" (click)=\"favoritesLg()\">\n              Favorites\n            </ion-button>\n            <ion-button [ngClass]=\"this.categoryLg == 'all' ? 'active-category-lg' : ''\" (click)=\"allLg()\">\n              All\n            </ion-button>\n          </ion-buttons>\n\n          <!-- All Products Search Bar -->\n          <ion-searchbar \n            *ngIf=\"this.categoryLg == 'all'\" \n            placeholder=\"Search All Products\" \n            inputmode=\"decimal\" \n            type=\"decimal\" \n            (ionChange)=\"onSearchChange($event, 'lg')\" \n            [debounce]=\"250\" \n            showCancelButton=\"always\">\n          </ion-searchbar>\n\n\n          <!-- Filter -->\n          <ion-buttons *ngIf=\"this.categoryLg == 'all'\" id=\"filter-button\" slot=\"end\">\n            <ion-button (click)=\"openFilterActionSheet()\">\n              <ion-icon name=\"filter-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n\n      <!-- Skeleton UI Lg -->\n      <ion-col size=\"6.7\" *ngIf=\"this.skeletonDataLg\">\n        <div class=\"ion-padding custom-skeleton\">\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label>\n                <h3>\n                  <ion-skeleton-text class=\"is-square\" animated></ion-skeleton-text>\n                </h3>\n                <p>\n                  <ion-skeleton-text class=\"is-text\" animated style=\"width: 80%\"></ion-skeleton-text>\n                </p>\n                <p>\n                  <ion-skeleton-text class=\"is-text\" animated style=\"width: 70%\"></ion-skeleton-text>\n                </p>\n                <p>\n                  <ion-skeleton-text class=\"is-text\" animated style=\"width: 60%\"></ion-skeleton-text>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n\n      <!-- Products Message -->\n      <ion-col *ngIf=\"this.categoryLg == 'featured' && !this.skeletonDataLg\" size=\"6.7\">\n        <p id=\"featured-page-message-lg\">This is a message.</p>\n      </ion-col>\n\n      <!-- FeaturedLg -->\n      <ion-col \n        *ngIf=\"this.categoryLg == 'featured'\" \n        size=\"6.7\">\n\n        <ion-row>\n          <ion-col \n            *ngFor=\"let featuredProduct of featuredProducts\"\n            (click)=\"goToProductPage(featuredProduct._id)\"\n            class=\"product-lg\" \n            size-lg=\"3.8\" size-xl=\"3.8\">\n            <div class=\"product-lg-image\">\n\n            </div>\n            <div class=\"spacer-2x\"></div>\n            <div>\n              <p class=\"product-price\">${{featuredProduct.price}}</p>\n              <h6 class=\"product-title\">{{featuredProduct.title}}</h6>\n              <p class=\"product-duration\">Duration: {{featuredProduct.duration}} Mins</p>\n              <p class=\"product-category\"># {{featuredProduct.category}}</p>\n              <p class=\"product-reviews-length\">Reviews {{featuredProduct.reviews.length}}</p>\n              \n              <!-- Ratings Stars -->\n              <ion-toolbar class=\"product-lg-lower-toolbar\">\n                <app-ratings-stars [rating]=\"featuredProduct.rating\"></app-ratings-stars>\n                \n                <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    *ngIf=\"this.authState\"\n                    [id]=\"featuredProduct._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- FavoritesLg -->\n      <ion-col *ngIf=\"this.categoryLg == 'favorites' && this.favoriteProducts.length == 0 && !this.skeletonDataLg\" size=\"6.7\">\n        <h1>You have no favorites! To add a favorite product, tap the Heart icon.</h1>\n      </ion-col>\n      \n      <!-- FavoritesLg -->\n      <ion-col\n        *ngIf=\"this.categoryLg == 'favorites' && !this.skeletonDataLg\" \n        size=\"6.7\">\n        <ion-row>\n          <ion-col *ngFor=\"let product of favoriteProducts\" \n            class=\"product-lg\" \n            size=\"3.8\">\n            <div class=\"product-lg-image\">\n\n            </div>\n            <div class=\"spacer-2x\"></div>\n            <div>\n              <p class=\"product-price\">${{product.price}}</p>\n              <h6 class=\"product-title\">{{product.title}}</h6>\n              <p class=\"product-duration\">Duration: {{product.duration}} Mins</p>\n              <p class=\"product-category\"># {{product.category}}</p>\n              <p class=\"product-reviews-length\">Reviews {{product.reviews.length}}</p>\n              \n              <!-- Ratings Stars -->\n              <ion-toolbar class=\"product-lg-lower-toolbar\">\n                <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                \n                <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    *ngIf=\"this.authState\"\n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          \n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <!-- AllProductsLg -->\n      <ion-col *ngIf=\"this.categoryLg == 'all' && !this.skeletonDataLg\" \n        size=\"6.7\">\n\n        <ion-row>\n          <ion-col *ngFor=\"let product of searchLoadedProducts\" \n            class=\"product-lg\" \n            size=\"3.8\">\n            <div class=\"product-lg-image\" alt=\"Hypnosis MP3 Download\">\n\n            </div>\n            <div class=\"spacer-2x\"></div>\n            <div>\n              <p class=\"product-price\">${{product.price}}</p>\n              <h6 class=\"product-title\">{{product.title}}</h6>\n              <p class=\"product-duration\">Duration: {{product.duration}} Mins</p>\n              <p class=\"product-category\"># {{product.category}}</p>\n              <p class=\"product-reviews-length\">Reviews {{product.reviews.length}}</p>\n\n              <!-- Ratings Stars -->\n              <ion-toolbar class=\"product-lg-lower-toolbar\">\n                <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                \n                <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    *ngIf=\"this.authState\"\n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"></app-favorite-icon>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          \n          </ion-col>\n        </ion-row>\n        \n      </ion-col>\n    \n      <!-- No Search Results Message -->\n      <ion-col *ngIf=\"this.categoryLg == 'all' && this.searchLoadedProducts.length == 0 && !this.skeletonDataLg\" size=\"6.7\">\n        <h1>No results from search was found.</h1>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-fab\n    class=\"ion-hide-lg-up\"\n    (click)=\"scrollToTop()\"\n    id=\"fab-button\" \n    vertical=\"bottom\" \n    horizontal=\"end\" \n    slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"chevron-up-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_products_products_page_ts.js.map