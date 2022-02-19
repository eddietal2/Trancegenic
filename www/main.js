(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 8166:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("default-node_modules_howler_dist_howler_js"), __webpack_require__.e("default-src_app_pages_products_products_page_ts"), __webpack_require__.e("default-src_app_pages_landing_landing_page_ts"), __webpack_require__.e("default-src_app_pages_profile_profile_page_ts"), __webpack_require__.e("default-src_app_pages_cart_cart_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'landing',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("default-node_modules_howler_dist_howler_js"), __webpack_require__.e("default-src_app_pages_landing_landing_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 7241)).then(m => m.LandingPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_onboarding_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/onboarding/login/login.module */ 2486)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_onboarding_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/onboarding/register/register.module */ 5725)).then(m => m.RegisterPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 7213)).then(m => m.ContactPageModule)
    },
    {
        path: 'blog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blog/blog.module */ 6238)).then(m => m.BlogPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_cart_cart_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cart/cart.module */ 5927)).then(m => m.CartPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_profile_profile_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts-src_app_services_profile_profile_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
    },
    {
        path: 'admin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin/admin.module */ 1496)).then(m => m.AdminPageModule)
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_js"), __webpack_require__.e("default-src_app_pages_products_products_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/products/products.module */ 5712)).then(m => m.ProductsPageModule)
    },
    {
        path: 'download-app',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_download-app_download-app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/download-app/download-app.module */ 1796)).then(m => m.DownloadAppPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 8877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/onboarding/login.service */ 3145);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);






// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';


let AppComponent = class AppComponent {
    constructor(loginService, platform, router, storage) {
        this.loginService = loginService;
        this.platform = platform;
        this.router = router;
        this.storage = storage;
        this.initializeApp();
    }
    initializeApp() {
        this.storage.create();
        this.loginService.checkToken().then(() => {
            this.getAuthState();
        });
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault();
            // this.splashScreen.hide();
        });
    }
    /**
     * Get the Client's Authentication State
     */
    getAuthState() {
        // State for the User. If Authentication State == False, the app reverts back to the landing page
        this.loginService.authenticationState.subscribe((state) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (state) {
                this.router.navigate(['home']);
            }
            else {
                this.router.navigate(['']);
            }
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jwtOptionsFactory": () => (/* binding */ jwtOptionsFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/custom-compontents.module */ 5274);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 8166);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);










// import { InAppBrowser } from '@ionic-native/in-app-browser';





// For JWT
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        // whitelistedDomains: ['localhost:42dfc00']
    };
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__.JwtModule.forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__.JWT_OPTIONS,
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage],
                }
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule.forRoot(),
            // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule
        ],
        providers: [
            // InAppBrowser,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5274:
/*!*********************************************************!*\
  !*** ./src/app/components/custom-compontents.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": () => (/* binding */ CustomComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mobile_top_toolbar_mobile_top_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-top-toolbar/mobile-top-toolbar.component */ 7339);
/* harmony import */ var _favorite_icon_favorite_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-icon/favorite-icon.component */ 4071);
/* harmony import */ var _ratings_stars_ratings_stars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratings-stars/ratings-stars.component */ 7177);







let CustomComponentsModule = class CustomComponentsModule {
};
CustomComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot()
        ],
        declarations: [
            _mobile_top_toolbar_mobile_top_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.MobileTopToolbarComponent,
            _favorite_icon_favorite_icon_component__WEBPACK_IMPORTED_MODULE_1__.FavoriteIconComponent,
            _ratings_stars_ratings_stars_component__WEBPACK_IMPORTED_MODULE_2__.RatingsStarsComponent
        ],
        exports: [
            _mobile_top_toolbar_mobile_top_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.MobileTopToolbarComponent,
            _favorite_icon_favorite_icon_component__WEBPACK_IMPORTED_MODULE_1__.FavoriteIconComponent,
            _ratings_stars_ratings_stars_component__WEBPACK_IMPORTED_MODULE_2__.RatingsStarsComponent
        ]
    })
], CustomComponentsModule);



