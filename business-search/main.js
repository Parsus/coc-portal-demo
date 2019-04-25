(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-clip-rotate\">\n <p style=\"font-size: 20px; color: white\">Map Loading...</p>\n</ngx-spinner>\n<coc-header></coc-header>\n\n<main>\n  <!-- <router-outlet></router-outlet> -->\n  <section class=\"map-container position-relative h-100\">\n    <coc-map></coc-map>\n    <coc-main-list-view></coc-main-list-view>\n    <coc-search-box></coc-search-box>\n    <coc-list-view></coc-list-view>\n    <coc-desktop-controls></coc-desktop-controls>\n    <coc-mobile-controls></coc-mobile-controls>\n  </section>\n</main>\n\n<coc-footer></coc-footer>\n"

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
        this.title = 'chandler-business-search';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/search-box/search-box.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _mobile_controls_mobile_controls_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mobile-controls/mobile-controls.component */ "./src/app/mobile-controls/mobile-controls.component.ts");
/* harmony import */ var _main_list_view_main_list_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-list-view/main-list-view.component */ "./src/app/main-list-view/main-list-view.component.ts");
/* harmony import */ var _desktop_controls_desktop_controls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./desktop-controls/desktop-controls.component */ "./src/app/desktop-controls/desktop-controls.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_11__["SearchBoxComponent"],
                _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_12__["ListViewComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                _mobile_controls_mobile_controls_component__WEBPACK_IMPORTED_MODULE_14__["MobileControlsComponent"],
                _main_list_view_main_list_view_component__WEBPACK_IMPORTED_MODULE_15__["MainListViewComponent"],
                _desktop_controls_desktop_controls_component__WEBPACK_IMPORTED_MODULE_16__["DesktopControlsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/desktop-controls/desktop-controls.component.html":
/*!******************************************************************!*\
  !*** ./src/app/desktop-controls/desktop-controls.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"!isMapView ? 'desktop-controls is-list-view' : 'desktop-controls'\">\n  <div class=\"desktop-controls-wrapper\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"button-group d-flex pt-1 pb-1\">\n              <button class=\"btn btn-green mr-1 w-100\" (click)=\"toggleListView()\" [disabled]=\"!this.isMapView\">\n                <i class=\"fal fa-list\"></i> List\n              </button>\n              <button class=\"btn btn-green w-100\" (click)=\"toggleMapView()\" [disabled]=\"this.isMapView\">\n                <i class=\"fal fa-map\"></i> Map\n              </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/desktop-controls/desktop-controls.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/desktop-controls/desktop-controls.component.ts ***!
  \****************************************************************/
/*! exports provided: DesktopControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopControlsComponent", function() { return DesktopControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");




var DesktopControlsComponent = /** @class */ (function () {
    function DesktopControlsComponent(sharedService, mapService) {
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.businessResults = [];
    }
    DesktopControlsComponent.prototype.toggleListView = function () {
        //If is map view (default view)
        if (this.isMapView && this.businessResults.length == 0) {
            this.sharedService.toggleView(!this.isMapView);
        }
        else if (this.isMapView && !this.isListView && this.businessResults.length > 0) {
            this.sharedService.toggleView(!this.isMapView);
        }
        else if (this.isMapView && this.businessResults.length > 0) {
            this.sharedService.toggleView(!this.isMapView);
            this.sharedService.setView(!this.isListView);
        }
    };
    DesktopControlsComponent.prototype.toggleMapView = function () {
        if (!this.isMapView && this.businessResults.length == 0) {
            //If is not map view and no search results
            this.sharedService.toggleView(!this.isMapView);
        }
        else if (!this.isMapView && this.businessResults.length > 0) {
            this.sharedService.toggleView(!this.isMapView);
            this.sharedService.setView(!this.isListView);
        }
    };
    DesktopControlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getState$.subscribe(function (isActive) {
            _this.isActive = isActive;
        });
        this.sharedService.getView$.subscribe(function (isListView) {
            _this.isListView = isListView;
        });
        this.sharedService.getCurrentView$.subscribe(function (isMapView) {
            _this.isMapView = isMapView;
        });
        this.mapService.currentResults$.subscribe(function (businessesResults) {
            _this.businessResults = businessesResults;
        });
    };
    DesktopControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-desktop-controls',
            template: __webpack_require__(/*! ./desktop-controls.component.html */ "./src/app/desktop-controls/desktop-controls.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
    ], DesktopControlsComponent);
    return DesktopControlsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"coc-footer\" role=\"contentinfo\">\n  <div class=\"coc-footer-container\">\n\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto\">\n        <a class=\"coc-footer-logo\" href=\"/\">\n          <img src=\"./assets/images/coc-footer-logo.png\" class=\"img-fluid\"  alt=\"city of chandler\">\n        </a>\n      </div>\n\n      <div class=\"col pl-md-0\">\n        <div class=\"coc-footer-menu row\">\n          <div class=\"coc-footer-contact col-12 col-md-auto\">\n            <p>Official Website of the City of Chandler, Arizona</p>\n            <p><a href=\"tel:1-480-782-2000\">480-782-2000</a></p>\n          </div>\n    \n          <div class=\"col-12 col-md-auto text-md-right ml-md-auto mt-md-3\">\n            <ul class=\"list-inline\">\n              <li class=\"list-inline-item\"><a href=\"/contact-chandler-form\">Contact</a></li>\n              <li class=\"list-inline-item\"><a href=\"/accessibility-policy\">Accessibility</a></li>\n            </ul>\n            <a class=\"coc-scroll-top\" href=\"#\" title=\"Scroll to top\">\n              <img src=\"./assets/images/scroll-top.png\" class=\"img-fluid\"  alt=\"Scroll to top\">\n            </a>\n          </div>\n        </div>\n    \n        <div class=\"coc-footer-copyright row\">\n          <div class=\"col-12 col-md-auto\">\n            <p>© 2019 Copyright Chandler, Arizona. All Rights Reserved.</p>\n          </div>\n          <div class=\"col-12 col-md-auto ml-md-auto\">\n            <ul class=\"list-inline\">\n              <li class=\"list-inline-item\"><a href=\"/sitemap\">Sitemap</a></li>\n              <li class=\"list-inline-item\"><a href=\"/privacy-policy\">Privacy Policy</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"coc-navbar-header fixed-top\" role=\"banner\">\n\n  <nav\n    role=\"navigation\"\n    aria-labelledby=\"navbarUtilityHeading\"\n    id=\"navbarUtility\"\n    class=\"coc-navbar-utility\">\n    <h2 class=\"sr-only\" id=\"navbarUtilityHeading\">Utility Menu</h2>\n    <div class=\"navbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n          <a\n            href=\"#\"\n            class=\"nav-link dropdown-toggle\"\n            id=\"navbarDropdownPay\"\n            role=\"button\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            Pay\n            <span class=\"caret\"></span>\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownPay\">\n            <a class=\"dropdown-item\" href=\"#\">Airport Hangar &amp; Tiedown Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Alarm Permits &amp; Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Business Registration/License Renewal</a>\n            <a class=\"dropdown-item\" href=\"#\">Classes &amp; Lessons</a>\n            <a class=\"dropdown-item\" href=\"#\">Fire Operations/Training Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Fire Prevention Permit Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Park &amp; Facility Rentals</a>\n            <a class=\"dropdown-item\" href=\"#\">Permits &amp; Plan Review Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Police Cadet Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Utility Services</a>\n            <a class=\"dropdown-item\" href=\"#\">Jobs</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Jobs</a>\n        </li>\n        <li class=\"nav-item d-none d-md-inline-block\">\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">A-Z</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Translate</a>\n        </li>\n        <li class=\"nav-item d-none d-md-inline-block\">\n          <a class=\"nav-link\" href=\"#\">News</a>\n        </li>\n        <li class=\"nav-item d-none d-md-inline-block\">\n          <a class=\"nav-link\" href=\"#\">Text Size</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Search</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <nav class=\"coc-navbar-main\">\n    <div class=\"navbar navbar-expand-lg\">\n      <a class=\"navbar-brand\" routerLink=\"/\" title=\"Home\">\n        <img src=\"./assets/images/coc-navbar-logo.svg\" class=\"navbar-brand-logo\" alt=\"\">\n        <span class=\"d-none\">City of Chandler</span>\n      </a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNavAltMarkup\"\n        aria-controls=\"navbarNavAltMarkup\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <span class=\"d-none d-sm-inline-block mr-3\">Menu</span>\n        <span class=\"navbar-toggler-icon fal fa-bars\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Explore</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Residents</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Business</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Government</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-view/list-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-view/list-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside *ngIf=\"isListView\" [class]=\"isListView ? 'coc-biz-search-list-view d-block' : 'coc-biz-search-list-view d-none'\" [class.active]=\"isActive\">\n  <div class=\"results-summary d-none d-lg-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col px-0 d-flex align-items-start\">\n          <div class=\"mr-1\">\n            <p class=\"h1\" id=\"searchResults\">{{this.businessResults.length}}</p>\n          </div>\n          <div>\n            <h4 id=\"bizType\" class=\"font-weight-normal\">Results</h4>\n            <p id=\"addressSearched\">near {{this.searchAddress}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 px-0\">\n          <div class=\"button-group d-flex mt-3\">\n            <button class=\"btn btn-primary mr-1 w-100\" (click)=\"exportResults()\"><i class=\"fal fa-upload\"></i> Export</button>\n            <button class=\"btn btn-green w-100\" (click)=\"toggleListView()\"><i class=\"fal fa-filter\"></i> Filter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"business-listings\">\n    <article *ngFor=\"let result of businessResults\" \n              id=\"br-{{result.id}}\" \n              (click)=\"toggleActiveState(result)\" \n              [class]=\"result.isActive ? 'business-listing pt-2 pb-2 active' : 'business-listing pt-2 pb-2'\"\n    >\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <h5>{{ result.name }}</h5>\n            <p>{{ result.address }}</p>\n            <a href=\"tel:+{{result.phone}}\">({{result.phone | slice:0:3}})-{{result.phone | slice:4:7}}-{{result.phone | slice:-4}}</a><br/>\n            <a href=\"{{result.website}}\">{{result.website}}</a>\n            <small>Since: {{result.openedOn}}</small>\n          </div>\n          <div class=\"col-4\">\n            <span class=\"fa-layers fa-fw fa-2x\" style=\"background: #003c5c; padding: 0 1rem;\">\n              <i class=\"text-white {{result.icon}}\"></i>\n            </span>\n            <!-- <i class=\"text-primary {{result.icon}} fa-2x\"></i> -->\n            <small><i>{{result.subCategory}}</i></small>\n          </div>\n        </div>\n      </div>\n    </article>\n  </div>\n</aside>\n"

/***/ }),

