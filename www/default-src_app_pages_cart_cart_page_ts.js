"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_cart_cart_page_ts"],{

/***/ 3278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page.html?ngResource */ 9631);
/* harmony import */ var _cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss?ngResource */ 9920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/onboarding/login.service */ 3145);
/* harmony import */ var src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products/products.service */ 6423);









let CartPage = class CartPage {
    constructor(ProductsService, loginService, 
    // private iab: InAppBrowser,
    alertController, router) {
        this.ProductsService = ProductsService;
        this.loginService = loginService;
        this.alertController = alertController;
        this.router = router;
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    }
    ngOnInit() {
        this.tryGetCart();
    }
    ngOnDestroy() {
        this.loginSub.unsubscribe();
        this.cartSub.unsubscribe();
    }
    /**
     * Get the Cart
     */
    tryGetCart() {
        this.loginSub = this.loginService.userEmail
            .subscribe((userEmail) => {
            this.cartSub = this.ProductsService.getCart(userEmail)
                .subscribe((cart) => {
                this.cart$.next(cart);
                this.cart$.subscribe((cart) => {
                    this.userEmail = userEmail;
                    this.cart = cart;
                    this.cartLength = cart.length;
                    console.log(cart);
                    return;
                });
            });
        });
    }
    /**
     * Complete Order
     */
    tryCompleteOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    goToLoginPage() {
        this.router.navigateByUrl('/login');
    }
    goBackToProductsPage() {
        this.router.navigateByUrl('/products');
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_services_products_products_service__WEBPACK_IMPORTED_MODULE_3__.ProductsService },
    { type: src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
CartPage.propDecorators = {
    ngOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['unloaded',] }]
};
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cart',
        template: _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartPage);



/***/ }),