/***/ }),

/***/ 4071:
/*!*********************************************************************!*\
  !*** ./src/app/components/favorite-icon/favorite-icon.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteIconComponent": () => (/* binding */ FavoriteIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _favorite_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-icon.component.html?ngResource */ 5582);
/* harmony import */ var _favorite_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-icon.component.scss?ngResource */ 4637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products/products.service */ 6423);






let FavoriteIconComponent = class FavoriteIconComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.favoriteState = "unfavorited";
        this.iconName = 'heart';
        this.favoritedAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.unFavoritedAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngAfterViewInit() {
        // console.clear();
        // console.log(this.productID);
    }
    ngOnInit() {
    }
    toggleLikeState() {
        if (this.favoriteState === 'unfavorited') {
            this.setFavoriteStateOn();
            // return this.jobs.favoriteThisJob(this.job);
        }
        else {
            this.setFavoriteStateOff();
            // return this.jobs.unFavoriteThisJob(this.job);
        }
    }
    setFavoriteStateOn() {
        this.productsService.favoriteProduct(this.id, this.email)
            .subscribe(data => {
            this.favoriteState = 'favorited';
            console.log('Favorited:' + data);
            this.favoritedAnimation.emit({
                favorited: true,
            });
            return;
        });
    }
    setFavoriteStateOff() {
        this.productsService.unFavoriteProduct(this.id, this.email)
            .subscribe(data => {
            this.favoriteState = 'unfavorited';
            console.log('Unfavorited:' + data);
            this.unFavoritedAnimation.emit({
                favorited: false,
            });
            return;
        });
    }
};
FavoriteIconComponent.ctorParameters = () => [
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService }
];
FavoriteIconComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    favoritedAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    unFavoritedAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
FavoriteIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favorite-icon',
        template: _favorite_icon_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('heart', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('unfavorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    color: '#999',
                    opacity: '1',
                    transform: 'scale(0.9)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    // color: '#0000c4',
                    opacity: '1',
                    transform: 'scale(1)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('unfavorited <=> favorited', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('100ms ease-out'))
            ])
        ],
        styles: [_favorite_icon_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoriteIconComponent);



/***/ }),

/***/ 7339:
/*!*******************************************************************************!*\
  !*** ./src/app/components/mobile-top-toolbar/mobile-top-toolbar.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileTopToolbarComponent": () => (/* binding */ MobileTopToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mobile_top_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-top-toolbar.component.html?ngResource */ 5827);
/* harmony import */ var _mobile_top_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-top-toolbar.component.scss?ngResource */ 8395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/onboarding/login.service */ 3145);







let MobileTopToolbarComponent = class MobileTopToolbarComponent {
    constructor(loginService, alertController, router) {
        this.loginService = loginService;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.loginService.authenticationState.subscribe((data) => {
            this.authState = data;
        });
    }
    /**
    * Direct user to Login Page from Profile page
    */
    goToLoginPage() {
        this.router.navigateByUrl('/login');
    }
    /**
     * Log the User OUT
     */
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Logout?',
                message: 'Are you sure you want to log out?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button'
                    },
                    {
                        text: 'Logout',
                        id: 'confirm-button',
                        handler: () => {
                            this.loginService.logout();
                            return;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MobileTopToolbarComponent.ctorParameters = () => [
    { type: src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
MobileTopToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mobile-top-toolbar',
        template: _mobile_top_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mobile_top_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MobileTopToolbarComponent);



/***/ }),

/***/ 7177:
/*!*********************************************************************!*\
  !*** ./src/app/components/ratings-stars/ratings-stars.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsStarsComponent": () => (/* binding */ RatingsStarsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ratings_stars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings-stars.component.html?ngResource */ 7545);
/* harmony import */ var _ratings_stars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings-stars.component.scss?ngResource */ 3949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let RatingsStarsComponent = class RatingsStarsComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this.rating);
    }
};
RatingsStarsComponent.ctorParameters = () => [];
RatingsStarsComponent.propDecorators = {
    rating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['rating',] }]
};
RatingsStarsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-ratings-stars',
        template: _ratings_stars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ratings_stars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingsStarsComponent);



