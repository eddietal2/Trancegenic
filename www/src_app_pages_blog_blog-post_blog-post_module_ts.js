"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_blog_blog-post_blog-post_module_ts"],{

/***/ 1881:
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPostPageRoutingModule": () => (/* binding */ BlogPostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _blog_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-post.page */ 2749);




const routes = [
    {
        path: '',
        component: _blog_post_page__WEBPACK_IMPORTED_MODULE_0__.BlogPostPage
    }
];
let BlogPostPageRoutingModule = class BlogPostPageRoutingModule {
};
BlogPostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlogPostPageRoutingModule);



/***/ }),

/***/ 2349:
/*!**********************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPostPageModule": () => (/* binding */ BlogPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _blog_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-post-routing.module */ 1881);
/* harmony import */ var _blog_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-post.page */ 2749);







let BlogPostPageModule = class BlogPostPageModule {
};
BlogPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _blog_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogPostPageRoutingModule
        ],
        declarations: [_blog_post_page__WEBPACK_IMPORTED_MODULE_1__.BlogPostPage]
    })
], BlogPostPageModule);



/***/ }),

/***/ 2749:
/*!********************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPostPage": () => (/* binding */ BlogPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _blog_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-post.page.html?ngResource */ 748);
/* harmony import */ var _blog_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-post.page.scss?ngResource */ 4335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let BlogPostPage = class BlogPostPage {
    constructor() { }
    ngOnInit() {
    }
};
BlogPostPage.ctorParameters = () => [];
BlogPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-blog-post',
        template: _blog_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_blog_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlogPostPage);



/***/ }),

/***/ 4335:
/*!*********************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXBvc3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 748:
/*!*********************************************************************!*\
  !*** ./src/app/pages/blog/blog-post/blog-post.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-hide-lg-up\">\n  <ion-toolbar>\n    <ion-title>blog-post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_blog_blog-post_blog-post_module_ts.js.map