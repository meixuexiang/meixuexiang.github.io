(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regexp-regexp-module"],{

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js ***!
  \****************************************************************************/
/*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleGroupMultiple, MatButtonToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function() { return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function() { return MatButtonToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function() { return MatButtonToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function() { return MatButtonToggleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function() { return MatButtonToggleGroupMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function() { return MatButtonToggleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/a11y.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */




var _c0 = ["button"];
var _c1 = ["*"];
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatButtonToggleGroup; }),
    multi: true
};
/**
 * @deprecated Use `MatButtonToggleGroup` instead.
 * @breaking-change 8.0.0
 */
var MatButtonToggleGroupMultiple = /** @class */ (function () {
    function MatButtonToggleGroupMultiple() {
    }
    return MatButtonToggleGroupMultiple;
}());
var _uniqueIdCounter = 0;
/** Change event object emitted by MatButtonToggle. */
var MatButtonToggleChange = /** @class */ (function () {
    function MatButtonToggleChange(
    /** The MatButtonToggle that emits the event. */
    source, 
    /** The value assigned to the MatButtonToggle. */
    value) {
        this.source = source;
        this.value = value;
    }
    return MatButtonToggleChange;
}());
/** Exclusive selection button toggle group that behaves like a radio-button group. */
var MatButtonToggleGroup = /** @class */ (function () {
    function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = function () { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this._onTouched = function () { };
        this._name = "mat-button-toggle-group-" + _uniqueIdCounter++;
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the group's value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    Object.defineProperty(MatButtonToggleGroup.prototype, "name", {
        /** `name` attribute for the underlying `input` element. */
        get: function () { return this._name; },
        set: function (value) {
            var _this = this;
            this._name = value;
            if (this._buttonToggles) {
                this._buttonToggles.forEach(function (toggle) {
                    toggle.name = _this._name;
                    toggle._markForCheck();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "vertical", {
        /** Whether the toggle group is vertical. */
        get: function () { return this._vertical; },
        set: function (value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "value", {
        /** Value of the toggle group. */
        get: function () {
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            if (this.multiple) {
                return selected.map(function (toggle) { return toggle.value; });
            }
            return selected[0] ? selected[0].value : undefined;
        },
        set: function (newValue) {
            this._setSelectionByValue(newValue);
            this.valueChange.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "selected", {
        /** Selected button toggles in the group. */
        get: function () {
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            return this.multiple ? selected : (selected[0] || null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "multiple", {
        /** Whether multiple button toggles can be selected. */
        get: function () { return this._multiple; },
        set: function (value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "disabled", {
        /** Whether multiple button toggle group is disabled. */
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._buttonToggles) {
                this._buttonToggles.forEach(function (toggle) { return toggle._markForCheck(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    MatButtonToggleGroup.prototype.ngOnInit = function () {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](this.multiple, undefined, false);
    };
    MatButtonToggleGroup.prototype.ngAfterContentInit = function () {
        var _a;
        (_a = this._selectionModel).select.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._buttonToggles.filter(function (toggle) { return toggle.checked; })));
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    MatButtonToggleGroup.prototype.writeValue = function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    // Implemented as part of ControlValueAccessor.
    MatButtonToggleGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    MatButtonToggleGroup.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    MatButtonToggleGroup.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Dispatch change event with current selection and group value. */
    MatButtonToggleGroup.prototype._emitChangeEvent = function () {
        var selected = this.selected;
        var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
        var event = new MatButtonToggleChange(source, this.value);
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
    };
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     * @param deferEvents Whether to defer emitting the change events.
     */
    MatButtonToggleGroup.prototype._syncButtonToggle = function (toggle, select, isUserInput, deferEvents) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = false; }
        if (deferEvents === void 0) { deferEvents = false; }
        // Deselect the currently-selected toggle, if we're in single-selection
        // mode and the button being toggled isn't selected at the moment.
        if (!this.multiple && this.selected && !toggle.checked) {
            this.selected.checked = false;
        }
        if (this._selectionModel) {
            if (select) {
                this._selectionModel.select(toggle);
            }
            else {
                this._selectionModel.deselect(toggle);
            }
        }
        else {
            deferEvents = true;
        }
        // We need to defer in some cases in order to avoid "changed after checked errors", however
        // the side-effect is that we may end up updating the model value out of sequence in others
        // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
        if (deferEvents) {
            Promise.resolve(function () { return _this._updateModelValue(isUserInput); });
        }
        else {
            this._updateModelValue(isUserInput);
        }
    };
    /** Checks whether a button toggle is selected. */
    MatButtonToggleGroup.prototype._isSelected = function (toggle) {
        return this._selectionModel && this._selectionModel.isSelected(toggle);
    };
    /** Determines whether a button toggle should be checked on init. */
    MatButtonToggleGroup.prototype._isPrechecked = function (toggle) {
        if (typeof this._rawValue === 'undefined') {
            return false;
        }
        if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(function (value) { return toggle.value != null && value === toggle.value; });
        }
        return toggle.value === this._rawValue;
    };
    /** Updates the selection state of the toggles in the group based on a value. */
    MatButtonToggleGroup.prototype._setSelectionByValue = function (value) {
        var _this = this;
        this._rawValue = value;
        if (!this._buttonToggles) {
            return;
        }
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
            }
            this._clearSelection();
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
        }
        else {
            this._clearSelection();
            this._selectValue(value);
        }
    };
    /** Clears the selected toggles. */
    MatButtonToggleGroup.prototype._clearSelection = function () {
        this._selectionModel.clear();
        this._buttonToggles.forEach(function (toggle) { return toggle.checked = false; });
    };
    /** Selects a value if there's a toggle that corresponds to it. */
    MatButtonToggleGroup.prototype._selectValue = function (value) {
        var correspondingOption = this._buttonToggles.find(function (toggle) {
            return toggle.value != null && toggle.value === value;
        });
        if (correspondingOption) {
            correspondingOption.checked = true;
            this._selectionModel.select(correspondingOption);
        }
    };
    /** Syncs up the group's value with the model and emits the change event. */
    MatButtonToggleGroup.prototype._updateModelValue = function (isUserInput) {
        // Only emit the change event for user input.
        if (isUserInput) {
            this._emitChangeEvent();
        }
        // Note: we emit this one no matter whether it was a user interaction, because
        // it is used by Angular to sync up the two-way data binding.
        this.valueChange.emit(this.value);
    };
    /** @nocollapse */
    MatButtonToggleGroup.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatButtonToggle; }), {
                        // Note that this would technically pick up toggles
                        // from nested groups, but that's not a case that we support.
                        descendants: true
                    },] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) { return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8)); };
MatButtonToggleGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatButtonToggleGroup, selectors: [["mat-button-toggle-group"]], contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
    } }, hostAttrs: ["role", "group", 1, "mat-button-toggle-group"], hostVars: 5, hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
    } }, inputs: { appearance: "appearance", name: "name", vertical: "vertical", value: "value", multiple: "multiple", disabled: "disabled" }, outputs: { valueChange: "valueChange", change: "change" }, exportAs: ["matButtonToggleGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
            { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatButtonToggleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'mat-button-toggle-group',
                providers: [
                    MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
                    { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
                ],
                host: {
                    'role': 'group',
                    'class': 'mat-button-toggle-group',
                    '[attr.aria-disabled]': 'disabled',
                    '[class.mat-button-toggle-vertical]': 'vertical',
                    '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
                },
                exportAs: 'matButtonToggleGroup'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }] }]; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _buttonToggles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatButtonToggle; }), {
                    // Note that this would technically pick up toggles
                    // from nested groups, but that's not a case that we support.
                    descendants: true
                }]
        }] }); })();
    return MatButtonToggleGroup;
}());
// Boilerplate for applying mixins to the MatButtonToggle class.
/** @docs-private */
var MatButtonToggleBase = /** @class */ (function () {
    function MatButtonToggleBase() {
    }
    return MatButtonToggleBase;
}());
var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(MatButtonToggleBase);
/** Single button inside of a toggle group. */
var MatButtonToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatButtonToggle, _super);
    function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, 
    // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
    defaultTabIndex, defaultOptions) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._isSingleSelector = false;
        _this._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._disabled = false;
        /** Event emitted when the group value changes. */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        var parsedTabIndex = Number(defaultTabIndex);
        _this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
        _this.buttonToggleGroup = toggleGroup;
        _this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this;
    }
    Object.defineProperty(MatButtonToggle.prototype, "buttonId", {
        /** Unique ID for the underlying `button` element. */
        get: function () { return this.id + "-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "appearance", {
        /** The appearance style of the button. */
        get: function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        },
        set: function (value) {
            this._appearance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "checked", {
        /** Whether the button is checked. */
        get: function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        },
        set: function (value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (newValue !== this._checked) {
                this._checked = newValue;
                if (this.buttonToggleGroup) {
                    this.buttonToggleGroup._syncButtonToggle(this, this._checked);
                }
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "disabled", {
        /** Whether the button is disabled. */
        get: function () {
            return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
        },
        set: function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    MatButtonToggle.prototype.ngOnInit = function () {
        this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
        this._type = this._isSingleSelector ? 'radio' : 'checkbox';
        this.id = this.id || "mat-button-toggle-" + _uniqueIdCounter++;
        if (this._isSingleSelector) {
            this.name = this.buttonToggleGroup.name;
        }
        if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
            this.checked = true;
        }
        this._focusMonitor.monitor(this._elementRef, true);
    };
    MatButtonToggle.prototype.ngOnDestroy = function () {
        var group = this.buttonToggleGroup;
        this._focusMonitor.stopMonitoring(this._elementRef);
        // Remove the toggle from the selection once it's destroyed. Needs to happen
        // on the next tick in order to avoid "changed after checked" errors.
        if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
        }
    };
    /** Focuses the button. */
    MatButtonToggle.prototype.focus = function (options) {
        this._buttonElement.nativeElement.focus(options);
    };
    /** Checks the button toggle due to an interaction with the underlying native button. */
    MatButtonToggle.prototype._onButtonClick = function () {
        var newChecked = this._isSingleSelector ? true : !this._checked;
        if (newChecked !== this._checked) {
            this._checked = newChecked;
            if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
                this.buttonToggleGroup._onTouched();
            }
        }
        // Emit a change event when it's the single selector
        this.change.emit(new MatButtonToggleChange(this, this.value));
    };
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    MatButtonToggle.prototype._markForCheck = function () {
        // When the group value changes, the button will not be notified.
        // Use `markForCheck` to explicit update button toggle's status.
        this._changeDetectorRef.markForCheck();
    };
    /** @nocollapse */
    MatButtonToggle.ctorParameters = function () { return [
        { type: MatButtonToggleGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggle.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] }],
        _buttonElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['button',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) { return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatButtonToggleGroup, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8)); };
MatButtonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatButtonToggle, selectors: [["mat-button-toggle"]], viewQuery: function MatButtonToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
    } }, hostAttrs: [1, "mat-button-toggle"], hostVars: 11, hostBindings: function MatButtonToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler($event) { return ctx.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", 0 - 1)("id", ctx.id)("name", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
    } }, inputs: { disableRipple: "disableRipple", appearance: "appearance", checked: "checked", disabled: "disabled", id: "id", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], value: "value", tabIndex: "tabIndex" }, outputs: { change: "change" }, exportAs: ["matButtonToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 9, consts: [["type", "button", 1, "mat-button-toggle-button", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]], template: function MatButtonToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener($event) { return ctx._onButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);
    } if (rf & 2) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleTrigger", _r28)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]], styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatButtonToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-button-toggle',
                template: "<button #button class=\"mat-button-toggle-button\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <div class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </div>\n</button>\n\n<div class=\"mat-button-toggle-focus-overlay\"></div>\n<div class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                exportAs: 'matButtonToggle',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disableRipple'],
                host: {
                    '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
                    '[class.mat-button-toggle-checked]': 'checked',
                    '[class.mat-button-toggle-disabled]': 'disabled',
                    '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
                    'class': 'mat-button-toggle',
                    // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
                    // but can still receive focus from things like cdkFocusInitial.
                    '[attr.tabindex]': '-1',
                    '[attr.id]': 'id',
                    '[attr.name]': 'null',
                    '(focus)': 'focus()'
                },
                styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
            }]
    }], function () { return [{ type: MatButtonToggleGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }] }]; }, { appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-labelledby']
        }], _buttonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }] }); })();
    return MatButtonToggle;
}(_MatButtonToggleMixinBase));

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MatButtonToggleModule = /** @class */ (function () {
    function MatButtonToggleModule() {
    }
MatButtonToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MatButtonToggleModule });
MatButtonToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function MatButtonToggleModule_Factory(t) { return new (t || MatButtonToggleModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatButtonToggleModule, { declarations: function () { return [MatButtonToggleGroup,
        MatButtonToggle]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"],
        MatButtonToggleGroup,
        MatButtonToggle]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatButtonToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
                declarations: [MatButtonToggleGroup, MatButtonToggle]
            }]
    }], function () { return []; }, null); })();
    return MatButtonToggleModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=button-toggle.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/regexp/regexp/regexp.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/regexp/regexp/regexp.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxFlex class=\"box-in-out\">\n  <dl fxLayout=\"column\" fxFlex=\"50%\" class=\"box-in\">\n    <dt>文本内容：</dt>\n    <dd fxFlex>\n      <textarea matInput [(ngModel)]=\"source\" (input)=\"onInput('source')\"></textarea>\n    </dd>\n  </dl>\n  <dl fxLayout=\"column\" fxFlex=\"50%\" class=\"box-out\">\n    <dt>{{action | uppercase}} 结果：{{action === 'replace' ? '' : matchNumbers}}</dt>\n    <dd fxFlex>\n      <textarea matInput [(ngModel)]=\"output\"></textarea>\n    </dd>\n  </dl>\n</div>\n\n<div fxLayout=\"row\" class=\"box-edit flags\">\n  <mat-button-toggle-group name=\"flags\" [value]=\"flags\" [multiple]=\"true\" (change)=\"onInput('flags', $event)\">\n    <mat-button-toggle value=\"g\">G</mat-button-toggle>\n    <mat-button-toggle value=\"i\">I</mat-button-toggle>\n    <mat-button-toggle value=\"m\">M</mat-button-toggle>\n  </mat-button-toggle-group>\n  <mat-form-field fxFlex=\"auto\" class=\"ui-float-label\">\n    <input matInput placeholder=\"正则\" [(ngModel)]=\"pattern\" (input)=\"onInput('pattern')\">\n    <mat-hint></mat-hint>\n  </mat-form-field>\n</div>\n\n<div fxLayout=\"row\" class=\"box-edit reptype\">\n  <mat-button-toggle-group name=\"replacementType\" [value]=\"replacementType\"\n    (change)=\"onInput('replacementType', $event)\">\n    <mat-button-toggle value=\"s\">String</mat-button-toggle>\n    <mat-button-toggle value=\"f\">Function</mat-button-toggle>\n  </mat-button-toggle-group>\n\n  <ng-container *ngIf=\"replacementType === 's'\">\n    <mat-form-field fxFlex=\"auto\" class=\"ui-float-label\">\n      <input matInput placeholder=\"替换\" [(ngModel)]=\"replacementString\" (input)=\"onInput('replacementString')\">\n      <mat-hint></mat-hint>\n    </mat-form-field>\n  </ng-container>\n\n  <ng-container *ngIf=\"replacementType === 'f'\">\n    <mat-form-field fxFlex=\"auto\" class=\"ui-float-label\">\n      <textarea matInput placeholder=\"替换\" [(ngModel)]=\"replacementFunc\" (input)=\"onInput('replacementFunc')\"></textarea>\n      <mat-hint></mat-hint>\n    </mat-form-field>\n  </ng-container>\n</div>\n\n<div class=\"ui-btn-bar\">\n  <button mat-stroked-button (click)=\"action = 'exec'; onInput('source')\">Exec</button>\n  <button mat-stroked-button (click)=\"action = 'match'; onInput('source')\">Match</button>\n  <button mat-stroked-button (click)=\"action = 'replace'; onInput('source')\">Replace</button>\n  <button mat-stroked-button (click)=\"copyL2R()\">L←R</button>\n  <button mat-stroked-button (click)=\"reset()\">Reset</button>\n  <button mat-stroked-button (click)=\"isHelpOverlayOpen = !isHelpOverlayOpen\" class=\"button-help\"\n    #help=\"cdkOverlayOrigin\" cdkOverlayOrigin>帮助</button>\n  <a href=\"mailto:mxx@vip.qq.com\" class=\"report-bug fa fa-envelope-o\" title=\"For best tools, Email me\"></a>\n</div>\n\n<ng-template cdkConnectedOverlay [cdkConnectedOverlayFlexibleDimensions]=\"true\" [cdkConnectedOverlayOrigin]=\"help\"\n  [cdkConnectedOverlayOpen]=\"isHelpOverlayOpen\" (backdropClick)=\"closeHelpOverlay()\"\n  [cdkConnectedOverlayMinWidth]=\"'100%'\" [cdkConnectedOverlayPositions]=\"overlayPosition\"\n  [cdkConnectedOverlayPanelClass]=\"'options-panel'\" cdkConnectedOverlayHasBackdrop>\n  <div class=\"box-help\">\n    <ul>\n      <li>\n        <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp\"\n          target=\"_blank\">MDN web docs -- RegExp</a>\n      </li>\n      <li>\n        <a href=\"http://www.jb51.net/tools/regex.htm\" target=\"_blank\">常用正则表达式, 如何写出高效率的正则表达式</a>\n      </li>\n      <li>\n        <a href=\"http://www.jb51.net/tools/zhengze.html\" target=\"_blank\">正则表达式30分钟入门教程</a>\n      </li>\n      <li>\n        <a href=\"https://zhuanlan.zhihu.com/p/20693609\" target=\"_blank\">从正则表达式(RE)到最小确定性有限状态自动机(DFA)</a>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/regexp/regexp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/regexp/regexp.module.ts ***!
  \*****************************************/