/***/ }),

/***/ 3145:
/*!******************************************************!*\
  !*** ./src/app/services/onboarding/login.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7418);









let LoginService = class LoginService {
    constructor(http, storage, helper, alertController, toastController, loadingController) {
        this.http = http;
        this.storage = storage;
        this.helper = helper;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.TOKEN_KEY = 'access_token';
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.userType = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
        this.userFullName = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
        this.userEmail = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
        this.userPicture = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('none');
        this.userCartLength = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    /**
     * Get all the featured posts for the Landing Page
     * @returns Landing Page Featured Products Observerable
     */
    login(user, userStayLoggedIn) {
        return this.http.post(`${this.BACKEND_URL}/auth/login`, {
            email: user.email,
            password: user.password
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(res => {
            if (!res) {
                console.log('There was no response.');
            }
            if (userStayLoggedIn) {
                this.storage.set(this.TOKEN_KEY, res['token']);
                this.user = this.helper.decodeToken(res['token']);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(e => {
            console.error(e);
            if (e.error.msg === 'There was an error on the BackEnd') {
                this.loginErrorAlert('Incorrect Email/Password', 'The email and password don\'t match.');
            }
            else if (e.error.msg === 'The user does not exist') {
                this.loginErrorAlert('Nonexistent User Account', 'There is no account with that email address.');
            }
            else if (e.error.msg === 'Bad Password') {
                this.loginErrorAlert('Bad Password', 'The password you entered for this email is incorrect.');
            }
            else if (e.error.msg === 'You need to send email and password') {
                this.loginErrorAlert('Forgot Email or Password', 'Please include an Email or a Password');
            }
            else if (e.message.startsWith('Http failure response')) {
                this.loginErrorAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
            }
            else {
                this.loginErrorAlert('Email/Password Error', 'Please try again.');
            }
            throw new Error(e);
        }))
            .subscribe(data => {
            this.loginSuccess(data);
        });
    }
    /**
     * Handle Login Errors
     */
    handleLoginErrors() {
    }
    /**
     *
     */
    logout() {
        this.storage.remove(this.TOKEN_KEY).then((token) => {
            console.log('Logging out...');
            this.user = null;
            this.authenticationState.next(false);
            this.userType.next('none');
            this.userFullName.next('none');
            // this.userPicture.next('none');
            this.userEmail.next('none');
            window.location.reload();
        });
    }
    /**
     *
     * @param header
     * @param msg
     */
    loginErrorAlert(header, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'danger-alert',
                header,
                message: msg,
                buttons: [{
                        text: 'OK'
                    }]
            });
            yield alert.present();
        });
    }
    loginSuccess(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Create Toast
            const toast = yield this.toastController.create({
                message: 'You have successfully logged in!',
                cssClass: 'success-toast',
                duration: 3000,
            });
            // Create Loading
            const loading = yield this.loadingController.create({
                cssClass: 'login-loading',
                message: 'Logging in ..',
                duration: 2000
            });
            this.userFullName.next(data['fullName']);
            this.userPicture.next(data['picture']);
            this.userEmail.next(data['email']);
            // TODO wire Cart Length to Mobile Tabs bar and Desktop Toolbar
            this.authenticationState.next(true);
            loading.present();
            loading.onDidDismiss()
                .then(() => {
                toast.present();
                return;
            });
        });
    }
    /**  looks up our storage for a valid JWT and if found, changes our authenticationState
    */
    checkToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Checking Token');
            this.storage.get(this.TOKEN_KEY).then(token => {
                if (token) {
                    const decoded = this.helper.decodeToken(token);
                    const isExpired = this.helper.isTokenExpired(token);
                    // Check to see if token has expired.
                    if (!isExpired) {
                        this.user = decoded;
                        if ((decoded.email !== '')) {
                            this.userType.next('user');
                            this.userPicture.next(decoded.picture);
                            this.userEmail.next(decoded.email);
                            this.userFullName.next(decoded.fullName);
                            this.authenticationState.next(true);
                        }
                    }
                    else {
                        console.log('Token Removed from Storage');
                        this.storage.remove(this.TOKEN_KEY);
                    }
                }
            });
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__.JwtHelperService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 6423:
/*!*******************************************************!*\
  !*** ./src/app/services/products/products.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9045);





let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
        this.BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    getAllProductsForLandingSearch() {
        return this.http.get(`${this.BACKEND_URL}/products/get-all-products`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.reduce)((acc, value, i) => {
            // let {_id, title} = value;
            return [...value.map(product => ({
                    _id: product._id,
                    price: product.price,
                    picture: "https://www.freepnglogos.com/uploads/playstation-png-logo/playstation-png-logo-0.png",
                    title: product.title.toLowerCase(),
                }))];
        }, []));
    }
    getFeaturedProductsForLanding() {
        return this.http.get(`${this.BACKEND_URL}/products/get-featured-products`);
    }
    getAllProducts() {
        return this.http.get(`${this.BACKEND_URL}/products/get-all-products`);
    }
    getProductInfo(id) {
        return this.http.post(`${this.BACKEND_URL}/products/get-product-info`, { _id: id });
    }
    favoriteProduct(id, email) {
        return this.http.post(`${this.BACKEND_URL}/products/favorite-product`, { _id: id, email });
    }
    unFavoriteProduct(id, email) {
        return this.http.post(`${this.BACKEND_URL}/products/unfavorite-product`, { _id: id, email });
    }
    getCart(email) {
        return this.http.post(`${this.BACKEND_URL}/products/get-cart`, { email });
    }
    addToCart(id, email) {
        return this.http.post(`${this.BACKEND_URL}/products/add-to-cart`, { _id: id, email });
    }
    removeFromCart(id, email) {
        return this.http.post(`${this.BACKEND_URL}/products/remove-from-cart`, { _id: id, email });
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const ip = '10.0.1.16';
const mobileIP = '172.20.10.2';
const baseUrl = `http://${ip}:3000`;
const environment = {
    production: false,
    url: baseUrl,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7001,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8877:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4637:
/*!**********************************************************************************!*\
  !*** ./src/app/components/favorite-icon/favorite-icon.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-button {\n  --background: none;\n  --box-shadow: none;\n}\n\nion-icon {\n  z-index: 9999;\n  font-size: 2em;\n  position: relative;\n  color: red;\n  left: 10px;\n  float: right;\n}\n\n.favorited-caption {\n  color: #c00000;\n  font-size: 0.6em;\n  opacity: 0;\n  display: inline-block;\n  animation: favorite-caption-fade-in 1s ease forwards;\n}\n\n@keyframes favorite-caption-fade-in {\n  0% {\n    opacity: 0;\n    transform: translateX(-4px);\n  }\n  70% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxvREFBQTtBQUNKOztBQUNFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFFSjtFQUFFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBRUo7RUFBRTtJQUNFLFVBQUE7SUFDQSxhQUFBO0VBRUo7QUFDRiIsImZpbGUiOiJmYXZvcml0ZS1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24taWNvbiB7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJlZDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBcbiAgfVxuICAuZmF2b3JpdGVkLWNhcHRpb24ge1xuICAgIGNvbG9yOiAjYzAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYW5pbWF0aW9uOiBmYXZvcml0ZS1jYXB0aW9uLWZhZGUtaW4gMXMgZWFzZSBmb3J3YXJkcztcbiAgfVxuICBAa2V5ZnJhbWVzIGZhdm9yaXRlLWNhcHRpb24tZmFkZS1pbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";

/***/ }),

