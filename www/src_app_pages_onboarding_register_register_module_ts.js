"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_onboarding_register_register_module_ts"],{

/***/ 6245:
/*!**********************************************************************!*\
  !*** ./src/app/pages/onboarding/register/register-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 7022);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 5725:
/*!**************************************************************!*\
  !*** ./src/app/pages/onboarding/register/register.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 6245);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 7022);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 7022:
/*!************************************************************!*\
  !*** ./src/app/pages/onboarding/register/register.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 7105);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 3527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_onboarding_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/onboarding/register.service */ 4604);








let RegisterPage = class RegisterPage {
    constructor(formBuilder, registerService, loadingController, router) {
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.loadingController = loadingController;
        this.router = router;
        this.registerSuccessModal = false;
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
        this.createRegisterFormBuilder();
        this.registerForm.statusChanges.subscribe(changes => {
            console.log(changes);
        });
    }
    createRegisterFormBuilder() {
        return this.registerForm = this.formBuilder.group({
            firstName: ['John', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            lastName: ['Doe', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['eddielacrosse2@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
            reTypePassword: ['Lacrosse2', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])]
        });
    }
    /**
     *
     */
    goToLoginPage() {
        this.router.navigateByUrl("/login");
    }
    /**
     *
     */
    tryRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Check to see if form is valid
            // Register user
            let registeredUser = {
                fullName: this.registerForm.controls.firstName.value
                    + ' '
                    + this.registerForm.controls.lastName.value,
                email: this.registerForm.controls.email.value,
                password: this.registerForm.controls.password.value,
            };
            this.registerSub = yield this.registerService.register(registeredUser);
            yield this.showSuccessModal();
            yield this.registerSub.unsubscribe();
        });
    }
    /**
     *
     */
    showSuccessModal() {
        return this.registerSuccessModal = true;
    }
    /**
     *
     */
    closeSuccessModal() {
        this.registerSuccessModal = false;
        this.registerForm.reset();
        this.registerSuccessNavigationLoading();
        setTimeout(() => {
            this.backToLoginFromSuccessModal();
        }, 1000);
    }
    backToLoginFromSuccessModal() {
        this.router.navigateByUrl('/login');
    }
    registerSuccessNavigationLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'success-loading',
                message: 'You should be able to Log in now!',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_onboarding_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 3527:
/*!*************************************************************************!*\
  !*** ./src/app/pages/onboarding/register/register.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7105:
/*!*************************************************************************!*\
  !*** ./src/app/pages/onboarding/register/register.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"5\">\n      <div class=\"spacer-2x\"></div>\n      <div class=\"static-alert-yellow\">\n        <p>Please fill out the entire form to continue.</p>\n      </div>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n        <ion-item>\n          <ion-label position=\"floating\">First Name <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input required formControlName=\"firstName\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">First Name <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input required formControlName=\"lastName\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input required formControlName=\"email\" type=\"email\"></ion-input>\n          <!-- Email Validation-->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                  <div class=\"validation-error-message\"\n                  *ngIf=\"registerForm\n                    .get('email')\n                    .hasError(validation.type) && (registerForm.get('email')\n                    .dirty || registerForm.get('email').touched)\">\n                    {{ validation.message }}\n                  </div>\n            </ng-container>\n          </div>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input required formControlName=\"password\" type=\"password\"></ion-input>\n            <!-- Password Validation-->\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"validation-error-message\"\n                    *ngIf=\"registerForm\n                      .get('password')\n                      .hasError(validation.type) && (registerForm.get('password')\n                      .dirty || registerForm.get('password').touched)\">\n                      {{ validation.message }}\n                    </div>\n              </ng-container>\n            </div>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Re-type Password <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input required formControlName=\"reTypePassword\" type=\"password\"></ion-input>\n            <!-- Password Validation-->\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                    <div class=\"validation-error-message\"\n                    *ngIf=\"registerForm\n                      .get('reTypePassword')\n                      .hasError(validation.type) && (registerForm.get('reTypePassword')\n                      .dirty || registerForm.get('reTypePassword').touched)\">\n                      {{ validation.message }}\n                    </div>\n              </ng-container>\n            </div>\n        </ion-item>\n    </form>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <ion-modal [isOpen]=\"this.registerSuccessModal\">\n    <ng-template>\n      <ion-content style=\"--background: green;\">\n        <ion-button (click)=\"closeSuccessModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Close\n        </ion-button>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n\n<ion-footer>\n    <ion-button style=\"display: block;\" \n    id=\"register-button\" \n    color=\"success\" \n    type=\"submit\" \n    (click)=\"this.tryRegister()\"\n    >\n    Register\n    </ion-button>\n    <!-- [disabled]=\"contactForm.invalid\" -->\n    <ion-button id=\"cancel-button\" style=\"display: block;\" (click)=\"goToLoginPage()\" color=\"medium\">\n    Cancel\n    </ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_onboarding_register_register_module_ts.js.map