/*! exports provided: RegexpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexpModule", function() { return RegexpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/overlay.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _regexp_regexp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp/regexp.component */ "./src/app/regexp/regexp/regexp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var RegexpModule = /** @class */ (function () {
    function RegexpModule() {
    }
    RegexpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '**', pathMatch: 'full', component: _regexp_regexp_component__WEBPACK_IMPORTED_MODULE_10__["RegexpComponent"] }])
            ],
            declarations: [_regexp_regexp_component__WEBPACK_IMPORTED_MODULE_10__["RegexpComponent"]],
            providers: []
        })
    ], RegexpModule);
    return RegexpModule;
}());



/***/ }),

/***/ "./src/app/regexp/regexp/regexp.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/regexp/regexp/regexp.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 5px;\n  background: rgba(255, 255, 255, 0.9);\n}\n\ninput,\ntextarea {\n  font-family: monospace, Monaco, \"Lucida Console\";\n}\n\n.box-in-out textarea {\n  width: 100%;\n  height: 100%;\n  resize: none;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 4px;\n}\n\n.box-in-out dt {\n  line-height: 20px;\n}\n\n.box-in {\n  margin-right: 2px;\n}\n\n.box-out {\n  margin-left: 2px;\n}\n\n.container .ui-panel .ui-panel-content {\n  padding: 0;\n}\n\n.container .ui-panel .ui-panel-footer {\n  margin-top: 20px;\n}\n\n.box-edit {\n  margin: 0 0 0 0;\n}\n\n.ui-float-label input {\n  width: 100%;\n  line-height: 18px;\n  font-size: 14px;\n}\n\n.ui-float-label textarea {\n  display: block;\n  width: 100%;\n  height: 100px;\n}\n\n.box-edit p-selectButton {\n  width: 160px;\n  text-align: center;\n  /* margin: 18px 0 0 0; */\n}\n\n.ui-btn-bar {\n  display: block;\n  text-align: center;\n}\n\n.ui-btn-bar button {\n  padding: 0px 6px;\n  font-size: 14px;\n  margin: 0 3px;\n}\n\n.titlebar-toolbox {\n  float: right;\n}\n\n.box-help {\n  width: 320px;\n}\n\n.box-help ul {\n  list-style: none;\n}\n\n.box-help ul li {\n  margin: 4px;\n}\n\n.report-bug {\n  float: right;\n  margin-top: 8px;\n}\n\n.ui-float-label .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\nmat-button-toggle-group {\n  height: 30px;\n  margin-top: 8px;\n}\n\n.flags mat-button-toggle {\n  width: 50px;\n}\n\n.reptype mat-button-toggle {\n  width: 75px;\n}\n\nmat-form-field {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3JlcG8vbWluZS92YWxsZXkvc3JjL2FwcC9yZWdleHAvcmVnZXhwL3JlZ2V4cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnZXhwL3JlZ2V4cC9yZWdleHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBOztFQUVFLGdEQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBRUEsa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVnZXhwL3JlZ2V4cC9yZWdleHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgTW9uYWNvLCBcIkx1Y2lkYSBDb25zb2xlXCI7XG59XG5cbi5ib3gtaW4tb3V0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmJveC1pbi1vdXQgZHQge1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmJveC1pbiB7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uYm94LW91dCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5jb250YWluZXIgLnVpLXBhbmVsIC51aS1wYW5lbC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciAudWktcGFuZWwgLnVpLXBhbmVsLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ib3gtZWRpdCB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbn1cblxuLnVpLWZsb2F0LWxhYmVsIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS1mbG9hdC1sYWJlbCB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJveC1lZGl0IHAtc2VsZWN0QnV0dG9uIHtcbiAgd2lkdGg6IDE2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIG1hcmdpbjogMThweCAwIDAgMDsgKi9cbn1cblxuLnVpLWJ0bi1iYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLy8gbWFyZ2luLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udWktYnRuLWJhciBidXR0b24ge1xuICBwYWRkaW5nOiAwcHggNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbi50aXRsZWJhci10b29sYm94IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYm94LWhlbHAge1xuICB3aWR0aDogMzIwcHg7XG59XG5cbi5ib3gtaGVscCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5ib3gtaGVscCB1bCBsaSB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4ucmVwb3J0LWJ1ZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4udWktZmxvYXQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmZsYWdzIG1hdC1idXR0b24tdG9nZ2xlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4ucmVwdHlwZSBtYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIE1vbmFjbywgXCJMdWNpZGEgQ29uc29sZVwiO1xufVxuXG4uYm94LWluLW91dCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5ib3gtaW4tb3V0IGR0IHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5ib3gtaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmJveC1vdXQge1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uY29udGFpbmVyIC51aS1wYW5lbCAudWktcGFuZWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWluZXIgLnVpLXBhbmVsIC51aS1wYW5lbC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYm94LWVkaXQge1xuICBtYXJnaW46IDAgMCAwIDA7XG59XG5cbi51aS1mbG9hdC1sYWJlbCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udWktZmxvYXQtbGFiZWwgdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5ib3gtZWRpdCBwLXNlbGVjdEJ1dHRvbiB7XG4gIHdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBtYXJnaW46IDE4cHggMCAwIDA7ICovXG59XG5cbi51aS1idG4tYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVpLWJ0bi1iYXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMHB4IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgM3B4O1xufVxuXG4udGl0bGViYXItdG9vbGJveCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJveC1oZWxwIHtcbiAgd2lkdGg6IDMyMHB4O1xufVxuXG4uYm94LWhlbHAgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYm94LWhlbHAgdWwgbGkge1xuICBtYXJnaW46IDRweDtcbn1cblxuLnJlcG9ydC1idWcge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnVpLWZsb2F0LWxhYmVsIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5mbGFncyBtYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ucmVwdHlwZSBtYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/regexp/regexp/regexp.component.ts":
/*!***************************************************!*\
  !*** ./src/app/regexp/regexp/regexp.component.ts ***!
  \***************************************************/
