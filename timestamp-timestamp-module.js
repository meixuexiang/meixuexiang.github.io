(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timestamp-timestamp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timestamp/timestamp/timestamp.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timestamp/timestamp/timestamp.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<textarea [(ngModel)]=\"text\" (input)=\"onModelChange()\"></textarea>\n<div class=\"result-list\">\n  <dl *ngFor=\"let r of results;\" class=\"result-item\">\n    <dt>{{r.source}}</dt>\n    <dd>\n      <p>{{ r.target.toLocaleString() }}</p>\n      <p>{{ r.target.toUTCString() }}</p>\n    </dd>\n  </dl>\n</div>\n");

/***/ }),

/***/ "./src/app/timestamp/timestamp.module.ts":
/*!***********************************************!*\
  !*** ./src/app/timestamp/timestamp.module.ts ***!
  \***********************************************/
/*! exports provided: TimestampModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampModule", function() { return TimestampModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timestamp/timestamp.component */ "./src/app/timestamp/timestamp/timestamp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TimestampModule = /** @class */ (function () {
    function TimestampModule() {
    }
    TimestampModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', pathMatch: 'full', component: _timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_4__["TimestampComponent"] }])
            ],
            declarations: [_timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_4__["TimestampComponent"]]
        })
    ], TimestampModule);
    return TimestampModule;
}());



/***/ }),

/***/ "./src/app/timestamp/timestamp/timestamp.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/timestamp/timestamp/timestamp.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n:host > textarea {\n  -webkit-box-flex: 35%;\n          flex: 35%;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 4px;\n}\n\n:host > .result-list {\n  -webkit-box-flex: 65%;\n          flex: 65%;\n}\n\n.result-list {\n  overflow: auto;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 4px 10px;\n}\n\n.result-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-bottom: 10px;\n}\n\n.result-item dt {\n  width: 250px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: right;\n  padding-right: 10px;\n  line-height: 28px;\n}\n\n.result-item dd {\n  line-height: 14px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3JlcG8vbWluZS92YWxsZXkvc3JjL2FwcC90aW1lc3RhbXAvdGltZXN0YW1wL3RpbWVzdGFtcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZXN0YW1wL3RpbWVzdGFtcC90aW1lc3RhbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO1VBQUEsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7VUFBQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGltZXN0YW1wL3RpbWVzdGFtcC90aW1lc3RhbXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB9XG5cbiAgOmhvc3Q+dGV4dGFyZWEge1xuICAgIGZsZXg6IDM1JTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG5cbiAgOmhvc3Q+LnJlc3VsdC1saXN0IHtcbiAgICBmbGV4OiA2NSU7XG4gIH1cblxuICAucmVzdWx0LWxpc3Qge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgfVxuXG4gIC5yZXN1bHQtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAucmVzdWx0LWl0ZW0gZHQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAucmVzdWx0LWl0ZW0gZGQge1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZsZXg6IDE7XG4gIH1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG46aG9zdCA+IHRleHRhcmVhIHtcbiAgZmxleDogMzUlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuOmhvc3QgPiAucmVzdWx0LWxpc3Qge1xuICBmbGV4OiA2NSU7XG59XG5cbi5yZXN1bHQtbGlzdCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xufVxuXG4ucmVzdWx0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucmVzdWx0LWl0ZW0gZHQge1xuICB3aWR0aDogMjUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5yZXN1bHQtaXRlbSBkZCB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmbGV4OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/timestamp/timestamp/timestamp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/timestamp/timestamp/timestamp.component.ts ***!
  \************************************************************/
/*! exports provided: TimestampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampComponent", function() { return TimestampComponent; });
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

var tenYears = 10 * 365 * 24 * 3600 * 1000;
var testCase = [
    1515740220000,
    'Sat Jan 13 2018 01:37:39 GMT+0800 (CST)',
    'Sat Jan 13 2018',
    '2018-1-13 01:37:39',
    '"2018-1-13"',
    '"1-13"',
    '"Fri, 12 Jan 2018 17:37:39 GMT"',
    '"Fri, 12 Jan 2018 17:37:39 GMT"',
    '"2018-01-12T17:37:39.424Z"'
];
var TimestampComponent = /** @class */ (function () {
    function TimestampComponent() {
        this.text = Date.now() % 2 ? JSON.stringify({ timeStrings: testCase }) : testCase.join('\n');
        this.now = Date.now();
        this.onModelChange();
    }
    TimestampComponent.prototype.ngOnInit = function () { };
    TimestampComponent.prototype.onModelChange = function () {
        var json = this.parseJson();
        if (json && type(json) !== 'Number') {
            this.text = JSON.stringify(json, null, 2);
            this.results = this.traverseJson(json);
        }
        else {
            this.results = this.matchDateString(this.text);
        }
    };
    TimestampComponent.prototype.traverseJson = function (json) {
        var _this = this;
        var t = type(json);
        var results = [], d;
        switch (t) {
            case 'Object':
                results = results.concat.apply(results, Object.keys(json).map(function (key) { return _this.traverseJson(json[key]); }));
                break;
            case 'Array':
                results = results.concat.apply(results, json.map(function (v) { return _this.traverseJson(v); }));
                break;
            case 'String':
                d = new Date(json.replace(/^[^a-z\d]+|[^a-z\d]+$/gi, ''));
                if (!isNaN(d.getTime())) {
                    results.push({ source: json, target: d });
                }
                break;
            case 'Number':
                if (parseInt(json, 10) === json /*  && Math.abs(this.now - json) < tenYears */) {
                    d = new Date(json);
                    if (!isNaN(d.getTime())) {
                        results.push({ source: json, target: d });
                    }
                }
                break;
            default:
                break;
        }
        return results;
    };
    TimestampComponent.prototype.matchDateString = function (text) {
        var results = text
            .split('\n')
            .map(function (s) { return s.replace(/^[^a-z\d]+|[^a-z\d]+$/gi, ''); })
            .filter(function (s) { return s; })
            .map(function (s) { return ({ source: s, target: isNaN(Number(s.trim())) ? new Date(s.trim()) : new Date(Number(s.trim())) }); })
            .filter(function (o) { return !isNaN(o.target.getTime()); });
        return results;
    };
    TimestampComponent.prototype.parseJson = function () {
        try {
            return JSON.parse(this.text);
        }
        catch (error) {
            try {
                return eval("(" + this.text + ")");
            }
            catch (error) {
                return null;
            }
        }
    };
    TimestampComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timestamp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./timestamp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timestamp/timestamp/timestamp.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./timestamp.component.scss */ "./src/app/timestamp/timestamp/timestamp.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TimestampComponent);
    return TimestampComponent;
}());

function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}
/*
[
'1515740220000',
'Sat Jan 13 2018 01:37:39 GMT+0800 (CST)',
'Sat Jan 13 2018',
'2018-1-13 01:37:39',
'"2018-1-13"',
'"1-13"',
'"Fri, 12 Jan 2018 17:37:39 GMT"',
'"Fri, 12 Jan 2018 17:37:39 GMT"',
'"2018-01-12T17:37:39.424Z"',]

*/


/***/ })

}]);
//# sourceMappingURL=timestamp-timestamp-module.js.map