/***/ "./src/app/list-view/list-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-view/list-view.component.ts ***!
  \**************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular5-csv/dist/Angular5-csv */ "./node_modules/angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");





var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(sharedService, mapService) {
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.businessResults = [];
        this.searchAddress = "175 S Arizona Ave, Chandler, AZ 85225";
    }
    ListViewComponent.prototype.toggleActiveState = function (result) {
        //Get the coordinates
        var coordinates = [result.x, result.y];
        //Turn off active state for everybody
        this.businessResults.map(function (result) {
            return result.isActive = false;
        });
        //Turn on active state for what was clicked
        result.isActive = true;
        //Pan to business
        this.mapService.panToBusiness(coordinates);
    };
    ListViewComponent.prototype.toggleListView = function () {
        if (this.isMapView && this.businessResults.length > 0) {
            this.sharedService.setView(!this.isListView);
        }
        else {
            this.sharedService.toggleView(!this.isMapView);
            this.sharedService.setView(!this.isListView);
        }
    };
    ListViewComponent.prototype.exportResults = function () {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            headers: ['Number', 'Business Name', 'Business Address', 'Business Phone', 'Business Website', 'Business Opened On', 'Latitude', 'Longitude', 'Parent Category', 'Sub Category', 'Icon', 'IsActive']
        };
        new angular5_csv_dist_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__["Angular5Csv"](this.businessResults, 'Search Results', options);
    };
    ListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getState$.subscribe(function (isActive) {
            _this.isActive = isActive;
        });
        this.sharedService.getCurrentView$.subscribe(function (isMapView) {
            _this.isMapView = isMapView;
        });
        this.sharedService.getView$.subscribe(function (isListView) {
            _this.isListView = isListView;
        });
        this.mapService.currentResults$.subscribe(function (businessesResults) {
            _this.businessResults = businessesResults;
        });
        this.mapService.currentBusiness$.subscribe(function (selectedBusiness) {
            _this.selectedBusiness = selectedBusiness;
        });
        this.mapService.currentAddress$.subscribe(function (searchAddress) {
            _this.searchAddress = searchAddress;
        });
    };
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-list-view',
            template: __webpack_require__(/*! ./list-view.component.html */ "./src/app/list-view/list-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/main-list-view/main-list-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main-list-view/main-list-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"businessResults.length === 0\"  [class]=\"!isMapView ? 'main-list-view' : 'd-none'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h2>No Results</h2>\n        <p>To display a list of businesses please search.</p>\n        span.fa-layersf\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"businessResults.length > 0\" [class]=\"!isMapView ? 'main-list-view' : 'd-none'\">\n  <article *ngFor=\"let result of businessResults\" id=\"{{result.id}}\" class=\"business listing pt-2 pb-2\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <h5>{{ result.name }}</h5>\n          <p>{{ result.address }}</p>\n          <a href=\"tel:+{{result.phone}}\">({{result.phone | slice:0:3}}) {{result.phone | slice:4:7}}-{{result.phone | slice:-4}}</a><br/>\n          <a href=\"{{result.website}}\">{{result.website}}</a><br/>\n          <small><i>Since: {{result.openedOn}}</i></small>\n        </div>\n        <div class=\"col-4\">\n          <i class=\"text-primary {{result.icon}} fa-2x\"></i><br/>\n          <small><i>{{result.subCategory}}</i></small>\n        </div>\n      </div>\n    </div>\n  </article>\n</div>\n"

/***/ }),

/***/ "./src/app/main-list-view/main-list-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-list-view/main-list-view.component.ts ***!
  \************************************************************/
