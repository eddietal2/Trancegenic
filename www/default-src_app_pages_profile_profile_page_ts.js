"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_profile_profile_page_ts"],{

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 3077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 9985);
/* harmony import */ var src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/onboarding/login.service */ 3145);









let ProfilePage = class ProfilePage {
    constructor(formBuilder, profileService, loginService, router, alertController) {
        this.formBuilder = formBuilder;
        this.profileService = profileService;
        this.loginService = loginService;
        this.router = router;
        this.alertController = alertController;
        this.validationMessasges = {
            email: [
                { type: 'email', message: 'Must be a valid email address' }
            ],
            password: [
                // tslint:disable-next-line: max-line-length
                { type: 'password', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.' }
            ]
        };
        this.changeNameModalOpen = false;
        this.changeEmailModalOpen = false;
        this.changePasswordModalOpen = false;
        //
        this.changePictureModalOpen = false;
        // 
        this.newsLetterOpen = false;
    }
    ngOnInit() {
        this.initializeFormGroups();
        this.getUserDetailsFromBehaviorSubjects();
    }
    /**
     * Direct user to Login Page from Profile page
     */
    goToLoginPage() {
        this.router.navigateByUrl('/login');
    }
    /**
     * Get User profile information from Behavior Subjects in Login Service
     */
    getUserDetailsFromBehaviorSubjects() {
        this.loginService.userFullName.subscribe((data) => {
            this.userFullName = data;
            let userFullNameArray = data.split(' ');
            this.userFirstName = userFullNameArray[0];
            this.userLastName = userFullNameArray[1];
        });
        this.loginService.userEmail.subscribe((data) => {
            this.userEmail = data;
        });
        this.loginService.userPicture.subscribe((data) => {
            this.userPicture = data;
        });
        this.loginService.userType.subscribe((data) => {
            this.userType = data;
        });
    }
    /**
     * Initializes all the FormBuilder groups for each Modal
     */
    initializeFormGroups() {
        this.changeNameForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // at least 1 number, 1 uppercase letter, and one lowercase letter
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
        });
        this.changeEmailForm = this.formBuilder.group({
            newEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern]],
        });
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern]],
            retypeNewPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern]],
        });
        this.newsLetterForm = this.formBuilder.group({
            newsLetterCheckBox: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    /**
     * Attempt to Change the User's Name
     */
    tryChangeName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let fullName = this.changeNameForm.controls.firstName.value + " " + this.changeNameForm.controls.lastName.value;
            let password = this.changeNameForm.controls.password.value;
            this.changeNameSub = yield this.profileService.changeName(fullName, password, this.userEmail);
            yield setTimeout(() => {
                this.changeNameSub.unsubscribe();
                console.log('Unsubscribed from Change Name Subscription');
            }, 1000);
            return;
        });
    }
    changeNameModal() {
        this.changeNameModalOpen = true;
    }
    closeNameModal() {
        this.changeNameModalOpen = false;
    }
    /**
     * Attempt to Change the User's Email
     */
    tryChangeEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let newEmail = this.changeEmailForm.controls.newEmail.value;
            let password = this.changeEmailForm.controls.password.value;
            this.changeEmailSub = yield this.profileService.changeEmail(newEmail, this.userEmail, password);
            yield setTimeout(() => {
                this.changeEmailSub.unsubscribe();
                console.log('Unsubscribed from Change Name Subscription');
                return;
            }, 1000);
        });
    }
    changeEmailModal() {
        this.changeEmailModalOpen = true;
    }
    closeEmailModal() {
        this.changeEmailModalOpen = false;
    }
    /**
     * Attempt to Change the User's Password
     */
    tryChangePassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let newPassword = this.changePasswordForm.controls.newPassword.value;
            let oldPassword = this.changePasswordForm.controls.oldPassword.value;
            this.changePasswordSub = yield this.profileService.changePassword(newPassword, oldPassword, this.userEmail);
            yield setTimeout(() => {
                this.changePasswordSub.unsubscribe();
                console.log('Unsubscribed from Change Password Subscription');
                return;
            }, 1000);
        });
    }
    changePasswordModal() {
        this.changePasswordModalOpen = true;
    }
    closePasswordModal() {
        this.changePasswordModalOpen = false;
    }
    /**
     * Attempt to change User's Picture
     */
    tryChangePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // TODO Crop Photo
            // let newPicture = this.changePictureForm.controls.newPassword.value;
            // this.changePictureSub = await this.profileService.changePassword(newPassword, oldPassword, this.userEmail);
            yield setTimeout(() => {
                // this.changePictureSub.unsubscribe();
                console.log('Unsubscribed from Change Picture Subscription');
                return;
            }, 1000);
        });
    }
    changePictureModal() {
        this.changePictureModalOpen = true;
    }
    closePictureModal() {
        this.changePictureModalOpen = false;
    }
    /**
     * User can unsubscribe/subscribe to newsletter.
     */
    tryChangeNewsLetter() {
        // TODO
    }
    changeNewsLetter() {
        this.newsLetterOpen = true;
    }
    closeNewsLetterModal() {
        this.newsLetterOpen = false;
    }
    /**
     * Prompt the user with an Alert, then log the user out
     */
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: src_app_services_onboarding_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 3077:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-footer {\n  position: absolute;\n  bottom: 88px;\n  background: #dedede;\n}\nion-footer ion-button {\n  height: 60px;\n}\n.modal-button {\n  display: block;\n  width: 200px;\n  height: 150px;\n  margin: 1em auto;\n}\n#profile-wrapper {\n  padding-top: 3em;\n  height: auto;\n}\n#profile-wrapper #profile {\n  box-shadow: none;\n  padding: 3em 0em;\n  border-radius: 5px;\n}\n@media screen and (max-width: 996px) {\n  #profile {\n    box-shadow: none;\n  }\n}\n@media screen and (min-width: 996px) {\n  #profile-wrapper {\n    height: 80vh;\n  }\n\n  #profile {\n    box-shadow: 1px 1px 10px #dedede;\n  }\n}\n#user-info-header {\n  height: auto;\n  margin-bottom: 1em;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #9999993d;\n}\n#user-info-header p, #user-info-header h2 {\n  line-height: 30px;\n  margin: 0;\n}\nspan {\n  display: inline-block;\n  position: relative;\n  bottom: 9px;\n  left: 10px;\n}\n#change-name-modal,\n#change-email-modal,\n#change-password-modal,\n#news-letter-modal {\n  --background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBS0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUZKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUlHO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFNQTtFQUNJO0lBQ0ksZ0JBQUE7RUFITjtBQUNGO0FBS0E7RUFDSTtJQUNJLFlBQUE7RUFITjs7RUFNRztJQUNDLGdDQUFBO0VBSEo7QUFDRjtBQUtBO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUpKO0FBTUk7RUFDSSxpQkFBQTtFQUNBLFNBQUE7QUFKUjtBQU9BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSko7QUFTQTs7OztFQUlJLGtCQUFBO0FBTkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA4OHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cblxuICAgIFxufVxuXG4ubW9kYWwtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xufVxuXG4jcHJvZmlsZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xuICAgIGhlaWdodDogYXV0bzsgXG5cbiAgICNwcm9maWxlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDNlbSAwZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgfVxuICAgXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAgICNwcm9maWxlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk2cHgpIHtcbiAgICAjcHJvZmlsZS13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiA4MHZoOyBcbiAgICAgfVxuXG4gICAgICNwcm9maWxlIHtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjZGVkZWRlO1xuICAgICB9XG59XG4jdXNlci1pbmZvLWhlYWRlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk5OTkzZDtcblxuICAgIHAsIGgyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5zcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogOXB4O1xuICAgIGxlZnQ6IDEwcHg7XG5cbn1cblxuLy8gTW9kYWxzXG4jY2hhbmdlLW5hbWUtbW9kYWwsXG4jY2hhbmdlLWVtYWlsLW1vZGFsLFxuI2NoYW5nZS1wYXNzd29yZC1tb2RhbCxcbiNuZXdzLWxldHRlci1tb2RhbCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <!-- If User is NOT Logged in -->\n  <ion-grid>\n    <ion-row>\n      <ion-col \n        size-xs=\"11\" size-md=\"10\" size-lg=\"6\"\n        *ngIf=\"!this.loginService.authenticationState.value\">\n        <div class=\"spacer-5x\"></div>\n        <h1>Please Log in</h1>\n        <ion-button (click)=\"goToLoginPage()\" expand=\"block\" color=\"success\">\n          Login\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Main Profile Page -->\n  <ion-grid *ngIf=\"this.loginService.authenticationState.value\">\n    <div class=\"spacer-2x\"></div>\n  \n    <ion-row id=\"profile-wrapper\" class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col id=\"profile\" size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"5\">\n        \n        <!-- User Info -->\n        <div id=\"user-info-header\">\n          <img height=\"60\" src=\"../../../assets/placeholders/profile-icon.svg\" alt=\"User Profile Icon\">\n          <span>\n            <h2>{{this.userFullName}}</h2>\n            <p>{{this.userEmail}}</p>\n          </span>\n        </div>\n\n        <!-- List Buttons -->\n        <ion-item (click)=\"changeNameModal()\" lines=\"none\" detail=\"true\">\n          <ion-label>Change Name</ion-label>\n        </ion-item>\n        <ion-item (click)=\"changeEmailModal()\" lines=\"none\" detail=\"true\">\n          <ion-label>Change Email</ion-label>\n        </ion-item>\n        <!-- <ion-item (click)=\"changePictureModal()\" lines=\"none\" detail=\"true\">\n          <ion-label>Change Picture</ion-label>\n        </ion-item> -->\n        <ion-item (click)=\"changePasswordModal()\" lines=\"none\" detail=\"true\">\n          <ion-label>Change Password</ion-label>\n        </ion-item>\n        <!-- <ion-item (click)=\"changeNewsLetterModal()\" lines=\"none\" detail=\"true\">\n          <ion-label>Subscribe to Newsletter</ion-label>\n        </ion-item> -->\n        <ion-item (click)=\"logout()\" lines=\"none\" detail=\"true\">\n          <ion-label>Logout</ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <!-- Change Name Modal -->\n  <ion-modal [isOpen]=\"this.changeNameModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-title>Change Name</ion-title>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeNameModal()\">\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <div class=\"spacer-2x\"></div>\n\n      <ion-content id=\"change-name-modal\">\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"11\">\n\n              <!-- User Info -->\n              <div id=\"user-info-header\">\n                <img height=\"60\" src=\"../../../assets/placeholders/profile-icon.svg\" alt=\"User Profile Icon\">\n                <span>\n                  <h2>{{this.userFullName}}</h2>\n                </span>\n              </div>\n\n              <!-- Form -->\n              <form [formGroup]=\"changeNameForm\" ngSubmit=\"tryChangeName()\">\n                <ion-item>\n                  <ion-label position=\"floating\">First Name <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"firstName\" placeholder=\"{{this.userFirstName}}\" type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Last Name <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"lastName\" placeholder=\"{{this.userLastName}}\" type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"password\" type=\"password\"></ion-input>\n                  <!-- Email Validation-->\n                  <div class=\"validation-errors\">\n                        <ng-container *ngFor=\"let validation of validationMessasges.password\">\n                          <div class=\"validation-error-message\"\n                          *ngIf=\"changeNameForm\n                            .get('password')\n                            .hasError(validation.type) && (changeNameForm.get('password')\n                            .dirty || changeNameForm.get('password').touched)\">\n                            {{ validation.message }}\n                          </div>\n                        </ng-container>\n                  </div>\n                </ion-item>\n                <div class=\"ion-text-center ion-hide-lg-down\">\n                  <div class=\"spacer-2x\"></div>\n                  <ion-button class=\"modal-button\" type=\"submit\" [disabled]=\"changeNameForm.invalid\">\n                    Submit\n                  </ion-button>\n                  <ion-button class=\"modal-button\" type=\"cancel\" [disabled]=\"changeNameForm.invalid\">\n                    Cancel\n                  </ion-button>\n                </div>\n              </form>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-footer>\n          <ion-button (click)=\"tryChangeName()\" \n            class=\"modal-button ion-hide-lg-up\">\n            Save\n          </ion-button>\n          <ion-button class=\"modal-button ion-hide-lg-up\" (click)=\"closeNameModal()\">\n            Cancel\n          </ion-button>\n        </ion-footer>\n      </ion-content>\n\n    </ng-template>\n  </ion-modal>\n\n  <!-- Change Email Modal -->\n  <ion-modal [isOpen]=\"this.changeEmailModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-title>Change Email</ion-title>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeEmailModal()\">\n              <ion-icon name=\"close-outline\"></ion-icon> \n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <div class=\"spacer-2x\"></div>\n      <ion-content id=\"change-email-modal\">\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"11\">\n              <div id=\"user-info-header\">\n                <img height=\"60\" src=\"../../../assets/placeholders/profile-icon.svg\" alt=\"User Profile Icon\">\n                <span>\n                  <h2>{{this.userEmail}}</h2>\n                </span>\n              </div>\n              <form [formGroup]=\"changeEmailForm\" (ngSubmit)=\"changeEmail('eddielacrosse2@gmail.com')\">\n                <ion-item>\n                  <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"newEmail\" placeholder=\"{{this.userEmail}}\" type=\"email\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"password\" type=\"password\"></ion-input>\n                </ion-item>\n                <div class=\"ion-text-center ion-hide-lg-down\">\n                  <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"changeEmailForm.invalid\">\n                    Submit\n                  </ion-button>\n                  <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"changeEmailForm.invalid\">\n                    Cancel\n                  </ion-button>\n                </div>\n              </form>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-footer>\n          <div class=\"spacer-2x\"></div>\n          <ion-button class=\"modal-button ion-hide-lg-up\" (click)=\"tryChangeEmail()\">\n            Save\n          </ion-button>\n          <ion-button class=\"modal-button ion-hide-lg-up\" (click)=\"closeEmailModal()\">\n            Cancel\n          </ion-button>\n        </ion-footer>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n  <!-- Change Password Modal -->\n  <ion-modal id=\"change-password-modal\" [isOpen]=\"this.changePasswordModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-title>Change Password</ion-title>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closePasswordModal()\">\n              <ion-icon name=\"close-outline\"></ion-icon> \n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <div class=\"spacer-2x\"></div>\n      <ion-content>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"11\">\n              <div id=\"user-info-header\">\n                <img height=\"60\" src=\"../../../assets/placeholders/profile-icon.svg\" alt=\"User Profile Icon\">\n              </div>\n              <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"tryChangePassword()\">\n                <ion-item>\n                  <ion-label position=\"floating\">New Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"newPassword\" type=\"password\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Re-type New Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"retypeNewPassword\" type=\"password\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Old Password <ion-text color=\"danger\">*</ion-text></ion-label>\n                  <ion-input required formControlName=\"oldPassword\" type=\"password\"></ion-input>\n                </ion-item>\n                <div class=\"ion-text-center ion-hide-lg-down\">\n                  <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"changePasswordForm.invalid\">\n                    Submit\n                  </ion-button>\n                  <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"changePasswordForm.invalid\">\n                    Cancel\n                  </ion-button>\n                </div>\n              </form>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-footer>\n          <div class=\"spacer-2x\"></div>\n          <ion-button class=\"modal-button ion-hide-lg-up\" (click)=\"tryChangePassword()\">\n            Save\n          </ion-button>\n          <ion-button class=\"modal-button ion-hide-lg-up\" (click)=\"closePasswordModal()\">\n            Cancel\n          </ion-button>\n        </ion-footer>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n  <!-- News letter Modal -->\n  <ion-modal id=\"news-letter-modal\" [isOpen]=\"this.newsLetterOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-title>News Letter</ion-title>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeNewsLetterModal()\">\n              <ion-icon name=\"close-outline\"></ion-icon> \n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <div class=\"spacer-2x\"></div>\n      <ion-content>\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col size-xs=\"11\">\n              <div class=\"static-alert-yellow\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n                  Possimus ex fugiat, asperiores vero libero quidem totam culpa \n                  consequatur qui amet. Eum doloribus consectetur ab quae corrupti! \n                  Consectetur aut fuga facilis.</p>\n              </div>\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-label>Subscribe</ion-label>\n                  <ion-checkbox slot=\"end\"></ion-checkbox>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-footer>\n          <ion-button class=\"modal-button ion-hide-lg-up\"  (click)=\"closeNewsLetterModal()\">\n            Cancel\n          </ion-button>\n        </ion-footer>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_profile_profile_page_ts.js.map