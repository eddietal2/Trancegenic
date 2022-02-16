"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_onboarding_login_login_module_ts"],{

/***/ 8804:
/*!****************************************************************!*\
  !*** ./src/app/pages/onboarding/login/login-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 5319);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 2486:
/*!********************************************************!*\
  !*** ./src/app/pages/onboarding/login/login.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 8775);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 8804);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 5319);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 5319:
/*!******************************************************!*\
  !*** ./src/app/pages/onboarding/login/login.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 7838);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/onboarding/login.service */ 3145);
/* harmony import */ var src_app_services_onboarding_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/onboarding/register.service */ 4604);









let LoginPage = class LoginPage {
    constructor(formBuilder, loginService, registerService, router, alertController) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.registerService = registerService;
        this.router = router;
        this.alertController = alertController;
        this.forgotPasswordModal = false;
        this.config = {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: true,
            pagination: { clickable: true },
            scrollbar: { draggable: true },
        };
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
    }
    ngOnInit() {
        this.initializeFormGroups();
    }
    /**
     *
     */
    login(email, password) {
        let user = {
            email,
            password
        };
        this.loginService.login(user, this.userStayLoggedIn);
    }
    stayLoggedIn(e) {
        console.log(e.detail);
        let checkBoxValue = e.detail;
        if (checkBoxValue) {
            this.userStayLoggedIn = true;
            return;
        }
        else {
            this.userStayLoggedIn = false;
            return;
        }
    }
    /**
     *
     */
    goToRegisterPage() {
        this.router.navigateByUrl("/register");
        return;
    }
    /**
     *
     */
    goHome() {
        this.router.navigateByUrl("/home");
        return;
    }
    /**
     *
     */
    initializeFormGroups() {
        this.loginForm = this.formBuilder.group({
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
        // Slide 1 / Enter Email
        this.enterEmailForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
        });
        // Slide 2 / Enter Code
        this.enterCodeForm = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        // Slide 3 / New Password
        this.newPasswordForm = this.formBuilder.group({
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
            reTypeNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
        });
    }
    /**
     *
     */
    showForgotPasswordModal() {
        this.forgotPasswordModal = true;
        return;
    }
    /**
     *
     */
    closeForgotPasswordModal() {
        this.forgotPasswordModal = false;
        return;
    }
    /**
     *
     */
    resendCode() {
    }
    /**
     *
     */
    onSwiper(swiper) {
        console.log(swiper);
        return this.swiper = swiper;
    }
    /**
     *
     */
    onSlideChange() {
    }
    changeName() {
    }
    onSubmit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: src_app_services_onboarding_register_service__WEBPACK_IMPORTED_MODULE_3__.RegisterService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewEncapsulation.None,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 5134:
