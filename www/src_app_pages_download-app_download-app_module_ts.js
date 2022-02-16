"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_download-app_download-app_module_ts"],{

/***/ 8375:
/*!*******************************************************************!*\
  !*** ./src/app/pages/download-app/download-app-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadAppPageRoutingModule": () => (/* binding */ DownloadAppPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _download_app_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-app.page */ 9881);




const routes = [
    {
        path: '',
        component: _download_app_page__WEBPACK_IMPORTED_MODULE_0__.DownloadAppPage
    }
];
let DownloadAppPageRoutingModule = class DownloadAppPageRoutingModule {
};
DownloadAppPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DownloadAppPageRoutingModule);



/***/ }),

/***/ 1796:
/*!***********************************************************!*\
  !*** ./src/app/pages/download-app/download-app.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadAppPageModule": () => (/* binding */ DownloadAppPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _download_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-app-routing.module */ 8375);
/* harmony import */ var _download_app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-app.page */ 9881);







let DownloadAppPageModule = class DownloadAppPageModule {
};
DownloadAppPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _download_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.DownloadAppPageRoutingModule
        ],
        declarations: [_download_app_page__WEBPACK_IMPORTED_MODULE_1__.DownloadAppPage]
    })
], DownloadAppPageModule);



/***/ }),

/***/ 9881:
/*!*********************************************************!*\
  !*** ./src/app/pages/download-app/download-app.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadAppPage": () => (/* binding */ DownloadAppPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _download_app_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-app.page.html?ngResource */ 9226);
/* harmony import */ var _download_app_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-app.page.scss?ngResource */ 777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DownloadAppPage = class DownloadAppPage {
    constructor() { }
    ngOnInit() {
    }
};
DownloadAppPage.ctorParameters = () => [];
DownloadAppPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-download-app',
        template: _download_app_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_download_app_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DownloadAppPage);



/***/ }),

/***/ 777:
/*!**********************************************************************!*\
  !*** ./src/app/pages/download-app/download-app.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC1hcHAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9226:
/*!**********************************************************************!*\
  !*** ./src/app/pages/download-app/download-app.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>download-app</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_download-app_download-app_module_ts.js.map