/***/ 8395:
/*!********************************************************************************************!*\
  !*** ./src/app/components/mobile-top-toolbar/mobile-top-toolbar.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-toolbar {\n  position: fixed;\n  width: 100%;\n  padding: 0 0.5em;\n  --background: #fff;\n  box-shadow: 1px 1px 10px #dedede;\n}\n\n#top-bar-login-button {\n  background: #008BFF;\n  --color: white;\n  border-radius: 5px;\n}\n\n#top-bar-logout-button {\n  background: none;\n  --color: #c50938;\n  --border-color: #c50938;\n  --border-style: solid;\n  --border-width: 2px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS10b3AtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoibW9iaWxlLXRvcC10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2RlZGVkZTtcblxufVxuI3RvcC1iYXItbG9naW4tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4QkZGO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiN0b3AtYmFyLWxvZ291dC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLS1jb2xvcjogI2M1MDkzODtcbiAgICAtLWJvcmRlci1jb2xvcjogI2M1MDkzODtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */";

/***/ }),

/***/ 3949:
/*!**********************************************************************************!*\
  !*** ./src/app/components/ratings-stars/ratings-stars.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#ratings-stars-wrapper {\n  width: 200px;\n}\n#ratings-stars-wrapper img {\n  height: 20px;\n  width: 20px;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZ3Mtc3RhcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNSIiwiZmlsZSI6InJhdGluZ3Mtc3RhcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmF0aW5ncy1zdGFycy13cmFwcGVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 5582:
/*!**********************************************************************************!*\
  !*** ./src/app/components/favorite-icon/favorite-icon.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<ion-button (click)=\"toggleLikeState()\">\n    <p \n        *ngIf=\"this.favoriteState === 'favorited'\"\n        class=\"favorited-caption\"\n    >\n    FAVORITED\n    </p>\n    <ion-icon \n    tappable \n    [@heart]=\"this.favoriteState\" \n    [name]=\"iconName\">\n    </ion-icon>\n</ion-button>";

/***/ }),

