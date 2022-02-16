"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_products_product-page_product-page_module_ts"],{

/***/ 157:
/*!****************************************************************************!*\
  !*** ./src/app/pages/products/product-page/product-page-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPagePageRoutingModule": () => (/* binding */ ProductPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _product_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-page.page */ 4758);




const routes = [
    {
        path: '',
        component: _product_page_page__WEBPACK_IMPORTED_MODULE_0__.ProductPagePage
    }
];
let ProductPagePageRoutingModule = class ProductPagePageRoutingModule {
};
ProductPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductPagePageRoutingModule);



/***/ }),

/***/ 9524:
/*!********************************************************************!*\
  !*** ./src/app/pages/products/product-page/product-page.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPagePageModule": () => (/* binding */ ProductPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 8775);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _product_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-page-routing.module */ 157);
/* harmony import */ var _product_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-page.page */ 4758);
/* harmony import */ var src_app_components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/custom-compontents.module */ 5274);









let ProductPagePageModule = class ProductPagePageModule {
};
ProductPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            src_app_components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_2__.CustomComponentsModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _product_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPagePageRoutingModule
        ],
        declarations: [_product_page_page__WEBPACK_IMPORTED_MODULE_1__.ProductPagePage]
    })
], ProductPagePageModule);



/***/ }),

/***/ 4758:
/*!******************************************************************!*\
  !*** ./src/app/pages/products/product-page/product-page.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPagePage": () => (/* binding */ ProductPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-page.page.html?ngResource */ 4044);
/* harmony import */ var _product_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-page.page.scss?ngResource */ 679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ 1960);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products/products.service */ 6423);










swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay]);
let ProductPagePage = class ProductPagePage {
    constructor(activatedRoute, router, productsService, location, toastController, loadingController
    // private auth: AuthSevice
    ) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productsService = productsService;
        this.location = location;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.relatedProducts = [
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
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
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 4,
                        review: 'This is the review',
                    },
                    {
                        _id: "2",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    },
                    {
                        _id: "3",
                        reviewerUsername: "Reviewer Name",
                        reviewerEmail: 'eddielacrosse2@gmail.com',
                        reviewerProfilePicture: "",
                        date: "Posted 3 Days ago",
                        rating: 5,
                        review: 'This is the review',
                    }
                ]
            }
        ];
        this.skeletonData = true;
        this.isMobileProductPage = true;
        this.relatedProductsSwiperConfig = {
            slidesPerView: 1.3,
            spaceBetween: 20,
            navigation: true
        };
        /**
         * Show the player UI when the user hits the sample button
         * When the sample is finished, show the 'replay' icon
         * If the sample hasn't been played yet, show the 'play' button
         * If the sample is playing, show the 'pause' button.
         * uses this.sampleButtonIcon
         * @param buttonIcon Either 'play', 'pause', or 'replay'
         */
        this.sampleToggle = false;
        this.timeInterval = null;
        this.sampleProgressBarType = 'determinate';
        this.sampleButtonText = 'Play Sample';
        this.sampleButtonIcon = 'play';
        this.sampleDuration = 0;
        this.sampleMasterVolume = 0.5;
        /**
         * Toggle Product Reviews UI view
         */
        this.reviewDisplay = false;
        /**
         * Track scroll location of page for animations
         * @param e - Event Object
         */
        this.footerScrollIntoView = false;
        // this.userEmail = this.auth.userEmail;
    }
    ngOnInit() {
        this.skeletonTrigger();
        // Get Post ID from navigation params on the main posts tab
        const id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.productsService.getProductInfo(id)
            .subscribe(info => {
            this.productInfo = info;
            console.log(this.productInfo);
            this.reviewButtonMessage = `Show Reviews (${this.productInfo.reviews})`;
            this.sound = new howler__WEBPACK_IMPORTED_MODULE_3__.Howl({
                html5: true,
                src: [this.productInfo.sample],
                sprite: {
                    sample: [14000, 20000]
                },
            });
        });
    }
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
        });
    }
    /**
     * Toast that displays when a user adds this Product to their Cart
     * '&#x2713;' is HTML escape character for a check mark ✓
     */
    addToCartToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
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
                        handler: () => {
                            toast.dismiss();
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    /**
     * Loading that appears before 'Add To Cart Toast'
     */
    addToCartLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // TODO
            // Request Data
            // 
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                showBackdrop: true,
                spinner: 'crescent',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    increaseVolume(button) {
        console.log(button);
        button.el.style.transform = 'scale(1.4)';
        button.el.style.color = 'red';
        setTimeout(() => {
            button.el.style.transform = 'scale(1)';
            button.el.style.color = '#222';
        }, 200);
        if (this.sampleMasterVolume >= 1) {
            console.log('Maximum Volume');
            // TODO Add Toast here
            return;
        }
        this.sampleMasterVolume += 0.05;
        console.log(this.sampleMasterVolume);
        howler__WEBPACK_IMPORTED_MODULE_3__.Howler.volume(this.sampleMasterVolume);
    }
    decreaseVolume(button) {
        console.log(button);
        button.el.style.transform = 'scale(1.4)';
        button.el.style.color = 'red';
        setTimeout(() => {
            button.el.style.transform = 'scale(1)';
            button.el.style.color = '#222';
        }, 200);
        if (this.sampleMasterVolume <= 0) {
            console.log('Maximum Volume');
            // TODO Add Toast here
            console.log(howler__WEBPACK_IMPORTED_MODULE_3__.Howler);
            return;
        }
        this.sampleMasterVolume -= 0.05;
        console.log(this.sampleMasterVolume);
        howler__WEBPACK_IMPORTED_MODULE_3__.Howler.volume(this.sampleMasterVolume);
    }
    playSample(buttonIcon) {
        console.clear();
        console.log('Sample button icon state: ' + buttonIcon);
        let sampleTrackWrapper = document.getElementById('sample-track');
        let sampleIcon = document.getElementById('sample-icon');
        // 
        if (!this.sampleToggle) {
            this.timeInterval = setInterval(() => {
                // Fires every interval to update sample time and UI
                updateSampleTime(this.sound, () => {
                    this.sampleDuration++;
                    console.log(this.sampleDuration);
                    console.log(this.sound);
                    // When sample is finished playing, change sample button to
                    // refresh, change UI timer to 0, stop progress bar animation,
                    // unload song, and stop Interval timer.
                    if (this.sampleDuration == 20) {
                        this.sampleDuration = 0;
                        this.sampleButtonIcon = 'refresh-outline';
                        this.sampleButtonText = 'Replay Sample';
                        this.sampleProgressBarType = 'determinate';
                        clearInterval(this.timeInterval);
                        this.sound.pause();
                        return;
                    }
                    // 
                    if (this.sampleToggle == false) {
                        clearInterval(this.timeInterval);
                        return;
                    }
                });
            }, 1000);
        }
        function updateSampleTime(sound, callback) {
            if (sound.playing()) {
                // let width = (sound.seek()/sound.duration())/100;
                let width = (sound.seek() / sound.duration());
                return callback(width);
            }
        }
        // Play
        if (this.sampleToggle == false) {
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
        else if (this.sampleToggle == true) {
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
        return function () {
            return callback(++i, d, s);
        };
    }
    /**
     *
     */
    // Swiper
    onSwiper(swiper) {
        console.log(swiper);
    }
    toggleReviews() {
        console.clear();
        console.log('Review display: ');
        console.log(this.reviewDisplay);
        let reviewsScrollTo = document.getElementById('reviews-scroll-to');
        let reviewsButton = document.getElementById('reviews-button');
        // Show Reviews
        if (this.reviewDisplay == false) {
            this.reviewDisplay = true;
            this.reviewButtonMessage = 'Hide Reviews (3)';
            reviewsScrollTo.scrollIntoView(true);
            return;
        }
        // Hide Reviews
        if (this.reviewDisplay == true) {
            reviewsButton.scrollIntoView(true);
            this.reviewDisplay = false;
            this.reviewButtonMessage = 'Show Reviews (3)';
            return;
        }
    }
    trackPageLocation(e) {
        console.clear();
        let scrollDetail = e.detail;
        console.log(scrollDetail);
        if (scrollDetail.scrollTop >= 1300) {
            console.log('show footer');
            this.footerScrollIntoView = true;
        }
        else {
            console.log('hide footer');
            this.footerScrollIntoView = false;
        }
    }
    /**
     * Go to Contact us Page
     */
    contactUs() {
        this.router.navigateByUrl('/contact');
    }
};
ProductPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_4__.ProductsService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
ProductPagePage.propDecorators = {
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener, args: ['unloaded',] }]
};
ProductPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-product-page',
        template: _product_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
        styles: [_product_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductPagePage);



/***/ }),

