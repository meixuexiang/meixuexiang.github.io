(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sxwnl-sxwnl-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sxwnl/sxwnl/sxwnl.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sxwnl/sxwnl/sxwnl.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe src=\"http://www.nongli.net/sxwnl/\" frameborder=\"0\"></iframe>\n");

/***/ }),

/***/ "./src/app/sxwnl/sxwnl.module.ts":
/*!***************************************!*\
  !*** ./src/app/sxwnl/sxwnl.module.ts ***!
  \***************************************/
/*! exports provided: SxwnlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SxwnlModule", function() { return SxwnlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sxwnl_sxwnl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sxwnl/sxwnl.component */ "./src/app/sxwnl/sxwnl/sxwnl.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SxwnlModule = /** @class */ (function () {
    function SxwnlModule() {
    }
    SxwnlModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', pathMatch: 'full', component: _sxwnl_sxwnl_component__WEBPACK_IMPORTED_MODULE_3__["SxwnlComponent"] }])],
            declarations: [_sxwnl_sxwnl_component__WEBPACK_IMPORTED_MODULE_3__["SxwnlComponent"]]
        })
    ], SxwnlModule);
    return SxwnlModule;
}());



/***/ }),

/***/ "./src/app/sxwnl/sxwnl/sxwnl.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sxwnl/sxwnl/sxwnl.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("iframe {\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3JlcG8vbWluZS92YWxsZXkvc3JjL2FwcC9zeHdubC9zeHdubC9zeHdubC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3h3bmwvc3h3bmwvc3h3bmwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zeHdubC9zeHdubC9zeHdubC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxufVxuIiwiaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sxwnl/sxwnl/sxwnl.component.ts":
/*!************************************************!*\
  !*** ./src/app/sxwnl/sxwnl/sxwnl.component.ts ***!
  \************************************************/
/*! exports provided: SxwnlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SxwnlComponent", function() { return SxwnlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SxwnlComponent = /** @class */ (function () {
    function SxwnlComponent() {
    }
    SxwnlComponent.prototype.ngOnInit = function () { };
    SxwnlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sxwnl',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sxwnl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sxwnl/sxwnl/sxwnl.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sxwnl.component.scss */ "./src/app/sxwnl/sxwnl/sxwnl.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SxwnlComponent);
    return SxwnlComponent;
}());



/***/ })

}]);
//# sourceMappingURL=sxwnl-sxwnl-module.js.map