(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DASA\source\repos\ordoresto\src\main.ts */"zUnb");


/***/ }),

/***/ "66Bu":
/*!*******************************************************!*\
  !*** ./src/app/confirmed/confirmed-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedPageRoutingModule", function() { return ConfirmedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _confirmed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmed.page */ "FVaC");




const routes = [
    {
        path: '',
        component: _confirmed_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmedPage"]
    }
];
let ConfirmedPageRoutingModule = class ConfirmedPageRoutingModule {
};
ConfirmedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmedPageRoutingModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "FVaC":
/*!*********************************************!*\
  !*** ./src/app/confirmed/confirmed.page.ts ***!
  \*********************************************/
/*! exports provided: ConfirmedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedPage", function() { return ConfirmedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirmed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirmed.page.html */ "IiCP");
/* harmony import */ var _confirmed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmed.page.scss */ "j/Jk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ConfirmedPage = class ConfirmedPage {
    constructor(modalController, navCtrl) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    setViewType(vt) {
        this.viewType = vt;
    }
    close() {
        this.modalController.dismiss();
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
        this.modalController.dismiss();
    }
};
ConfirmedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ConfirmedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmed',
        template: _raw_loader_confirmed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirmed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfirmedPage);



/***/ }),

/***/ "IiCP":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmed/confirmed.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\r\n\t<div class=\"row d-flex\">\r\n\t\t<ion-card class=\"ion-text-center\">\r\n      <div class=\"ion-text-end\">\r\n        <ion-button (click)=\"close()\" fill=\"clear\" color=\"white\">\r\n          <ion-icon name=\"close\" slot=\"start\" color=\"white\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n\t\t\t<!-- <h2>Mais c'est que,</h2> -->\r\n\t\t\t<h1>Vous avez<br>bon goût</h1>\r\n\t\t\t<div class=\"img_box\">\r\n\t\t\t\t<img src=\"assets/images/order_confirmed.png\">\r\n\t\t\t</div>\r\n\t\t\t<h2>Votre commande est confirmée avec</h2>\r\n\t\t\t<h3><img src=\"assets/images/logo.png\"></h3>\r\n\t\t\t<h2>Et sera bientôt<br>prête </h2>\r\n\t\t</ion-card>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Q7x6":
/*!***********************************************!*\
  !*** ./src/app/confirmed/confirmed.module.ts ***!
  \***********************************************/
/*! exports provided: ConfirmedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedPageModule", function() { return ConfirmedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _confirmed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmed-routing.module */ "66Bu");
/* harmony import */ var _confirmed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmed.page */ "FVaC");







