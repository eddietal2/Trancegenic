"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 2388:
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 3256);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 7213:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 2388);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 3256);







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 3256:
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page.html?ngResource */ 6284);
/* harmony import */ var _contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss?ngResource */ 5091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ContactPage = class ContactPage {
    constructor(formBuilder, router, alertController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController;
        this.successModalOpen = false;
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
        this.contactForm = this.formBuilder.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    // Send Message
    /**
     * Send message to server. If there is a 200 repsonse / success,
     * show success modal.
     * TODO: Email or Admin Inbox
     * @param fullName of user sending message
     * @param email of user sending message
     * @param message of user sending message
     * @return boolean / to show modal or error message
     */
    submitContactForm(fullName, email, message) {
        // TODO: Figure out if Email or Admin Inbox method
    }
    // Show Modal
    /**
     * If the message is sent successfully with a 200 Response,
     * present this modal.
     */
    showSuccessModal() {
        this.successModalOpen = true;
        setTimeout(() => {
            // TODO: Clear contactForm
            return this.successModalOpen = false;
        }, 3000);
    }
    // Submit Error Message
    /**
     * If the network request fails for any reason why use attemtps
     * to submit message, show alert.
     * @param msg Message to display to the user in the alert
     */
    errorAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    // Cancel
    cancel() {
        this.router.navigateByUrl('/landing');
    }
};
ContactPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-contact',
        template: _contact_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactPage);



/***/ }),

/***/ 5091:
/*!************************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "#header {\n  height: 300px;\n  background: #999;\n}\n\n#submit-message-button {\n  margin: 2em auto 5em auto;\n}\n\nh2 {\n  margin: 2em auto;\n}\n\nion-item {\n  background: #e9e9e9;\n  margin: 0.5em auto;\n}\n\n#textarea-label {\n  position: relative;\n  top: -22px;\n}\n\n.message-count {\n  color: #333;\n  font-size: 10px;\n  text-align: left;\n}\n\n.message-count-red {\n  color: red;\n  font-size: 10px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU9KIiwiZmlsZSI6ImNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xufVxuI3N1Ym1pdC1tZXNzYWdlLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyZW0gYXV0byA1ZW0gYXV0bztcbn1cbmgyIHtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xufVxuaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xufVxuI3RleHRhcmVhLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMjJweDtcbn1cbi5tZXNzYWdlLWNvdW50IHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tZXNzYWdlLWNvdW50LXJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";

/***/ }),

/***/ 6284:
/*!************************************************************!*\
  !*** ./src/app/pages/contact/contact.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col id=\"header\" \n            size=\"12\">\n      <!-- Either Icon or Background Photo -->\n    </ion-col>\n    <ion-col class=\"ion-text-center\"\n             size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"6\" size-xl=\"5\">\n      <h2>Have a question or concern?</h2>\n      <p class=\"static-alert-yellow\">\n        You need to fill out the enter form before you can send a message.\n      </p>\n      <form [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm(\n          this.contactForm.controls.fullName.value,\n          this.contactForm.controls.email.value,\n          this.contactForm.controls.message.value)\">\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Full Name <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input required formControlName=\"fullName\" type=\"text\" maxlength=\"100\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input required formControlName=\"email\" type=\"email\"></ion-input>\n          <!-- Email Validation-->\n          <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validationMessasges.email\">\n                  <div class=\"validation-error-message\"\n                  *ngIf=\"contactForm\n                    .get('email')\n                    .hasError(validation.type) && (contactForm.get('email')\n                    .dirty || contactForm.get('email').touched)\">\n                    {{ validation.message }}\n                  </div>\n                </ng-container>\n          </div>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"height: 300px;\">\n          <ion-label\n          position=\"floating\">Message <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-textarea #contactMessage required formControlName=\"message\" type=\"text\" maxlength=\"500\"></ion-textarea>\n        </ion-item>\n        <p [ngClass]=\"contactMessage.value.length > 450 ? 'message-count-red ': 'message-count'\">\n          {{contactMessage.value.length}} / 500 Characters</p>\n        <ion-button style=\"display: block;\" \n          id=\"submit-message-button\" \n          color=\"primary\" \n          type=\"submit\" \n          (click)=\"showSuccessModal()\"\n          >\n          Send\n        </ion-button>\n        <!-- [disabled]=\"contactForm.invalid\" -->\n        <ion-button style=\"display: block;\" (click)=\"cancel()\" color=\"primary\">\n          Cancel\n        </ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- Success Modal -->\n<ion-modal [isOpen]=\"this.successModalOpen\">\n  <ng-template>\n    <!-- TODO: Add ID to IonContent -->\n    <ion-content style=\"--background: #00c400;\">Modal Content</ion-content>\n  </ng-template>\n</ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map