/*! exports provided: MainListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainListViewComponent", function() { return MainListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");




var MainListViewComponent = /** @class */ (function () {
    function MainListViewComponent(sharedService, mapService) {
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.businessResults = [];
    }
    MainListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getCurrentView$.subscribe(function (isMapView) {
            _this.isMapView = isMapView;
        });
        this.mapService.currentResults$.subscribe(function (businessesResults) {
            _this.businessResults = businessesResults;
        });
    };
    MainListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-main-list-view',
            template: __webpack_require__(/*! ./main-list-view.component.html */ "./src/app/main-list-view/main-list-view.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
    ], MainListViewComponent);
    return MainListViewComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section #map class=\"map-box position-relative\">\n\t<div [class]=\"this.selectedBusiness.isActive ? 'mobile-card-wrapper active' : 'mobile-card-wrapper'\">\n\t\t<article class=\"mobile-card pt-1 pb-1\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t<h5>{{this.selectedBusiness.name}}</h5>\n\t\t\t\t\t\t<p>{{this.selectedBusiness.address}}</p>\n\t\t\t\t\t\t<a href=\"tel:+{{this.selectedBusiness.phone}}\">({{this.selectedBusiness.phone | slice:0:3}})-{{this.selectedBusiness.phone | slice:4:7}}-{{this.selectedBusiness.phone | slice:-4}}</a><br/>\n\t\t\t\t\t\t<a href=\"{{this.selectedBusiness.website}}\">{{this.selectedBusiness.website}}</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<i class=\"text-success {{this.selectedBusiness.icon}} fa-2x\"></i><br/>\n\t\t\t\t\t\t<small>{{this.selectedBusiness.parentCategory}}</small><br/>\n\t\t\t\t\t\t<small><i>Since {{this.selectedBusiness.openedOn}}</i></small>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"close\" (click)=\"closeCard(this.selectedBusiness)\">\n\t\t\t\t<span class=\"sr-only\">Close</span>\n\t\t\t\t<i class=\"fal fa-times\"></i>\n\t\t\t</div>\n\t\t</article>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");






