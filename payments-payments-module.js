(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./src/app/payments/charge-list/charge-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/payments/charge-list/charge-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Charges</h1>\n\n  <div *ngIf=\"!transactions\">\n    Loading...\n  </div>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n\n    <div formArrayName=\"transactions\" *ngFor=\"let transaction of form.controls.transactions.controls; let i = index\">\n        <label>\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{transactions[i].DESC}} - ${{transactions[i].DUE}}\n          </label>\n    </div>\n\n\n    <button class=\"btn btn-primary\" type=\"submit\">Pay Now</button>\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/payments/charge-list/charge-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/payments/charge-list/charge-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL2NoYXJnZS1saXN0L2NoYXJnZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/payments/charge-list/charge-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/payments/charge-list/charge-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ChargeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeListComponent", function() { return ChargeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-client */ "./src/app/api-client/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ChargeListComponent = /** @class */ (function () {
    function ChargeListComponent(apiClient, formBuilder) {
        this.apiClient = apiClient;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            transactions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
    }
    ChargeListComponent.prototype.ngOnInit = function () {
        this.loadCharges();
    };
    ChargeListComponent.prototype.submit = function () {
        var _this = this;
        this.form.controls.transactions.controls.forEach(function (item, index) {
            if (item.value) {
                console.log("Transaction " + _this.transactions[index].TRXN_ID + " checked for payment");
            }
        });
        for (var _i = 0, _a = this.form.controls.transactions.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.value) {
            }
        }
    };
    ChargeListComponent.prototype.loadCharges = function () {
        var _this = this;
        this.apiClient.transactionsGet()
            .subscribe(function (transactions) {
            _this.transactions = transactions;
            transactions.map(function () {
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true);
                _this.form.controls.transactions.push(control);
            });
        });
    };
    ChargeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-charge-list',
            template: __webpack_require__(/*! ./charge-list.component.html */ "./src/app/payments/charge-list/charge-list.component.html"),
            styles: [__webpack_require__(/*! ./charge-list.component.scss */ "./src/app/payments/charge-list/charge-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_client__WEBPACK_IMPORTED_MODULE_2__["DefaultService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ChargeListComponent);
    return ChargeListComponent;
}());



/***/ }),

/***/ "./src/app/payments/payments-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/payments/payments-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _charge_list_charge_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charge-list/charge-list.component */ "./src/app/payments/charge-list/charge-list.component.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth */ "./src/app/auth/index.ts");





var routes = [
    {
        path: 'charges',
        component: _charge_list_charge_list_component__WEBPACK_IMPORTED_MODULE_3__["ChargeListComponent"],
        canActivate: [
            _auth__WEBPACK_IMPORTED_MODULE_4__["IsAuthenticatedGuard"]
        ],
    }
];
var PaymentsRoutingModule = /** @class */ (function () {
    function PaymentsRoutingModule() {
    }
    PaymentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PaymentsRoutingModule);
    return PaymentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/payments/payments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/payments/payments.module.ts ***!
  \*********************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/payments/payments-routing.module.ts");
/* harmony import */ var _charge_list_charge_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charge-list/charge-list.component */ "./src/app/payments/charge-list/charge-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





var PaymentsModule = /** @class */ (function () {
    function PaymentsModule() {
    }
    PaymentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_charge_list_charge_list_component__WEBPACK_IMPORTED_MODULE_3__["ChargeListComponent"]],
            imports: [
                _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], PaymentsModule);
    return PaymentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=payments-payments-module.js.map