(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./wizard/wizard.module": [
		"./src/app/wizard/wizard.module.ts",
		"wizard-wizard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _temp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temp.component */ "./src/app/temp.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./src/app/auth/index.ts");






var routes = [
    {
        path: 'wizard',
        loadChildren: './wizard/wizard.module#WizardModule'
    },
    {
        path: '',
        component: _temp_component__WEBPACK_IMPORTED_MODULE_3__["TempComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [
            _auth__WEBPACK_IMPORTED_MODULE_5__["IsAuthenticatedGuard"]
        ],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<coc-navbar></coc-navbar>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<coc-footer></coc-footer>\n"

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
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/app/auth/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Business Registration & Specialty Licenses';
        this.authService.configure();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-oauth2-oidc-codeflow */ "./node_modules/angular-oauth2-oidc-codeflow/esm5/angular-oauth2-oidc-codeflow.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _temp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./temp.component */ "./src/app/temp.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ui_kit_ui_kit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-kit/ui-kit.component */ "./src/app/ui-kit/ui-kit.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http-interceptors */ "./src/app/http-interceptors/index.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _temp_component__WEBPACK_IMPORTED_MODULE_9__["TempComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _ui_kit_ui_kit_component__WEBPACK_IMPORTED_MODULE_12__["UiKitComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_5__["OAuthModule"].forRoot()
            ],
            providers: [
                _http_interceptors__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/add-oauth2-dummy-client-secret.interceptor.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/add-oauth2-dummy-client-secret.interceptor.ts ***!
  \********************************************************************/
/*! exports provided: AddOauth2DummyClientSecretInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOauth2DummyClientSecretInterceptor", function() { return AddOauth2DummyClientSecretInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc-codeflow */ "./node_modules/angular-oauth2-oidc-codeflow/esm5/angular-oauth2-oidc-codeflow.js");



/** Adds dummy client secret to body of OAuth2 token endpoint requests */
/* This is needed because currently the passport strategy requires a client_secret
 * even though doesn't make sense for SPAs to have one
 */
var AddOauth2DummyClientSecretInterceptor = /** @class */ (function () {
    function AddOauth2DummyClientSecretInterceptor(auth) {
        this.auth = auth;
    }
    AddOauth2DummyClientSecretInterceptor.prototype.intercept = function (req, next) {
        if (req.url.indexOf(this.auth.tokenEndpoint) !== -1) {
            if (!req.body.has('client_secret')) {
                // copy the body and add client_secret
                var newReq = req.clone({
                    body: req.body.set('client_secret', this.auth.dummyClientSecret)
                });
                // send the cloned request to the next handler.
                req = newReq;
            }
        }
        return next.handle(req);
    };
    AddOauth2DummyClientSecretInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]])
    ], AddOauth2DummyClientSecretInterceptor);
    return AddOauth2DummyClientSecretInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.config.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.config.ts ***!
  \*************************************/
/*! exports provided: authConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
var authConfig = {
    // Url of the Identity Provider
    issuer: 'http://localhost:3000',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/',
    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'oauth-consumer-example',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email voucher',
    logoutUrl: '/',
    dummyClientSecret: 'opensecret',
};


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc-codeflow */ "./node_modules/angular-oauth2-oidc-codeflow/esm5/angular-oauth2-oidc-codeflow.js");
/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.config */ "./src/app/auth/auth.config.ts");