/*!*******************************************************************!*\
  !*** ./src/app/pages/onboarding/login/login.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n/* 3D Effects */\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n/**\n * Swiper 7.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 24, 2021\n */\n@font-face {\n  font-family: swiper-icons;\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color:#007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide, .swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight, .swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n#login-page-form-wrapper {\n  box-shadow: 1px 1px 10px #dedede;\n  padding: 3em;\n  border-radius: 5px;\n  margin-top: 100px;\n}\n@media screen and (max-width: 996px) {\n  #login-page-form-wrapper {\n    box-shadow: none;\n  }\n}\n#forgot-password-button {\n  margin: 0 auto;\n  --background: none;\n  --border-style: solid;\n  --border-width: 2px;\n  --border-color: #999;\n  --box-shadow: none;\n  --color: #999;\n  border-radius: 2px;\n}\n#login-button {\n  --background: none;\n  height: 60px;\n}\n#register-button {\n  --background: none;\n  height: 60px;\n}\n.swiper {\n  width: 100%;\n  height: 500px;\n}\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  margin: 0 auto;\n  /* Center slide text vertically */\n}\n.swiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.swiper-slide img ion-item {\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLnNjc3MiLCJsb2dpbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0c0VBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0FDSEY7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDRkY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVBOztFQUVFLGlDQUFBO0FDQ0Y7QURDQTtFQUNFLG1CQUFBO0FDRUY7QURERTtFQUNFLG1CQUFBO0FDR0o7QURBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7QUNJRjtBREZBLGdCQUFBO0FBRUU7O0VBRUUsWUFBQTtBQ0lKO0FEREU7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FDR0o7QURDQSxlQUFBO0FBRUU7RUFFRSxtQkFBQTtBQ0FKO0FERUU7Ozs7Ozs7O0VBUUUsNEJBQUE7QUNBSjtBREVFOzs7OztFQUtFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUU7RUFDRSwrQkFBQTtBQ0FKO0FERUU7RUFDRSxnRkFBQTtBQ0FKO0FERUU7RUFDRSxpRkFBQTtBQ0FKO0FERUU7RUFDRSwrRUFBQTtBQ0FKO0FERUU7RUFDRSxrRkFBQTtBQ0FKO0FESUEsYUFBQTtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FDQTlCO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURFRTtFQUNFLDhCQUFBO0FDQUo7QURJRTtFQUNFLDZCQUFBO0FDREo7QURLRTtFQUNFLDZCQUFBO0FDRko7QURNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUk7RUFDRSx5REFBQTtBQ0pOO0FETUk7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNKTjtBRFFJO0VBQ0Usd0RBQUE7QUNOTjtBRFFJO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0FDTk47QURVRTtFQUNFLGdDQUFBO0FDUko7QUM1SkE7Ozs7Ozs7Ozs7RUFBQTtBQVlBO0VBQVcseUJBQUE7RUFBeUIsNnJFQUFBO0VBQTZyRSxnQkFBQTtFQUFnQixrQkFBQTtBRGtLanZFO0FDbEttd0U7RUFBTSw0QkFBQTtBRHFLendFO0FDcktzeUU7RUFBUSxpQkFBQTtFQUFpQixrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixnQkFBQTtFQUFnQixVQUFBO0VBQVUsVUFBQTtBRCtLNzRFO0FDL0t1NUU7RUFBaUMsc0JBQUE7QURtTHg3RTtBQ25MODhFO0VBQWdCLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxZQUFBO0VBQVksVUFBQTtFQUFVLGFBQUE7RUFBYSw4QkFBQTtFQUE4Qix1QkFBQTtBRDZMNWpGO0FDN0xtbEY7RUFBOEMsaUNBQUE7QURpTWpvRjtBQ2pNZ3FGO0VBQXVCLG1CQUFBO0FEcU12ckY7QUNyTTBzRjtFQUF1QyxtQkFBQTtBRHlNanZGO0FDek1vd0Y7RUFBYyxjQUFBO0VBQWMsV0FBQTtFQUFXLFlBQUE7RUFBWSxrQkFBQTtFQUFrQiw4QkFBQTtBRGlOejBGO0FDak51MkY7RUFBOEIsa0JBQUE7QURxTnI0RjtBQ3JOdTVGO0VBQW9ELFlBQUE7QUR5TjM4RjtBQ3pOdTlGO0VBQW1DLHVCQUFBO0VBQXVCLHNDQUFBO0FEOE5qaEc7QUM5TnNqRztFQUFzRCxtQkFBQTtBRGtPNW1HO0FDbE8rbkc7RUFBeVEsNEJBQUE7QURzT3g0RztBQ3RPbzZHO0VBQXNMLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxNQUFBO0VBQU0sV0FBQTtFQUFXLFlBQUE7RUFBWSxvQkFBQTtFQUFvQixXQUFBO0FEZ1BwcUg7QUNoUCtxSDtFQUFnQywrQkFBQTtBRG9QL3NIO0FDcFAwdUg7RUFBcUMsZ0ZBQUE7QUR3UC93SDtBQ3hQczFIO0VBQXNDLGlGQUFBO0FENFA1M0g7QUM1UG84SDtFQUFvQywrRUFBQTtBRGdReCtIO0FDaFE4aUk7RUFBdUMsa0ZBQUE7QURvUXJsSTtBQ3BROHBJO0VBQWlDLGNBQUE7RUFBYyxxQkFBQTtFQUFxQix3QkFBQTtBRDBRbHVJO0FDMVEwdkk7RUFBb0QsYUFBQTtBRDhROXlJO0FDOVEyekk7RUFBK0MsOEJBQUE7QURrUjEySTtBQ2xSdzRJO0VBQW1ELDZCQUFBO0FEc1IzN0k7QUN0Unc5STtFQUFpRCw2QkFBQTtBRDBSemdKO0FDMVJzaUo7RUFBeUMsV0FBQTtFQUFXLGNBQUE7RUFBYyxXQUFBO0FEZ1N4bUo7QUNoU21uSjtFQUE2RSx5REFBQTtBRG9TaHNKO0FDcFN5dko7RUFBMkQsWUFBQTtFQUFZLGVBQUE7RUFBZSwwQ0FBQTtBRDBTLzBKO0FDMVN5M0o7RUFBMkUsd0RBQUE7QUQ4U3A4SjtBQzlTNC9KO0VBQXlELFdBQUE7RUFBVyxjQUFBO0VBQWMsMkNBQUE7QURvVDlrSztBQ3BUeW5LO0VBQStDLGdDQUFBO0FEd1R4cUs7QUFqVUE7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBb1VGO0FBaFVBO0VBQ0U7SUFDRSxnQkFBQTtFQW1VRjtBQUNGO0FBaFVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFrVUo7QUFoVUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFtVUo7QUFoVUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFtVUo7QUE5VEE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQWlVSjtBQS9UQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUlBLGNBQUE7RUFHQSxpQ0FBQTtBQTZURjtBQS9TQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBa1RGO0FBaFRFO0VBQ0UsZ0JBQUE7QUFrVEoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3dpcGVyLXZhcnMuc2Nzcyc7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpXG4gICAgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOnJvb3Qge1xuICAtLXN3aXBlci10aGVtZS1jb2xvcjogI3skdGhlbWVDb2xvcn07XG59XG4uc3dpcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cbiAgei1pbmRleDogMTtcbn1cbi5zd2lwZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLnN3aXBlci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG4uc3dpcGVyLXBvaW50ZXItZXZlbnRzIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgJi5zd2lwZXItdmVydGljYWwge1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gIH1cbn1cbi5zd2lwZXItc2xpZGUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi8qIEF1dG8gSGVpZ2h0ICovXG4uc3dpcGVyLWF1dG9oZWlnaHQge1xuICAmLFxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuc3dpcGVyLXdyYXBwZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xuICB9XG59XG5cbi8qIDNEIEVmZmVjdHMgKi9cbi5zd2lwZXItM2Qge1xuICAmLFxuICAmLnN3aXBlci1jc3MtbW9kZSAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG4gIH1cbiAgLnN3aXBlci13cmFwcGVyLFxuICAuc3dpcGVyLXNsaWRlLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuICAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3cge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG59XG5cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xuICB9XG59XG4uc3dpcGVyLWhvcml6b250YWwuc3dpcGVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICB9XG59XG4uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgfVxufVxuLnN3aXBlci1jZW50ZXJlZCB7XG4gID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG9yZGVyOiA5OTk5O1xuICB9XG4gICYuc3dpcGVyLWhvcml6b250YWwge1xuICAgID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSk7XG4gICAgfVxuICAgID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpO1xuICAgIH1cbiAgfVxuICAmLnN3aXBlci12ZXJ0aWNhbCB7XG4gICAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpO1xuICAgIH1cbiAgICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcbiAgICB9XG4gIH1cblxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXIgY2VudGVyO1xuICB9XG59XG5cblxuXG4iLCJAaW1wb3J0ICdzd2lwZXIvc2Nzcyc7XG5AaW1wb3J0IFwifnN3aXBlci9jc3NcIjtcblxuI2xvZ2luLXBhZ2UtZm9ybS13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDNlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NnB4KSB7XG4gICNsb2dpbi1wYWdlLWZvcm0td3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4jZm9yZ290LXBhc3N3b3JkLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWNvbG9yOiAjOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbiNsb2dpbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgXG59XG4jcmVnaXN0ZXItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG59XG5cbi8vIFN3aXBlclxuLnN3aXBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbi5zd2lwZXItc2xpZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLy8gYmFja2dyb3VuZDogI2UzZjFlZDtcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzk5OTtcbiAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuXG4gIC8qIENlbnRlciBzbGlkZSB0ZXh0IHZlcnRpY2FsbHkgKi9cbiAgLy8gZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8vIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvLyBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLy8gLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAvLyAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLy8gLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLy8gLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn0iLCIvKipcbiAqIFN3aXBlciA3LjMuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBOb3ZlbWJlciAyNCwgMjAyMVxuICovXG5cbkBmb250LWZhY2V7Zm9udC1mYW1pbHk6c3dpcGVyLWljb25zO3NyYzp1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJyk7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfTpyb290ey0tc3dpcGVyLXRoZW1lLWNvbG9yOiMwMDdhZmZ9LnN3aXBlcnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTtib3gtc2l6aW5nOmNvbnRlbnQtYm94fS5zd2lwZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItd3JhcHBlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMHB4LDAsMCl9LnN3aXBlci1wb2ludGVyLWV2ZW50c3t0b3VjaC1hY3Rpb246cGFuLXl9LnN3aXBlci1wb2ludGVyLWV2ZW50cy5zd2lwZXItdmVydGljYWx7dG91Y2gtYWN0aW9uOnBhbi14fS5zd2lwZXItc2xpZGV7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtfS5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5re3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItYXV0b2hlaWdodCwuc3dpcGVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZXtoZWlnaHQ6YXV0b30uc3dpcGVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVye2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0fS5zd2lwZXItM2QsLnN3aXBlci0zZC5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVye3BlcnNwZWN0aXZlOjEyMDBweH0uc3dpcGVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci0zZCAuc3dpcGVyLXdyYXBwZXJ7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3csLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3d7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSl9LnN3aXBlci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b217YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye292ZXJmbG93OmF1dG87c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9LnN3aXBlci1jc3MtbW9kZT4uc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc3dpcGVyLWNzcy1tb2RlPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRle3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0IHN0YXJ0fS5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnl9LnN3aXBlci12ZXJ0aWNhbC5zd2lwZXItY3NzLW1vZGU+LnN3aXBlci13cmFwcGVye3Njcm9sbC1zbmFwLXR5cGU6eSBtYW5kYXRvcnl9LnN3aXBlci1jZW50ZXJlZD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXtjb250ZW50OicnO2ZsZXgtc2hyaW5rOjA7b3JkZXI6OTk5OX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcj4uc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxke21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpfS5zd2lwZXItY2VudGVyZWQuc3dpcGVyLWhvcml6b250YWw+LnN3aXBlci13cmFwcGVyOjpiZWZvcmV7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDoxcHg7d2lkdGg6dmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcil9LnN3aXBlci1jZW50ZXJlZC5zd2lwZXItdmVydGljYWw+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGR7bWFyZ2luLWJsb2NrLXN0YXJ0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKX0uc3dpcGVyLWNlbnRlcmVkLnN3aXBlci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXI6OmJlZm9yZXt3aWR0aDoxMDAlO21pbi13aWR0aDoxcHg7aGVpZ2h0OnZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpfS5zd2lwZXItY2VudGVyZWQ+LnN3aXBlci13cmFwcGVyPi5zd2lwZXItc2xpZGV7c2Nyb2xsLXNuYXAtYWxpZ246Y2VudGVyIGNlbnRlcn0iXX0= */";

/***/ }),

