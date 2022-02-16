"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/landing/landing.module */ 7241)).then(m => m.LandingPageModule)
            },
            {
                path: 'about',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/about/about.module */ 8114)).then(m => m.AboutPageModule)
            },
            {
                path: 'products',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/products/products-routing.module */ 9653)).then(m => m.ProductsPageRoutingModule)
            },
            {
                path: 'blog',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/blog/blog.module */ 6238)).then(m => m.BlogPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/profile/profile-routing.module */ 1474)).then(m => m.ProfilePageRoutingModule)
            },
            {
                path: 'cart',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/cart/cart.module */ 5927)).then(m => m.CartPageModule)
            }
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/angular */ 8775);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_products_products_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/products/products.page */ 8898);
/* harmony import */ var _pages_blog_blog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/blog/blog.page */ 5128);
/* harmony import */ var _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/landing/landing.page */ 4808);
/* harmony import */ var _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/profile/profile.page */ 4629);
/* harmony import */ var _pages_cart_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/cart/cart.page */ 3278);
/* harmony import */ var _components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/custom-compontents.module */ 5274);















let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_11__.SwiperModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_7__.CustomComponentsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
            _pages_products_products_page__WEBPACK_IMPORTED_MODULE_2__.ProductsPage,
            _pages_blog_blog_page__WEBPACK_IMPORTED_MODULE_3__.BlogPage,
            _pages_landing_landing_page__WEBPACK_IMPORTED_MODULE_4__.LandingPage,
            _pages_profile_profile_page__WEBPACK_IMPORTED_MODULE_5__.ProfilePage,
            _pages_cart_cart_page__WEBPACK_IMPORTED_MODULE_6__.CartPage
        ]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 2069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/onboarding/login.service */ 3145);






let TabsPage = class TabsPage {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.tabBarStyling();
    }
    /**
     * Handles Tabbar Icon Styling
     */
    tabBarStyling() {
        this.router.events.subscribe(data => {
            console.log();
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                let cartIcon = document.getElementById('desktop-cart-icon');
                if (data.url == '/cart') {
                    cartIcon.style.color = '#3171e0';
                }
                if (data.url == '/products' || data.url == '/blog' || data.url == '/profile') {
                    let navWrapper = document.getElementById('nav-wrapper');
                    navWrapper.style.background = "#fff";
                }
                else {
                    let navWrapper = document.getElementById('nav-wrapper');
                    cartIcon.style.color = '#999';
                    navWrapper.style.background = "#none";
                }
            }
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 2069:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#logo {\n  height: 44px;\n  position: relative;\n  bottom: 7px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n\n#nav-wrapper {\n  box-shadow: 1px 1px 8px #dedede;\n  padding: 1em 23% 0 23%;\n  height: 60px;\n  background: #fff;\n  transition: 0.5s;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9999;\n}\n\n#nav-wrapper a {\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #999;\n  padding: 0.6em 0.4em;\n  text-decoration: none;\n}\n\n#nav-wrapper .active-link {\n  color: var(--ion-color-primary);\n  font-weight: 400;\n}\n\n#nav-wrapper #desktop-cart-icon {\n  margin-right: 4px;\n  position: relative;\n  top: 4px;\n}\n\n#nav-wrapper ion-badge {\n  position: relative;\n  top: 3px;\n}\n\nion-toolbar {\n  --background: none;\n  box-shadow: 1px 4px 10px #4c4c4c33;\n}\n\nion-icon {\n  color: #fff;\n  margin-bttom: 0.3em;\n}\n\nion-label {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFHQTtFQUNJLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUhSOztBQUtJO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQUhSOztBQUtJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFIUjs7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUhSOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtBQUpKOztBQVFBO0VBQ0ksV0FBQTtFQUNDLG1CQUFBO0FBTEw7O0FBUUE7RUFDSSxXQUFBO0FBTEoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUb29sYmFyXG4jbG9nbyB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNuYXYtd3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggI2RlZGVkZTtcbiAgICBwYWRkaW5nOiAxZW0gMjMlIDAgMjMlOyBcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gei1pbmRleDogOTk5OTtcblxuICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgcGFkZGluZzogMC42ZW0gMC40ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZS1saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgI2Rlc2t0b3AtY2FydC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgfVxuICAgIGlvbi1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCAjNGM0YzRjMzM7XG59XG5cbi8vIE1vYmlsZSBUYWJiYXJcbmlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAgbWFyZ2luLWJ0dG9tOiAwLjNlbTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-mobile-top-toolbar></app-mobile-top-toolbar>\n\n<ion-tabs>\n\n  <!-- Toolbar for Desktop -->\n  <div id=\"nav-wrapper\" class=\"ion-hide-lg-down\">\n    <img id=\"logo\"  src=\"../../assets/placeholders/placeholder-logo.svg\">\n    <ul class=\"ion-float-right\">\n    <a routerLink=\"/home\" routerLinkActive=\"active-link\">\n      Home\n    </a>\n    <a routerLink=\"/products\" routerLinkActive=\"active-link\">\n      Products\n    </a>\n    <!-- <a routerLink=\"/about\" routerLinkActive=\"active-link\">\n      About\n    </a> -->\n    <!-- <a routerLink=\"/blog\" routerLinkActive=\"active-link\">\n     Blog\n    </a> -->\n    <a routerLink=\"/profile\" routerLinkActive=\"active-link\">\n      Profile\n    </a>\n    <a routerLink=\"/cart\">\n      <ion-icon id=\"desktop-cart-icon\" name=\"cart\" style=\"font-size: 1.5em;\"></ion-icon>\n      <ion-badge color=\"primary\">0</ion-badge>\n    </a>\n    </ul>\n  </div>\n\n  <ion-tab-bar slot=\"bottom\" class=\"ion-hide-lg-up\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"Home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"products\">\n      <ion-icon name=\"pricetags-outline\"></ion-icon>\n      <ion-label>Products</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"blog\">\n      <ion-icon name=\"document-outline\"></ion-icon>\n      <ion-label>Blog</ion-label>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"cart\" size=\"large\"></ion-icon>\n      <ion-badge id=\"cart-count\" color=\"primary\">0</ion-badge>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map