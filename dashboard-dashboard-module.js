(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ "./src/app/auth/index.ts");





var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [
            _auth__WEBPACK_IMPORTED_MODULE_4__["IsAuthenticatedGuard"]
        ],
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"coc-dashboard-header pt-5 pb-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p class=\"mb-0\">Welcome</p>\n        <p class=\"h3 font-weight-normal mb-0 text-white\">John Smith</p>\n        <p>ABC Holdings Corp.</p>\n      </div>\n      <div class=\"col-md-6 d-flex justify-content-end\">\n        <button class=\"btn btn-primary pt-1 pb-1\"><i class=\"fas fa-dollar-sign text-white\"></i> Make a Payment</button>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section [class]=\"visible ? 'coc-dashboard-alert pt-3 pb-3' : 'd-none'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-9\">\n        <small class=\"font-weight-bold\">Hi John. Here is a message we thought you would want to see:</small><br/>\n        <small class=\"text-danger font-weight-bold\"><i class=\"fas fa-exclamation-circle\"></i> Your Liquor License Type 1 has expired. <a href=\"javascript:void(0);\" class=\"text-danger\">Click here to renew now</a></small>\n      </div>\n      <div class=\"col-3 d-flex justify-content-end\">\n        <span (click)=\"closeAlert()\" class=\"text-primary\">\n          <i class=\"far fa-times-circle coc-font-size-32\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"container\">\n  <h2>My Entities</h2>\n  <div *ngIf=\"!entities\">\n    Loading...\n  </div>\n  <div *ngIf=\"entities\">\n    <div *ngFor=\"let entity of entities.items\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\" id=\"entityName\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-1 d-flex align-items-center\">\n                <i class=\"far fa-plus-square coc-font-size-32 text-primary\" (click)=\"isCollapsed = !isCollapsed\"\n                [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"entities\"></i>\n              </div>\n              <div class=\"col-8\">\n                <small class=\"text-primary text-uppercase\">Entity:</small><br/>\n                <h4 class=\"mb-0\">{{entity.entityName}}</h4>\n                <small>{{entity.mailingAddress.address1}}, {{entity.mailingAddress.city}}, {{entity.mailingAddress.state}} {{entity.mailingAddress.zip}}</small>\n              </div>\n              <div class=\"col-3 d-flex align-items-center\">\n                  <div class=\"btn-group\" dropdown>\n                    <button type=\"button\" class=\"btn btn-split\">Take Action</button>\n                    <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn dropdown-toggle dropdown-toggle-split btn-split-right\"\n                            aria-controls=\"dropdown-split\">\n                      <span class=\"caret\"></span>\n                      <span class=\"sr-only\">Split button!</span>\n                    </button>\n                    <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\"\n                        role=\"menu\" aria-labelledby=\"button-split\">\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">View/Edit</a></li>\n                      <li class=\"divider dropdown-divider\"></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Add Location</a>\n                      </li>\n                      <li class=\"divider dropdown-divider\"></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Close Entity</a></li>\n                      <li class=\"divider dropdown-divider\"></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">User Management</a>\n                      <li class=\"divider dropdown-divider\"></li>\n                      <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Contact Management</a>\n                      </li>\n                    </ul>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-0\" id=\"entities\" [collapse]=\"!isCollapsed\">\n          <article id=\"location-1\" class=\"p-1\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <header class=\"col-12\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-1\">\n                          <i class=\"far fa-plus-square coc-font-size-32 text-primary\"></i>\n                        </div>\n                        <div class=\"col\">\n                          <small class=\"text-primary text-uppercase\">\n                            location/dba:\n                          </small><br/>\n                          <h4 class=\"text-primary mb-0\">Bellview Square</h4>\n                        </div>\n                        <div class=\"col\">\n                          <small class=\"text-uppercase\">License #:</small><br/>\n                          <p class=\"text-uppercase\">a1234567890 xyj</p>\n                        </div>\n                        <div class=\"col\">\n                          <p>12345 Streetname Blvd., Chandler, AZ 12345</p>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"btn-group\" dropdown>\n                              <button type=\"button\" class=\"btn btn-split\">Take Action</button>\n                              <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn dropdown-toggle dropdown-toggle-split btn-split-right\"\n                                      aria-controls=\"dropdown-split\">\n                                <span class=\"caret\"></span>\n                                <span class=\"sr-only\">Split button!</span>\n                              </button>\n                              <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\"\n                                  role=\"menu\" aria-labelledby=\"button-split\">\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">View/Edit</a></li>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Close Location</a>\n                                </li>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Add a License</a></li>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">User Management</a>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Contact Management</a>\n                                </li>\n                              </ul>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                </header>\n                <section>\n\n                </section>\n              </div>\n            </div>\n          </article>\n          <article id=\"location-2\" class=\"p-1\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <header class=\"col-12\">\n                  <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-1\">\n                          <i class=\"far fa-plus-square coc-font-size-32 text-primary\"></i>\n                        </div>\n                        <div class=\"col\">\n                          <small class=\"text-primary text-uppercase\">\n                            location/dba:\n                          </small><br/>\n                          <h4 class=\"text-primary mb-0\">Columbia Circle</h4>\n                        </div>\n                        <div class=\"col\">\n                          <small class=\"text-uppercase\">License #:</small><br/>\n                          <p class=\"text-uppercase\">a1234567890 xyj</p>\n                        </div>\n                        <div class=\"col\">\n                          <p>12345 Streetname Blvd., Chandler, AZ 12345</p>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"btn-group\" dropdown>\n                              <button type=\"button\" class=\"btn btn-split\">Take Action</button>\n                              <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn dropdown-toggle dropdown-toggle-split btn-split-right\"\n                                      aria-controls=\"dropdown-split\">\n                                <span class=\"caret\"></span>\n                                <span class=\"sr-only\">Split button!</span>\n                              </button>\n                              <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\"\n                                  role=\"menu\" aria-labelledby=\"button-split\">\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">View/Edit</a></li>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Close Location</a>\n                                </li>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Add a License</a></li>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">User Management</a>\n                                <li class=\"divider dropdown-divider\"></li>\n                                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Contact Management</a>\n                                </li>\n                              </ul>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                </header>\n              </div>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ "./src/app/auth/index.ts");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-client */ "./src/app/api-client/index.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, apiClient) {
        this.authService = authService;
        this.apiClient = apiClient;
        this.visible = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiClient.entitiesGet()
            .subscribe(function (entities) {
            _this.entities = entities;
        });
    };
    DashboardComponent.prototype.logout = function (event) {
        this.authService.logout();
    };
    DashboardComponent.prototype.closeAlert = function () {
        this.visible = !this.visible;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _api_client__WEBPACK_IMPORTED_MODULE_3__["DefaultService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"].forRoot()
            ],
            entryComponents: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map