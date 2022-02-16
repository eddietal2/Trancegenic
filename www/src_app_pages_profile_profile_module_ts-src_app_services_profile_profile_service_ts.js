"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts-src_app_services_profile_profile_service_ts"],{

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var src_app_components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/custom-compontents.module */ 5274);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            src_app_components_custom_compontents_module__WEBPACK_IMPORTED_MODULE_1__.CustomComponentsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [],
        entryComponents: []
    })
], ProfilePageModule);



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



/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-src_app_services_profile_profile_service_ts.js.map