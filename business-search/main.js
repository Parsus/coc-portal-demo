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

module.exports = "\n<coc-header></coc-header>\n\n<main>\n  <!-- <router-outlet></router-outlet> -->\n  <section class=\"map-container position-relative h-100\">\n    <coc-map></coc-map>\n    <coc-main-list-view></coc-main-list-view>\n    <coc-search-box></coc-search-box>\n    <coc-list-view></coc-list-view>\n    <coc-desktop-controls></coc-desktop-controls>\n    <coc-mobile-controls></coc-mobile-controls>\n  </section>\n</main>\n\n<coc-footer></coc-footer>\n\n"

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
        //Map properties
        this.mapCenter = [-111.8436887, 33.287294];
        this.basemapType = "streets";
        this.mapZoomLevel = 16;
    }
    AppComponent.prototype.mapLoadedEvent = function (status) {
        console.log('The map loaded: ' + status);
    };
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/search-box/search-box.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _mobile_controls_mobile_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mobile-controls/mobile-controls.component */ "./src/app/mobile-controls/mobile-controls.component.ts");
/* harmony import */ var _main_list_view_main_list_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-list-view/main-list-view.component */ "./src/app/main-list-view/main-list-view.component.ts");
/* harmony import */ var _desktop_controls_desktop_controls_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./desktop-controls/desktop-controls.component */ "./src/app/desktop-controls/desktop-controls.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_10__["SearchBoxComponent"],
                _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_11__["ListViewComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"],
                _mobile_controls_mobile_controls_component__WEBPACK_IMPORTED_MODULE_13__["MobileControlsComponent"],
                _main_list_view_main_list_view_component__WEBPACK_IMPORTED_MODULE_14__["MainListViewComponent"],
                _desktop_controls_desktop_controls_component__WEBPACK_IMPORTED_MODULE_15__["DesktopControlsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "<aside *ngIf=\"isListView\" [class]=\"isListView ? 'coc-biz-search-list-view d-block' : 'coc-biz-search-list-view d-none'\" [class.active]=\"isActive\">\n  <div class=\"results-summary d-none d-lg-block\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col px-0 d-flex align-items-start\">\n          <div class=\"mr-1\">\n            <p class=\"h1\" id=\"searchResults\">{{this.businessResults.length}}</p>\n          </div>\n          <div>\n            <h4 id=\"bizType\" class=\"font-weight-normal\">Results</h4>\n            <p id=\"addressSearched\">near {{this.searchAddress}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 px-0\">\n          <div class=\"button-group d-flex mt-3\">\n            <button class=\"btn btn-primary mr-1 w-100\" (click)=\"exportResults()\"><i class=\"fal fa-upload\"></i> Export</button>\n            <button class=\"btn btn-green w-100\" (click)=\"toggleListView()\"><i class=\"fal fa-filter\"></i> Filter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"business-listings\">\n    <article *ngFor=\"let result of businessResults\" \n              id=\"{{result.id}}\" \n              (click)=\"toggleActiveState(result)\" \n              [class]=\"result.isActive ? 'business-listing pt-2 pb-2 active' : 'business-listing pt-2 pb-2'\"\n    >\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <h5>{{ result.name }}</h5>\n            <p>{{ result.address }}</p>\n            <a href=\"tel:+{{result.phone}}\">({{result.phone | slice:0:3}})-{{result.phone | slice:4:7}}-{{result.phone | slice:-4}}</a><br/>\n            <a href=\"{{result.website}}\">{{result.website}}</a>\n            <small>Since: {{result.openedOn}}</small>\n          </div>\n          <div class=\"col-4\">\n            <span class=\"fa-layers fa-fw fa-2x\" style=\"background: #003c5c; padding: 0 1rem;\">\n              <i class=\"text-white {{result.icon}}\"></i>\n            </span>\n            <!-- <i class=\"text-primary {{result.icon}} fa-2x\"></i> -->\n            <small><i>{{result.subCategory}}</i></small>\n          </div>\n        </div>\n      </div>\n    </article>\n  </div>\n</aside>\n"

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
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");




var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(sharedService, mapService) {
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.businessResults = [];
        this.searchAddress = "175 S Arizona Ave, Chandler, AZ 85225";
    }
    ListViewComponent.prototype.toggleActiveState = function (result) {
        //Get the coordinates
        var coordinates = [result.coordinates[0], result.coordinates[1]];
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
        alert("Results exported 🖨️");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
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
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");





var MapComponent = /** @class */ (function () {
    function MapComponent(sharedService, mapService) {
        this.sharedService = sharedService;
        this.mapService = mapService;
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
                        location: "/assets/fcl/",
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
                    var coordinates = [selectedBusiness.coordinates[0], selectedBusiness.coordinates[1]];
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
                }
                function recenterMap(mapView, searchResults) {
                    var coordinates = [searchResults.candidates[0].location.x, searchResults.candidates[0].location.y];
                    mapView.goTo({
                        target: coordinates
                    }, { duration: 1500 }).then(function () {
                        console.log("Map recentered");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
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

module.exports = "<aside [class]=\"!isListView ? 'coc-search-box d-block' : 'coc-search-box d-none'\">\n  <h3>Search</h3>\n  <h4>Chandler Businesses</h4>\n  <form id=\"searchBoxForm\" class=\"mt-3\" (ngSubmit)=\"search($event)\">\n    <div class=\"form-group\">\n      <span class=\"d-block\">Type of Business</span>\n      <div class=\"btn-group d-flex\" dropdown [insideClick]=\"true\">\n        <button type=\"button\" class=\"btn btn-split text-left\">Show All</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle \n                class=\"btn btn-split-right dropdown-toggle dropdown-toggle-split\"\n                aria-controls=\"dropdown-split\">\n          <span class=\"caret\"></span>\n          <span class=\"sr-only\">Split button!</span>\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" \n            role=\"menu\" aria-labelledby=\"button-split\">\n          <li role=\"menuitem\">\n            <details class=\"business-type dropdown-item\">\n              <!-- Parent Category: Finance -->\n              <summary>\n                  <div class=\"input-wrapper d-inline-block ml-1\">\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"finance\" value=\"finance\" \n                      [checked]=\"isAllCheckedFinance()\" (change)=\"checkAllFinance($event)\">\n                      <label class=\"form-check-label\" for=\"finance\">&nbsp;Finance & Insurance</label>\n                  </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let subCategory of finance ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" id=\"financeSubCategory{{i + 1}}\" value={{subCategory.name}} (change)=\"updateFilterOptions($event)\"/>\n                    <label class=\"form-check-label\" for=\"financeSubCategory{{i + 1}}\">&nbsp;{{subCategory.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <details class=\"business-type dropdown-item\">\n              <!-- Parent Category: Restaurants -->\n              <summary>\n                  <div class=\"input-wrapper d-inline-block ml-1\">\n                      <input #restaurantCheckBox type=\"checkbox\" class=\"form-check-input\" value=\"restaurant\" \n                      [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\">\n                      <label class=\"form-check-label\" for=\"restaurant\">&nbsp;Restaurants</label>\n                  </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                <li>\n                  <div *ngFor=\"let r of restaurant ; let i = index\" class=\"form-check\">\n                    <input type=\"checkbox\" value=\"{{r.name}}\" (change)=\"updateFilterOptions($event)\" />\n                    <label class=\"form-check-label\" for=\"{{i + 1}}\">&nbsp;{{r.name}}</label>\n                  </div>\n                </li>\n              </ul>\n            </details>\n          </li>\n          <li role=\"menuitem\">\n            <details class=\"business-type dropdown-item\">\n              <!-- Parent Category Retail -->\n              <summary>\n                  <div class=\"input-wrapper d-inline-block ml-1\">\n                      <input #retailCheckBox type=\"checkbox\" class=\"form-check-input pl-1\" value=\"retail\"\n                      [checked]='isAllRetailChecked()' (change)=\"checkAllRetail($event)\">\n                      <label class=\"form-check-label\" for=\"retail\">&nbsp;Retail</label>\n                  </div>\n              </summary>\n              <ul class=\"list-unstyled ml-2\">\n                  <li>\n                    <div *ngFor=\"let x of retail ; let i = index\" class=\"form-check\">\n                      <input type=\"checkbox\" value=\"{{x.name}}\" id=\"{{i + 1}}\" (change)=\"updateFilterOptions($event)\" />\n                      <label class=\"form-check-label\" for=\"{{i + 1}}\">&nbsp;{{x.name}}</label>\n                    </div>\n                  </li>\n                </ul>\n            </details>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <span class=\"d-block\">Type of License</span>\n      <div class=\"btn-group d-flex\" dropdown>\n        <button type=\"button\" class=\"btn btn-split text-left\">{{this.licenseFilterButtonText}}</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle \n                class=\"btn btn-split-right dropdown-toggle dropdown-toggle-split\" \n                aria-controls=\"dropdown-split\">\n          <span class=\"caret\"></span>\n          <span class=\"sr-only\">Split button!</span>\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-split\">\n            <li *ngFor=\"let license of licenseType; let i = index\">\n              <a id=\"{{i + 1}}\" class=\"dropdown-item\" (click)=\"updateLicenseFilter($event)\">{{license.name}}</a>\n            </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bizSearchAddress\">Near an Address</label>\n      <input type=\"text\" class=\"form-control\" #bizSearchAddress id=\"bizSearchAddress\" placeholder=\"Near City Center\" (input)=\"updateSearchAddress($event.target.value)\" required>\n    </div>\n    <div class=\"form-group\">\n      <span class=\"d-block\">Length In Business</span>\n      <div class=\"btn-group d-flex\" dropdown>\n        <button type=\"button\" class=\"btn btn-split text-left\">1+ Days</button>\n        <button id=\"button-split\" type=\"button\" dropdownToggle \n                class=\"btn btn-split-right dropdown-toggle dropdown-toggle-split\"\n                aria-controls=\"dropdown-split\">\n          <span class=\"caret\"></span>\n          <span class=\"sr-only\">Split button!</span>\n        </button>\n        <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\"\n            role=\"menu\" aria-labelledby=\"button-split\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 1</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 2</a>\n            </li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 3</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Option 4</a>\n            </li>\n        </ul>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-next btn-block mt-2\">Search</button>\n  </form>\n</aside>\n"

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
        this.sharedService = sharedService;
        this.mapService = mapService;
        this.businessResults = this.mapService.data;
        this.retail = this.mapService.retailSubCategories;
        this.finance = this.mapService.financeSubCategories;
        this.restaurant = this.mapService.restaurantSubCategories;
        this.licenseType = this.mapService.licenseType;
        this.filterOptions = [];
        this.licenseFilterButtonText = "Show All";
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
    SearchBoxComponent.prototype.checkAllFinance = function (e) {
        if (e.target.checked) {
            for (var i = 0; i < this.finance.length; i++) {
                this.filterOptions.push(this.finance[i].name);
                this.finance[i].state = e.target.checked;
            }
        }
        else {
            this.finance.forEach(function (x) { return x.state = e.target.checked; });
        }
    };
    SearchBoxComponent.prototype.isAllCheckedFinance = function () {
        return this.finance.every(function (_) { return _.state; });
    };
    SearchBoxComponent.prototype.checkAll = function (ev) {
        this.restaurant.forEach(function (x) { return x.state = ev.target.checked; });
    };
    SearchBoxComponent.prototype.isAllChecked = function () {
        return this.restaurant.every(function (_) { return _.state; });
    };
    SearchBoxComponent.prototype.checkAllRetail = function (ev) {
        this.retail.forEach(function (x) { return x.state = ev.target.checked; });
    };
    SearchBoxComponent.prototype.isAllRetailChecked = function () {
        return this.retail.every(function (_) { return _.state; });
    };
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
    SearchBoxComponent.prototype.search = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.searchAddress) {
            alert('Please type in a valid address.');
            return;
        }
        this.mapService.getAddress(this.searchAddress).subscribe(function (response) {
            if (response.candidates.length) {
                _this.mapService.setSearchCoordinates(response);
                _this.loadData();
            }
            else {
                alert('Not a valid address. Please try again.');
            }
        });
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
        this.utensils = "M344.1 470.3l14.2-164.8c-42.1-33.1-70.4-77-70.4-129.5C288 81.7 376.1 0 440 0c22.1 0 40 17.3 40 38.5v435c0 21.2-17.9 38.5-40 38.5h-56c-22.8 0-41.8-18.7-39.9-41.7zM320 176c0 51 32.2 85.5 71.8 114.5L376 473.1c-.3 3.7 3.4 6.9 8 6.9h56c4.3 0 8-3 8-6.5v-435c0-3.5-3.7-6.5-8-6.5-44.6 0-120 65.8-120 144zM240.7 33.8C237.4 14.3 219.5 0 194.6 0c-11.9 0-24.1 3.4-33.3 11.2C152.9 4.1 141.3 0 128 0s-24.9 4.1-33.3 11.2C85.5 3.4 73.3 0 61.4 0 36.2 0 18.6 14.5 15.3 33.8 13.5 43.2 0 118.4 0 149.9c0 50.9 26.7 91.6 71 110.7L59.6 471.4C58.4 493.4 75.9 512 98 512h60c22 0 39.6-18.5 38.4-40.6L185 260.6c44.2-19.1 71-59.8 71-110.7 0-31.5-13.5-106.7-15.3-116.1zM152.3 240l12.2 233.1c.2 3.7-2.7 6.9-6.5 6.9H98c-3.7 0-6.7-3.1-6.5-6.9L103.7 240C61.3 231.2 32 197 32 149.9c0-29.7 14.8-110.6 14.8-110.6 1.6-9.9 28.3-9.7 29.5.2V162c.9 11.5 28.2 11.7 29.5.2l7.4-122.9c1.6-9.7 27.9-9.7 29.5 0l7.4 122.9c1.3 11.4 28.6 11.2 29.5-.2V39.6c1.2-9.9 27.9-10.1 29.5-.2 0 0 14.8 80.9 14.8 110.6.1 46.8-29 81.2-71.6 90z";
        this.store = "M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-29.6 47.2-10 110.6 38 130.8v227.4c0 19.4 14.3 35.2 32 35.2h448c17.7 0 32-15.8 32-35.2V249.4c48-20.2 67.6-83.6 38-130.8zm-70 358.2c0 2-.8 3.1-.2 3.2l-446.6.3c-.3-.2-1.2-1.3-1.2-3.5V352h448zM84 320v-64h2.5c29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.9 33.1h2.5v64zm494.2-126.5c-7.8 16.6-22.1 27.5-39.3 29.8-3.1.4-6.2.6-9.4.6-19.3 0-37-8-50-22.5L455.7 175l-23.8 26.6c-13 14.5-30.7 22.5-50 22.5s-37-8-50-22.5L308 175l-23.8 26.6c-13 14.5-30.7 22.5-50 22.5s-37-8-50-22.5L160.3 175l-23.8 26.6c-13 14.5-30.7 22.5-50 22.5-3.2 0-6.3-.2-9.4-.6-17.2-2.3-31.5-13.2-39.3-29.8-8.7-18.6-7.5-40.8 3.3-57.9L106 32h404l64.9 103.6c10.8 17.2 12 39.3 3.3 57.9z";
        this.shoppingCart = "M551.991 64H129.28l-8.329-44.423C118.822 8.226 108.911 0 97.362 0H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h78.72l69.927 372.946C150.305 416.314 144 431.42 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-17.993-7.435-34.24-19.388-45.868C506.022 391.891 496.76 384 485.328 384H189.28l-12-64h331.381c11.368 0 21.177-7.976 23.496-19.105l43.331-208C578.592 77.991 567.215 64 551.991 64zM240 448c0 17.645-14.355 32-32 32s-32-14.355-32-32 14.355-32 32-32 32 14.355 32 32zm224 32c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm38.156-192H171.28l-36-192h406.876l-40 192z";
        this.handsUsd = "M640 144c0-26.8-21.9-48.4-48.8-48-26 .4-47.2 23.7-47.2 49.7v137.1l-62 73.3c-7.1 8.4-20.1-1.7-13.6-10.7l28.6-39.3c13.4-18.5 13.1-44.6-2.5-61.3-25.5-27.4-60.6-15.3-74.5 3.9l-42.4 58.4C361 329.3 352 356.3 352 384v120c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V384c0-20.6 6.8-41.1 19.5-58l42.4-58.4c5.3-7.3 15.3-8.7 22.4-3.5 7.8 5.6 8.3 15.8 3.5 22.3l-30.6 42.2c-.2.3-.4.5-.5.8-26.1 39.7 33.9 86.7 70.8 42.4l64.6-77.5V144.6c0-22.3 32-21.7 32-.7v170.4c0 3.6-1.2 7.2-3.5 10L497.6 458c-9.5 11.9-15.5 29.2-17.1 45.2-.5 4.8 3.2 8.7 8 8.7h16c4 0 7.5-2.9 8-6.9 1.2-9.6 4.6-20.2 10.1-27l107-133.7c6.8-8.5 10.5-19.1 10.5-30L640 144zM220 248.8c-14-19.2-49.1-31.4-74.5-3.9-15.6 16.8-15.9 42.8-2.5 61.3l28.6 39.3c6.5 8.9-6.5 19.1-13.6 10.7l-62-73.3V145.8c0-26-21.2-49.3-47.2-49.7C21.9 95.6 0 117.2 0 144v170.4c0 10.9 3.7 21.5 10.5 30l107 133.7c5.4 6.8 8.9 17.5 10.1 27 .5 4 4 6.9 8 6.9h16c4.8 0 8.5-3.9 8-8.7-1.6-16-7.5-33.3-17.1-45.2l-107-133.7c-2.3-2.8-3.5-6.4-3.5-10V144c0-21 32-21.6 32 .7v149.7l64.6 77.5c36.9 44.2 96.8-2.7 70.8-42.4-.2-.3-.4-.5-.5-.8l-30.6-42.2c-4.7-6.5-4.2-16.7 3.5-22.3 7-5.1 17.1-3.8 22.4 3.5l42.4 58.4c12.7 16.9 19.5 37.4 19.5 58v120c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-120c0-27.7-9-54.6-25.6-76.8L220 248.8zm169.1-60c10.1-29.6-7.3-59.8-35.1-67.8l-59.1-16.9c-8.8-2.5-14.9-10.6-14.9-19.7 0-11.3 9.2-20.5 20.5-20.5h36.9c8.2 0 16.1 2.6 22.6 7.3 3 2.2 7.2 1.5 9.8-1.2l11.4-11.4c3.5-3.5 2.9-9.2-1-12.2C368 37.1 353.1 32 337.4 32H336V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h-3.5c-30.6 0-55.1 26.3-52.2 57.5 2.1 22.2 19.1 40.1 40.5 46.2l56.4 16.1c8.8 2.5 14.9 10.6 14.9 19.7 0 11.3-9.2 20.5-20.5 20.5h-36.9c-8.2 0-16.1-2.6-22.6-7.3-3-2.2-7.2-1.5-9.8 1.2l-11.4 11.4c-3.5 3.5-2.9 9.2 1 12.2 12.3 9.4 27.2 14.5 42.9 14.5h1.4v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24h1.4c22.6 0 44.1-13.6 51.5-35.2z";
        this.hotel = "M396.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-128-96h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm-256 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm128 96h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zM568 32c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H8C3.58 0 0 3.58 0 8v16c0 4.42 3.58 8 8 8h23.98v448H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h560c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-24V32h24zM320 480h-64v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80zm192 0H352v-80c0-26.47-21.53-48-48-48h-32c-26.47 0-48 21.53-48 48v80H63.98V32H512v448zM140.8 224h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8zm26.31 157.66l16.25 2.26c4.3.6 8.11-2.24 9.07-6.36 9.96-42.83 49.74-74.28 95.58-74.28s85.61 31.45 95.58 74.28c.96 4.12 4.77 6.96 9.07 6.36l16.25-2.26c4.6-.64 7.9-4.92 6.94-9.34C403.22 314.29 349.72 271.5 288 271.5s-115.22 42.79-127.83 100.81c-.96 4.43 2.34 8.71 6.94 9.35z";
        this.ticket = "M424 160H152c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zm-8 160H160V192h256v128zm128-96h32V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v112h32c17.673 0 32 14.327 32 32s-14.327 32-32 32H0v112c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V288h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32zm0 96v80c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16v-80c35.29 0 64-28.71 64-64s-28.71-64-64-64v-80c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v80c-35.29 0-64 28.71-64 64s28.71 64 64 64z";
        this.graduationCap = "M612.16 153.99l-265-85.68c-17.81-5.75-36.5-5.75-54.31 0l-265 85.68C10.94 159.46 0 174.38 0 192s10.94 32.54 27.84 38.01l29.71 9.6c-3.3 6.18-5.74 12.83-7.33 19.8C39.53 264.59 32 275.32 32 288c0 12.73 7.57 23.52 18.33 28.67L32.28 428.53C30.67 438.52 36.19 448 43.62 448h40.75c7.43 0 12.96-9.48 11.34-19.47L77.67 316.67C88.43 311.52 96 300.73 96 288c0-10.6-5.49-19.54-13.43-25.37 1.49-4.66 3.8-8.86 6.57-12.81l53.47 17.29L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.61-116.89L612.16 230c16.9-5.46 27.84-20.38 27.84-38s-10.94-32.54-27.84-38.01zM479.48 381.86C468.72 393.19 414.04 416 320 416c-94.04 0-148.72-22.81-159.48-34.14l13.09-104.73 119.24 38.55c2.6.84 25.72 9.23 54.31 0l119.24-38.55 13.08 104.73zm122.8-182.28l-265 85.68c-11.31 3.66-23.25 3.66-34.56 0l-175.67-56.8 195.89-36.74c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.7-10.16-14.39-18.66-12.77l-203.78 38.2c-12.4 2.32-23.51 7.65-33.08 14.83l-42.49-13.74c-7.85-2.55-7.46-12.74 0-15.15l265-85.68c15.1-4.88 27.84-2.17 34.56 0l265 85.68c7.39 2.39 7.91 12.6.01 15.16z";
        this.handshakeAlt = "M238.4 176.6l83.1-76.2c3-2.7 6.8-4.2 10.8-4.2h101c4.3 0 8.3 1.7 11.4 4.8l60.7 59.1H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H518.5l-51.2-49.9c-9.1-9.1-21.1-14.1-33.9-14.1h-101c-10.4 0-20.1 3.9-28.3 10-8.4-6.5-18.7-10.3-29.3-10.3h-69.5c-12.7 0-24.9 5.1-34 14.1L121.4 128H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h126.6l59.3-59.3c3-3 7.1-4.7 11.3-4.7h69.5c.9 2.2.3.7 1.1 2.9l-59 54.1c-28.2 25.9-29.6 69.2-4.2 96.9 14.3 15.6 58.6 39.3 96.9 4.2l22.8-20.9 125.6 101.9c6.8 5.5 7.9 15.7 2.3 22.5l-9.5 11.7c-5.4 6.6-15.4 8.1-22.5 2.3l-17.8-14.4-41.5 51c-7.5 9.3-21 10.2-29.4 3.4l-30.6-26.1-10.4 12.8c-16.7 20.5-47 23.7-66.6 7.9L142 320.1H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h121.2l81.5 78c29.8 24.1 71.8 23.4 101-.2l7.2 6.2c9.6 7.8 21.3 11.9 33.5 11.9 16 0 31.1-7 41.4-19.6l21.9-26.9c16.4 8.9 42.9 9 60-12l9.5-11.7c6.2-7.6 9.6-16.6 10.5-25.7H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H486.8c-2.5-3.5-5.3-6.9-8.8-9.8l-121.9-99 28.4-26.1c6.5-6 7-16.1 1-22.6s-16.1-6.9-22.6-1l-75.1 68.8c-14.4 13.1-38.6 12-51.7-2.2-13.5-14.7-12.6-37.9 2.3-51.6z";
        this.satelliteDish = "M212.6 322l35.6-35.6c2.6.7 5 1.6 7.8 1.6 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.8.9 5.2 1.6 7.8L190 299.4l-134-134c-3.6-3.6-8.4-5.4-13.1-5.4-6.1 0-12.1 3-15.2 8.9-47.4 88.2-33.9 200.5 40.5 274.9 45.5 45.5 105.1 68.2 164.6 68.2 38 0 76-9.2 110.3-27.7 10.4-5.6 11.8-20 3.5-28.4L212.6 322zm20.2 158c-53.6 0-104.1-20.9-142-58.8C33.3 363.7 16.7 276.1 47.4 202L310 464.6a201.43 201.43 0 0 1-77.2 15.4zM200.2 96c-4.5-.2-8.2 3.6-8.2 8.1v16c0 4.3 3.5 7.8 7.8 8 99.9 4 180.6 84.2 184.2 184 .2 4.3 3.6 7.8 8 7.8h15.8c4.5 0 8.2-3.7 8.1-8.2-4.2-117-98.7-211.4-215.7-215.7zm0-96c-4.5-.1-8.2 3.6-8.2 8.1V24c0 4.4 3.5 7.8 7.9 7.9C352.7 35.7 475.9 159.2 480 312c.1 4.4 3.6 7.9 7.9 7.9h16c4.5 0 8.2-3.7 8.1-8.2C507.7 141.8 370.2 4.3 200.2 0z";
        this.martiniGlass = "M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L240 287.64V480h-53.33c-14.73 0-26.67 11.94-26.67 26.67 0 2.95 2.39 5.33 5.33 5.33h181.33c2.95 0 5.33-2.39 5.33-5.33 0-14.73-11.94-26.67-26.67-26.67H272V287.64L502.05 57.6zM32.2 33.07c.44-1.07.88-1.07 1.6-1.07h444.4c.72 0 1.16 0 1.6 1.07.45 1.07.14 1.38-.38 1.89L418.39 96H93.61L32.58 34.97c-.52-.51-.82-.82-.38-1.9zm223.86 225.26L125.61 128H386.4L256.06 258.33z";
        this.medicalBriefcase = "M344 288h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm120-160H352V56c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24v72H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM192 64h128v64H192V64zm288 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v288z";
        this.gasPump = "M502.6 120L409 26.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3L416 78.6V160c0 26.5 21.5 48 48 48h16v174.2c0 15.9-10.9 30.8-26.6 33.4-20 3.3-37.4-12.1-37.4-31.6v-48c0-44.2-35.8-80-80-80h-16V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v416H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-24V288h16c26.5 0 48 21.5 48 48v44.4c0 31.9 21.7 61.5 53.2 66.7 40.1 6.6 74.8-24.3 74.8-63.1V142.6c0-8.5-3.4-16.6-9.4-22.6zM480 176h-16c-8.8 0-16-7.2-16-16v-49.4l32 32V176zM288 480H64V224h224v256zm0-288H64V64c0-17.6 14.4-32 32-32h160c17.6 0 32 14.4 32 32v128z";
        this.key = "M336 32c79.529 0 144 64.471 144 144s-64.471 144-144 144c-18.968 0-37.076-3.675-53.661-10.339L240 352h-48v64h-64v64H32v-80l170.339-170.339C195.675 213.076 192 194.968 192 176c0-79.529 64.471-144 144-144m0-32c-97.184 0-176 78.769-176 176 0 15.307 1.945 30.352 5.798 44.947L7.029 379.716A24.003 24.003 0 0 0 0 396.686V488c0 13.255 10.745 24 24 24h112c13.255 0 24-10.745 24-24v-40h40c13.255 0 24-10.745 24-24v-40h19.314c6.365 0 12.47-2.529 16.971-7.029l30.769-30.769C305.648 350.055 320.693 352 336 352c97.184 0 176-78.769 176-176C512 78.816 433.231 0 336 0zm48 108c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z";
        this.data = [
            {
                id: 0,
                name: 'San Tan Brewing Company',
                address: '8 S San Marcos Pl, Chandler, AZ 85225',
                phone: '4809178700',
                website: 'santanbrewing.com',
                openedOn: '03/27/2005',
                coordinates: [-111.84222534039891, 33.30323247066584],
                x: -111.84222534039891,
                y: 33.30323247066584,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                //svg: this.utensils,
                isActive: false
            },
            {
                id: 1,
                name: 'Hangar Café',
                address: '1725 E Ryan Rd, Chandler, AZ 85286',
                phone: '4807921939',
                website: 'hangarcafe.com',
                openedOn: '11/16/1999',
                coordinates: [-111.81161285615794, 33.272952295680888],
                x: -111.81161285615794,
                y: 33.272952295680888,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                //svg: this.utensils,
                isActive: false
            },
            {
                id: 2,
                name: 'Kohl\'s South Chandler',
                address: '1430 S Arizona Ave, Chandler, AZ 85286',
                phone: '4807825865',
                website: 'kohls.com',
                openedOn: '09/15/2017',
                coordinates: [-111.84365321424222, 33.285488656511909],
                x: -111.84365321424222,
                y: 33.285488656511909,
                parentCategory: 'Retail',
                subCategory: 'Department Stores',
                icon: 'fal fa-store',
                //svg: this.store,
                isActive: false
            },
            {
                id: 3,
                name: 'Mattress Firm Clearance',
                address: '1400 S Arizona Ave, Chandler, AZ 85286',
                phone: '4808999847',
                website: 'mattressfirm.com',
                openedOn: '01/06/2017',
                coordinates: [-111.84220616393715, 33.2840653],
                x: -111.84220616393715,
                y: 33.286080778529161,
                parentCategory: 'Retail',
                subCategory: 'Furniture & Furnishings',
                icon: 'fal fa-store',
                //svg: this.store,
                isActive: false
            },
            {
                id: 4,
                name: 'Starbucks',
                address: '1395 S Arizona Ave #1, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'starbucks.com',
                openedOn: '6/16/2009',
                coordinates: [-111.84098545309143, 33.285270703478382],
                x: -111.84098545309143,
                y: 33.285270703478382,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                //svg: this.utensils,
                isActive: false
            },
            {
                id: 5,
                name: 'Walmart Supercenter',
                address: '1175 S Arizona Ave, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'walmart.com',
                openedOn: '11/10/2007',
                coordinates: [-111.8384134269721, 33.28930709015038],
                x: -111.8384134269721,
                y: 33.28930709015038,
                parentCategory: 'Retail',
                subCategory: 'Department Stores',
                icon: 'fal fa-store',
                //svg: this.store,
                isActive: false
            },
            {
                id: 6,
                name: 'Goodwill',
                address: '1095 S Arizona Ave, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'goodwill.com',
                openedOn: '08/24/1981',
                coordinates: [-111.83820218672761, 33.290472780747365],
                x: -111.83820218672761,
                y: 33.290472780747365,
                parentCategory: 'Retail',
                subCategory: 'Used Merchandise',
                icon: 'fal fa-store',
                //svg: this.store,
                isActive: false
            },
            {
                id: 7,
                name: 'Nando\'s Mexican Cafe',
                address: '1890 W Germann Rd, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'nandos.com',
                openedOn: '04/13/1980',
                coordinates: [-111.87411917935181, 33.276817017705632],
                x: -111.87411917935181,
                y: 33.276817017705632,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                //svg: this.utensils,
                isActive: false
            },
            {
                id: 8,
                name: 'Cold Beers & Cheeseburgers',
                address: '1980 W Germann Rd, Chandler, AZ 85286',
                phone: '4801234567',
                website: 'coldbeers.com',
                openedOn: '03/16/2016',
                coordinates: [-111.87570100974833, 33.277332455917268],
                x: -111.87570100974833,
                y: 33.277332455917268,
                parentCategory: 'Restaurants',
                subCategory: 'Restaurants & Eating Places',
                icon: 'fal fa-utensils',
                //svg: this.utensils,
                isActive: false
            },
            {
                id: 9,
                name: 'Albertsons',
                address: '3145 S Alma School Rd, Chandler, AZ 85248 ',
                phone: '4801234567',
                website: 'albertsons.com',
                openedOn: '07/04/1991',
                coordinates: [-111.85688540502962, 33.260824321806716],
                x: -111.85688540502962,
                y: 33.260824321806716,
                parentCategory: 'Retail',
                subCategory: 'Grocery & Convenience Stores',
                icon: "fal fa-shopping-cart",
                //svg: this.shoppingCart,
                isActive: false
            },
            {
                id: 10,
                name: 'First Credit Union',
                address: '25 S Arizona Pl #111, Chandler, AZ 85225',
                phone: '4807565500',
                website: 'firstcu.net',
                openedOn: '11/01/2001',
                coordinates: [-111.84044431897641, 33.302969627771567],
                x: -111.84044431897641,
                y: 33.302969627771567,
                parentCategory: 'Finance & Insurance',
                subCategory: 'Banks & Credit Unions',
                icon: 'fal fa-hands-usd',
                //svg: this.handsUsd,
                isActive: false
            },
            {
                id: 11,
                name: 'Crowne Plaza Hotels & Resorts Phoenix - Chandler Golf Resort',
                address: '1 N San Marcos Pl, Chandler, AZ 85225',
                phone: '4808120900',
                website: 'ihg.com',
                openedOn: '1/1/1991',
                coordinates: [-111.84468240218729, 33.304165753291095],
                x: -111.84468240218729,
                y: 33.304165753291095,
                parentCategory: 'Hotel Motel',
                subCategory: 'Hotels & Motels',
                icon: 'fal fa-hotel',
                //svg: this.hotel,
                isActive: false
            },
            {
                id: 12,
                name: 'Chandler Center for the Arts',
                address: '250 N Arizona Ave, Chandler, AZ 85225',
                phone: '4807822680',
                website: 'chandlercenter.org',
                openedOn: '1/1/1991',
                coordinates: [-111.84204575190275, 33.307452799990678],
                x: -111.84204575190275,
                y: 33.307452799990678,
                parentCategory: 'Amusement, Arts, Entertainment, Recreation',
                subCategory: 'Performing Arts',
                icon: 'fal fa-ticket',
                //svg: this.ticket,
                isActive: false
            },
            {
                id: 13,
                name: 'Frye Elementary School',
                address: '801 E Frye Rd, Chandler, AZ 85225',
                phone: '4808126400',
                website: 'cusd80.com',
                openedOn: '1/1/1991',
                coordinates: [-111.83121292937288, 33.297486314156423],
                x: -111.83121292937288,
                y: 33.297486314156423,
                parentCategory: 'Education Services',
                subCategory: 'Elementary & Secondary Schools',
                icon: 'fal fa-graduation-cap',
                //svg: this.graduationCap,
                isActive: false
            },
            {
                id: 14,
                name: 'Michaels and Associates',
                address: '200 N Nebraska St, Chandler, AZ 85225',
                phone: '4809635509',
                website: 'michaelsandassociates.com',
                openedOn: '1/1/1991',
                coordinates: [-111.84657493450467, 33.306405171882361],
                x: -111.84657493450467,
                y: 33.306405171882361,
                parentCategory: 'Services & Non-Profits',
                subCategory: 'Legal Services',
                icon: 'fal fa-handshake-alt',
                //svg: this.handshakeAlt,
                isActive: false,
            },
            {
                id: 15,
                name: 'Website Design & Marketing Services',
                address: '868 S Arizona Ave, Chandler, AZ 85225',
                phone: '4803690387',
                website: 'websites.joehorrell.com',
                openedOn: '1/1/1997',
                coordinates: [-111.84305844407305, 33.293446493439781],
                x: -111.84305844407305,
                y: 33.293446493439781,
                parentCategory: 'News/Software/Telecom',
                subCategory: 'Software Publishers',
                icon: 'fal fa-satellite-dish',
                //svg: this.satelliteDish,
                isActive: false
            },
            {
                id: 16,
                name: 'The Ostrich',
                address: '10 N San Marcos Pl, Chandler, AZ 85225',
                phone: '4809174903',
                website: 'theostrichbarandlounge.com',
                openedOn: '4/19/2015',
                coordinates: [-111.84225194966817, 33.303783394813102],
                x: -111.84225194966817,
                y: 33.303783394813102,
                parentCategory: 'Restaurants',
                subCategory: 'Drinking Establishments',
                icon: 'fal fa-glass-martini-alt',
                //svg: this.martiniGlass,
                isActive: false
            },
            {
                id: 17,
                name: 'Chandler Family Dentistry: Chaiyoon Cho, DDS',
                address: '299 N Arizona Ave, Chandler, AZ 85225',
                phone: '4808990116',
                website: 'drchochandler.com',
                openedOn: '09/21/1981',
                coordinates: [-111.84114207274565, 33.307792676887679],
                x: -111.84114207274565,
                y: 33.307792676887679,
                parentCategory: 'Health Care, Social Services & Day Care',
                subCategory: 'Dentists',
                icon: 'fal fa-briefcase-medical',
                //svg: this.medicalBriefcase,
                isActive: false,
            },
            {
                id: 18,
                name: 'Petro Stop',
                address: '147 S Delaware St, Chandler, AZ 85225',
                phone: '4809626111',
                website: 'theoriginalpetrostop.com',
                openedOn: '4/11/1978',
                coordinates: [-111.8372876512294, 33.301136412484304],
                x: -111.8372876512294,
                y: 33.301136412484304,
                parentCategory: 'Retail',
                subCategory: 'Gasoline Stations & Convenience Stores',
                icon: 'fal fa-gas-pump',
                //svg: this.gasPump,
                isActive: false,
            },
            {
                id: 19,
                name: 'Dos Gringos Alma',
                address: '1361 N Alma School Rd, Chandler, AZ 85224',
                phone: '4809172931',
                website: 'dosgringosaz.com',
                openedOn: '11/11/2011',
                coordinates: [-111.8582343580329, 33.326589330192782],
                x: -111.8582343580329,
                y: 33.326589330192782,
                parentCategory: 'Restaurants & Eating Establishments',
                subCategory: 'Drinking Establishment',
                icon: 'fal fa-glass-martini-alt',
                //svg: this.key,
                isActive: false
            }
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
        this.financeSubCategories = [
            { name: 'Banks & Credit Unions', state: false },
            { name: 'Financial Investments', state: false },
            { name: 'Insurance Carriers', state: false }
        ];
        this.restaurantSubCategories = [
            { name: 'Food services, Catering, Mobile Food', state: false },
            { name: 'Drinking Establishments', state: false },
            { name: 'Restaurants & Eating Places', state: false }
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
        var url = this.addressUrl + "/findAddressCandidates?Street=&ZIP=&Single+Line+Input=" + address + "&category=&outFields=*&maxLocations=&outSR=4326&searchExtent=&location=&distance=&magicKey=&f=pjson";
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