/***/ 9920:
/*!******************************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "#add-to-cart-message {\n  background: #fff;\n  padding: 1em 1em 2em 1em;\n  text-align: center;\n  font-size: 1.3em;\n  border-radius: 5px;\n}\n#add-to-cart-message .cart-button {\n  height: 50px;\n  width: 50px;\n  --background: #999;\n  --border-radius: 50px;\n}\n#add-to-cart-message .cart-button ion-icon {\n  color: white;\n}\nion-footer .cart-not-empty {\n  height: 50px;\n  width: 100%;\n  --transition: 0.5s;\n  --border-radius: 0px;\n  --background: #b93333;\n  --ripple-color: rgb(255, 204, 128);\n}\nion-footer .cart-empty {\n  height: 50px;\n  width: 100%;\n  --transition: 0.5s;\n  --border-radius: 0px;\n  --background: #8b8b8b;\n  --color: #222;\n  --ripple-color: rgb(255, 204, 128);\n}\n.product-wrapper {\n  height: auto;\n  border-radius: 5px;\n  background: #f2f2f2;\n  margin-bottom: 10px;\n  padding: 1em;\n  opacity: 0;\n  transition: 0.5s;\n  animation: products-slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;\n}\n.product-wrapper .product-duration {\n  font-size: 0.7em;\n  color: #999;\n}\n.product-wrapper .product-category {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n.product-wrapper .product-reviews-length {\n  font-size: 0.6em;\n  color: #5a5a5a;\n}\n.product-wrapper .product-title {\n  height: 40px;\n  margin-bottom: 1em;\n}\n.product-wrapper .product-price {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #0055a5;\n  font-weight: 600;\n  color: #333;\n  padding: 0.3em;\n  width: 65px;\n  height: 18px;\n  margin-top: 1em;\n}\n.product-wrapper .product-photo {\n  background-image: url('placeholder-logo.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 200px;\n}\n.product-wrapper ion-toolbar ion-buttons .favorite-this-product-button {\n  --background: #ffbbbb;\n  --border-radius: 50px;\n  text-align: center;\n  border-radius: 57px;\n  height: 40px;\n  padding-left: 6px;\n}\n.product-wrapper ion-toolbar ion-buttons .cart-button {\n  height: 50px;\n  width: 50px;\n  --background: #999;\n  --border-radius: 50px;\n}\n.product-wrapper ion-toolbar ion-buttons .cart-button ion-icon {\n  color: white;\n}\n.product-wrapper ion-icon {\n  font-size: 2em;\n}\n.product-wrapper .product-message-green {\n  border-left: 4px solid red;\n}\n.product-wrapper .product-message-red {\n  border-left: 4px solid green;\n}\n@keyframes products-slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBUjtBQUVRO0VBQ0ksWUFBQTtBQUFaO0FBTUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FBSFI7QUFLSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBSFI7QUFPQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEVBQUE7QUFKSjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBSlI7QUFPSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUxSO0FBUUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFOUjtBQVNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBUFI7QUFjSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVpSO0FBY0k7RUFDSSw2Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVpSO0FBc0JZO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFwQmhCO0FBdUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBckJoQjtBQXVCZ0I7RUFDSSxZQUFBO0FBckJwQjtBQTRCSTtFQUNJLGNBQUE7QUExQlI7QUE2Qkk7RUFDSSwwQkFBQTtBQTNCUjtBQTZCSTtFQUNJLDRCQUFBO0FBM0JSO0FBK0JBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUE1Qk47RUE4QkU7SUFDSSxVQUFBO0lBQ0EsMEJBQUE7RUE1Qk47QUFDRiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtdG8tY2FydC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFlbSAxZW0gMmVtIDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNkZWRlZGU7XG5cbiAgICAuY2FydC1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIC5jYXJ0LW5vdC1lbXB0eSB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2I5MzMzMztcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6IHJnYigyNTUsIDIwNCwgMTI4KTtcbiAgICB9XG4gICAgLmNhcnQtZW1wdHkge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLXRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM4YjhiOGI7XG4gICAgICAgIC0tY29sb3I6ICMyMjI7XG4gICAgICAgIC0tcmlwcGxlLWNvbG9yOiByZ2IoMjU1LCAyMDQsIDEyOCk7XG4gICAgfVxufVxuXG4ucHJvZHVjdC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGFuaW1hdGlvbjogcHJvZHVjdHMtc2xpZGUtdXAgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpIGZvcndhcmRzO1xuXG4gICAgLnByb2R1Y3QtZHVyYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LXJldmlld3MtbGVuZ3RoIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgY29sb3I6ICM1YTVhNWE7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1yYXRpbmcge1xuXG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDU1YTU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cbiAgICAucHJvZHVjdC1waG90byB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BsYWNlaG9sZGVycy9wbGFjZWhvbGRlci1sb2dvLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIGJvdHRvbTogMDtcblxuICAgICAgICBpb24tYnV0dG9ucyB7XG5cbiAgICAgICAgICAgIC5mYXZvcml0ZS10aGlzLXByb2R1Y3QtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmJiYmI7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1N3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTk5O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1tZXNzYWdlLWdyZWVuIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LW1lc3NhZ2UtcmVkIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBncmVlbjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvZHVjdHMtc2xpZGUtdXAge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 9631:
/*!******************************************************!*\
  !*** ./src/app/pages/cart/cart.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-mobile-top-toolbar></app-mobile-top-toolbar>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-hide-lg-down\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <h1 class=\"desktop-page-header\">Cart</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"page-content-wrapper\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"8\">\n        <div class=\"spacer-5x\"></div>\n        <h1>\n          <ion-icon slot=\"start\" name=\"cart-outline\" size=\"large\"></ion-icon>\n          Cart <span *ngIf=\"this.userEmail\">({{cartLength}})</span>\n        </h1>\n        <div class=\"spacer-2x\"></div>\n        <h3 *ngIf=\"!this.userEmail\">Please Log in</h3>\n        <ion-button *ngIf=\"!this.userEmail\" (click)=\"goToLoginPage()\">\n          Login\n        </ion-button>\n        <ion-row *ngIf=\"cartLength == 0\">\n          <ion-col size=\"12\">\n            <div id=\"add-to-cart-message\">\n              <p>You have no products in your Cart. Press the 'Add To Cart'\n              button to add a Product to your Cart.\n              </p>\n              <div class=\"spacer-2x\"></div>\n              <ion-button class=\"cart-button\">\n                <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n              </ion-button>\n              <div class=\"spacer-2x\"></div>\n              <ion-button (click)=\"goBackToProductsPage()\">\n                <span class=\"hr-spacer-1x\"></span>\n                <ion-icon slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n                Go to Products Page\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row\n                *ngFor=\"let product of this.cart\"\n                style=\"width: 100%;\"\n                class=\"product-wrapper ion-justify-content-center\">\n                <ion-col (click)=\"this.goToProductPage()\" class=\"product-photo\" size=\"6\">\n          \n                </ion-col>\n                <ion-col size=\"6\">\n                  <div (click)=\"this.goToProductPage()\">\n                    <p class=\"product-price\">${{product.price}}</p>\n                    <h6 class=\"product-title\">{{product.title}}</h6>\n                    <app-ratings-stars [rating]=\"product.rating\"></app-ratings-stars>\n                    <p class=\"-product-duration\">Duration: {{product.duration}} Mins</p>\n                    <p class=\"product-category\"># {{product.category}}</p>\n                    <!-- user's favoriteProducts collection on has IDs -->\n                    <p class=\"product-reviews-length\">Reviews {{product.reviews}}</p>\n                  </div>\n                </ion-col>\n \n                <!-- Cart + Favorites Toolbar -->\n                <div class=\"spacer-3x\"></div>\n                <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                    <ion-button class=\"cart-button\" (click)=\"onClick()\">\n                      <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                  <ion-buttons slot=\"end\">\n                    <app-favorite-icon \n                    [id]=\"product._id\"\n                    [email]=\"this.userEmail\"\n                    ></app-favorite-icon>\n                  </ion-buttons>\n                </ion-toolbar> \n\n                </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- Complete Order Button on Mobile Devices -->\n<ion-footer>\n  <ion-button class=\"cart-not-empty\" *ngIf=\"this.cartLength > 0\" expand=\"full\" (click)=\"tryCompleteOrder()\">\n    Complete Order\n  </ion-button>\n  <ion-button [disabled]=\"true\" class=\"cart-empty\" *ngIf=\"this.cartLength == 0\" expand=\"full\" (click)=\"tryCompleteOrder()\">\n    Cart is Empty\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_cart_cart_page_ts.js.map