/***/ 5827:
/*!********************************************************************************************!*\
  !*** ./src/app/components/mobile-top-toolbar/mobile-top-toolbar.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-button id=\"top-bar-logo\">\n            <img height=\"30\" src=\"../../../assets/placeholders/placeholder-logo.svg\" alt=\"User Profile Icon\">\n        </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-button *ngIf=\"!this.authState\" id=\"top-bar-login-button\" (click)=\"goToLoginPage()\">\n            Log in\n        </ion-button>\n        <ion-button *ngIf=\"this.authState\" id=\"top-bar-logout-button\" (click)=\"logout()\">\n            Log out\n        </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n";

/***/ }),

/***/ 7545:
/*!**********************************************************************************!*\
  !*** ./src/app/components/ratings-stars/ratings-stars.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"ratings-stars-wrapper\">\n    \n    <!-- Rating = 0 -->\n    <div *ngIf=\"this.rating == 0\">\n      <p>No Rating</p>\n    </div>\n\n    <!-- Rating = 1.0 - 1.49 -->\n    <div *ngIf=\"this.rating >= 1 && 1.49 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Star Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Star Outline Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Star Outline Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Star Outline Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Star Outline Icon\">\n    </div>\n\n    <!-- Rating = 1.5 - 1.99 -->\n    <div *ngIf=\"this.rating >= 1.5 && 1.99 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-half-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 2.0 - 2.49 -->\n    <div *ngIf=\"this.rating >= 2.0 && 2.49 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 2.5 - 2.99 -->\n    <div *ngIf=\"this.rating >= 2.5 && 2.99 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-half-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 3.0 - 3.49 -->\n    <div *ngIf=\"this.rating >= 3.0 && 3.49 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 3.5 - 3.99 -->\n    <div *ngIf=\"this.rating >= 3.5 && 3.99 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-half-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 4.0 - 4.49 -->\n    <div *ngIf=\"this.rating >= 4.0 && 4.49 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-outline.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 4.5 - 4.99 -->\n    <div *ngIf=\"this.rating >= 4.5 && 4.79 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-half-full.svg\" alt=\"Full Start Icon\">\n    </div>\n\n    <!-- Rating = 5.0 -->\n    <div *ngIf=\"this.rating >= 4.8 && 5.0 >= this.rating\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n      <img src=\"../../../assets/icons/star-full.svg\" alt=\"Full Start Icon\">\n    </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map