/***/ 7838:
/*!*******************************************************************!*\
  !*** ./src/app/pages/onboarding/login/login.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\">\n        <ion-col id=\"login-page-form-wrapper\"\n        size-xs=\"12\" size-sm=\"9\" size-md=\"7\" size-lg=\"5\" size-xl=\"4\">\n            <div class=\"ion-text-center\">\n                <img height=\"40\" src=\"../../../../assets/placeholders/placeholder-logo.svg\" alt=\"\" srcset=\"\">\n            </div>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                <ion-item>\n                  <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"email\" type=\"email\"></ion-input>\n                  <!-- Email Validation-->\n                  <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                          <div class=\"validation-error-message\"\n                          *ngIf=\"loginForm\n                            .get('email')\n                            .hasError(validation.type) && (loginForm.get('email')\n                            .dirty || loginForm.get('email').touched)\">\n                            {{ validation.message }}\n                          </div>\n                    </ng-container>\n                  </div>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required formControlName=\"password\" type=\"password\"></ion-input>\n                    <!-- Email Validation-->\n                    <div class=\"validation-errors\">\n                      <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                            <div class=\"validation-error-message\"\n                            *ngIf=\"loginForm\n                              .get('password')\n                              .hasError(validation.type) && (loginForm.get('password')\n                              .dirty || loginForm.get('password').touched)\">\n                              {{ validation.message }}\n                            </div>\n                      </ng-container>\n                    </div>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-checkbox (ionChange)=\"stayLoggedIn($event)\"></ion-checkbox>\n                  <span class=\"hr-spacer-1x\"></span>\n                  <ion-label>Stay Logged In?</ion-label>\n                </ion-item>\n            </form>\n              <div class=\"ion-text-center\">\n                <div class=\"spacer-3x\"></div>\n                <ion-button color=\"danger\" expand=\"full\" \n                (click)=\"login(loginForm.controls.email.value,\n                               loginForm.controls.password.value)\">\n                    Login\n                </ion-button>\n              </div>\n              <div class=\"ion-text-center\">\n                <div class=\"spacer-1x\"></div>\n                <ion-button color=\"success\" expand=\"full\" \n                (click)=\"goToRegisterPage()\">\n                    Register\n                </ion-button>\n              </div>\n              <div class=\"ion-text-center\">\n                <div class=\"spacer-1x\"></div>\n                <ion-button expand=\"full\" color=\"light\"\n                (click)=\"showForgotPasswordModal()\">\n                    Forgot Password\n                </ion-button>\n              </div>\n              <div class=\"spacer-1x\"></div>\n              <div class=\"ion-text-center\">\n                <ion-button expand=\"full\" color=\"dark\"\n                (click)=\"goHome()\">\n                    Cancel\n                </ion-button>\n              </div>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- Forget Password Modal -->\n  <ion-modal [isOpen]=\"this.forgotPasswordModal\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-title>Forgot Password</ion-title>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"closeForgotPasswordModal()\">\n            <ion-icon name=\"close-outline\"></ion-icon> \n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content id=\"forgot-password-modal\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-xs=\"11\">\n            <div class=\"spacer-5x ion-hide-lg-down\"></div>\n            <swiper \n                [config]=\"config\" \n                (swiper)=\"onSwiper($event)\">\n\n                <!-- Slide 1 / Email -->\n                <ng-template swiperSlide>\n                  <div>\n                    <p class=\"static-alert-yellow\">Please enter your email. A 4 digit code will be sent to it.</p>\n                    <form [formGroup]=\"enterEmailForm\" (ngSubmit)=changeName()>\n                      <ion-item>\n                        <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\n                        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                        <!-- Email Validation-->\n                        <div class=\"validation-errors\">\n                        <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                          <div class=\"validation-error-message\"\n                          *ngIf=\"enterEmailForm\n                            .get('email')\n                            .hasError(validation.type) && (enterEmailForm.get('email')\n                            .dirty || enterEmailForm.get('password').touched)\">\n                            {{ validation.message }}\n                          </div>\n                        </ng-container>\n                        </div>\n                      </ion-item>\n\n                      <div class=\"spacer-5x\"></div>\n                      <ion-item\n                        [disabled]=\"!this.enterEmailForm.valid\"\n                        (click)=\"swiper.slideNext()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Next</ion-label>\n                      </ion-item>\n                      <ion-item\n                        (click)=\"this.closeForgotPasswordModal()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Cancel</ion-label>\n                      </ion-item>\n                    </form>\n                  </div>\n                </ng-template>\n\n                <!-- Slide 2 / Enter Code -->\n                <ng-template swiperSlide>\n                  <div>\n                    <p class=\"static-alert-yellow\">Please enter 4 digit code that was sent to:<br> [email].</p>\n                    <form [formGroup]=\"enterCodeForm\" (ngSubmit)=\"onSubmit()\">\n                      <ion-item>\n                        <ion-label position=\"floating\">Code <ion-text color=\"danger\">*</ion-text></ion-label>\n                        <ion-input type=\"text\" name=\"text\"></ion-input>\n                      </ion-item>\n    \n                      <div class=\"spacer-5x\"></div>\n                      <ion-item\n                        [disabled]=\"!this.enterCodeForm.valid\"\n                        (click)=\"swiper.slideNext()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Next</ion-label>\n                      </ion-item>\n                      <ion-item\n                        (click)=\"this.resendCode()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Resend</ion-label>\n                      </ion-item>\n                      <ion-item\n                        (click)=\"this.closeForgotPasswordModal()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Cancel</ion-label>\n                      </ion-item>\n                      \n                    </form>\n                  </div>\n                </ng-template>\n\n                <!-- Slide 3 / New Password -->\n                <ng-template swiperSlide>\n                  <div>\n                    <p class=\"static-alert-red\">Create a new password. Has to be more than 7 characters, with one number.</p>\n                    <form [formGroup]=\"newPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                      <ion-item>\n                        <ion-label position=\"floating\">New Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                        <ion-input type=\"password\" formControlName=\"newPassword\"></ion-input>\n                        <!-- Password Validation-->\n                        <div class=\"validation-errors\">\n                        <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                          <div class=\"validation-error-message\"\n                          *ngIf=\"newPasswordForm\n                            .get('newPassword')\n                            .hasError(validation.type) && (newPasswordForm.get('newPassword')\n                            .dirty || newPasswordForm.get('newPassword').touched)\">\n                            {{ validation.message }}\n                          </div>\n                        </ng-container>\n                        </div>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label position=\"floating\">Re-type New Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                        <ion-input type=\"password\" formControlName=\"reTypeNewPassword\"></ion-input>\n                        <!-- Password Validation-->\n                        <div class=\"validation-errors\">\n                        <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                          <div class=\"validation-error-message\"\n                          *ngIf=\"newPasswordForm\n                            .get('reTypeNewPassword')\n                            .hasError(validation.type) && (newPasswordForm.get('reTypeNewPassword')\n                            .dirty || newPasswordForm.get('reTypeNewPassword').touched)\">\n                            {{ validation.message }}\n                          </div>\n                        </ng-container>\n                        </div>\n                      </ion-item>\n    \n                      <div class=\"spacer-5x\"></div>\n                      <ion-item\n                        [disabled]=\"!this.newPasswordForm.valid\"\n                        (click)=\"swiper.slideNext()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Next</ion-label>\n                      </ion-item>\n                      <ion-item\n                        (click)=\"this.closeForgotPasswordModal()\"\n                        class=\"ion-text-center\" \n                        lines=\"none\" \n                        button>\n                        <ion-label>Cancel</ion-label>\n                      </ion-item>\n                      \n                    </form>\n                  </div>\n                </ng-template>\n\n            </swiper>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n  </ion-modal>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_onboarding_login_login_module_ts.js.map