/***/ 679:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/products/product-page/product-page.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n/**\n * Swiper 7.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 24, 2021\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n#product-info-wrapper .product-title {\n  height: 40px;\n}\n#product-info-wrapper #product-info {\n  background: #000000;\n  border-radius: 5px;\n  padding: 1em;\n}\n#product-info-wrapper #product-info .product-price {\n  font-weight: 600;\n  color: #00ff00;\n  width: 100px;\n}\n#product-info-wrapper #product-info .product-duration {\n  font-size: 1.2em;\n  color: #fff;\n}\n#product-info-wrapper #product-info .product-category {\n  font-size: 1.2em;\n  color: #fff;\n}\n#product-info-wrapper #product-info .product-reviews-length {\n  font-size: 1em;\n  color: #fff;\n}\n#product-info-wrapper .description {\n  border-bottom: 1px solid #dedede;\n  font-size: 1.2em;\n  padding-bottom: 1em;\n}\n#product-info-wrapper .product-photo {\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n#product-info-wrapper #sample-icon {\n  font-size: 2em;\n}\n#product-info-wrapper #sample-track {\n  width: 80%;\n  height: auto;\n  margin: 1em auto;\n  opacity: 0;\n  pointer-events: none;\n}\n#product-info-wrapper #sample-track #volume-track {\n  background: #dedede;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 0.1em;\n  opacity: 0;\n  animation: volume-track-slide-up 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) forwards;\n}\n#product-info-wrapper #sample-track #volume-track .sample-volume-button {\n  font-size: 2em;\n  color: #222;\n  margin: 0 0.5em;\n  --background: none;\n  display: inline-block;\n}\n@keyframes volume-track-slide-up {\n  0% {\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n#related-products {\n  padding-bottom: 3em;\n  border-bottom: 1px solid #dedede;\n}\n#related-products h2 {\n  margin-left: 1em;\n}\n#related-products .related-product-add-to-cart-products-page img {\n  height: 28px;\n}\n#related-product-wrapper-lg .related-product-outer-lg ion-toolbar {\n  background: none;\n}\n#related-product-wrapper-lg .related-product-outer-lg .related-product-inner-lg {\n  width: 90%;\n  height: 330px;\n  background: #dedede;\n  margin: 1em auto;\n  position: relative;\n  border-radius: 5px;\n}\n#related-product-wrapper-lg .related-product-outer-lg .related-product-photo-lg {\n  width: 100%;\n  height: 120px;\n}\n#related-product-wrapper-lg .related-product-outer-lg .related-product-info-lg {\n  padding: 1em;\n}\n#related-product-wrapper-lg .related-product-outer-lg .related-product-add-cart-lg {\n  position: absolute;\n  bottom: 0;\n  height: 40px;\n  background: green;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#related-product-wrapper-lg .related-product-outer-lg .related-product-add-cart-lg p {\n  color: #fff;\n}\n#related-swiper {\n  height: 63vh;\n  transition: 0.3s;\n  padding: 0.5em;\n}\n#related-swiper .product-wrapper {\n  box-shadow: 1px 1px 10px #dedede;\n  border-radius: 10px;\n  margin: 1em auto;\n}\n#back-button-reviews-lg {\n  --background: none;\n  --border-style: solid;\n  --border-width: 2px;\n  --border-solid: #999;\n  --color: #999;\n  width: 250px;\n}\n#reviews-wrapper {\n  padding: 2em;\n  color: #333;\n}\n#reviews-wrapper .review {\n  background: #dedede;\n  height: auto;\n  width: 100%;\n  padding: 0.5em;\n  border-radius: 5px;\n  margin: 1em auto;\n  opacity: 0;\n}\n#reviews-wrapper .review .reviewer-name {\n  position: relative;\n  top: -8px;\n  left: 8px;\n}\n#reviews-wrapper .review .review-date {\n  position: relative;\n  top: 6px;\n  right: 8px;\n}\n#reviews-wrapper .review .product-lg-lower-toolbar {\n  position: relative;\n  top: -10px;\n}\n#reviews-wrapper .review:nth-child(1) {\n  animation: review-slide-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s forwards;\n}\n#reviews-wrapper .review:nth-child(2) {\n  animation: review-slide-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards;\n}\n#reviews-wrapper .review:nth-child(3) {\n  animation: review-slide-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s forwards;\n}\n#reviews-wrapper .review:nth-child(4) {\n  animation: review-slide-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.9s forwards;\n}\n#reviews-wrapper .review:nth-child(5) {\n  animation: review-slide-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.2s forwards;\n}\n@keyframes review-slide-in {\n  0% {\n    transform: translateX(-10px);\n  }\n  100% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n}\n#reviews-scroll-to {\n  height: 400px;\n}\n#product-bottom-buttons-lg ion-button {\n  --background: none;\n  --border-style: solid;\n  --border-width: 3px;\n  width: 250px;\n  margin: 0.8em auto;\n}\n#product-bottom-buttons-lg ion-button ion-icon {\n  position: absolute;\n  left: 0;\n}\n#product-bottom-buttons-lg #back-button-lg {\n  --border-solid: #999;\n  --color: #999;\n  display: block;\n}\n#product-bottom-buttons-lg #favorite-button-lg {\n  --border-solid: #ff5353;\n  --color: #ff5353;\n  display: block;\n}\n#product-bottom-buttons-lg .show-reviews-button {\n  --border-solid: #0055a5;\n  --color: #0055a5;\n  display: block;\n}\n#product-bottom-buttons-lg .hide-reviews-button {\n  --border-solid: #444;\n  --color: #999;\n  display: block;\n}\n#footer-products-page {\n  background: #333;\n  border-radius: 20px 20px 0 0;\n  height: auto;\n  transition: 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5em 0;\n}\n#footer-products-page .footer-text {\n  color: #b6b6b6;\n}\n#footer-products-page ion-item {\n  color: #fff;\n  text-align: center;\n  font-size: 1.3em;\n  height: 60px;\n}\n#footer-products-page ion-item #footer-contact-us-button {\n  margin: 0 auto;\n  height: 50px;\n  width: 100%;\n  font-size: 1em;\n}\n#footer-products-page ion-item #footer-logo {\n  margin: 2em auto;\n}\n.footer-in {\n  opacity: 1;\n  animation: footer-slide-up 1s cubic-bezier(0.47, 0, 0.745, 0.715) forwards;\n}\n.footer-out {\n  opacity: 0;\n}\n@keyframes footer-slide-up {\n  0% {\n    transform: translateY(100px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\nion-footer ion-button {\n  height: 50px;\n  width: 100%;\n  --transition: 0.5s;\n  --border-radius: 0px;\n  --background: #00c400;\n  --ripple-color: rgb(255, 153, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLnNjc3MiLCJwcm9kdWN0LXBhZ2UucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXIubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDJCQUFBO0VBQ0EsNHNFQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtBQ0hGO0FES0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0ZGO0FESUE7RUFDRSxzQkFBQTtBQ0RGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDQUY7QURFQTs7RUFFRSxpQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxtQkFBQTtBQ0VGO0FEREU7RUFDRSxtQkFBQTtBQ0dKO0FEQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDR0Y7QUREQTtFQUNFLGtCQUFBO0FDSUY7QURGQSxnQkFBQTtBQUVFOztFQUVFLFlBQUE7QUNJSjtBRERFO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBQ0dKO0FEQ0EsZUFBQTtBQUVFO0VBRUUsbUJBQUE7QUNBSjtBREVFOzs7Ozs7OztFQVFFLDRCQUFBO0FDQUo7QURFRTs7Ozs7RUFLRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNBSjtBREVFO0VBQ0UsK0JBQUE7QUNBSjtBREVFO0VBQ0UsZ0ZBQUE7QUNBSjtBREVFO0VBQ0UsaUZBQUE7QUNBSjtBREVFO0VBQ0UsK0VBQUE7QUNBSjtBREVFO0VBQ0Us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O0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUF1UVo7QUFwUVE7RUFDSSxnQkFBQTtBQXNRWjtBQWpRQTtFQUNJLFVBQUE7RUFDQSwwRUFBQTtBQW9RSjtBQWpRQTtFQUNJLFVBQUE7QUFvUUo7QUFqUUE7RUFDSTtJQUNJLDRCQUFBO0VBb1FOO0VBbFFFO0lBQ0ksMEJBQUE7RUFvUU47QUFDRjtBQWhRSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFrUVIiLCJmaWxlIjoicHJvZHVjdC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N3aXBlci12YXJzLnNjc3MnO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdzd2lwZXItaWNvbnMnO1xuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKVxuICAgIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICN7JHRoZW1lQ29sb3J9O1xufVxuLnN3aXBlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG4uc3dpcGVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5zd2lwZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuLnN3aXBlci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICYuc3dpcGVyLXZlcnRpY2FsIHtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xuICB9XG59XG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuLnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4vKiBBdXRvIEhlaWdodCAqL1xuLnN3aXBlci1hdXRvaGVpZ2h0IHtcbiAgJixcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnN3aXBlci13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcbiAgfVxufVxuXG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLTNkIHtcbiAgJixcbiAgJi5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVyIHtcbiAgICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xuICB9XG4gIC5zd2lwZXItd3JhcHBlcixcbiAgLnN3aXBlci1zbGlkZSxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3csXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbiAgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxufVxuXG4vKiBDU1MgTW9kZSAqL1xuLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydCBzdGFydDtcbiAgfVxufVxuLnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgfVxufVxuLnN3aXBlci12ZXJ0aWNhbC5zd2lwZXItY3NzLW1vZGUge1xuICA+IC5zd2lwZXItd3JhcHBlciB7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG4gIH1cbn1cbi5zd2lwZXItY2VudGVyZWQge1xuICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBvcmRlcjogOTk5OTtcbiAgfVxuICAmLnN3aXBlci1ob3Jpem9udGFsIHtcbiAgICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpO1xuICAgIH1cbiAgICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcbiAgICB9XG4gIH1cbiAgJi5zd2lwZXItdmVydGljYWwge1xuICAgID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKTtcbiAgICB9XG4gICAgPiAuc3dpcGVyLXdyYXBwZXI6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcik7XG4gICAgfVxuICB9XG5cbiAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyIGNlbnRlcjtcbiAgfVxufVxuXG5cblxuIiwiQGltcG9ydCAnc3dpcGVyL3Njc3MnO1xuQGltcG9ydCBcIn5zd2lwZXIvY3NzXCI7XG5cbiNwcm9kdWN0LWluZm8td3JhcHBlciB7XG5cbiAgICBcbiAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAjcHJvZHVjdC1pbmZvIHtcblxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcblxuICAgICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMGZmMDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdC1kdXJhdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnByb2R1Y3QtY2F0ZWdvcnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5wcm9kdWN0LXJldmlld3MtbGVuZ3RoIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICBcblxuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3QtcGhvdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9wbGFjZWhvbGRlcnMvcGxhY2Vob2xkZXItbG9nby5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cblxuICAgICNzYW1wbGUtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cblxuICAgICNzYW1wbGUtdHJhY2sge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICN2b2x1bWUtdHJhY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBhbmltYXRpb246IHZvbHVtZS10cmFjay1zbGlkZS11cCAwLjVzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIGZvcndhcmRzO1xuXG5cblxuICAgICAgICAgICAgLnNhbXBsZS12b2x1bWUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC41ZW07XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIEBrZXlmcmFtZXMgdm9sdW1lLXRyYWNrLXNsaWRlLXVwIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSAgICBcbiNyZWxhdGVkLXByb2R1Y3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIH1cblxuICAgIC5yZWxhdGVkLXByb2R1Y3QtYWRkLXRvLWNhcnQtcHJvZHVjdHMtcGFnZSB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4jcmVsYXRlZC1wcm9kdWN0LXdyYXBwZXItbGcge1xuICAgIC5yZWxhdGVkLXByb2R1Y3Qtb3V0ZXItbGcge1xuXG4gICAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVsYXRlZC1wcm9kdWN0LWlubmVyLWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVsYXRlZC1wcm9kdWN0LXBob3RvLWxnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWxhdGVkLXByb2R1Y3QtaW5mby1sZyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAucmVsYXRlZC1wcm9kdWN0LWFkZC1jYXJ0LWxnIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiNyZWxhdGVkLXN3aXBlciB7XG4gICAgaGVpZ2h0OiA2M3ZoO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgcGFkZGluZzogMC41ZW07XG5cbiAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNkZWRlZGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgfVxuXG59XG5cbiNyZXZpZXdzLWJ1dHRvbiB7XG59XG5cbiNiYWNrLWJ1dHRvbi1yZXZpZXdzLWxnIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItc29saWQ6ICM5OTk7XG4gICAgLS1jb2xvcjogIzk5OTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgXG59XG5cbiNyZXZpZXdzLXdyYXBwZXJ7XG5cbiAgICAvLyBiYWNrZ3JvdW5kOiAjOTk5O1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBjb2xvcjogIzMzMztcblxuICAgIC5yZXZpZXcge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICAgIC5yZXZpZXdlci1uYW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLThweDtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXctZGF0ZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdC1sZy1sb3dlci10b29sYmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmV2aWV3Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIGFuaW1hdGlvbjogcmV2aWV3LXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSkgMHMgZm9yd2FyZHM7XG4gICAgfVxuICAgIC5yZXZpZXc6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgYW5pbWF0aW9uOiByZXZpZXctc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KSAwLjNzIGZvcndhcmRzO1xuICAgIH1cbiAgICAucmV2aWV3Om50aC1jaGlsZCgzKSB7XG4gICAgICAgIGFuaW1hdGlvbjogcmV2aWV3LXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSkgMC42cyBmb3J3YXJkcztcbiAgICB9XG4gICAgLnJldmlldzpudGgtY2hpbGQoNCkge1xuICAgICAgICBhbmltYXRpb246IHJldmlldy1zbGlkZS1pbiAwLjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpIDAuOXMgZm9yd2FyZHM7XG4gICAgfVxuICAgIC5yZXZpZXc6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgYW5pbWF0aW9uOiByZXZpZXctc2xpZGUtaW4gMC41cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KSAxLjJzIGZvcndhcmRzO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcmV2aWV3LXNsaWRlLWluIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI3Jldmlld3Mtc2Nyb2xsLXRvIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4jcHJvZHVjdC1ib3R0b20tYnV0dG9ucy1sZyB7XG5cbiAgICBpb24tYnV0dG9uIHtcblxuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDAuOGVtIGF1dG87XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNiYWNrLWJ1dHRvbi1sZyB7XG4gICAgICAgIC0tYm9yZGVyLXNvbGlkOiAjOTk5O1xuICAgICAgICAtLWNvbG9yOiAjOTk5O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAjZmF2b3JpdGUtYnV0dG9uLWxnIHtcbiAgICAgICAgLS1ib3JkZXItc29saWQ6ICNmZjUzNTM7XG4gICAgICAgIC0tY29sb3I6ICNmZjUzNTM7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLnNob3ctcmV2aWV3cy1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1zb2xpZDogIzAwNTVhNTtcbiAgICAgICAgLS1jb2xvcjogIzAwNTVhNTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuaGlkZS1yZXZpZXdzLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXNvbGlkOiAjNDQ0O1xuICAgICAgICAtLWNvbG9yOiAjOTk5O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbn1cblxuI2Zvb3Rlci1wcm9kdWN0cy1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVlbSAwO1xuXG4gICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNiNmI2YjY7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgICAgI2Zvb3Rlci1jb250YWN0LXVzLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAjZm9vdGVyLWxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlci1pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb246IGZvb3Rlci1zbGlkZS11cCAxcyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSBmb3J3YXJkcztcbiAgICBcbn1cbi5mb290ZXItb3V0IHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGZvb3Rlci1zbGlkZS11cCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS10cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDBjNDAwO1xuICAgICAgICAtLXJpcHBsZS1jb2xvcjogcmdiKDI1NSwgMTUzLCAwKTtcbiAgICB9XG59IiwiLyoqXG4gKiBTd2lwZXIgNy4zLjFcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjEgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogTm92ZW1iZXIgMjQsIDIwMjFcbiAqL1xuXG5AZm9udC1mYWNle2ZvbnQtZmFtaWx5OnN3aXBlci1pY29ucztzcmM6dXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH06cm9vdHstLXN3aXBlci10aGVtZS1jb2xvcjojMDA3YWZmfS5zd2lwZXJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MDt6LWluZGV4OjF9LnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2lwZXItd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtkaXNwbGF5OmZsZXg7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dpcGVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSwuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDBweCwwLDApfS5zd2lwZXItcG9pbnRlci1ldmVudHN7dG91Y2gtYWN0aW9uOnBhbi15fS5zd2lwZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLXZlcnRpY2Fse3RvdWNoLWFjdGlvbjpwYW4teH0uc3dpcGVyLXNsaWRle2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybX0uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFua3t2aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWF1dG9oZWlnaHQsLnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlcnthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodH0uc3dpcGVyLTNkLC5zd2lwZXItM2Quc3dpcGVyLWNzcy1tb2RlIC5zd2lwZXItd3JhcHBlcntwZXJzcGVjdGl2ZToxMjAwcHh9LnN3aXBlci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZSwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLC5zd2lwZXItM2QgLnN3aXBlci13cmFwcGVye3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDoxMH0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93e2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTUpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntvdmVyZmxvdzphdXRvO3Njcm9sbGJhci13aWR0aDpub25lOy1tcy1vdmVyZmxvdy1zdHlsZTpub25lfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZXtzY3JvbGwtc25hcC1hbGlnbjpzdGFydCBzdGFydH0uc3dpcGVyLWhvcml6b250YWwuc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntzY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5fS5zd2lwZXItdmVydGljYWwuc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcntzY3JvbGwtc25hcC10eXBlOnkgbWFuZGF0b3J5fS5zd2lwZXItY2VudGVyZWQ+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7Y29udGVudDonJztmbGV4LXNocmluazowO29yZGVyOjk5OTl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXI+LnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZHttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcjo6YmVmb3Jle2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6MXB4O3dpZHRoOnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke21hcmdpbi1ibG9jay1zdGFydDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSl9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7d2lkdGg6MTAwJTttaW4td2lkdGg6MXB4O2hlaWdodDp2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKX0uc3dpcGVyLWNlbnRlcmVkPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOmNlbnRlciBjZW50ZXJ9Il19 */";