/*! exports provided: RegexpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexpComponent", function() { return RegexpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _core_services_electron_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/electron/electron.service */ "./src/app/core/services/electron/electron.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
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



var RegexpComponent = /** @class */ (function () {
    function RegexpComponent(es, snackBar) {
        this.es = es;
        this.snackBar = snackBar;
        this.fnTemplate = "function ($0" + this.genParamsFromReg() + "){\r\n  //console.log(this);\r\n  //code here\r\n  \r\n  return $0;\r\n}";
        this.snackBarOption = { duration: 1800, horizontalPosition: 'end', verticalPosition: 'top' };
        this.isHelpOverlayOpen = false;
        this.overlayPosition = [{ originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' }];
        this.reset();
    }
    RegexpComponent.prototype.ngOnInit = function () { };
    RegexpComponent.prototype.reset = function () {
        this.action = 'exec';
        this.matchNumbers = null;
        this.source = '';
        this.output = '';
        this.flags = ['g', 'i', 'm'];
        this.pattern = '';
        this.replacementType = 's';
        this.replacementString = '';
        this.replacementFunc = this.fnTemplate;
        this.repFunc = null;
        this.repFuncError = null;
        this.buildRegExp();
    };
    RegexpComponent.prototype.buildRegExp = function () {
        this.regexp = this.regexpError = null;
        try {
            if (!this.pattern) {
                throw new Error('');
            }
            this.regexp = new RegExp(this.pattern, this.flags.join(''));
        }
        catch (ex) {
            this.regexpError = ex;
        }
    };
    RegexpComponent.prototype.onInput = function (type, evt) {
        if (type === 'source') {
        }
        else if (type === 'flags' || type === 'pattern') {
            if (evt) {
                this.flags = evt.value;
            }
            this.buildRegExp();
            if (this.regexp && this.replacementType === 'f') {
                this.attempInjectArgs();
            }
        }
        else if (type === 'replacementType') {
            if (evt) {
                this.replacementType = evt.value;
            }
            this.action = 'replace';
            if (this.replacementType === 'f') {
                this.attempInjectArgs();
                this.buildRepFunc();
            }
        }
        else if (type === 'replacementString') {
            this.action = 'replace';
        }
        else if (type === 'replacementFunc') {
            this.action = 'replace';
            this.buildRepFunc();
        }
        console.log('onInput', evt, this.flags, this.replacementType);
        if (this.regexpError) {
            if (this.pattern) {
                return (this.output = this.regexpError);
            }
            return;
        }
        if (this.repFuncError) {
            return (this.output = this.repFuncError);
        }
        this.output = this[this.action]();
    };
    RegexpComponent.prototype.buildRepFunc = function () {
        this.repFunc = this.regexpError = null;
        try {
            // tslint:disable-next-line:no-eval
            this.repFunc = eval('(' + this.replacementFunc + ')');
        }
        catch (ex) {
            this.regexpError = ex;
        }
    };
    RegexpComponent.prototype.attempInjectArgs = function () {
        var r = /^\s*function\s*\([^)]*\)/;
        this.replacementFunc = this.replacementFunc.replace(r, "function ($$0" + this.genParamsFromReg() + ")");
    };
    RegexpComponent.prototype.genParamsFromReg = function () {
        var source = this.regexp ? this.regexp.source : '';
        var leftBrace = source.match(/\((?!\?)/g) || [];
        return leftBrace
            .slice(0, 9)
            .map(function (_, i) { return ", $" + (i + 1); })
            .join('');
    };
    RegexpComponent.prototype.exec = function () {
        var output = [];
        var m = this.regexp.exec(this.source), lastIndex;
        if (m) {
            lastIndex = m.index;
            output.push(JSON.stringify([].concat(m, [m.index])));
            if (this.flags.includes('g')) {
                while ((m = this.regexp.exec(this.source)) !== null) {
                    if (m.index === lastIndex) {
                        output.length = 0;
                        break;
                    }
                    output.push(JSON.stringify([].concat(m, [m.index])));
                }
            }
        }
        this.matchNumbers = output.length;
        return output.join('\r\n');
    };
    RegexpComponent.prototype.match = function () {
        var output = this.source.match(this.regexp) || [];
        this.matchNumbers = output.length;
        return output.join('\r\n');
    };
    RegexpComponent.prototype.replace = function () {
        if (this.replacementType === 's') {
            return this.source.replace(this.regexp, this.replacementString);
        }
        try {
            return this.source.replace(this.regexp, this.repFunc.bind(this));
        }
        catch (error) {
            return error;
        }
    };
    RegexpComponent.prototype.copyL2R = function () {
        this.source = this.output;
        this.snackBar.open('Copied!', '', this.snackBarOption);
    };
    RegexpComponent.prototype.closeHelpOverlay = function () {
        this.isHelpOverlayOpen = false;
    };
    RegexpComponent.ctorParameters = function () { return [
        { type: _core_services_electron_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    RegexpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regexp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./regexp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/regexp/regexp/regexp.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./regexp.component.scss */ "./src/app/regexp/regexp/regexp.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_core_services_electron_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], RegexpComponent);
    return RegexpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=regexp-regexp-module.js.map