var MapComponent = /** @class */ (function () {
    function MapComponent(sharedService, mapService, spinner) {
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.spinner = spinner;
        this.clicked = false;
        this.businessResults = [];
        this.searchResults = [];
        this.selectedBusiness = {
            name: '',
            address: '',
            phone: '',
            website: '',
            openedOn: '',
            parentCategory: '',
            icon: '',
            isActive: false
        };
        this.options = {
            dojoConfig: {
                async: true,
                tlmSiblingOfDojo: false,
                packages: [{
                        location: location.pathname.replace(/\/[^/]+$/, '') + "assets/fcl",
                        name: 'fcl'
                    }],
                has: {
                    "esri-promise-compatibility": 1
                }
            }
        };
        this.closeCard = function (result) {
            result.isActive = !result.isActive;
        };
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.currentResults$.subscribe(function (businessResults) {
            _this.businessResults = businessResults;
        });
        this.mapService.mapStatus$.subscribe(function (mapLoaded) {
            _this.mapLoaded = mapLoaded;
        });
        this.mapService.currentBusiness$.subscribe(function (selectedBusiness) {
            _this.selectedBusiness = selectedBusiness;
        });
        this.mapService.getCoordinates$.subscribe(function (searchResults) {
            _this.searchResults = searchResults;
        });
        this.spinner.show();
        // use esri-loader to load JSAPI modules  
        return Object(esri_loader__WEBPACK_IMPORTED_MODULE_2__["loadModules"])([
            'esri/Map',
            'esri/Color',
            'esri/views/MapView',
            'esri/views/SceneView',
            'esri/views/ui/DefaultUI',
            'esri/geometry/Extent',
            'esri/geometry/SpatialReference',
            'esri/geometry/Point',
            'esri/layers/GraphicsLayer',
            'esri/Graphic',
            'esri/symbols/SimpleMarkerSymbol',
            'esri/symbols/SimpleLineSymbol',
            'esri/symbols/SimpleFillSymbol',
            'esri/symbols/TextSymbol',
            'esri/symbols/TextSymbol3DLayer',
            'esri/symbols/Font',
            'esri/renderers/ClassBreaksRenderer',
            'esri/core/watchUtils',
            'esri/geometry/support/webMercatorUtils',
            'fcl/FlareClusterLayer_v4',
            'dojo',
            'dojo/ready',
            'dojo/json',
            'dojo/dom',
            'dojo/on',
            'dojo/dom-attr',
            'dojo/dom-class'
        ], this.options)
            .then(function (_a) {
            var Map = _a[0], Color = _a[1], MapView = _a[2], SceneView = _a[3], Extent = _a[4], SpatialReference = _a[5], Point = _a[6], PopupTemplate = _a[7], GraphicsLayer = _a[8], Graphic = _a[9], SimpleMarkerSymbol = _a[10], SimpleLineSymbol = _a[11], SimpleFillSymbol = _a[12], TextSymbol = _a[13], TextSymbol3DLayer = _a[14], Font = _a[15], ClassBreaksRenderer = _a[16], watchUtils = _a[17], webMercatorUtils = _a[18], fcl = _a[19], dojo = _a[20], ready = _a[21], JSON = _a[22], dom = _a[23], on = _a[24], domAttr = _a[25], domClass = _a[26];
            _this.map = new Map({
                basemap: 'streets'
            });
            _this.mapView = new MapView({
                container: _this.mapViewEl.nativeElement,
                center: [-111.8413725, 33.3014505],
                zoom: 15,
                map: _this.map,
            });
            _this.mapView.ui.move('zoom', 'bottom-right');
            var graphicsLayer = new GraphicsLayer({});
            _this.map.add(graphicsLayer);
            _this.mapView.when(function () {
                _this.spinner.hide();
                _this.mapStatusSubscription = _this.mapService.mapLoaded.subscribe(function () {
                    /*
                     * Notify search box that map has loaded and enable search button
                    */
                });
                var activePin = 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z';
                _this.panRequestSubscrition = _this.mapService.panRequest.subscribe(function () {
                    panMap(_this.mapView, _this.mapService.businessCoordinates);
                });
                _this.businessResultsSubscription = _this.mapService.currentResults$.subscribe(function () {
                    addGraphics(_this.map, _this.clusterLayer, _this.businessResults);
                });
                _this.selectedBusinessSubscription = _this.mapService.currentBusiness$.subscribe(function () {
                    toggleActiveBusiness(_this.mapView, _this.businessResults, _this.selectedBusiness);
                });
                _this.searchCoordinatesSubscription = _this.mapService.getCoordinates$.subscribe(function () {
                    recenterMap(_this.mapView, _this.searchResults);
                });
                function panMap(mapView, coordinates) {
                    mapView.goTo({
                        target: coordinates,
                    }, { /* duration: 1500 */}).then(function () {
                        var mapPin = new Graphic({
                            attributes: {
                                name: 'mapPin'
                            },
                            geometry: {
                                type: 'point',
                                longitude: coordinates[0],
                                latitude: coordinates[1]
                            },
                            symbol: {
                                type: 'simple-marker',
                                color: '#003c5c',
                                path: activePin,
                                size: '30px'
                            }
                        });
                        if (graphicsLayer.graphics.length) {
                            graphicsLayer.graphics.removeAt(graphicsLayer.graphics.length - 1);
                        }
                        graphicsLayer.graphics.add(mapPin);
                    });
                }
                function addGraphics(map, clusterLayer, businessResults) {
                    map.remove(clusterLayer);
                    var defaultSym = new SimpleMarkerSymbol({
                        size: '30px',
                        color: '#003c5c',
                        path: 'M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z',
                        outline: null
                    });
                    var renderer = new ClassBreaksRenderer({
                        field: 'clusterCount',
                        defaultSymbol: defaultSym
                    });
                    var smSymbol = new SimpleMarkerSymbol({ size: 22, outline: new SimpleLineSymbol({ color: [221, 159, 34] }), color: [255, 204, 102] });
                    var mdSymbol = new SimpleMarkerSymbol({ size: 24, outline: new SimpleLineSymbol({ color: [82, 163, 204] }), color: [102, 204, 255] });
                    var lgSymbol = new SimpleMarkerSymbol({ size: 28, outline: new SimpleLineSymbol({ color: [41, 163, 41] }), color: [51, 204, 51] });
                    var xlSymbol = new SimpleMarkerSymbol({ size: 32, outline: new SimpleLineSymbol({ color: [200, 52, 59] }), color: [250, 65, 74] });
                    renderer.addClassBreakInfo(0, 19, smSymbol);
                    renderer.addClassBreakInfo(20, 150, mdSymbol);
                    renderer.addClassBreakInfo(151, 1000, lgSymbol);
                    renderer.addClassBreakInfo(1001, Infinity, xlSymbol);
                    var options = {
                        id: "flare-cluster-layer",
                        clusterRenderer: renderer,
                        displaySubTypeFlares: false,
                        maxSingleFlareCount: 8,
                        clusterRatio: 75,
                        data: businessResults
                    };
                    clusterLayer = new fcl.FlareClusterLayer(options);
                    map.add(clusterLayer);
                }
                function toggleActiveBusiness(mapView, businessResults, selectedBusiness) {
                    if (selectedBusiness.isActive) {
                        return;
                    }
                    //Drop A Pin At The Coordinates
                    var coordinates = [selectedBusiness.x, selectedBusiness.y];
                    mapView.goTo({
                        target: coordinates,
                    }, { /* duration: 1500 */}).then(function () {
                        var mapPin = new Graphic({
                            attributes: {
                                isActive: selectedBusiness.isActive
                            },
                            geometry: {
                                type: 'point',
                                longitude: coordinates[0],
                                latitude: coordinates[1]
                            },
                            symbol: {
                                type: 'simple-marker',
                                color: '#003c5c',
                                path: activePin,
                                size: '30px'
                            }
                        });
                        if (graphicsLayer.graphics.length) {
                            graphicsLayer.graphics.removeAt(graphicsLayer.graphics.length - 1);
                        }
                        graphicsLayer.graphics.add(mapPin);
                    });
                    //Loop through all businesses and set active state to false
                    businessResults.map(function (result) {
                        return result.isActive = false;
                    });
                    //Set selected business state to active
                    selectedBusiness.isActive = true;
                    document.getElementById('br-' + selectedBusiness.id).scrollIntoView({ behavior: "smooth", block: "end" });
                }
                function recenterMap(mapView, searchResults) {
                    var coordinates = [searchResults.candidates[0].location.x, searchResults.candidates[0].location.y];
                    mapView.goTo({
                        target: coordinates
                    }, { duration: 1500 }).then(function () {
                        //console.log("Map recentered");
                    });
                }
                _this.mapView.on('click', function (event) {
                    _this.mapView.hitTest(event).then(function (response) {
                        if (response.results.length) {
                            var graphic = response.results[0].graphic;
                            _this.mapService.setCurrentBusiness(graphic.attributes);
                        }
                    });
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapComponent.prototype, "mapViewEl", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/mobile-controls/mobile-controls.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mobile-controls/mobile-controls.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-controls d-lg-none\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"button-group d-flex pt-3 pb-3\">\n          <button class=\"btn btn-green mr-1 w-100\" (click)=\"toggleListView()\"><i class=\"fal fa-filter\"></i> Filter</button>\n          <button class=\"btn btn-green w-100\" (click)=\"toggleActive()\">\n            <i [class]=\"!isActive ? 'fal fa-bars' : 'fal fa-map'\"></i> {{!isActive ? 'List' : 'Map'}}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mobile-controls/mobile-controls.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mobile-controls/mobile-controls.component.ts ***!
  \**************************************************************/
/*! exports provided: MobileControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileControlsComponent", function() { return MobileControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");



var MobileControlsComponent = /** @class */ (function () {
    function MobileControlsComponent(sharedService) {
        var _this = this;
        this.sharedService = sharedService;
        this.isActive = false;
        sharedService.getState$.subscribe(function (isActive) {
            _this.isActive = isActive;
        });
        sharedService.getView$.subscribe(function (isListView) {
            _this.isListView = isListView;
        });
    }
    MobileControlsComponent.prototype.toggleListView = function () {
        this.sharedService.setView(!this.isListView);
    };
    MobileControlsComponent.prototype.toggleActive = function () {
        this.sharedService.setState(!this.isActive);
    };
    MobileControlsComponent.prototype.ngOnInit = function () {
    };
    MobileControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-mobile-controls',
            template: __webpack_require__(/*! ./mobile-controls.component.html */ "./src/app/mobile-controls/mobile-controls.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], MobileControlsComponent);
    return MobileControlsComponent;
}());



/***/ }),

/***/ "./src/app/search-box/search-box.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-box/search-box.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside [class]=\"!isListView ? 'coc-search-box d-block' : 'coc-search-box d-none'\">\n  <ngx-spinner></ngx-spinner>\n  <h3>Search</h3>\n  <h4>Chandler Businesses</h4>\n  <form id=\"searchBoxForm\" class=\"mt-3\" (ngSubmit)=\"search($event)\">\n    <div class=\"form-group\" id=\"typeOfBusiness\">\n      <span class=\"d-block\">Type of Business</span>\n      <div class=\"btn-group d-flex\" dropdown [insideClick]=\"true\">\n        <button type=\"button\" class=\"btn btn-split text-left\">Show All</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn btn-split-right dropdown-toggle dropdown-toggle-split\" aria-controls=\"dropdown-split\">\n          <span class=\"caret\"></span>\n          <span class=\"sr-only\">Split button!</span>\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" \n            role=\"menu\" aria-labelledby=\"button-split\">\n          <li role=\"menuitem\">\n            <!-- Parent Category: Administrative Support & Employment, Travel, and Building Services --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"administrative\" value=\"administrative\" [checked]=\"isAllAdministrativeChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Administrative Support & Employment, Travel, and Building Services</label>\n                </div>\n              </summary>\n              <!-- Sub Categories: Administrative Support & Employment, Travel, and Building Services -->\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of administrative ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"administrativeSubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"administrativeSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Amusement, Arts, Entertainment, Recreation --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"arts\" value=\"arts\" [checked]=\"isAllArtsChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Amusement, Arts, Entertainment, Recreation</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of arts ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"artsSubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"artsSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Construction --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"construction\" value=\"construction\" [checked]=\"isAllConstructionChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Construction</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of construction ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"constructionSubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"constructionSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Education Services --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"education\" value=\"education\" [checked]=\"isAllEducationChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Education Services</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of education ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"educationSubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"educationSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Finance & Insurance --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"finance\" value=\"finance\" [checked]=\"isAllFinanceChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Finance & Insurance</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of finance ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"financeSubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"financeSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Health Care, Social Services & Day Care --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"health\" value=\"health\" [checked]=\"isAllHealthChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Health Care, Social Services & Day Care</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of health ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"healthSubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"healthSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Hotel Motel --> \n            <details class=\"business-type dropdown-item\">   \n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"hotel\" value=\"hotel\" [checked]=\"isAllHotelChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"finance\">&nbsp;Hotel Motel</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of hotel ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Manufacturer -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"manufacturing\" value=\"manufacturing\" [checked]=\"isAllManufacturingChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"restaurant\">&nbsp;Manufacturer</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of manufacturing ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: News/Software/Telecom -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input #restaurantCheckBox type=\"checkbox\" class=\"form-check-input\" id=\"news\" value=\"news\" [checked]=\"isAllNewsChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"restaurant\">&nbsp;News/Software/Telecom</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of news ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category: Restaurants -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"restaurant\" value=\"restaurant\" [checked]=\"isAllRestaurantChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"restaurant\">&nbsp;Restaurants</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of restaurant ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category Retail -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input pl-1\" id=\"retail\" value=\"retail\" [checked]=\"isAllRetailChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"retail\">&nbsp;Retail</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of retail ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category Services & Non-Profits -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input pl-1\" id=\"services\" value=\"services\" [checked]=\"isAllServicesChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"retail\">&nbsp;Services & Non-Profits</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of services ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category Transportation & Warehousing -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input pl-1\" id=\"transportation\" value=\"transportation\" [checked]=\"isAllTransportationChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"retail\">&nbsp;Transportation & Warehousing</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of transportation ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category Utilities -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input pl-1\" id=\"utilities\" value=\"utilities\" [checked]=\"isAllUtilitiesChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"retail\">&nbsp;Utilities</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of utilities ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" [(ngModel)]=\"subCategory.state\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <!-- Parent Category Wholesaler -->\n            <details class=\"business-type dropdown-item\">\n              <summary>\n                <div class=\"input-wrapper d-inline-block ml-1\">\n                  <input type=\"checkbox\" class=\"form-check-input pl-1\" id=\"wholeSale\" value=\"wholeSale\" [checked]=\"isAllWholesaleChecked()\" (change)=\"checkAll($event)\">\n                  <label class=\"form-check-label\" for=\"retail\">&nbsp;Wholesaler</label>\n                </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of wholeSale ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"{{subCategory.name}}SubCategory{{i + 1}}\" value={{subCategory.name}} name={{subCategory.name}} [checked]=\"subCategory.state\" (change)=\"updateFilterOptions($event)\" />\n                    <label class=\"form-check-label\" for=\"{{subCategory.name}}SubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group\" id=\"typeOfLicense\">\n      <span class=\"d-block\">Type of License</span>\n      <div class=\"btn-group d-flex\" dropdown>\n        <button type=\"button\" class=\"btn btn-split text-left\">{{this.licenseFilterButtonText}}</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn btn-split-right dropdown-toggle dropdown-toggle-split\" aria-controls=\"dropdown-split\">\n          <span class=\"caret\"></span>\n          <span class=\"sr-only\">Split button!</span>\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n            <li *ngFor=\"let license of licenseType; let i = index\">\n              <a id=\"{{i + 1}}\" class=\"dropdown-item\" (click)=\"updateLicenseFilter($event)\">{{license.name}}</a>\n            </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group\" id=\"addressSearch\">\n      <label for=\"bizSearchAddress\">Near an Address</label>\n      <input type=\"text\" class=\"form-control\" #bizSearchAddress id=\"bizSearchAddress\" placeholder=\"Near City Center\" (input)=\"updateSearchAddress($event.target.value)\" required>\n    </div>\n    <div class=\"form-group\" id=\"lengthOfBusiness\">\n      <span class=\"d-block\">Length In Business</span>\n      <div class=\"btn-group d-flex\" dropdown>\n        <button type=\"button\" class=\"btn btn-split text-left\">1+ Days</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn btn-split-right dropdown-toggle dropdown-toggle-split\" aria-controls=\"dropdown-split\">\n          <span class=\"caret\"></span>\n          <span class=\"sr-only\">Split button!</span>\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\"\n            role=\"menu\" aria-labelledby=\"button-split\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 1</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 2</a>\n            </li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 3</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 4</a>\n            </li>\n        </ul>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-next btn-block mt-2 d-flex align-items-center justify-content-center\" [disabled]=\"validatingAddress\">\n      <span>{{validatingAddress ? 'Searching...' : 'Search'}}</span>\n      <span *ngIf=\"validatingAddress\" class=\"spinner-border spinner-border-lg ml-1\" role=\"status\" aria-hidden=\"true\"></span>\n    </button>\n  </form>\n</aside>\n\n"

/***/ }),

/***/ "./src/app/search-box/search-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-box/search-box.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");




var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(sharedService, mapService) {
        var _this = this;
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.businessResults = this.mapService.data;
        // Business Categories SubCategories
        this.administrative = this.mapService.administrativeSubCategories;
        this.arts = this.mapService.artsSubCategories;
        this.construction = this.mapService.constructionSubCategories;
        this.education = this.mapService.educationSubCategories;
        this.finance = this.mapService.financeSubCategories;
        this.health = this.mapService.healthSubCategories;
        this.hotel = this.mapService.hotelSubCategories;
        this.manufacturing = this.mapService.manufacturerSubCategories;
        this.news = this.mapService.newsSubCategories;
        this.realEstate = this.mapService.realEstateSubCategories;
        this.restaurant = this.mapService.restaurantSubCategories;
        this.retail = this.mapService.retailSubCategories;
        this.services = this.mapService.servicesSubCategories;
        this.transportation = this.mapService.transportationSubCategories;
        this.utilities = this.mapService.utilitiesSubCategories;
        this.wholeSale = this.mapService.wholesalerSubCategories;
        this.licenseType = this.mapService.licenseType;
        this.filterOptions = [];
        this.licenseFilterButtonText = "Show All";
        this.searchAddress = '175 S Arizona Ave, Chandler, AZ 85225';
        this.search = function (e) {
            e.preventDefault();
            _this.validatingAddress = true;
            setTimeout(function () {
                _this.mapService.getAddress(_this.searchAddress).subscribe(function (response) {
                    if (response.candidates.length) {
                        _this.mapService.setSearchCoordinates(response);
                        _this.loadData();
                        _this.validatingAddress = false;
                    }
                    else {
                        alert('Not a valid address. Please try again.');
                        _this.validatingAddress = false;
                    }
                });
            }, 2000);
        };
    }
    SearchBoxComponent.prototype.updateFilterOptions = function (e) {
        if (e.target.checked) {
            this.filterOptions.push(e.target.value);
        }
        else {
            if (this.filterOptions.includes(e.target.value)) {
                for (var i = 0; i < this.filterOptions.length; i++) {
                    if (e.target.value == this.filterOptions[i]) {
                        this.filterOptions.splice(i, 1);
                    }
                }
            }
        }
    };
    SearchBoxComponent.prototype.updateLicenseFilter = function (e) {
        this.licenseFilterButtonText = e.target.innerHTML;
    };
    SearchBoxComponent.prototype.updateSearchAddress = function (address) {
        this.mapService.setSearchAddress(address);
    };
    SearchBoxComponent.prototype.checkAll = function (ev) {
        var value = ev.target.value;
        switch (value) {
            case "administrative":
                this.administrative.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "arts":
                this.arts.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "construction":
                this.construction.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "education":
                this.education.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "finance":
                this.finance.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "health":
                this.health.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "hotel":
                this.hotel.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "manufacturing":
                this.manufacturing.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "news":
                this.news.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "realEstate":
                this.arts.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "restaurant":
                this.restaurant.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "retail":
                this.retail.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "services":
                this.services.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "transportation":
                this.transportation.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "utilities":
                this.utilities.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            case "wholeSale":
                this.wholeSale.forEach(function (x) { return x.state = ev.target.checked; });
                break;
            default:
                console.log('Error');
        }
    };
    SearchBoxComponent.prototype.isAllAdministrativeChecked = function () { return this.administrative.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllArtsChecked = function () { return this.arts.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllConstructionChecked = function () { return this.construction.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllEducationChecked = function () { return this.education.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllFinanceChecked = function () { return this.finance.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllHealthChecked = function () { return this.health.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllHotelChecked = function () { return this.hotel.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllManufacturingChecked = function () { return this.manufacturing.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllNewsChecked = function () { return this.news.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllRestaurantChecked = function () { return this.restaurant.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllRetailChecked = function () { return this.retail.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllServicesChecked = function () { return this.services.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllTransportationChecked = function () { return this.transportation.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllUtilitiesChecked = function () { return this.utilities.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.isAllWholesaleChecked = function () { return this.wholeSale.every(function (_) { return _.state; }); };
    SearchBoxComponent.prototype.toggleListView = function () {
        this.sharedService.setView(!this.isListView);
    };
    SearchBoxComponent.prototype.loadData = function () {
        var _this = this;
        var unfilteredResults = this.mapService.data;
        if (this.filterOptions.length) {
            var filteredResults = this.businessResults.filter(function (result) {
                for (var i = 0; i < _this.filterOptions.length; i++) {
                    if (result.subCategory == _this.filterOptions[i]) {
                        return result;
                    }
                }
            });
            this.mapService.setBusinessResults(filteredResults);
        }
        else {
            this.mapService.setBusinessResults(unfilteredResults);
        }
        if (this.isMapView) {
            this.toggleListView();
        }
    };
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getView$.subscribe(function (isListView) {
            _this.isListView = isListView;
        });
        this.mapService.currentResults$.subscribe(function (businessesResults) {
            _this.businessResults = businessesResults;
        });
        this.sharedService.getCurrentView$.subscribe(function (isMapView) {
            _this.isMapView = isMapView;
        });
        this.mapService.currentAddress$.subscribe(function (searchAddress) {
            _this.searchAddress = searchAddress;
        });
    };
    SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-search-box',
            template: __webpack_require__(/*! ./search-box.component.html */ "./src/app/search-box/search-box.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'text/plain' })
};
var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
        this.addressUrl = 'https://gistest.chandleraz.gov/arcgistest/rest/services/Geocoders/TX_STARCLASS_LOCATOR/GeocodeServer/';
        this.panRequest = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.panComplete = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.businessResults = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedBusiness = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mapLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchAddress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchCoordinates = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentResults$ = this.businessResults.asObservable();
        this.currentBusiness$ = this.selectedBusiness.asObservable();
        this.mapStatus$ = this.mapLoaded.asObservable();
        this.currentAddress$ = this.searchAddress.asObservable();
        this.getCoordinates$ = this.searchCoordinates.asObservable();
        this.data = [
            {
                id: 0,
                name: 'San Tan Brewing Company',
                address: '8 S San Marcos Pl, Chandler, AZ 85225',
                phone: '4809178700',
                website: 'santanbrewing.com',
                openedOn: '03/27/2005',
                x: -111.84222534039891,
                y: 33.30323247066584,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                isActive: false
            },
            {
                id: 1,
                name: 'Hangar Café',
                address: '1725 E Ryan Rd, Chandler, AZ 85286',
                phone: '4807921939',
                website: 'hangarcafe.com',
                openedOn: '11/16/1999',
                x: -111.81161285615794,
                y: 33.272952295680888,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                isActive: false
            },
            {
                id: 2,
                name: 'Kohl\'s South Chandler',
                address: '1430 S Arizona Ave, Chandler, AZ 85286',
                phone: '4807825865',
                website: 'kohls.com',
                openedOn: '09/15/2017',
                x: -111.84365321424222,
                y: 33.285488656511909,
                parentCategory: 'Retail',
                subCategory: 'Department Stores',
                icon: 'fal fa-store',
                isActive: false
            },
            {
                id: 3,
                name: 'Mattress Firm Clearance',
                address: '1400 S Arizona Ave, Chandler, AZ 85286',
                phone: '4808999847',
                website: 'mattressfirm.com',
                openedOn: '01/06/2017',
                x: -111.84220616393715,
                y: 33.286080778529161,
                parentCategory: 'Retail',
                subCategory: 'Furniture & Furnishings',
                icon: 'fal fa-store',
                isActive: false
            },
            {
                id: 4,
                name: 'Starbucks',
                address: '1395 S Arizona Ave #1, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'starbucks.com',
                openedOn: '6/16/2009',
                x: -111.84098545309143,
                y: 33.285270703478382,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                isActive: false
            },
            {
                id: 5,
                name: 'Walmart Supercenter',
                address: '1175 S Arizona Ave, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'walmart.com',
                openedOn: '11/10/2007',
                x: -111.8384134269721,
                y: 33.28930709015038,
                parentCategory: 'Retail',
                subCategory: 'Department Stores',
                icon: 'fal fa-store',
                isActive: false
            },
            {
                id: 6,
                name: 'Goodwill',
                address: '1095 S Arizona Ave, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'goodwill.com',
                openedOn: '08/24/1981',
                x: -111.83820218672761,
                y: 33.290472780747365,
                parentCategory: 'Retail',
                subCategory: 'Used Merchandise',
                icon: 'fal fa-store',
                isActive: false
            },
            {
                id: 7,
                name: 'Nando\'s Mexican Cafe',
                address: '1890 W Germann Rd, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'nandos.com',
                openedOn: '04/13/1980',
                x: -111.87411917935181,
                y: 33.276817017705632,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                isActive: false
            },
            {
                id: 8,
                name: 'Cold Beers & Cheeseburgers',
                address: '1980 W Germann Rd, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'coldbeers.com',
                openedOn: '03/16/2016',
                x: -111.87570100974833,
                y: 33.277332455917268,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                isActive: false
            },
            {
                id: 9,
                name: 'Albertsons',
                address: '3145 S Alma School Rd, Chandler, AZ 85248 ',
                phone: '4801234567',
                website: 'albertsons.com',
                openedOn: '07/04/1991',
                x: -111.85688540502962,
                y: 33.260824321806716,
                parentCategory: 'Retail',
                subCategory: 'Grocery & Convenience Stores',
                icon: "fal fa-shopping-cart",
                isActive: false
            },
            {
                id: 10,
                name: 'First Credit Union',
                address: '25 S Arizona Pl #111, Chandler, AZ 85225',
                phone: '4807565500',
                website: 'firstcu.net',
                openedOn: '11/01/2001',
                x: -111.84044431897641,
                y: 33.302969627771567,
                parentCategory: 'Finance & Insurance',
                subCategory: 'Banks & Credit Unions',
                icon: 'fal fa-hands-usd',
                isActive: false
            },
            {
                id: 11,
                name: 'Crowne Plaza Hotels & Resorts Phoenix - Chandler Golf Resort',
                address: '1 N San Marcos Pl, Chandler, AZ 85225',
                phone: '4808120900',
                website: 'ihg.com',
                openedOn: '1/1/1991',
                x: -111.84468240218729,
                y: 33.304165753291095,
                parentCategory: 'Hotel Motel',
                subCategory: 'Hotels & Motels',
                icon: 'fal fa-hotel',
                isActive: false
            },
            {
                id: 12,
                name: 'Chandler Center for the Arts',
                address: '250 N Arizona Ave, Chandler, AZ 85225',
                phone: '4807822680',
                website: 'chandlercenter.org',
                openedOn: '1/1/1991',
                x: -111.84204575190275,
                y: 33.307452799990678,
                parentCategory: 'Amusement, Arts, Entertainment, Recreation',
                subCategory: 'Performing Arts',
                icon: 'fal fa-ticket',
                isActive: false
            },
            {
                id: 13,
                name: 'Frye Elementary School',
                address: '801 E Frye Rd, Chandler, AZ 85225',
                phone: '4808126400',
                website: 'cusd80.com',
                openedOn: '1/1/1991',
                x: -111.83121292937288,
                y: 33.297486314156423,
                parentCategory: 'Education Services',
                subCategory: 'Elementary & Secondary Schools',
                icon: 'fal fa-graduation-cap',
                isActive: false
            },
            {
                id: 14,
                name: 'Michaels and Associates',
                address: '200 N Nebraska St, Chandler, AZ 85225',
                phone: '4809635509',
                website: 'michaelsandassociates.com',
                openedOn: '1/1/1991',
                x: -111.84657493450467,
                y: 33.306405171882361,
                parentCategory: 'Services & Non-Profits',
                subCategory: 'Legal Services',
                icon: 'fal fa-handshake-alt',
                isActive: false,
            },
            {
                id: 15,
                name: 'Website Design & Marketing Services',
                address: '868 S Arizona Ave, Chandler, AZ 85225',
                phone: '4803690387',
                website: 'websites.joehorrell.com',
                openedOn: '1/1/1997',
                x: -111.84305844407305,
                y: 33.293446493439781,
                parentCategory: 'News/Software/Telecom',
                subCategory: 'Software Publishers',
                icon: 'fal fa-satellite-dish',
                isActive: false
            },
            {
                id: 16,
                name: 'The Ostrich',
                address: '10 N San Marcos Pl, Chandler, AZ 85225',
                phone: '4809174903',
                website: 'theostrichbarandlounge.com',
                openedOn: '4/19/2015',
                x: -111.84225194966817,
                y: 33.303783394813102,
                parentCategory: 'Restaurants',
                subCategory: 'Drinking Establishments',
                icon: 'fal fa-glass-martini-alt',
                isActive: false
            },
            {
                id: 17,
                name: 'Chandler Family Dentistry: Chaiyoon Cho, DDS',
                address: '299 N Arizona Ave, Chandler, AZ 85225',
                phone: '4808990116',
                website: 'drchochandler.com',
                openedOn: '09/21/1981',
                x: -111.84114207274565,
                y: 33.307792676887679,
                parentCategory: 'Health Care, Social Services & Day Care',
                subCategory: 'Dentists',
                icon: 'fal fa-briefcase-medical',
                isActive: false,
            },
            {
                id: 18,
                name: 'Petro Stop',
                address: '147 S Delaware St, Chandler, AZ 85225',
                phone: '4809626111',
                website: 'theoriginalpetrostop.com',
                openedOn: '4/11/1978',
                x: -111.8372876512294,
                y: 33.301136412484304,
                parentCategory: 'Retail',
                subCategory: 'Gasoline Stations & Convenience Stores',
                icon: 'fal fa-gas-pump',
                isActive: false,
            },
            {
                id: 19,
                name: 'Dos Gringos Alma',
                address: '1361 N Alma School Rd, Chandler, AZ 85224',
                phone: '4809172931',
                website: 'dosgringosaz.com',
                openedOn: '11/11/2011',
                x: -111.8582343580329,
                y: 33.326589330192782,
                parentCategory: 'Restaurants & Eating Establishments',
                subCategory: 'Drinking Establishment',
                icon: 'fal fa-glass-martini-alt',
                isActive: false
            }
        ];
        this.administrativeSubCategories = [
            { name: 'Management of Companies & Enterprises', state: false },
            { name: 'Office Administration', state: false },
            { name: 'Employment Services', state: false },
            { name: 'Travel Arrangement Services', state: false },
            { name: 'Investigation & Security Services', state: false },
            { name: 'Building & Janitorial Services', state: false }
        ];
        this.artsSubCategories = [
            { name: 'Performing Arts', state: false },
            { name: 'Spectator Sports', state: false },
            { name: 'Performers, Agents, Promoters, & Managers', state: false },
            { name: 'Museums, Historical Sites', state: false },
            { name: 'Amusement Parks, Arcades, Bowling, Fun Centers', state: false },
            { name: 'Fitness & Recreation Centers', state: false }
        ];
        this.constructionSubCategories = [
            { name: 'Residential Construction', state: false },
            { name: 'Non-Residential Construction', state: false },
            { name: 'Utility Systems Construction', state: false },
            { name: 'Other Heavy & Civil Engineering Construction', state: false },
            { name: 'Specialty Trade Construction', state: false }
        ];
        this.educationSubCategories = [
            { name: 'Elementary & Secondary Schools', state: false },
            { name: 'Junior Colleges', state: false },
            { name: 'Universities, Colleges, Professional Schools', state: false },
            { name: 'Technical & Trade Schools', state: false },
            { name: 'Other Schools & Instruction', state: false },
            { name: 'Educational Support Services', state: false }
        ];
        this.financeSubCategories = [
            { name: 'Banks & Credit Unions', state: false },
            { name: 'Financial Investments', state: false },
            { name: 'Insurance Carriers', state: false }
        ];
        this.healthSubCategories = [
            { name: 'Physicians', state: false },
            { name: 'Dentists', state: false },
            { name: 'Other Health Practitioners', state: false },
            { name: 'Outpatient Care Center', state: false },
            { name: 'Medical & Diagnostic Laboratories', state: false },
            { name: 'Home Health Care Services', state: false },
            { name: 'Hospitals', state: false },
            { name: 'Nursing Care Facilities', state: false },
            { name: 'Residential Intellectual, Developmental, Mental Health, Substance Abuse Facility', state: false },
            { name: 'Continuing & Assisted Living Care', state: false },
            { name: 'Child and Adult Day Care Services', state: false }
        ];
        this.hotelSubCategories = [
            { name: 'Hotels & Motels', state: false },
            { name: 'Short Term Rental/Bed & Breakfast', state: false },
            { name: 'RV Parks & Campgrounds', state: false }
        ];
        this.manufacturerSubCategories = [
            { name: 'Food & Beverage Manufacturing', state: false },
            { name: 'Fabric, Textiles and Clothing Manufacturing', state: false },
            { name: 'Construction Materials Manufacturing', state: false },
            { name: 'Machinery, Engine, Turbine & Power Transmission Equipment', state: false },
            { name: 'Computer, Electronics, Semi Conductor & Other Components', state: false },
            { name: 'All Other Manufacturing', state: false }
        ];
        this.newsSubCategories = [
            { name: 'Newspapers Books Publishers', state: false },
            { name: 'Software Publishers', state: false },
            { name: 'Sound Recording Industries', state: false },
            { name: 'Radio & Television Broadcasting', state: false },
            { name: 'Cable & Programing subscriptions', state: false },
            { name: 'Wired & Wireless Telecom', state: false },
            { name: 'Data Processing Hosting', state: false },
            { name: 'Other Informational Services', state: false }
        ];
        this.realEstateSubCategories = [
            { name: 'Lessors of Real Estate', state: false },
            { name: 'Real Estate Rental Services', state: false },
            { name: 'Automotive Equipment Rental & Leasing', state: false },
            { name: 'Consumer Goods Rental', state: false },
            { name: 'Commercial & Industrial Machinery & Equipment Rental & Leasing', state: false }
        ];
        this.restaurantSubCategories = [
            { name: 'Food services, Catering, Mobile Food', state: false },
            { name: 'Drinking Establishments', state: false },
            { name: 'Restaurants & Eating Places', state: false }
        ];
        this.retailSubCategories = [
            { name: 'Automotive & Other Vehicle Dealers', state: false },
            { name: 'Furniture & Furnishings', state: false },
            { name: 'Electronics & Appliance', state: false },
            { name: 'Building Materials & Supply', state: false },
            { name: 'Grocery & Convenience Stores', state: false },
            { name: 'Beer, Wine, Liquor Stores', state: false },
            { name: 'Health & Personal Care Stores', state: false },
            { name: 'Gasoline Stations & Convenience Stores', state: false },
            { name: 'Clothing Stores', state: false },
            { name: 'Shoe Store', state: false },
            { name: 'Jewelry Luggage Leather Goods', state: false },
            { name: 'Book and News Stores', state: false },
            { name: 'Department Stores', state: false },
            { name: 'General Merchandise, Warehouse Clubs & Supercenters', state: false },
            { name: 'Office Supply', state: false },
            { name: 'Used Merchandise', state: false },
            { name: 'Other Miscellaneous & Vending Stores', state: false }
        ];
        this.servicesSubCategories = [
            { name: 'Legal Services', state: false },
            { name: 'Accounting Tax Prep, Bookkeeping, Payroll', state: false },
            { name: 'Architectural, Engineering, & Related Services', state: false },
            { name: 'Specialized, Interior & Graphic Design', state: false },
            { name: 'Computer Systems Design & Services', state: false },
            { name: 'Consulting Services', state: false },
            { name: 'Research & Development Services', state: false },
            { name: 'Advertising, Public Relations', state: false },
            { name: 'Other Professional, Scientific & Technical Services (i.e. Vet, Photography, Translation)', state: false },
            { name: 'Automotive Repair & Maintenance', state: false },
            { name: 'Electronic & Precision Equipment Repair', state: false },
            { name: 'Personal Care & Beauty Services', state: false },
            { name: 'Dry-cleaning and Laundry Services', state: false },
            { name: 'Other Personal Services', state: false },
            { name: 'Religious Organizations', state: false },
            { name: 'Civic & Social Organizations', state: false },
            { name: 'Business, Professional, Labor, Political, Organizations', state: false },
        ];
        this.transportationSubCategories = [
            { name: 'Air Transportation', state: false },
            { name: 'General Freight Trucking', state: false },
            { name: 'Taxi Limo & Car services', state: false },
            { name: 'Charter Bus', state: false },
            { name: 'Support Activities for Air', state: false },
            { name: 'Couriers & Express Delivery', state: false },
            { name: 'Warehousing & Storage', state: false }
        ];
        this.utilitiesSubCategories = [
            { name: 'Electricity', state: false },
            { name: 'Natural Gas', state: false },
            { name: 'Water/Wastewater', state: false }
        ];
        this.wholesalerSubCategories = [
            { name: 'Wholesaler - Not open to the public', state: false },
            { name: 'Wholesaler - Open to the public please use Retail Classification', state: false }
        ];
        this.licenseType = [
            { name: 'Show All' },
            { name: 'Business Registration' },
            { name: 'Off Track Wagering' },
            { name: 'Non Profit Solicitor' },
            { name: 'Liquor License' },
            { name: 'Peddler, Solicitor, Transient' },
            { name: 'Auction, Pawn, Secondhand' },
            { name: 'Massage Establishment' },
            { name: 'Escort' }
        ];
    }
    MapService.prototype.getAddress = function (address) {
        var url = this.addressUrl + "/findAddressCandidates?Street=&ZIP=&Neighborhood=&City=&Subregion=&State=&Country=&SingleLine=" + address + "&category=&outFields=&maxLocations=&outSR=4326&searchExtent=&location=&distance=&magicKey=&f=pjson";
        return this.http.get(url)
            .pipe(
        //tap(res => console.log(res.candidates)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAddress', [])));
    };
    MapService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    MapService.prototype.panToBusiness = function (business_coordinates) {
        this.businessCoordinates = business_coordinates;
        this.panRequest.next();
    };
    MapService.prototype.panToBusinessComplete = function () {
        this.panComplete.next();
    };
    MapService.prototype.setBusinessResults = function (data) {
        this.businessResults.next(data);
    };
    MapService.prototype.setCurrentBusiness = function (data) {
        this.selectedBusiness.next(data);
    };
    MapService.prototype.setSearchAddress = function (address) {
        this.searchAddress.next(address);
    };
    MapService.prototype.setSearchCoordinates = function (data) {
        this.searchCoordinates.next(data);
    };
    MapService.prototype.mapReady = function (state) {
        this.mapLoaded.next(state);
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        this.isActive = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isListView = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isMapView = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.getState$ = this.isActive.asObservable();
        this.getView$ = this.isListView.asObservable();
        this.getCurrentView$ = this.isMapView.asObservable();
    }
    SharedService.prototype.setState = function (state) {
        this.isActive.next(state);
    };
    SharedService.prototype.setView = function (state) {
        this.isListView.next(state);
    };
    SharedService.prototype.toggleView = function (state) {
        this.isMapView.next(state);
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], SharedService);
    return SharedService;
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

module.exports = __webpack_require__(/*! /Users/michael.escoto/Documents/GitHub/business-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map