/***/ }),

/***/ 4044:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/products/product-page/product-page.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Mobile Header -->\n<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <span style=\"margin-left: 1em;\"></span>\n      <img height=\"30\" src=\"../../../../assets/placeholders/placeholder-logo.svg\" alt=\"\" srcset=\"\">\n    </ion-buttons>\n    <ion-buttons slot=\"\">\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <app-favorite-icon></app-favorite-icon>\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"trackPageLocation($event)\">\n  <ion-grid>\n\n    <!-- Skeleton UI -->\n    <ion-row *ngIf=\"this.skeletonData\" class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"7\">\n        <div class=\"spacer-5x ion-hide-lg-down\"></div>\n        <div class=\"ion-text-center\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-list>\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <h3>\n                    <ion-skeleton-text class=\"is-square\" animated></ion-skeleton-text>\n                  </h3>\n                  <p>\n                    <ion-skeleton-text class=\"is-text\" animated style=\"width: 80%\"></ion-skeleton-text>\n                  </p>\n                  <p>\n                    <ion-skeleton-text class=\"is-text\" animated style=\"width: 70%\"></ion-skeleton-text>\n                  </p>\n                  <p>\n                    <ion-skeleton-text class=\"is-text\" animated style=\"width: 60%\"></ion-skeleton-text>\n                  </p>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row \n      *ngIf=\"!this.skeletonData\"\n      class=\"ion-justify-content-center\">\n\n      <!-- Toolbar-lg -->\n      <ion-col size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.7\">\n        <div class=\"spacer-5x ion-hide-lg-down\"></div>\n        <ion-toolbar class=\"ion-hide-lg-down\">\n          <ion-buttons slot=\"start\">\n            <ion-button class=\"back-button\" (click)=\"close()\">\n              <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n              Back to Products\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n\n      <!-- Picture Header -->\n      <ion-col class=\"ion-text-center\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.7\">\n        <div class=\"spacer-4x ion-hide-lg-down\"></div>\n        <img style=\"height: 300px;\" src=\"../../../../assets/placeholders/placeholder-logo.svg\" alt=\"\" srcset=\"\">\n      </ion-col>\n\n      <!-- Product Info -->\n      <ion-col id=\"product-info-wrapper\" size-xs=\"11\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.7\">\n\n        <div class=\"spacer-2x\"></div>\n        <h1 class=\"product-title\">{{productInfo.title}}</h1>\n\n        <!-- Info -->\n        <div id=\"product-info\">\n          <h1 class=\"product-price\">${{productInfo.price}}</h1>\n          <div class=\"spacer-1x\"></div>\n          <p class=\"product-duration\"><b>Duration: </b>{{productInfo.duration}} Mins</p>\n          <!-- <p class=\"product-reviews-length\"><b>Reviews:</b> {{productInfo.reviews.length}}</p> -->\n          <p class=\"product-category\">#{{productInfo.category}}</p>\n        </div>\n        \n        <div class=\"spacer-5x\"></div>\n\n        <!-- Product Sample -->\n        <div class=\"ion-text-center\">\n\n          <!-- Sample Icon -->\n          <div class=\"ion-text-center\">\n            <ion-icon id=\"sample-icon\" name=\"musical-notes-outline\"></ion-icon>\n            <div class=\"spacer-1x\"></div>\n          </div>\n\n          <!-- Sample Button -->\n          <ion-button id=\"sample-button\" (click)=\"playSample(this.sampleButtonIcon)\">\n            <ion-icon slot=\"start\" name=\"{{this.sampleButtonIcon}}\"></ion-icon>\n             <span style=\"width: 8px;\"></span>{{sampleButtonText}}\n          </ion-button>\n\n          <!-- Sample Track -->\n          <div id=\"sample-track\">\n\n            <div class=\"spacer-1x\"></div>\n            <div *ngIf=\"this.sampleToggle\" id=\"sample-timer\" class=\"ion-text-center\">\n              <div class=\"spacer-3x\"></div>\n              <h3>0:0{{sampleDuration}} / 0:20</h3>\n              <ion-progress-bar  type=\"{{this.sampleProgressBarType}}\"></ion-progress-bar>\n            </div>\n            <div class=\"spacer-2x\"></div>\n\n            <!-- Volume -->\n            <div *ngIf=\"this.sampleToggle\" id=\"volume-track\">\n              <div class=\"spacer-1x\"></div>\n              <h5>Volume</h5>\n              <ion-icon #decreaseVolumeButton (click)=\"decreaseVolume(decreaseVolumeButton)\" class=\"sample-volume-button\" name=\"arrow-down-circle-outline\"></ion-icon>\n              <ion-icon #inecreaseVolumeButton (click)=\"increaseVolume(inecreaseVolumeButton)\" class=\"sample-volume-button\" name=\"arrow-up-circle-outline\"></ion-icon>\n              <div class=\"spacer-1x\"></div>\n              \n              <ion-progress-bar value=\"{{this.sampleMasterVolume}}\"></ion-progress-bar>\n              <div class=\"spacer-1x\"></div>\n            </div>\n            <div class=\"spacer-5x\"></div>\n          </div>\n\n        </div>\n\n        <!-- Back Button -->\n        <div class=\"ion-text-center\">\n          <ion-button \n            id=\"back-button-lg\" \n            (click)=\"close()\">\n            <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n            Back to Products\n          </ion-button>\n          <div class=\"spacer-5x\"></div>\n        </div>\n\n        <p class=\"description\">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. \n          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n          <br><br>\n          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n          Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. \n          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. \n          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend\n        </p>\n        \n      </ion-col>\n\n      <!-- Related Products -->\n      <ion-col id=\"related-products\" size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.7\">\n        \n        <h2>Related Products</h2>\n        <!-- Related Products Lg -->\n        <ion-row id=\"related-product-wrapper-lg\" class=\"ion-hide-md-down\">\n          <ion-col *ngFor=\"let relatedProduct of this.relatedProducts\" class=\"related-product-outer-lg\" size=\"4\">\n            <div class=\"related-product-inner-lg\">\n              <img class=\"related-product-photo-lg\" src=\"../../../../assets/placeholders/placeholder-logo.svg\" alt=\"Hypnosis Site Related Product photo\">\n              <div class=\"related-product-info-lg\">\n                <p>${{relatedProduct.price}}</p>\n                <p>{{relatedProduct.title}}</p>\n                <p>Duration: {{relatedProduct.duration}}</p>\n                <p>Reviews: {{relatedProduct.reviews.length}}</p>\n                <p>#{{relatedProduct.category}}</p>\n                <app-ratings-stars [rating]=\"relatedProduct.rating\"></app-ratings-stars>\n              </div>\n\n              <!-- Add to Cart Button -->\n              <div class=\"related-product-add-cart-lg\">\n                <ion-button class=\"related-product-add-cart-lg\" (click)=\"relatedProductAddToCart()\" expand=\"block\">\n                  Add to Cart\n                </ion-button>\n              </div>\n            </div>\n\n          </ion-col>\n        </ion-row>\n      \n        <!-- Related Products Mobile -->\n        <swiper\n          id=\"related-swiper\"\n          class=\"ion-hide-md-up\"\n          [config]=\"relatedProductsSwiperConfig\" \n          (swiper)=\"onSwiper($event)\">\n\n            <ng-template swiperSlide *ngFor=\"let relatedProduct of this.relatedProducts\">\n              <ion-row\n                class=\"product-wrapper ion-justify-content-center\">\n                <ion-col size=\"12\">\n                  <img src=\"../../../../assets/placeholders/placeholder-logo.svg\" alt=\"Hypnosis Site Related Product Photo\">\n                </ion-col>\n                <ion-col size=\"11\">\n                  <p class=\"product-price\">${{relatedProduct.price}}</p>\n                  <h6 class=\"product-title\">{{relatedProduct.title}}</h6>  \n                  <app-ratings-stars [rating]=\"relatedProduct.rating\"></app-ratings-stars>\n                  <p class=\"product-duration\">Duration: {{relatedProduct.duration}} Mins</p>\n                  <p class=\"product-category\">#{{relatedProduct.category}}</p>\n                  <h5 class=\"product-reviews-length\">Reviews: {{relatedProduct.reviews.length}}</h5>\n\n                  <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button class=\"related-product-add-to-cart-products-page\" (click)=\"addToCart(relatedProduct._id)\">\n                      <img width=\"30\" src=\"../../../../assets/icons/add-to-cart.png\" alt=\"Hypnosis Site Add Related product to cart icon\">\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-buttons slot=\"end\">\n                    <app-favorite-icon [productID]=\"relatedProduct._id\"></app-favorite-icon>\n                  </ion-buttons>\n                  </ion-toolbar>\n                </ion-col>\n              </ion-row>\n            </ng-template>\n\n        </swiper>\n\n      </ion-col>\n\n      <!-- Back To Products Page Button -->\n      <ion-col \n        id=\"product-bottom-buttons-lg\" \n        class=\"ion-text-center\" \n        size-xs=\"11\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.7\">\n        <div class=\"spacer-5x\"></div>\n        <ion-button \n          id=\"back-button-lg\" \n          (click)=\"close()\">\n          <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n          Back to Products\n        </ion-button>\n        <ion-button \n          id=\"favorite-button-lg\" \n          (click)=\"favorite()\">\n          <!-- Add isLg property that changes class depending on viewport size -->\n          <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\n          Favorite\n        </ion-button>\n        <ion-button \n          id=\"reviews-button\" \n          [ngClass]=\"this.reviewDisplay ? 'hide-reviews-button' : 'show-reviews-button'\" \n          (click)=\"toggleReviews()\">\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            {{reviewButtonMessage}}\n        </ion-button>\n      </ion-col>\n\n      <!-- Reviews -->\n      <ion-col \n        *ngIf=\"this.reviewDisplay\" id=\"reviews\" \n        size-xs=\"12\" size-sm=\"11\" size-md=\"10\" size-lg=\"8\" size-xl=\"6.7\">\n\n        <div id=\"reviews-wrapper\">\n          <div class=\"review\" *ngFor=\"let review of this.productInfo.reviews\" >\n\n            <!-- Name & Pic -->\n            <div class=\"ion-align-items-center\">\n              <img height=\"30\" src=\"../../../../assets/placeholders/profile-icon.svg\" alt=\"Hypnosis Site Review Profile Picture\">\n              <span class=\"reviewer-name\">{{review.reviewerUsername}}</span>\n              <span class=\"review-date ion-float-right\">{{review.date}}</span>\n            </div>\n\n            <!-- Ratings Stars -->\n            <ion-toolbar id=\"feaproduct-lg-lower-toolbar\">\n              <app-ratings-stars [rating]=\"review.rating\"></app-ratings-stars>\n              \n              <ion-buttons slot=\"end\">\n                  <app-favorite-icon></app-favorite-icon>\n              </ion-buttons>\n            </ion-toolbar>\n\n            <!-- Review -->\n            <p>\"{{review.review}}\"</p>\n\n          </div>\n        </div>\n\n        <!-- Back to Products page button -->\n        <div class=\"ion-text-center\">\n          <ion-button \n          id=\"back-button-reviews-lg\" \n          (click)=\"close()\">\n          <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n          Back to Products\n          </ion-button>\n        </div>\n\n        <div class=\"spacer-5x\"></div>\n      </ion-col>\n      <div id=\"reviews-scroll-to\"></div>\n\n      <!-- Footer -->\n      <ion-col id=\"footer-products-page\" [ngClass]=\"this.footerScrollIntoView ? 'footer-in' : 'footer-out' \" size=\"12\">\n        <ion-list>\n          <ion-item style=\"height: auto;\" lines=\"none\">\n            <img id=\"footer-logo\" height=\"80\" src=\"../../../../assets/placeholders/placeholder-logo.svg\" alt=\"Hypnosis Site Logo\">\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Link</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Link</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Link</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Link</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Link</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <p class=\"footer-text\">Website title - 2020</p>\n          </ion-item>\n          <ion-item>\n            <ion-button (click)=\"contactUs()\" id=\"footer-contact-us-button\">\n              Contact Us\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n<!-- Mobile Add to Cart Button -->\n<ion-footer \n  id=\"add-to-cart-mobile-products-page\" \n  class=\"ion-hide-lg-up ion-text-center\" \n  (click)=\"addToCart()\">\n  <ion-button>\n    <ion-icon name=\"cart-outline\" style=\"color: #fff;\" size=\"large\"></ion-icon>\n    <span style=\"margin-left: 1em;\"></span>\n    Add to Cart</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_product-page_product-page_module_ts.js.map