var AuthService = /** @class */ (function () {
    function AuthService(oauthService, oauthStorage, route, router) {
        this.oauthService = oauthService;
        this.oauthStorage = oauthStorage;
        this.route = route;
        this.router = router;
    }
    AuthService.prototype.configure = function () {
        var _this = this;
        this.oauthService.configure(_auth_config__WEBPACK_IMPORTED_MODULE_4__["authConfig"]);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_3__["JwksValidationHandler"]();
        this.oauthService.loadDiscoveryDocument()
            .then(function () {
            // 20190312RBP - Added state checking because angular-oauth2-oidc-codeflow does not seem to do it
            // see https://tools.ietf.org/html/rfc6749#section-10.12
            if (_this.route.snapshot.queryParamMap.has('state')) {
                var state = _this.route.snapshot.queryParamMap.get('state');
                if (!_this.validateState(state)) {
                    throw new Error('State is invalid, cannot login');
                }
            }
            return _this.oauthService.tryLogin();
        })
            .then(function () {
            console.log('Logged in');
            var returnUrl = _this.oauthStorage.getItem('__cocReturnUrl');
            if (returnUrl) {
                // login successful so redirect to return url
                _this.oauthStorage.removeItem('__cocReturnUrl');
                _this.router.navigateByUrl(returnUrl);
            }
        })
            .catch(function (err) {
            console.log('Unable to login');
        });
    };
    AuthService.prototype.isSignedIn = function () {
        return this.oauthService.hasValidAccessToken();
    };
    AuthService.prototype.logout = function () {
        this.oauthService.logOut();
    };
    AuthService.prototype.signIn = function (returnUrl) {
        // Save the returnUrl to go back to after returning
        // from auth code grant
        this.oauthStorage.setItem('__cocReturnUrl', returnUrl);
        this.oauthService.initAuthorizationCodeFlow();
    };
    AuthService.prototype.validateState = function (state) {
        var savedState = this.oauthStorage.getItem('nonce');
        if (savedState !== state) {
            var err = 'getting access_token failed. wrong state/nonce.';
            console.error(err, savedState, state);
            return false;
        }
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_3__["OAuthService"],
            angular_oauth2_oidc_codeflow__WEBPACK_IMPORTED_MODULE_3__["OAuthStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: IsAuthenticatedGuard, AuthService, AddOauth2DummyClientSecretInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-authenticated.guard */ "./src/app/auth/is-authenticated.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return _is_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__["IsAuthenticatedGuard"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _add_oauth2_dummy_client_secret_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-oauth2-dummy-client-secret.interceptor */ "./src/app/auth/add-oauth2-dummy-client-secret.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddOauth2DummyClientSecretInterceptor", function() { return _add_oauth2_dummy_client_secret_interceptor__WEBPACK_IMPORTED_MODULE_2__["AddOauth2DummyClientSecretInterceptor"]; });






/***/ }),

/***/ "./src/app/auth/is-authenticated.guard.ts":
/*!************************************************!*\
  !*** ./src/app/auth/is-authenticated.guard.ts ***!
  \************************************************/
/*! exports provided: IsAuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAuthenticatedGuard", function() { return IsAuthenticatedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



/*
 * Guard to require authentication and trigger sign-in if unauthenticated
 */
var IsAuthenticatedGuard = /** @class */ (function () {
    function IsAuthenticatedGuard(authService) {
        this.authService = authService;
    }
    IsAuthenticatedGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isSignedIn()) {
            this.authService.signIn(state.url);
        }
        return true;
    };
    IsAuthenticatedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-6 mb-9\">\n  <div class=\"text-right\">\n    <a href=\"#\" (click)=\"logout()\">Logout</a>\n  </div>\n  <h1>Dashboard</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

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



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function (event) {
        this.authService.logout();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"coc-footer\" role=\"contentinfo\">\n  <div class=\"coc-footer-container\">\n\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto\">\n        <a class=\"coc-footer-logo\" href=\"/\">\n          <img src=\"./assets/images/coc-footer-logo.png\" class=\"img-fluid\"  alt=\"city of chandler\">\n        </a>\n      </div>\n\n      <div class=\"col pl-md-0\">\n        <div class=\"coc-footer-menu row\">\n          <div class=\"coc-footer-contact col-12 col-md-auto\">\n            <p>Official Website of the City of Chandler, Arizona</p>\n            <p><a href=\"tel:1-480-782-2000\">480-782-2000</a></p>\n          </div>\n    \n          <div class=\"col-12 col-md-auto text-md-right ml-md-auto mt-md-3\">\n            <ul class=\"list-inline\">\n              <li class=\"list-inline-item\"><a href=\"/contact-chandler-form\">Contact</a></li>\n              <li class=\"list-inline-item\"><a href=\"/accessibility-policy\">Accessibility</a></li>\n            </ul>\n            <a class=\"coc-scroll-top\" href=\"#\" title=\"Scroll to top\">\n              <img src=\"./assets/images/scroll-top.png\" class=\"img-fluid\"  alt=\"Scroll to top\">\n            </a>\n          </div>\n        </div>\n    \n        <div class=\"coc-footer-copyright row\">\n          <div class=\"col-12 col-md-auto\">\n            <p>© 2018 Copyright Chandler, Arizona. All Rights Reserved.</p>\n          </div>\n          <div class=\"col-12 col-md-auto ml-md-auto\">\n            <ul class=\"list-inline\">\n              <li class=\"list-inline-item\"><a href=\"/sitemap\">Sitemap</a></li>\n              <li class=\"list-inline-item\"><a href=\"/privacy-policy\">Privacy Policy</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n</footer>"

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

/***/ "./src/app/http-interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/http-interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ "./src/app/auth/index.ts");
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth__WEBPACK_IMPORTED_MODULE_1__["AddOauth2DummyClientSecretInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"coc-navbar-header fixed-top\" role=\"banner\">\n\n  <nav\n    role=\"navigation\"\n    aria-labelledby=\"navbarUtilityHeading\"\n    id=\"navbarUtility\"\n    class=\"coc-navbar-utility\">\n    <h2 class=\"sr-only\" id=\"navbarUtilityHeading\">Utility Menu</h2>\n    <div class=\"navbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n          <a\n            href=\"#\"\n            class=\"nav-link dropdown-toggle\"\n            id=\"navbarDropdownPay\"\n            role=\"button\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            Pay\n            <span class=\"caret\"></span>\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownPay\">\n            <a class=\"dropdown-item\" href=\"#\">Airport Hangar &amp; Tiedown Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Alarm Permits &amp; Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Business Registration/License Renewal</a>\n            <a class=\"dropdown-item\" href=\"#\">Classes &amp; Lessons</a>\n            <a class=\"dropdown-item\" href=\"#\">Fire Operations/Training Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Fire Prevention Permit Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Park &amp; Facility Rentals</a>\n            <a class=\"dropdown-item\" href=\"#\">Permits &amp; Plan Review Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Police Cadet Fees</a>\n            <a class=\"dropdown-item\" href=\"#\">Utility Services</a>\n            <a class=\"dropdown-item\" href=\"#\">Jobs</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Jobs</a>\n        </li>\n        <li class=\"nav-item d-none d-md-inline-block\">\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">A-Z</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Translate</a>\n        </li>\n        <li class=\"nav-item d-none d-md-inline-block\">\n          <a class=\"nav-link\" href=\"#\">News</a>\n        </li>\n        <li class=\"nav-item d-none d-md-inline-block\">\n          <a class=\"nav-link\" href=\"#\">Text Size</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Search</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <nav class=\"coc-navbar-main\">\n    <div class=\"navbar navbar-expand-lg\">\n      <a class=\"navbar-brand\" routerLink=\"/\" title=\"Home\">\n        <img src=\"./assets/images/coc-navbar-logo.svg\" class=\"navbar-brand-logo\" alt=\"\">\n        <span class=\"d-none\">City of Chandler</span>\n      </a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNavAltMarkup\"\n        aria-controls=\"navbarNavAltMarkup\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <span class=\"d-none d-sm-inline-block mr-3\">Menu</span>\n        <span class=\"navbar-toggler-icon fas fa-bars\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Explore</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Residents</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Business</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Government</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n</header>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot()
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/temp.component.ts":
/*!***********************************!*\
  !*** ./src/app/temp.component.ts ***!
  \***********************************/
/*! exports provided: TempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempComponent", function() { return TempComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TempComponent = /** @class */ (function () {
    function TempComponent() {
    }
    TempComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-temp',
            template: "\n    <div class=\"container mt-6 mb-9\">\n      <h1>\n        City of Chandler Business Registration & License Portal\n      </h1>\n      <h2>Modules</h2>\n      <ul>\n        <li>\n          <a routerLink=\"wizard\">Wizard</a>\n        </li>\n        <li>\n          <a routerLink=\"dashboard\">Dashboard</a>\n        </li>\n      </ul>\n    </div>\n  "
        })
    ], TempComponent);
    return TempComponent;
}());



/***/ }),

/***/ "./src/app/ui-kit/ui-kit.component.html":
/*!**********************************************!*\
  !*** ./src/app/ui-kit/ui-kit.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ui-kit works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui-kit/ui-kit.component.ts":
/*!********************************************!*\
  !*** ./src/app/ui-kit/ui-kit.component.ts ***!
  \********************************************/
/*! exports provided: UiKitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitComponent", function() { return UiKitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiKitComponent = /** @class */ (function () {
    function UiKitComponent() {
    }
    UiKitComponent.prototype.ngOnInit = function () {
    };
    UiKitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-ui-kit',
            template: __webpack_require__(/*! ./ui-kit.component.html */ "./src/app/ui-kit/ui-kit.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiKitComponent);
    return UiKitComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/scottbulloch/Documents/Chandler/web-portal-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map