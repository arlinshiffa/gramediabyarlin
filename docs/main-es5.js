(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n    <a href=\"\" class=\"linkSemua\">Lihat Semua</a>\n    <div class=\"bannerContainer\"> \n        <div id=\"mainContainer\" class=\"\" *ngIf=\"banners\">\n            <!-- Slideshow container-->   \n            \n                <div class=\"mySlides fade\" [class.block]=\"bannerIndex==i+1\" *ngFor=\"let banner of banners;let i=index\"   >\n                    <a [href]=\"banner.clickUrl\"><img [src]=\"banner.image\"></a>  \n                </div>\n\n                <!-- Next and previous buttons -->\n                <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\n                <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\n\n                 <!-- The dots/circles -->\n                <div style=\"text-align:center;position: relative;top:-32px;\">\n                    <span class=\"dot\" [class.active]=\"bannerIndex==i+1\" *ngFor=\"let banner of banners; let i=index\" (click)=\"currentSlide(i)\"></span> \n                </div>\n        </div>\n       \n        <a [href]=\"banners[banners.length-2].clickUrl\" *ngIf=\"banners\">\n            <div id=\"littleBanner1\" *ngIf=\"banners\">\n                <img [src]=\"banners[banners.length-2].image\" alt=\"\">\n            </div>\n        </a>\n        <a [href]=\"banners[banners.length-1].clickUrl\" *ngIf=\"banners\">\n            <div id=\"littleBanner2\" >\n                <img [src]=\"banners[banners.length-1].image\" alt=\"\">\n            </div>\n        </a>\n       \n    </div>\n\n    <div class=\"highlight-menu\" *ngIf=\"menus\">\n        <a [href]=\"menu.link\"  *ngFor=\"let menu of menus\" class=\"partMenu\">\n            <div class=\"menu\">\n                <img [src]=\"menu.image\" alt=\"\">\n                <p>{{ menu.name }}</p>\n            </div>\n        </a>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bantuan\">\n        <span style=\"float:right;\"><i class=\"fa fa-question-circle\"></i> Bantuan</span>\n</div>\n<header>\n  \n    <div class=\"\" style=\"max-width: 58em;margin:0 auto;\">\n        <nav>\n            <a routerLink=\"/\" class=\"logo\"><img src=\"assets/logoGramedia/logo-gramedia.png\" alt=\"\"></a>\n            <a href=\"javascript:void(0)\">\n                <div class=\"dropbtn\">\n                    Kategori<i class=\"fa fa-angle-down\"></i>\n                    <div class=\"dropdown-content\">\n                            <ul>\n                                <li>Komik</li>\n                                <li>Novel</li>\n                                <li>Majalah</li>\n                            </ul>\n                        </div>\n                </div>\n               \n            </a>\n\n            <div>\n                <label>\n                    <div class=\"searchBar\">\n                        <input type=\"text\" formControlName=\"searchBar\" placeholder=\"Cari Produk, Judul Buku, Penulis\">\n                        <img class=\"searchIcon\" src=\"assets/searchIcon/search.png\" alt=\"\">\n                    </div>\n                </label>\n            </div>\n           \n            <a class=\"navbarIcon\"><img src=\"assets/userIcon/user.png\" alt=\"\"> <span class=\"badge\"><span>3</span></span></a>\n            <a class=\"navbarIcon\"><img src=\"assets/notificationIcon/notification.png\" alt=\"\"> <span class=\"badge\"><span>1</span></span></a>\n            <a class=\"navbarIcon\"><img src=\"assets/cartIcon/cart.png\" alt=\"\"> <span class=\"badge\"><span>8</span></span></a>\n        \n        </nav>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gramedia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    DataService.prototype.getBanners = function () {
        return this.http.get('https://www.gramedia.com/api/banners/?per_page=7/endpoint?callback=foo', this.httpOptions);
    };
    DataService.prototype.getMenus = function () {
        return this.http.get('https://www.gramedia.com/api/highlight-menu/', this.httpOptions);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\n  display: block !important;\n}\n\n.partMenu {\n  float: left;\n  height: 183px;\n}\n\n.partMenu .menu {\n  width: 113px;\n  margin-left: 13px;\n}\n\n.partMenu p {\n  font-size: 12px;\n  margin-left: 20px;\n  text-align: center;\n  color: #281d5a;\n  font-weight: bold;\n}\n\n.partMenu p:hover {\n  color: black;\n}\n\n.partMenu img {\n  width: 102px;\n  padding-left: 21px;\n  margin-top: 36px;\n}\n\n.bannerContainer {\n  grid-template-columns: 65% 35%;\n  width: 100%;\n  height: 18em;\n  grid-gap: 10px;\n  grid-template-rows: 50% 50%;\n  display: grid;\n}\n\n.bannerContainer #mainContainer {\n  grid-column: 1/2;\n  height: 100%;\n  grid-row: 1/span 2;\n  /* Hide the images by default */\n  /* Next & previous buttons */\n  /* Position the \"next button\" to the right */\n  /* Position the \"prev button\" to the left */\n  /* On hover, add a black background color with a little bit see-through */\n  /* Caption text */\n  /* Number text (1/3 etc) */\n  /* The dots/bullets/indicators */\n  /* Fading animation */\n}\n\n.bannerContainer #mainContainer img {\n  width: 100%;\n  zoom: 78%;\n}\n\n.bannerContainer #mainContainer * {\n  box-sizing: border-box;\n}\n\n.bannerContainer #mainContainer .slideshow-container {\n  height: inherit;\n}\n\n.bannerContainer #mainContainer .mySlides {\n  display: none;\n  height: 100%;\n}\n\n.bannerContainer #mainContainer .mySlides img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  border-radius: 15px;\n}\n\n.bannerContainer #mainContainer .prev, .bannerContainer #mainContainer .next {\n  cursor: pointer;\n  position: absolute;\n  top: 264px;\n  background-color: #ffffffa8;\n  padding: 5px 16px;\n  border-radius: 50%;\n  font-size: 1.4em;\n  color: #e71d62;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.bannerContainer #mainContainer .next {\n  right: 39%;\n}\n\n.bannerContainer #mainContainer .prev {\n  left: 11%;\n}\n\n.bannerContainer #mainContainer .prev:hover, .bannerContainer #mainContainer .next:hover {\n  background-color: white;\n}\n\n.bannerContainer #mainContainer .text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n.bannerContainer #mainContainer .numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n.bannerContainer #mainContainer .dot {\n  cursor: pointer;\n  height: 10px;\n  width: 10px;\n  margin: 0 4px;\n  background-color: #ffffff63;\n  border-radius: 50%;\n  display: inline-block;\n  -webkit-transition: background-color 0.6s ease;\n  transition: background-color 0.6s ease;\n}\n\n.bannerContainer #mainContainer .active, .bannerContainer #mainContainer .dot:hover {\n  background-color: #201848;\n}\n\n.bannerContainer #mainContainer .fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.bannerContainer #littleBanner1 {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.bannerContainer #littleBanner2 {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.bannerContainer #littleBanner1, .bannerContainer #littleBanner2 {\n  height: 100%;\n}\n\n.bannerContainer #littleBanner1 img, .bannerContainer #littleBanner2 img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 15px;\n}\n\n.linkSemua {\n  color: #e71d62;\n  font-weight: bold;\n  font-size: 0.8em;\n  position: relative;\n  bottom: 7px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9TOlxcZ3JhbWVkaWEvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDRVI7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NSOztBREVJO0VBQ0ksWUFBQTtBQ0FSOztBREdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURNQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FDSEo7O0FES0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQWVBLCtCQUFBO0VBV0EsNEJBQUE7RUFjSiw0Q0FBQTtFQUtBLDJDQUFBO0VBS0EseUVBQUE7RUFLQSxpQkFBQTtFQVdBLDBCQUFBO0VBU0EsZ0NBQUE7RUFnQkEscUJBQUE7QUNyRko7O0FESFE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQ0taOztBREZRO0VBQUcsc0JBQUE7QUNLWDs7QURIUTtFQUNJLGVBQUE7QUNLWjs7QURBUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDRVo7O0FERFk7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDR2hCOztBREVRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FDQVo7O0FESUk7RUFDSSxVQUFBO0FDRlI7O0FETUk7RUFDSSxTQUFBO0FDSlI7O0FEUUk7RUFDSSx1QkFBQTtBQ05SOztBRFVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1JSOztBRFlJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ1ZSOztBRGNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQUEsc0NBQUE7QUNaUjs7QURlSTtFQUNJLHlCQUFBO0FDYlI7O0FEaUJJO0VBQ0ksNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNmUjs7QURrQkk7RUFDQTtJQUFNLFlBQUE7RUNmUjtFRGdCRTtJQUFJLFVBQUE7RUNiTjtBQUNGOztBRGVJO0VBQ0E7SUFBTSxZQUFBO0VDWlI7RURhRTtJQUFJLFVBQUE7RUNWTjtBQUNGOztBRGFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDWFI7O0FEY0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNaUjs7QURlSTtFQUNJLFlBQUE7QUNiUjs7QURlUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0FDYlo7O0FEa0JBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXJ0TWVudXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OjE4M3B4O1xyXG4gICAgLm1lbnV7XHJcbiAgICAgICAgd2lkdGg6IDExM3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjojMjgxZDVhO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIHA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDJweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5iYW5uZXJDb250YWluZXJ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1JSAzNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMThlbTtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICAjbWFpbkNvbnRhaW5lcntcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyAgIFxyXG4gICAgICAgIGdyaWQtcm93OjEgLyBzcGFuIDI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB6b29tOjc4JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge2JveC1zaXppbmc6Ym9yZGVyLWJveH1cclxuXHJcbiAgICAgICAgLnNsaWRlc2hvdy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xyXG4gICAgICAgIC5teVNsaWRlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xyXG4gICAgICAgIC5wcmV2LCAubmV4dCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDI2NHB4OztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmE4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2U3MWQ2MjtcclxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cclxuICAgIC5uZXh0IHtcclxuICAgICAgICByaWdodDogMzklO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFBvc2l0aW9uIHRoZSBcInByZXYgYnV0dG9uXCIgdG8gdGhlIGxlZnQgKi9cclxuICAgIC5wcmV2e1xyXG4gICAgICAgIGxlZnQ6IDExJTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xyXG4gICAgLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDYXB0aW9uIHRleHQgKi9cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cclxuICAgIC5udW1iZXJ0ZXh0IHtcclxuICAgICAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cclxuICAgIC5kb3Qge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY2MztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUsIC5kb3Q6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDE4NDg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xyXG4gICAgLmZhZGUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgfVxyXG5cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcclxuICAgIGZyb20ge29wYWNpdHk6IC40fSBcclxuICAgIHRvIHtvcGFjaXR5OiAxfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXHJcbiAgICB0byB7b3BhY2l0eTogMX1cclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbGl0dGxlQmFubmVyMXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgICAgIGdyaWQtcm93OjEvMjtcclxuICAgIH1cclxuXHJcbiAgICAjbGl0dGxlQmFubmVyMntcclxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgICAgIGdyaWQtcm93OjIvMztcclxuICAgIH1cclxuXHJcbiAgICAjbGl0dGxlQmFubmVyMSwgI2xpdHRsZUJhbm5lcjJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxpbmtTZW11YXtcclxuICAgIGNvbG9yOiAjZTcxZDYyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbiAgICBmbG9hdDogcmlnaHQgICBcclxufVxyXG5cclxuIiwiLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnBhcnRNZW51IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTgzcHg7XG59XG4ucGFydE1lbnUgLm1lbnUge1xuICB3aWR0aDogMTEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLnBhcnRNZW51IHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjgxZDVhO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYXJ0TWVudSBwOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnBhcnRNZW51IGltZyB7XG4gIHdpZHRoOiAxMDJweDtcbiAgcGFkZGluZy1sZWZ0OiAyMXB4O1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuXG4uYmFubmVyQ29udGFpbmVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NSUgMzUlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOGVtO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC1yb3c6IDEvc3BhbiAyO1xuICAvKiBIaWRlIHRoZSBpbWFnZXMgYnkgZGVmYXVsdCAqL1xuICAvKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xuICAvKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xuICAvKiBQb3NpdGlvbiB0aGUgXCJwcmV2IGJ1dHRvblwiIHRvIHRoZSBsZWZ0ICovXG4gIC8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXG4gIC8qIENhcHRpb24gdGV4dCAqL1xuICAvKiBOdW1iZXIgdGV4dCAoMS8zIGV0YykgKi9cbiAgLyogVGhlIGRvdHMvYnVsbGV0cy9pbmRpY2F0b3JzICovXG4gIC8qIEZhZGluZyBhbmltYXRpb24gKi9cbn1cbi5iYW5uZXJDb250YWluZXIgI21haW5Db250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHpvb206IDc4JTtcbn1cbi5iYW5uZXJDb250YWluZXIgI21haW5Db250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYmFubmVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC5zbGlkZXNob3ctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAubXlTbGlkZXMge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmFubmVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC5teVNsaWRlcyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAucHJldiwgLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAubmV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYTg7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGNvbG9yOiAjZTcxZDYyO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAubmV4dCB7XG4gIHJpZ2h0OiAzOSU7XG59XG4uYmFubmVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC5wcmV2IHtcbiAgbGVmdDogMTElO1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAucHJldjpob3ZlciwgLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAubmV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAudGV4dCB7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhbm5lckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAubnVtYmVydGV4dCB7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5iYW5uZXJDb250YWluZXIgI21haW5Db250YWluZXIgLmRvdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjYzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XG59XG4uYmFubmVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC5hY3RpdmUsIC5iYW5uZXJDb250YWluZXIgI21haW5Db250YWluZXIgLmRvdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDE4NDg7XG59XG4uYmFubmVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC5mYWRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYmFubmVyQ29udGFpbmVyICNsaXR0bGVCYW5uZXIxIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDEvMjtcbn1cbi5iYW5uZXJDb250YWluZXIgI2xpdHRsZUJhbm5lcjIge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMi8zO1xufVxuLmJhbm5lckNvbnRhaW5lciAjbGl0dGxlQmFubmVyMSwgLmJhbm5lckNvbnRhaW5lciAjbGl0dGxlQmFubmVyMiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5iYW5uZXJDb250YWluZXIgI2xpdHRsZUJhbm5lcjEgaW1nLCAuYmFubmVyQ29udGFpbmVyICNsaXR0bGVCYW5uZXIyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlua1NlbXVhIHtcbiAgY29sb3I6ICNlNzFkNjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogN3B4O1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
        this.slideIndex = 1;
        this.bannerDisplay = "block";
        this.bannerIndex = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getBanners().subscribe(function (data) {
            _this.banners = data;
        });
        this.data.getMenus().subscribe(function (data) {
            _this.menus = data;
        });
    };
    HomeComponent.prototype.showSlides = function (n) {
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            this.bannerIndex = 1;
        }
        if (n < 1) {
            this.bannerIndex = slides.length;
        }
        console.log(n);
    };
    // Thumbnail image controls
    HomeComponent.prototype.currentSlide = function (n) {
        this.showSlides(this.bannerIndex = n);
    };
    // Next/previous controls
    HomeComponent.prototype.plusSlides = function (n) {
        this.showSlides(this.bannerIndex += n);
        console.log(this.bannerIndex);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bantuan {\n  font-size: 12px;\n  color: white;\n  background-color: #201848;\n  height: 20px;\n}\n#bantuan span {\n  position: relative;\n  top: 4px;\n  right: 11vw;\n}\nheader {\n  background: #281d5a;\n  height: 2em;\n  padding: 0.7em 6vw;\n  margin: 0 auto;\n  box-shadow: 0px 6px 16px 0px rgba(43, 43, 43, 0.48);\n}\nheader a {\n  color: white;\n}\nheader .logo {\n  float: left;\n}\nheader .logo img {\n  height: auto;\n  width: 10em;\n}\nheader nav {\n  display: inline-block;\n  margin: 0 auto;\n  width: 1096px;\n}\nheader .dropbtn {\n  display: inline-block;\n  position: relative;\n  bottom: -4px;\n  padding: 0.1em 0.7em;\n  margin: 0.3em 2.3em;\n  float: left;\n  font-size: 0.8em;\n}\nheader .dropbtn a {\n  margin: auto;\n}\nheader .dropbtn .fa {\n  position: relative;\n  top: 1px;\n  left: 23px;\n  font-size: 16px;\n}\nheader .searchBar {\n  position: relative;\n  top: -0.5px;\n  float: left;\n  border-radius: 5px;\n  background-color: white;\n}\nheader .searchBar input {\n  display: inline-block;\n  border: none;\n  height: 34px;\n  width: 35vw;\n  border-radius: 5px;\n  position: relative;\n  left: 6px;\n}\nheader .searchBar input:focus {\n  outline: none !important;\n}\nheader .searchBar .searchIcon {\n  position: relative;\n  top: 7px;\n  float: right;\n  margin-right: 7px;\n}\nheader .navbarIcon {\n  margin-left: 2em;\n  cursor: pointer;\n}\nheader .navbarIcon .badge {\n  display: inline-block;\n  height: 20px;\n  text-align: center;\n  margin-left: -15px;\n  background-color: #e71d62;\n  border-radius: 50%;\n  font-size: 11px;\n  top: -19px;\n  position: relative;\n  width: 20px;\n}\nheader .navbarIcon .badge span {\n  position: absolute;\n  top: 16%;\n  left: 36%;\n}\nheader .dropdown-content {\n  display: none;\n  position: absolute;\n  left: -372px;\n  top: 40px;\n  background-color: #f9f9f9;\n  width: 100vw;\n  height: 50vh;\n  box-shadow: 0px 8px 16px 0px rgba(240, 225, 225, 0.2);\n  padding: 12px 16px;\n  z-index: 1;\n}\nheader .dropbtn:hover .dropdown-content {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L1M6XFxncmFtZWRpYS9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQVI7QURJQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0FDREo7QURHSTtFQUNJLFlBQUE7QUNEUjtBRElJO0VBQ0ksV0FBQTtBQ0ZSO0FES0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0hSO0FETUk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDSlI7QURPSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUVE7RUFDSSxZQUFBO0FDTlo7QURRUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDTlo7QURVSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDUlI7QURVUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNSWjtBRFdRO0VBQ0ksd0JBQUE7QUNUWjtBRFlRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVlo7QURjSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1pSO0FEYVE7RUFFSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDYlo7QURlWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNiaEI7QURrQkk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2hCUjtBRG1CSTtFQUNJLGNBQUE7QUNqQlIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNiYW50dWFue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMDE4NDg7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICByaWdodDogMTF2dztcclxuICAgIH1cclxufVxyXG5cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDojMjgxZDVhO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBwYWRkaW5nOi43ZW0gNnZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDE2cHggMHB4IHJnYmEoNDMsIDQzLCA0MywgMC40OCk7XHJcblxyXG4gICAgYXtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvIGltZ3tcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICB3aWR0aDoxMGVtO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdnsgICAgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDk2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3BidG57XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IC00cHg7XHJcbiAgICAgICAgcGFkZGluZzogMC4xZW0gMC43ZW07XHJcbiAgICAgICAgbWFyZ2luOjAuM2VtIDIuM2VtO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2hCYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTAuNXB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgXHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaEljb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXJJY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLmJhZGdleyBcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3MWQ2MjtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB0b3A6IC0xOXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTYlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzYlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMzcycHg7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgyNDAsIDIyNSwgMjI1LCAwLjIpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wYnRuOmhvdmVyICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAgIFxyXG59IiwiI2JhbnR1YW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMTg0ODtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuI2JhbnR1YW4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAxMXZ3O1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMjgxZDVhO1xuICBoZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogMC43ZW0gNnZ3O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxNnB4IDBweCByZ2JhKDQzLCA0MywgNDMsIDAuNDgpO1xufVxuaGVhZGVyIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5oZWFkZXIgLmxvZ28ge1xuICBmbG9hdDogbGVmdDtcbn1cbmhlYWRlciAubG9nbyBpbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMGVtO1xufVxuaGVhZGVyIG5hdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDk2cHg7XG59XG5oZWFkZXIgLmRyb3BidG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNHB4O1xuICBwYWRkaW5nOiAwLjFlbSAwLjdlbTtcbiAgbWFyZ2luOiAwLjNlbSAyLjNlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5oZWFkZXIgLmRyb3BidG4gYSB7XG4gIG1hcmdpbjogYXV0bztcbn1cbmhlYWRlciAuZHJvcGJ0biAuZmEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5oZWFkZXIgLnNlYXJjaEJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC41cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaGVhZGVyIC5zZWFyY2hCYXIgaW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzV2dztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDZweDtcbn1cbmhlYWRlciAuc2VhcmNoQmFyIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuaGVhZGVyIC5zZWFyY2hCYXIgLnNlYXJjaEljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuaGVhZGVyIC5uYXZiYXJJY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5uYXZiYXJJY29uIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3MWQ2MjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRvcDogLTE5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG59XG5oZWFkZXIgLm5hdmJhckljb24gLmJhZGdlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTYlO1xuICBsZWZ0OiAzNiU7XG59XG5oZWFkZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zNzJweDtcbiAgdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDI0MCwgMjI1LCAyMjUsIDAuMik7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgei1pbmRleDogMTtcbn1cbmhlYWRlciAuZHJvcGJ0bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(data) {
        this.data = data;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! S:\gramedia\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map