let ConfirmedPageModule = class ConfirmedPageModule {
};
ConfirmedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmed_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmedPageRoutingModule"]
        ],
        declarations: [_confirmed_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmedPage"]]
    })
], ConfirmedPageModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _confirmed_confirmed_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirmed/confirmed.module */ "Q7x6");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _confirmed_confirmed_module__WEBPACK_IMPORTED_MODULE_8__["ConfirmedPageModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "j/Jk":
/*!***********************************************!*\
  !*** ./src/app/confirmed/confirmed.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  display: none;\n}\nion-header ion-toolbar ion-title .end h4 {\n  height: 27px;\n  line-height: 27px;\n  font-size: 0.73rem;\n  font-weight: 400;\n  padding: 0 18px;\n  background: var(--primary);\n  border-radius: 50px;\n  margin: 0;\n  min-width: 125px;\n}\nion-content {\n  --background: rgba(0, 0, 1, 0.58) !important;\n}\n.row {\n  height: 100%;\n}\nion-card {\n  background: var(--secondary);\n  width: calc(100% - 290px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: var(--white);\n  text-transform: uppercase;\n  border-radius: 0;\n  padding: 36px 10px;\n  margin: 0 auto;\n}\nion-card h2 {\n  margin: 0;\n  font-size: 0.8rem;\n  letter-spacing: 1.5px;\n  padding-bottom: 10px;\n}\nion-card h1 {\n  margin: 0;\n  font-size: 1.4rem;\n  letter-spacing: 1.5px;\n  font-weight: 500;\n  line-height: 29px;\n}\nion-card .img_box {\n  margin: 16px auto;\n  max-width: 200px;\n}\nion-card h3 {\n  max-width: 150px;\n  margin: 5px auto 25px auto;\n}\nion-card h4 {\n  margin: 0;\n  font-size: 0.75rem;\n  letter-spacing: 2px;\n}\n.cart_container {\n  position: fixed;\n  position: relative;\n  z-index: 9999;\n  top: 0px;\n  width: 240px;\n  height: 100%;\n  transition: all 0.1s;\n  margin-right: 0;\n}\n.cart_container::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  transition: all 0.1s;\n}\n.cart_container .container {\n  background: var(--secondary);\n  position: absolute;\n  position: relative;\n  max-width: 240px;\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n  transition: right 0.2s;\n}\n.cart_container .container .cart_header {\n  height: 60px;\n  color: var(--white);\n  padding: 0 10px;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  max-width: 240px;\n  background: var(--secondary);\n}\n.cart_container .container .cart_header h2 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.cart_container .container .cart_header h4 {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--primary);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.cart_container .container ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-bottom: 100px;\n  padding-top: 60px;\n}\n.cart_container .container ion-list ion-item {\n  min-height: unset !important;\n  --background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  border-bottom: 1px dashed var(--text-light) !important;\n  padding: 10px 10px;\n}\n.cart_container .container ion-list ion-item .item_inner {\n  width: 100%;\n  align-items: flex-start;\n}\n.cart_container .container ion-list ion-item .item_inner .item_img {\n  min-width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  margin-right: 12px;\n}\n.cart_container .container ion-list ion-item .item_inner .item_img img {\n  max-width: unset;\n  width: 140%;\n}\n.cart_container .container ion-list ion-item .item_inner .item_details {\n  color: var(--white);\n  width: 100%;\n}\n.cart_container .container ion-list ion-item .item_inner .item_details h2 {\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 500;\n  min-height: 32px;\n  padding-bottom: 10px;\n}\n.cart_container .container ion-list ion-item .item_inner .item_details h5 {\n  margin: 0;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.cart_container .container ion-list ion-item .item_inner .item_details h3 {\n  margin: 0;\n  font-size: 0.75rem;\n}\n.cart_container .container ion-list ion-item .item_inner h4 {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 400;\n  margin-top: 12px;\n}\n.cart_container .container ion-list ion-item .item_inner h4 span {\n  font-weight: 500;\n  min-width: 50px;\n}\n.cart_container .container ion-list ion-item:first-child {\n  padding-top: 0 !important;\n}\n.cart_container .container .cart_footer {\n  color: var(--white);\n  position: fixed;\n  bottom: 0;\n  max-width: 240px;\n  width: 100%;\n}\n.cart_container .container .cart_footer h2 {\n  margin: 0;\n  background: #35363c;\n  height: 45px;\n  line-height: 45px;\n  font-size: 0.8rem;\n  padding: 0 15px;\n  letter-spacing: 0.5px;\n}\n.cart_container .container .cart_footer h2 strong {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n.cart_container .container .cart_footer h3 {\n  margin: 0;\n  background: var(--primary);\n  height: 45px;\n  line-height: 45px;\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 720px) {\n  ion-card {\n    width: calc(100% - 260px);\n  }\n}\n@media (max-width: 576px) {\n  ion-header {\n    display: block;\n  }\n\n  ion-card {\n    width: calc(100% - 40px);\n  }\n\n  .cart_container {\n    position: fixed;\n    right: -100%;\n    width: calc(100% - 0px);\n  }\n  .cart_container .container {\n    position: absolute;\n    right: -100%;\n  }\n  .cart_container.active {\n    right: 0%;\n    transition: all 0.1s;\n  }\n  .cart_container.active .container {\n    right: 0;\n    transition: right 0.2s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm1lZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0FBQ0Q7QUFHRztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQURKO0FBU0E7RUFDQyw0Q0FBQTtBQU5EO0FBU0E7RUFDQyxZQUFBO0FBTkQ7QUFTQTtFQUNDLDRCQUFBO0VBUUEseUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFiRDtBQWVDO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQWJGO0FBZ0JDO0VBQ0MsU0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZEY7QUFpQkM7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FBZkY7QUFrQkM7RUFDQyxnQkFBQTtFQUNBLDBCQUFBO0FBaEJGO0FBbUJDO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFqQkY7QUF3QkE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBdEJEO0FBMEJDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG9CQUFBO0FBeEJGO0FBNEJDO0VBQ0MsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUEzQkY7QUE2QkU7RUFDQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQTNCSDtBQTZCRztFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0JKO0FBOEJHO0VBRUMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQTdCSjtBQWtDRTtFQUNDLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBaENIO0FBa0NHO0VBQ0MsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFrQ0k7RUFDQyxXQUFBO0VBQ0EsdUJBQUE7QUFoQ0w7QUFrQ0s7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFoQ047QUFrQ007RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUFoQ1A7QUFvQ0s7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUFsQ047QUFvQ007RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFsQ1A7QUFxQ007RUFDQyxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBbkNQO0FBdUNNO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0FBckNQO0FBeUNLO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXZDTjtBQXlDTTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQXZDUDtBQTRDSTtFQUNDLHlCQUFBO0FBMUNMO0FBK0NFO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTdDSDtBQStDRztFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBN0NKO0FBK0NJO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtBQTdDTDtBQWlERztFQUNDLFNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUEvQ0o7QUFzREE7RUFDQztJQUNDLHlCQUFBO0VBbkRBO0FBQ0Y7QUFzREE7RUFDQztJQUNDLGNBQUE7RUFwREE7O0VBdUREO0lBQ0Msd0JBQUE7RUFwREE7O0VBdUREO0lBQ0MsZUFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQXBEQTtFQXNEQTtJQUNDLGtCQUFBO0lBQ0EsWUFBQTtFQXBERDtFQXVEQTtJQUNDLFNBQUE7SUFDQSxvQkFBQTtFQXJERDtFQXVEQztJQUNDLFFBQUE7SUFDQSxzQkFBQTtFQXJERjtBQUNGIiwiZmlsZSI6ImNvbmZpcm1lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cclxuXHRpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG5cdFx0LmVuZCB7XHJcblx0XHRcdGg0IHtcclxuXHRcdFx0XHRoZWlnaHQ6IDI3cHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDI3cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuNzNyZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDE4cHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0bWluLXdpZHRoOiAxMjVweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDEsIDAuNTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcblx0Ly9cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQvL1x0bGVmdDogMDtcclxuXHQvL1x0cmlnaHQ6IDA7XHJcblx0Ly9cdGJvdHRvbTogMDtcclxuXHQvL1x0dG9wOiAwO1xyXG5cdC8vXHRtYXJnaW46IGF1dG87XHJcblx0Ly9cdHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMjkwcHgpO1xyXG5cdGhlaWdodDogZml0LWNvbnRlbnQ7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0cGFkZGluZzogMzZweCAxMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRoMSB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXNpemU6IDEuNHJlbTtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRsaW5lLWhlaWdodDogMjlweDtcclxuXHR9XHJcblxyXG5cdC5pbWdfYm94IHtcclxuXHRcdG1hcmdpbjogMTZweCBhdXRvO1xyXG5cdFx0bWF4LXdpZHRoOiAyMDBweDtcclxuXHR9XHJcblxyXG5cdGgzIHtcclxuXHRcdG1heC13aWR0aDogMTUwcHg7XHJcblx0XHRtYXJnaW46IDVweCBhdXRvIDI1cHggYXV0bztcclxuXHR9XHJcblxyXG5cdGg0IHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAycHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2FydF9jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogOTk5OTtcclxuXHR0b3A6IDBweDtcclxuXHQvL1x0cmlnaHQ6IC0xMDAlO1xyXG5cdHdpZHRoOiAyNDBweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4xcztcclxuXHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0Ly9cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjFzO1xyXG5cclxuXHR9XHJcblxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC8vXHRcdHJpZ2h0OiAtMTAwJTtcclxuXHRcdG1heC13aWR0aDogMjQwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHRcdHRyYW5zaXRpb246IHJpZ2h0IC4ycztcclxuXHJcblx0XHQuY2FydF9oZWFkZXIge1xyXG5cdFx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdHotaW5kZXg6IDk5OTtcclxuXHRcdFx0bWF4LXdpZHRoOiAyNDBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuXHJcblx0XHRcdGgyIHtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoNCB7XHJcblxyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpb24tbGlzdCB7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDYwcHg7XHJcblxyXG5cdFx0XHRpb24taXRlbSB7XHJcblx0XHRcdFx0bWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHRcdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0cGFkZGluZzogMTBweCAxMHB4O1xyXG5cclxuXHRcdFx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuXHRcdFx0XHRcdC5pdGVtX2ltZyB7XHJcblx0XHRcdFx0XHRcdG1pbi13aWR0aDogNTBweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiB1bnNldDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTQwJTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5pdGVtX2RldGFpbHMge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdFx0XHRcdGgyIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuODVyZW07XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAzMnB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRoNSB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOXJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHRcdGgzIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuNzVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoNCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuNzVyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XHJcblxyXG5cdFx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogNTBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5jYXJ0X2Zvb3RlciB7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDI0MHB4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGgyIHtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogIzM1MzYzYztcclxuXHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcblxyXG5cdFx0XHRcdHN0cm9uZyB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNDVweDtcclxuXHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblx0aW9uLWNhcmQge1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cdGlvbi1oZWFkZXIge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHRpb24tY2FyZCB7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcblx0fVxyXG5cclxuXHQuY2FydF9jb250YWluZXIge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IC0xMDAlO1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7IFxyXG5cclxuXHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAtMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdHJpZ2h0OiAwJTtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4xcztcclxuXHJcblx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IHJpZ2h0IC4ycztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~cart-cart-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'item-info',
        loadChildren: () => __webpack_require__.e(/*! import() | item-info-item-info-module */ "item-info-item-info-module").then(__webpack_require__.bind(null, /*! ./item-info/item-info.module */ "h0LI")).then(m => m.ItemInfoPageModule),
        data: {}
    },
    {
        path: 'confirmed',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./confirmed/confirmed.module */ "Q7x6")).then(m => m.ConfirmedPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() | cart-cart-module */[__webpack_require__.e("default~cart-cart-module~home-home-module"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "v35Q")).then(m => m.CartPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Italic.woff2') format(\"woff2\"), url('GoogleSans-Italic.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Regular.woff2') format(\"woff2\"), url('GoogleSans-Regular.woff') format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-BoldItalic.woff2') format(\"woff2\"), url('GoogleSans-BoldItalic.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Bold.woff2') format(\"woff2\"), url('GoogleSans-Bold.woff') format(\"woff\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-MediumItalic.woff2') format(\"woff2\"), url('GoogleSans-MediumItalic.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"Google Sans\";\n  src: url('GoogleSans-Medium.woff2') format(\"woff2\"), url('GoogleSans-Medium.woff') format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSxpR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRDtBQUdBO0VBQ0MsMEJBQUE7RUFDQSxtR0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRDtBQUtBO0VBQ0MsMEJBQUE7RUFDQSx5R0FBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKRDtBQU9BO0VBQ0MsMEJBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFORDtBQVNBO0VBQ0MsMEJBQUE7RUFDQSw2R0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSRDtBQVdBO0VBQ0MsMEJBQUE7RUFDQSxpR0FBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWRDtBQWVBOzs7Ozs7Ozs7Ozs7O0VBYUMsZ0NBQUE7RUFDQSwwQkFBQTtBQWJEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG5cdFx0dXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XHJcblx0c3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xyXG5cdHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9Hb29nbGVTYW5zLU1lZGl1bUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuXHRcdHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHRzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQvR29vZ2xlU2Fucy1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcblx0XHR1cmwoJy4uL2Fzc2V0cy9mb250L0dvb2dsZVNhbnMtTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcblxyXG4qLFxyXG5ib2R5LFxyXG5odG1sLFxyXG5wLFxyXG5zcGFuLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5zdHJvbmcsXHJcbmxpIHtcclxuXHQtLWlvbi1mb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHRmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcclxuXHQvL2xldHRlci1zcGFjaW5nOiAuMDVyZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map