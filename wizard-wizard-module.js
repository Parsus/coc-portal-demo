(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wizard-wizard-module"],{

/***/ "./node_modules/@angular/cdk/esm5/a11y.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/a11y.es5.js ***!
  \****************************************************/
/*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function() { return ARIA_DESCRIBER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function() { return ARIA_DESCRIBER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function() { return LIVE_ANNOUNCER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function() { return FOCUS_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function() { return FOCUS_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * IDs are deliminated by an empty space, as per the spec.
 * @type {?}
 */
var ID_DELIMINATOR = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    /** @type {?} */
    var ids = getAriaReferenceIds(el, attr);
    if (ids.some(function (existingId) { return existingId.trim() == id.trim(); })) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMINATOR));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    /** @type {?} */
    var ids = getAriaReferenceIds(el, attr);
    /** @type {?} */
    var filteredIds = ids.filter(function (val) { return val != id.trim(); });
    el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace deliminated) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ID used for the body container where all messages are appended.
 * @type {?}
 */
var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @type {?}
 */
var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @type {?}
 */
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 * @type {?}
 */
var nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 * @type {?}
 */
var messageRegistry = new Map();
/**
 * Container for all registered messages.
 * @type {?}
 */
var messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 * \@docs-private
 */
var AriaDescriber = /** @class */ (function () {
    function AriaDescriber(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.describe = /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    };
    /** Removes the host element's aria-describedby reference to the message element. */
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.removeDescription = /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        /** @type {?} */
        var registeredMessage = messageRegistry.get(message);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(message);
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    };
    /** Unregisters all created message elements and removes the message container. */
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    AriaDescriber.prototype.ngOnDestroy = /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var describedElements = this._document.querySelectorAll("[" + CDK_DESCRIBEDBY_HOST_ATTRIBUTE + "]");
        for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    };
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._createMessageElement = /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var messageElement = this._document.createElement('div');
        messageElement.setAttribute('id', CDK_DESCRIBEDBY_ID_PREFIX + "-" + nextId++);
        messageElement.appendChild((/** @type {?} */ (this._document.createTextNode(message))));
        this._createMessagesContainer();
        (/** @type {?} */ (messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement: messageElement, referenceCount: 0 });
    };
    /** Deletes the message element from the global messages container. */
    /**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessageElement = /**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        var messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    };
    /** Creates the global container for all aria-describedby messages. */
    /**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */
    AriaDescriber.prototype._createMessagesContainer = /**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */
    function () {
        if (!messagesContainer) {
            /** @type {?} */
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer) {
                (/** @type {?} */ (preExistingContainer.parentNode)).removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';
            this._document.body.appendChild(messagesContainer);
        }
    };
    /** Deletes the global messages container. */
    /**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessagesContainer = /**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */
    function () {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    };
    /** Removes all cdk-describedby messages that are hosted through the element. */
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */
    AriaDescriber.prototype._removeCdkDescribedByReferenceIds = /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        /** @type {?} */
        var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(function (id) { return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0; });
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    };
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._addMessageReference = /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        /** @type {?} */
        var registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    };
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._removeMessageReference = /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        /** @type {?} */
        var registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    };
    /** Returns true if the element has been described by the provided message ID. */
    /**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._isElementDescribedByMessage = /**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        /** @type {?} */
        var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        /** @type {?} */
        var registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        var messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    };
    /** Determines whether a message can be described on a particular element. */
    /**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._canBeDescribed = /**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        return element.nodeType === this._document.ELEMENT_NODE && message != null &&
            !!("" + message).trim();
    };
    AriaDescriber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    AriaDescriber.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
    return AriaDescriber;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */
function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
    return parentDispatcher || new AriaDescriber(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var ARIA_DESCRIBER_PROVIDER = {
    // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
    provide: AriaDescriber,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
        (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))
    ],
    useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
var  /**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
ListKeyManager = /** @class */ (function () {
    function ListKeyManager(_items) {
        var _this = this;
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = function (item) { return item.disabled; };
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
                if (_this._activeItem) {
                    /** @type {?} */
                    var itemArray = newItems.toArray();
                    /** @type {?} */
                    var newIndex = itemArray.indexOf(_this._activeItem);
                    if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                        _this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    ListKeyManager.prototype.skipPredicate = /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    function (predicate) {
        (/** @type {?} */ (this))._skipPredicateFn = predicate;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    ListKeyManager.prototype.withWrap = /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    function (shouldWrap) {
        if (shouldWrap === void 0) { shouldWrap = true; }
        (/** @type {?} */ (this))._wrap = shouldWrap;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    ListKeyManager.prototype.withVerticalOrientation = /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    function (enabled) {
        if (enabled === void 0) { enabled = true; }
        (/** @type {?} */ (this))._vertical = enabled;
        return (/** @type {?} */ (this));
    };
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    ListKeyManager.prototype.withHorizontalOrientation = /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._horizontal = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    ListKeyManager.prototype.withAllowedModifierKeys = /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    function (keys) {
        (/** @type {?} */ (this))._allowedModifierKeys = keys;
        return (/** @type {?} */ (this));
    };
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    ListKeyManager.prototype.withTypeAhead = /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    function (debounceInterval) {
        var _this = this;
        if (debounceInterval === void 0) { debounceInterval = 200; }
        if ((/** @type {?} */ (this))._items.length && (/** @type {?} */ (this))._items.some(function (item) { return typeof item.getLabel !== 'function'; })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        (/** @type {?} */ (this))._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        (/** @type {?} */ (this))._typeaheadSubscription = (/** @type {?} */ (this))._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (keyCode) { return (/** @type {?} */ (_this))._pressedLetters.push(keyCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return (/** @type {?} */ (_this))._pressedLetters.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return (/** @type {?} */ (_this))._pressedLetters.join(''); })).subscribe(function (inputString) {
            /** @type {?} */
            var items = (/** @type {?} */ (_this))._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (var i = 1; i < items.length + 1; i++) {
                /** @type {?} */
                var index = ((/** @type {?} */ (_this))._activeItemIndex + i) % items.length;
                /** @type {?} */
                var item = items[index];
                if (!(/** @type {?} */ (_this))._skipPredicateFn(item) &&
                    (/** @type {?} */ (item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    (/** @type {?} */ (_this)).setActiveItem(index);
                    break;
                }
            }
            (/** @type {?} */ (_this))._pressedLetters = [];
        });
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    ListKeyManager.prototype.onKeydown = /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        /** @type {?} */
        var isModifierAllowed = modifiers.every(function (modifier) {
            return !event[modifier] || _this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Index of the currently active item. */
        get: /**
         * Index of the currently active item.
         * @return {?}
         */
        function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** The active item. */
        get: /**
         * The active item.
         * @return {?}
         */
        function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active item to the first enabled item in the list. */
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setFirstItemActive = /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setLastItemActive = /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setNextItemActive = /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setPreviousItemActive = /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var itemArray = this._getItemsArray();
        /** @type {?} */
        var index = typeof item === 'number' ? item : itemArray.indexOf(item);
        /** @type {?} */
        var activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     * @deprecated Use `updateActiveItem` instead.
     * @breaking-change 8.0.0
     */
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 8.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItemIndex = /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 8.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    function (index) {
        this.updateActiveItem(index);
    };
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByDelta = /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInWrapMode = /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        /** @type {?} */
        var items = this._getItemsArray();
        for (var i = 1; i <= items.length; i++) {
            /** @type {?} */
            var index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            /** @type {?} */
            var item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInDefaultMode = /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByIndex = /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    function (index, fallbackDelta) {
        /** @type {?} */
        var items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    /** Returns the items as an array. */
    /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    ListKeyManager.prototype._getItemsArray = /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    function () {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    };
    return ListKeyManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ActiveDescendantKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ActiveDescendantKeyManager, _super);
    function ActiveDescendantKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ActiveDescendantKeyManager.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    };
    return ActiveDescendantKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
FocusKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(FocusKeyManager, _super);
    function FocusKeyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._origin = 'program';
        return _this;
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    FocusKeyManager.prototype.setFocusOrigin = /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    function (origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FocusKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.setActiveItem.call(this, item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    };
    return FocusKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /** @class */ (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    function (element) {
        // Nothing is tabbable on the the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        /** @type {?} */
        var frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            /** @type {?} */
            var frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        /** @type {?} */
        var nodeName = element.nodeName.toLowerCase();
        /** @type {?} */
        var tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    InteractivityChecker.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
    /** @nocollapse */ InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
    return InteractivityChecker;
}());
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return (/** @type {?} */ (window.frameElement));
    }
    catch (_a) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    /** @type {?} */
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    /** @type {?} */
    var tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    /** @type {?} */
    var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    /** @type {?} */
    var nodeName = element.nodeName.toLowerCase();
    /** @type {?} */
    var inputType = nodeName === 'input' && ((/** @type {?} */ (element))).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
var  /**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        var _this = this;
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this._startAnchorListener = function () { return _this.focusLastTabbableElement(); };
        this._endAnchorListener = function () { return _this.focusFirstTabbableElement(); };
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._enabled = value;
            if (this._startAnchor && this._endAnchor) {
                this._toggleAnchorTabIndex(value, this._startAnchor);
                this._toggleAnchorTabIndex(value, this._endAnchor);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    FocusTrap.prototype.destroy = /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startAnchor = this._startAnchor;
        /** @type {?} */
        var endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this._startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this._endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    FocusTrap.prototype.attachAnchors = /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(function () {
            if (!_this._startAnchor) {
                _this._startAnchor = _this._createAnchor();
                (/** @type {?} */ (_this._startAnchor)).addEventListener('focus', _this._startAnchorListener);
            }
            if (!_this._endAnchor) {
                _this._endAnchor = _this._createAnchor();
                (/** @type {?} */ (_this._endAnchor)).addEventListener('focus', _this._endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore((/** @type {?} */ (this._startAnchor)), this._element);
            this._element.parentNode.insertBefore((/** @type {?} */ (this._endAnchor)), this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    /**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = /**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        var markers = (/** @type {?} */ (this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]"))));
        for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated ") +
                    "attribute will be removed in 8.0.0.", markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated attribute ") +
                    "will be removed in 8.0.0.", markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        var redirectToElement = (/** @type {?} */ (this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]")));
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " +
                    "use 'cdkFocusInitial' instead. The deprecated attribute " +
                    "will be removed in 8.0.0", redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        /** @type {?} */
        var redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        /** @type {?} */
        var redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    FocusTrap.prototype.hasAttached = /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    function () {
        return this._hasAttached;
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getFirstTabbableElement = /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        /** @type {?} */
        var children = root.children || root.childNodes;
        for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getLastTabbableElement = /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        /** @type {?} */
        var children = root.children || root.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Creates an anchor element. */
    /**
     * Creates an anchor element.
     * @private
     * @return {?}
     */
    FocusTrap.prototype._createAnchor = /**
     * Creates an anchor element.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    };
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */
    FocusTrap.prototype._toggleAnchorTabIndex = /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */
    function (isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    };
    /** Executes a function when the zone is stable. */
    /**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */
    FocusTrap.prototype._executeOnStable = /**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
/**
 * Factory that allows easy instantiation of focus traps.
 */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    FocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
    return FocusTrapFactory;
}());
/**
 * Directive for trapping focus within a region.
 */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this.focusTrap.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         */
        get: /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */
        function () { return this._autoCapture; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = (/** @type {?} */ (this._document.activeElement));
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    };
    CdkTrapFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkTrapFocus]',
                    exportAs: 'cdkTrapFocus',
                },] },
    ];
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: FocusTrapFactory },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    CdkTrapFocus.propDecorators = {
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocus',] }],
        autoCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocusAutoCapture',] }]
    };
    return CdkTrapFocus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The token for the live announcer element is defined in a separate file from LiveAnnouncer
// as a workaround for https://github.com/angular/angular/issues/22559
/** @type {?} */
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LiveAnnouncer = /** @class */ (function () {
    function LiveAnnouncer(elementToken, _ngZone, _document) {
        this._ngZone = _ngZone;
        // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.
        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */
    LiveAnnouncer.prototype.announce = /**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */
    function (message) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var politeness;
        /** @type {?} */
        var duration;
        if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
        }
        else {
            politeness = args[0], duration = args[1];
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', (/** @type {?} */ (politeness)) || 'polite');
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                clearTimeout(_this._previousTimeout);
                _this._previousTimeout = setTimeout(function () {
                    _this._liveElement.textContent = message;
                    resolve();
                    if (typeof duration === 'number') {
                        _this._previousTimeout = setTimeout(function () { return _this.clear(); }, duration);
                    }
                }, 100);
            });
        });
    };
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */
    LiveAnnouncer.prototype.clear = /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */
    function () {
        if (this._liveElement) {
            this._liveElement.textContent = '';
        }
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this._previousTimeout);
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
            this._liveElement = (/** @type {?} */ (null));
        }
    };
    /**
     * @private
     * @return {?}
     */
    LiveAnnouncer.prototype._createLiveElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementClass = 'cdk-live-announcer-element';
        /** @type {?} */
        var previousElements = this._document.getElementsByClassName(elementClass);
        /** @type {?} */
        var liveEl = this._document.createElement('div');
        // Remove any old containers. This can happen when coming in from a server-side-rendered page.
        for (var i = 0; i < previousElements.length; i++) {
            (/** @type {?} */ (previousElements[i].parentNode)).removeChild(previousElements[i]);
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    };
    LiveAnnouncer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LiveAnnouncer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: LiveAnnouncer, providedIn: "root" });
    return LiveAnnouncer;
}());
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
var CdkAriaLive = /** @class */ (function () {
    function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
    }
    Object.defineProperty(CdkAriaLive.prototype, "politeness", {
        /** The aria-live politeness level to use when announcing messages. */
        get: /**
         * The aria-live politeness level to use when announcing messages.
         * @return {?}
         */
        function () { return this._politeness; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';
            if (this._politeness === 'off') {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                    this._subscription = null;
                }
            }
            else if (!this._subscription) {
                this._subscription = this._ngZone.runOutsideAngular(function () {
                    return _this._contentObserver
                        .observe(_this._elementRef)
                        .subscribe(function () {
                        // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                        /** @type {?} */
                        var elementText = _this._elementRef.nativeElement.textContent;
                        // The `MutationObserver` fires also for attribute
                        // changes which we don't want to announce.
                        if (elementText !== _this._previousAnnouncedText) {
                            _this._liveAnnouncer.announce(elementText, _this._politeness);
                            _this._previousAnnouncedText = elementText;
                        }
                    });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkAriaLive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    CdkAriaLive.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkAriaLive]',
                    exportAs: 'cdkAriaLive',
                },] },
    ];
    /** @nocollapse */
    CdkAriaLive.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LiveAnnouncer },
        { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ContentObserver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CdkAriaLive.propDecorators = {
        politeness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAriaLive',] }]
    };
    return CdkAriaLive;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentAnnouncer
 * @param {?} liveElement
 * @param {?} _document
 * @param {?} ngZone
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer, liveElement, _document, ngZone) {
    return parentAnnouncer || new LiveAnnouncer(liveElement, ngZone, _document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
/** @type {?} */
var TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also
 * mark the the listener as passive if the browser supports it.
 * @type {?}
 */
var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
    passive: true,
    capture: true
});
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
var FocusMonitor = /** @class */ (function () {
    function FocusMonitor(_ngZone, _platform) {
        var _this = this;
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentKeydownListener = function () {
            // On keydown record the origin and clear any touch event that may be in progress.
            _this._lastTouchTarget = null;
            _this._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentMousedownListener = function () {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!_this._lastTouchTarget) {
                _this._setOriginForCurrentEventQueue('mouse');
            }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentTouchstartListener = function (event) {
            // When the touchstart event fires the focus event is not yet in the event queue. This means
            // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
            // see if a focus happens.
            if (_this._touchTimeoutId != null) {
                clearTimeout(_this._touchTimeoutId);
            }
            _this._lastTouchTarget = event.target;
            _this._touchTimeoutId = setTimeout(function () { return _this._lastTouchTarget = null; }, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._windowFocusListener = function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this._windowFocused = true;
            _this._windowFocusTimeoutId = setTimeout(function () { return _this._windowFocused = false; });
        };
    }
    /**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */
    FocusMonitor.prototype.monitor = /**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */
    function (element, checkChildren) {
        var _this = this;
        if (checkChildren === void 0) { checkChildren = false; }
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceElement"])(element);
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(nativeElement)) {
            /** @type {?} */
            var cachedInfo = this._elementInfo.get(nativeElement);
            (/** @type {?} */ (cachedInfo)).checkChildren = checkChildren;
            return (/** @type {?} */ (cachedInfo)).subject.asObservable();
        }
        // Create monitored element info.
        /** @type {?} */
        var info = {
            unlisten: function () { },
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this._elementInfo.set(nativeElement, info);
        this._incrementMonitoredElementCount();
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        /** @type {?} */
        var focusListener = function (event) { return _this._onFocus(event, nativeElement); };
        /** @type {?} */
        var blurListener = function (event) { return _this._onBlur(event, nativeElement); };
        this._ngZone.runOutsideAngular(function () {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = function () {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    FocusMonitor.prototype.stopMonitoring = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceElement"])(element);
        /** @type {?} */
        var elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(nativeElement);
            this._elementInfo.delete(nativeElement);
            this._decrementMonitoredElementCount();
        }
    };
    /**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */
    FocusMonitor.prototype.focusVia = /**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */
    function (element, origin, options) {
        /** @type {?} */
        var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceElement"])(element);
        this._setOriginForCurrentEventQueue(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
            ((/** @type {?} */ (nativeElement))).focus(options);
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementInfo.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    /**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    FocusMonitor.prototype._toggleClass = /**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    function (element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    };
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype._setClasses = /**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        /** @type {?} */
        var elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
    };
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param origin The origin to set.
     */
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */
    FocusMonitor.prototype._setOriginForCurrentEventQueue = /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._origin = origin;
            // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.
            _this._originTimeoutId = setTimeout(function () { return _this._origin = null; }, 1);
        });
    };
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    FocusMonitor.prototype._wasCausedByTouch = /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    function (event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        /** @type {?} */
        var focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    };
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    /**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onFocus = /**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        /** @type {?} */
        var elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== event.target)) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        /** @type {?} */
        var origin = this._origin;
        if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                origin = 'touch';
            }
            else {
                origin = 'program';
            }
        }
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    };
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onBlur = /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        /** @type {?} */
        var elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    };
    /**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    FocusMonitor.prototype._emitOrigin = /**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    function (subject, origin) {
        this._ngZone.run(function () { return subject.next(origin); });
    };
    /**
     * @private
     * @return {?}
     */
    FocusMonitor.prototype._incrementMonitoredElementCount = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(function () {
                document.addEventListener('keydown', _this._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', _this._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', _this._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', _this._windowFocusListener);
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    FocusMonitor.prototype._decrementMonitoredElementCount = /**
     * @private
     * @return {?}
     */
    function () {
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.removeEventListener('focus', this._windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
        }
    };
    FocusMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusMonitor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
    /** @nocollapse */ FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: FocusMonitor, providedIn: "root" });
    return FocusMonitor;
}());
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
var CdkMonitorFocus = /** @class */ (function () {
    function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(function (origin) { return _this.cdkFocusChange.emit(origin); });
    }
    /**
     * @return {?}
     */
    CdkMonitorFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._monitorSubscription.unsubscribe();
    };
    CdkMonitorFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
                },] },
    ];
    /** @nocollapse */
    CdkMonitorFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: FocusMonitor }
    ]; };
    CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CdkMonitorFocus;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusMonitor(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var FOCUS_MONITOR_PROVIDER = {
    // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
    provide: FocusMonitor,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]],
    useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var A11yModule = /** @class */ (function () {
    function A11yModule() {
    }
    A11yModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"]],
                    declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                },] },
    ];
    return A11yModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=a11y.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            this._rawDir = value;
            this._dir = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/keycodes.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/keycodes.es5.js ***!
  \********************************************************/
/*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModifierKey", function() { return hasModifierKey; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
var MAC_ENTER = 3;
/** @type {?} */
var BACKSPACE = 8;
/** @type {?} */
var TAB = 9;
/** @type {?} */
var NUM_CENTER = 12;
/** @type {?} */
var ENTER = 13;
/** @type {?} */
var SHIFT = 16;
/** @type {?} */
var CONTROL = 17;
/** @type {?} */
var ALT = 18;
/** @type {?} */
var PAUSE = 19;
/** @type {?} */
var CAPS_LOCK = 20;
/** @type {?} */
var ESCAPE = 27;
/** @type {?} */
var SPACE = 32;
/** @type {?} */
var PAGE_UP = 33;
/** @type {?} */
var PAGE_DOWN = 34;
/** @type {?} */
var END = 35;
/** @type {?} */
var HOME = 36;
/** @type {?} */
var LEFT_ARROW = 37;
/** @type {?} */
var UP_ARROW = 38;
/** @type {?} */
var RIGHT_ARROW = 39;
/** @type {?} */
var DOWN_ARROW = 40;
/** @type {?} */
var PLUS_SIGN = 43;
/** @type {?} */
var PRINT_SCREEN = 44;
/** @type {?} */
var INSERT = 45;
/** @type {?} */
var DELETE = 46;
/** @type {?} */
var ZERO = 48;
/** @type {?} */
var ONE = 49;
/** @type {?} */
var TWO = 50;
/** @type {?} */
var THREE = 51;
/** @type {?} */
var FOUR = 52;
/** @type {?} */
var FIVE = 53;
/** @type {?} */
var SIX = 54;
/** @type {?} */
var SEVEN = 55;
/** @type {?} */
var EIGHT = 56;
/** @type {?} */
var NINE = 57;
/** @type {?} */
var FF_SEMICOLON = 59;
// Firefox (Gecko) fires this for semicolon instead of 186
/** @type {?} */
var FF_EQUALS = 61;
// Firefox (Gecko) fires this for equals instead of 187
/** @type {?} */
var QUESTION_MARK = 63;
/** @type {?} */
var AT_SIGN = 64;
/** @type {?} */
var A = 65;
/** @type {?} */
var B = 66;
/** @type {?} */
var C = 67;
/** @type {?} */
var D = 68;
/** @type {?} */
var E = 69;
/** @type {?} */
var F = 70;
/** @type {?} */
var G = 71;
/** @type {?} */
var H = 72;
/** @type {?} */
var I = 73;
/** @type {?} */
var J = 74;
/** @type {?} */
var K = 75;
/** @type {?} */
var L = 76;
/** @type {?} */
var M = 77;
/** @type {?} */
var N = 78;
/** @type {?} */
var O = 79;
/** @type {?} */
var P = 80;
/** @type {?} */
var Q = 81;
/** @type {?} */
var R = 82;
/** @type {?} */
var S = 83;
/** @type {?} */
var T = 84;
/** @type {?} */
var U = 85;
/** @type {?} */
var V = 86;
/** @type {?} */
var W = 87;
/** @type {?} */
var X = 88;
/** @type {?} */
var Y = 89;
/** @type {?} */
var Z = 90;
/** @type {?} */
var META = 91;
// WIN_KEY_LEFT
/** @type {?} */
var MAC_WK_CMD_LEFT = 91;
/** @type {?} */
var MAC_WK_CMD_RIGHT = 93;
/** @type {?} */
var CONTEXT_MENU = 93;
/** @type {?} */
var NUMPAD_ZERO = 96;
/** @type {?} */
var NUMPAD_ONE = 97;
/** @type {?} */
var NUMPAD_TWO = 98;
/** @type {?} */
var NUMPAD_THREE = 99;
/** @type {?} */
var NUMPAD_FOUR = 100;
/** @type {?} */
var NUMPAD_FIVE = 101;
/** @type {?} */
var NUMPAD_SIX = 102;
/** @type {?} */
var NUMPAD_SEVEN = 103;
/** @type {?} */
var NUMPAD_EIGHT = 104;
/** @type {?} */
var NUMPAD_NINE = 105;
/** @type {?} */
var NUMPAD_MULTIPLY = 106;
/** @type {?} */
var NUMPAD_PLUS = 107;
/** @type {?} */
var NUMPAD_MINUS = 109;
/** @type {?} */
var NUMPAD_PERIOD = 110;
/** @type {?} */
var NUMPAD_DIVIDE = 111;
/** @type {?} */
var F1 = 112;
/** @type {?} */
var F2 = 113;
/** @type {?} */
var F3 = 114;
/** @type {?} */
var F4 = 115;
/** @type {?} */
var F5 = 116;
/** @type {?} */
var F6 = 117;
/** @type {?} */
var F7 = 118;
/** @type {?} */
var F8 = 119;
/** @type {?} */
var F9 = 120;
/** @type {?} */
var F10 = 121;
/** @type {?} */
var F11 = 122;
/** @type {?} */
var F12 = 123;
/** @type {?} */
var NUM_LOCK = 144;
/** @type {?} */
var SCROLL_LOCK = 145;
/** @type {?} */
var FIRST_MEDIA = 166;
/** @type {?} */
var FF_MINUS = 173;
/** @type {?} */
var MUTE = 173;
// Firefox (Gecko) fires 181 for MUTE
/** @type {?} */
var VOLUME_DOWN = 174;
// Firefox (Gecko) fires 182 for VOLUME_DOWN
/** @type {?} */
var VOLUME_UP = 175;
// Firefox (Gecko) fires 183 for VOLUME_UP
/** @type {?} */
var FF_MUTE = 181;
/** @type {?} */
var FF_VOLUME_DOWN = 182;
/** @type {?} */
var LAST_MEDIA = 183;
/** @type {?} */
var FF_VOLUME_UP = 183;
/** @type {?} */
var SEMICOLON = 186;
// Firefox (Gecko) fires 59 for SEMICOLON
/** @type {?} */
var EQUALS = 187;
// Firefox (Gecko) fires 61 for EQUALS
/** @type {?} */
var COMMA = 188;
/** @type {?} */
var DASH = 189;
// Firefox (Gecko) fires 173 for DASH/MINUS
/** @type {?} */
var SLASH = 191;
/** @type {?} */
var APOSTROPHE = 192;
/** @type {?} */
var TILDE = 192;
/** @type {?} */
var OPEN_SQUARE_BRACKET = 219;
/** @type {?} */
var BACKSLASH = 220;
/** @type {?} */
var CLOSE_SQUARE_BRACKET = 221;
/** @type {?} */
var SINGLE_QUOTE = 222;
/** @type {?} */
var MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Checks whether a modifier key is pressed.
 * @param {?} event Event to be checked.
 * @param {...?} modifiers
 * @return {?}
 */
function hasModifierKey(event) {
    var modifiers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        modifiers[_i - 1] = arguments[_i];
    }
    if (modifiers.length) {
        return modifiers.some(function (modifier) { return event[modifier]; });
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/observers.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/observers.es5.js ***!
  \*********************************************************/
/*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    MutationObserverFactory.prototype.create = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    return MutationObserverFactory;
}());
/**
 * An injectable service that allows watching elements for changes to their content.
 */
var ContentObserver = /** @class */ (function () {
    function ContentObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ContentObserver.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this._cleanupObserver(element); });
    };
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    ContentObserver.prototype.observe = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        var _this = this;
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            /** @type {?} */
            var stream = _this._observeElement(element);
            /** @type {?} */
            var subscription = stream.subscribe(observer);
            return function () {
                subscription.unsubscribe();
                _this._unobserveElement(element);
            };
        });
    };
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._observeElement = /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            var stream_1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */
            var observer = this._mutationObserverFactory.create(function (mutations) { return stream_1.next(mutations); });
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
        }
        else {
            (/** @type {?} */ (this._observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this._observedElements.get(element))).stream;
    };
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._unobserveElement = /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._observedElements.has(element)) {
            (/** @type {?} */ (this._observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this._observedElements.get(element))).count) {
                this._cleanupObserver(element);
            }
        }
    };
    /** Clean up the underlying MutationObserver for the specified element. */
    /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._cleanupObserver = /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._observedElements.has(element)) {
            var _a = (/** @type {?} */ (this._observedElements.get(element))), observer = _a.observer, stream = _a.stream;
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    };
    ContentObserver.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ContentObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory }
    ]; };
    /** @nocollapse */ ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ContentObserver_Factory() { return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
    return ContentObserver;
}());
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var CdkObserveContent = /** @class */ (function () {
    function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
    }
    Object.defineProperty(CdkObserveContent.prototype, "disabled", {
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */
        get: /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkObserveContent.prototype, "debounce", {
        /** Debounce interval for emitting the changes. */
        get: /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */
        function () { return this._debounce; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
            this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    CdkObserveContent.prototype._subscribe = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._unsubscribe();
        /** @type {?} */
        var stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular(function () {
            _this._currentSubscription =
                (_this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this.debounce)) : stream).subscribe(_this.event);
        });
    };
    /**
     * @private
     * @return {?}
     */
    CdkObserveContent.prototype._unsubscribe = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    };
    CdkObserveContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkObserveContent]',
                    exportAs: 'cdkObserveContent',
                },] },
    ];
    /** @nocollapse */
    CdkObserveContent.ctorParameters = function () { return [
        { type: ContentObserver },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CdkObserveContent.propDecorators = {
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkObserveContent',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkObserveContentDisabled',] }],
        debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CdkObserveContent;
}());
var ObserversModule = /** @class */ (function () {
    function ObserversModule() {
    }
    ObserversModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkObserveContent],
                    declarations: [CdkObserveContent],
                    providers: [MutationObserverFactory]
                },] },
    ];
    return ObserversModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=observers.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
var RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        var content = document.createElement('div');
        /** @type {?} */
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/stepper.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/stepper.es5.js ***!
  \*******************************************************/
/*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function() { return STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function() { return MAT_STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function() { return CdkStepHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepLabel = /** @class */ (function () {
    function CdkStepLabel(/** @docs-private */ template) {
        this.template = template;
    }
    CdkStepLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepLabel]',
                },] },
    ];
    /** @nocollapse */
    CdkStepLabel.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return CdkStepLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepHeader = /** @class */ (function () {
    function CdkStepHeader(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    /**
     * Focuses the step header.
     * @return {?}
     */
    CdkStepHeader.prototype.focus = /**
     * Focuses the step header.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    CdkStepHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepHeader]',
                    host: {
                        'role': 'tab',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkStepHeader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return CdkStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each stepper component.
 * @type {?}
 */
var nextId = 0;
/**
 * Change event emitted on selection changes.
 */
var  /**
 * Change event emitted on selection changes.
 */
StepperSelectionEvent = /** @class */ (function () {
    function StepperSelectionEvent() {
    }
    return StepperSelectionEvent;
}());
/**
 * Enum to represent the different states of the steps.
 * @type {?}
 */
var STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @type {?}
 */
var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * \@breaking-change 8.0.0.
 * @type {?}
 */
var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
var CdkStep = /** @class */ (function () {
    /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
    function CdkStep(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._customCompleted = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
    }
    Object.defineProperty(CdkStep.prototype, "editable", {
        /** Whether the user can return to this step once it has been marked as complted. */
        get: /**
         * Whether the user can return to this step once it has been marked as complted.
         * @return {?}
         */
        function () { return this._editable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "optional", {
        /** Whether the completion of step is optional. */
        get: /**
         * Whether the completion of step is optional.
         * @return {?}
         */
        function () { return this._optional; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "completed", {
        /** Whether step is marked as completed. */
        get: /**
         * Whether step is marked as completed.
         * @return {?}
         */
        function () {
            return this._customCompleted == null ? this._getDefaultCompleted() : this._customCompleted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customCompleted = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CdkStep.prototype._getDefaultCompleted = /**
     * @private
     * @return {?}
     */
    function () {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    };
    Object.defineProperty(CdkStep.prototype, "hasError", {
        /** Whether step has an error. */
        get: /**
         * Whether step has an error.
         * @return {?}
         */
        function () {
            return this._customError == null ? this._getDefaultError() : this._customError;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CdkStep.prototype._getDefaultError = /**
     * @private
     * @return {?}
     */
    function () {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    };
    /** Selects this step component. */
    /**
     * Selects this step component.
     * @return {?}
     */
    CdkStep.prototype.select = /**
     * Selects this step component.
     * @return {?}
     */
    function () {
        this._stepper.selected = this;
    };
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    CdkStep.prototype.reset = /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    function () {
        this.interacted = false;
        if (this._customCompleted != null) {
            this._customCompleted = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    /**
     * @return {?}
     */
    CdkStep.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    };
    CdkStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-step',
                    exportAs: 'cdkStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CdkStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CdkStepper; }),] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STEPPER_GLOBAL_OPTIONS,] }] }
    ]; };
    CdkStep.propDecorators = {
        stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkStepLabel,] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }],
        stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkStep;
}());
var CdkStepper = /** @class */ (function () {
    function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
    }
    Object.defineProperty(CdkStepper.prototype, "linear", {
        /** Whether the validity of previous steps should be checked or not. */
        get: /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */
        function () { return this._linear; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
        /** The index of the selected step. */
        get: /**
         * The index of the selected step.
         * @return {?}
         */
        function () { return this._selectedIndex; },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._steps) {
                // Ensure that the index can't be out of bounds.
                if (index < 0 || index > this._steps.length - 1) {
                    throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                }
                if (this._selectedIndex != index &&
                    !this._anyControlsInvalidOrPending(index) &&
                    (index >= this._selectedIndex || this._steps.toArray()[index].editable)) {
                    this._updateSelectedItemIndex(index);
                }
            }
            else {
                this._selectedIndex = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selected", {
        /** The step that is selected. */
        get: /**
         * The step that is selected.
         * @return {?}
         */
        function () {
            // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
            return this._steps ? this._steps.toArray()[this.selectedIndex] : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this.selectedIndex = this._steps ? this._steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view chidren. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader)
            .withWrap()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? (/** @type {?} */ (this._dir.change)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed))
            .subscribe(function (direction) { return _this._keyManager.withHorizontalOrientation(direction); });
        this._keyManager.updateActiveItemIndex(this._selectedIndex);
        this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
            if (!_this.selected) {
                _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
        });
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Selects and focuses the next step in list. */
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    CdkStepper.prototype.next = /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this._steps.length - 1);
    };
    /** Selects and focuses the previous step in list. */
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    CdkStepper.prototype.previous = /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    };
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    CdkStepper.prototype.reset = /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    function () {
        this._updateSelectedItemIndex(0);
        this._steps.forEach(function (step) { return step.reset(); });
        this._stateChanged();
    };
    /** Returns a unique id for each step label element. */
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepLabelId = /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-label-" + this._groupId + "-" + i;
    };
    /** Returns unique id for each step content element. */
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepContentId = /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-content-" + this._groupId + "-" + i;
    };
    /** Marks the component to be change detected. */
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    CdkStepper.prototype._stateChanged = /**
     * Marks the component to be change detected.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    /** Returns position state of the step with the given index. */
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getAnimationDirection = /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    };
    /** Returns the type of icon to be displayed. */
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    CdkStepper.prototype._getIndicatorType = /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    function (index, state) {
        if (state === void 0) { state = STEP_STATE.NUMBER; }
        /** @type {?} */
        var step = this._steps.toArray()[index];
        /** @type {?} */
        var isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType
            ? this._getDefaultIndicatorLogic(step, isCurrentStep)
            : this._getGuidelineLogic(step, isCurrentStep, state);
    };
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    CdkStepper.prototype._getDefaultIndicatorLogic = /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    function (step, isCurrentStep) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    };
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    CdkStepper.prototype._getGuidelineLogic = /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    function (step, isCurrentStep, state) {
        if (state === void 0) { state = STEP_STATE.NUMBER; }
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._isCurrentStep = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._selectedIndex === index;
    };
    /** Returns the index of the currently-focused step header. */
    /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    CdkStepper.prototype._getFocusIndex = /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    function () {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    };
    /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    CdkStepper.prototype._updateSelectedItemIndex = /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    function (newIndex) {
        /** @type {?} */
        var stepsArray = this._steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItemIndex(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CdkStepper.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._anyControlsInvalidOrPending = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var steps = this._steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some(function (step) {
                /** @type {?} */
                var control = step.stepControl;
                /** @type {?} */
                var isIncomplete = control ?
                    (control.invalid || control.pending || !step.interacted) :
                    !step.completed;
                return isIncomplete && !step.optional;
            });
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    CdkStepper.prototype._layoutDirection = /**
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Checks whether the stepper contains the focused element. */
    /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    CdkStepper.prototype._containsFocus = /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    function () {
        if (!this._document || !this._elementRef) {
            return false;
        }
        /** @type {?} */
        var stepperElement = this._elementRef.nativeElement;
        /** @type {?} */
        var focusedElement = this._document.activeElement;
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    };
    CdkStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepper]',
                    exportAs: 'cdkStepper',
                },] },
    ];
    /** @nocollapse */
    CdkStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    CdkStepper.propDecorators = {
        _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStep,] }],
        _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStepHeader,] }],
        linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CdkStepper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var CdkStepperNext = /** @class */ (function () {
    function CdkStepperNext(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    CdkStepperNext.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[cdkStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperNext.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperNext.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkStepperNext;
}());
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var CdkStepperPrevious = /** @class */ (function () {
    function CdkStepperPrevious(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    CdkStepperPrevious.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[cdkStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperPrevious.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperPrevious.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkStepperPrevious;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepperModule = /** @class */ (function () {
    function CdkStepperModule() {
    }
    CdkStepperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    exports: [
                        CdkStep,
                        CdkStepper,
                        CdkStepHeader,
                        CdkStepLabel,
                        CdkStepperNext,
                        CdkStepperPrevious,
                    ],
                    declarations: [
                        CdkStep,
                        CdkStepper,
                        CdkStepHeader,
                        CdkStepLabel,
                        CdkStepperNext,
                        CdkStepperPrevious,
                    ]
                },] },
    ];
    return CdkStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js ***!
  \*****************************************************************************/
/*! exports provided: BaseStorageService, InMemoryStorageService, ProxyStorageService, sessionStorageFactory, localStorageFactory, SESSION_STORAGE, LOCAL_STORAGE, StorageServiceModule, JsonStorageTranscoder, StringStorageTranscoder, BooleanStorageTranscoder, NumberStorageTranscoder, StorageTranscoders, isStorageAvailable, WebStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorageService", function() { return BaseStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryStorageService", function() { return InMemoryStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyStorageService", function() { return ProxyStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorageFactory", function() { return sessionStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageFactory", function() { return localStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE", function() { return SESSION_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function() { return LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageServiceModule", function() { return StorageServiceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonStorageTranscoder", function() { return JsonStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringStorageTranscoder", function() { return StringStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanStorageTranscoder", function() { return BooleanStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberStorageTranscoder", function() { return NumberStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTranscoders", function() { return StorageTranscoders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStorageAvailable", function() { return isStorageAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageService", function() { return WebStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A storage service implementation that is used as a proxy for another storage service. This is used to create storage services with a
 * different default transcoder.
 * @template T
 */
var  /**
 * A storage service implementation that is used as a proxy for another storage service. This is used to create storage services with a
 * different default transcoder.
 * @template T
 */
ProxyStorageService = /** @class */ (function () {
    /**
     * Creates a new `ProxyStorageService` instance that uses the specified transcoder by default for read and write operations. Actual
     * read and writes are delegated to given storage service.
     *
     * @param defaultTranscoder Transcoder which is to be used by default for storage read and write operations.
     * @param subject           Storage service which should handle to actual storage of data.
     */
    function ProxyStorageService(defaultTranscoder, subject) {
        this.defaultTranscoder = defaultTranscoder;
        this.subject = subject;
    }
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param   key Identifier of the entry for which its presence in the storage is to be checked.
     * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    ProxyStorageService.prototype.has = /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    function (key) {
        return this.subject.has(key);
    };
    /*
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param   key     Identifier of the entry whose value is to be retrieved.
     * @param   decoder Decoder to use for converting the stored value to the desired return type.
     * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    /*
         * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
         * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
         * `undefined` will be returned.
         *
         * @param   key     Identifier of the entry whose value is to be retrieved.
         * @param   decoder Decoder to use for converting the stored value to the desired return type.
         * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
         *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
         */
    /**
     * @param {?} key
     * @param {?=} decoder
     * @return {?}
     */
    ProxyStorageService.prototype.get = /*
         * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
         * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
         * `undefined` will be returned.
         *
         * @param   key     Identifier of the entry whose value is to be retrieved.
         * @param   decoder Decoder to use for converting the stored value to the desired return type.
         * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
         *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
         */
    /**
     * @param {?} key
     * @param {?=} decoder
     * @return {?}
     */
    function (key, decoder) {
        return this.subject.get(key, decoder || this.defaultTranscoder);
    };
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param key     Identifier of the entry which is to be created or updated.
     * @param value   Value which is to be stored.
     * @param encoder Encoder used to convert the given value into a format that can be used for storage.
     */
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    ProxyStorageService.prototype.set = /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    function (key, value, encoder) {
        this.subject.set(key, value, encoder || this.defaultTranscoder);
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    ProxyStorageService.prototype.remove = /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    function (key) {
        this.subject.remove(key);
    };
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     */
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    ProxyStorageService.prototype.clear = /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    function () {
        this.subject.clear();
    };
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @param   transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @returns            A new storage service that uses the specified transcoder by default.
     */
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    ProxyStorageService.prototype.withDefaultTranscoder = /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    function (transcoder) {
        return new ProxyStorageService(transcoder, this.subject);
    };
    return ProxyStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base implementation for storage services.
 * @abstract
 * @template T
 */
var  /**
 * Base implementation for storage services.
 * @abstract
 * @template T
 */
BaseStorageService = /** @class */ (function () {
    /**
     * Creates a new `BaseStorageService` that uses the specified transcoder by default for read and write operations.
     *
     * @param defaultTranscoder Transcoder which is to be used by default for storage read and write operations.
     */
    function BaseStorageService(defaultTranscoder) {
        this.defaultTranscoder = defaultTranscoder;
    }
    /**
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param   key     Identifier of the entry whose value is to be retrieved.
     * @param   decoder Decoder to use for converting the stored value to the desired return type.
     * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    /**
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param {?} key     Identifier of the entry whose value is to be retrieved.
     * @param {?=} decoder Decoder to use for converting the stored value to the desired return type.
     * @return {?} Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    BaseStorageService.prototype.get = /**
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param {?} key     Identifier of the entry whose value is to be retrieved.
     * @param {?=} decoder Decoder to use for converting the stored value to the desired return type.
     * @return {?} Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    function (key, decoder) {
        /** @type {?} */
        var value = this.getItem(key);
        return value !== undefined ? (decoder || this.defaultTranscoder).decode(value) : undefined;
    };
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param key     Identifier of the entry which is to be created or updated.
     * @param value   Value which is to be stored.
     * @param encoder Encoder used to convert the given value into a format that can be used for storage.
     */
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    BaseStorageService.prototype.set = /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    function (key, value, encoder) {
        this.setItem(key, (encoder || this.defaultTranscoder).encode(value));
    };
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @param   transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @returns            A new storage service that uses the specified transcoder by default.
     */
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    BaseStorageService.prototype.withDefaultTranscoder = /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    function (transcoder) {
        return new ProxyStorageService(transcoder, this);
    };
    return BaseStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transcoder that encodes values as JSON strings.
 */
var  /**
 * Transcoder that encodes values as JSON strings.
 */
JsonStorageTranscoder = /** @class */ (function () {
    function JsonStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    JsonStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return JSON.stringify(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    JsonStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return JSON.parse(value);
        }
        catch (error) {
            return undefined;
        }
    };
    return JsonStorageTranscoder;
}());
/**
 * Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way.
 */
var  /**
 * Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way.
 */
StringStorageTranscoder = /** @class */ (function () {
    function StringStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    StringStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StringStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value;
    };
    return StringStorageTranscoder;
}());
/**
 * Transcoder that encodes/decodes `boolean` values.
 */
var  /**
 * Transcoder that encodes/decodes `boolean` values.
 */
BooleanStorageTranscoder = /** @class */ (function () {
    function BooleanStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
        return undefined;
    };
    return BooleanStorageTranscoder;
}());
/**
 * Transcoder that encodes/decodes `number` values.
 */
var  /**
 * Transcoder that encodes/decodes `number` values.
 */
NumberStorageTranscoder = /** @class */ (function () {
    function NumberStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var parsedNumber = Number(value);
        return Number.isFinite(parsedNumber) ? parsedNumber : undefined;
    };
    return NumberStorageTranscoder;
}());
/**
 * A set of storage transcoders.
 * @type {?}
 */
var StorageTranscoders = {
    /**
     * Transcoder that encodes values as JSON strings.
     */
    JSON: (/** @type {?} */ (new JsonStorageTranscoder())),
    /**
     * Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way.
     */
    STRING: (/** @type {?} */ (new StringStorageTranscoder())),
    /**
     * Transcoder that encodes/decodes `boolean` values.
     */
    BOOLEAN: (/** @type {?} */ (new BooleanStorageTranscoder())),
    /**
     * Transcoder that encodes/decodes `number` values.
     */
    NUMBER: (/** @type {?} */ (new NumberStorageTranscoder()))
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A volatile `StorageService` implementation. This service guarantees that data stored will remain available as long as the application
 * instance is active. After the application is terminated all data will be lost.
 */
var  /**
 * A volatile `StorageService` implementation. This service guarantees that data stored will remain available as long as the application
 * instance is active. After the application is terminated all data will be lost.
 */
InMemoryStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryStorageService, _super);
    /**
     * Creates a new `InMemoryStorageService` instance.
     */
    function InMemoryStorageService() {
        var _this = _super.call(this, StorageTranscoders.JSON) || this;
        /**
         * A map that serves as the underlying backing storage for this service.
         */
        _this.storage = new Map();
        return _this;
    }
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param   key Identifier of the entry for which its presence in the storage is to be checked.
     * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    InMemoryStorageService.prototype.has = /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    function (key) {
        return this.storage.has(key);
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    InMemoryStorageService.prototype.remove = /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    function (key) {
        this.storage.delete(key);
    };
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     */
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    InMemoryStorageService.prototype.clear = /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    function () {
        this.storage.clear();
    };
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @param   key Identifier of the entry whose value is to be retrieved.
     * @returns     The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    InMemoryStorageService.prototype.getItem = /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    function (key) {
        if (!this.storage.has(key)) {
            return undefined;
        }
        return (/** @type {?} */ (this.storage.get(key)));
    };
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @param key   Identifier of the entry for which the value is to be stored.
     * @param value The value that is to be stored.
     */
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    InMemoryStorageService.prototype.setItem = /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    function (key, value) {
        this.storage.set(key, value);
    };
    return InMemoryStorageService;
}(BaseStorageService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An implementation of `StorageService` interface that uses an underlying (web) `Storage` object, such as `localStorage` and
 * `sessionStorage`, as backing data store. This class basically wraps the `Storage` object so it can be accessed through the
 * `StorageService` interface.
 */
var  /**
 * An implementation of `StorageService` interface that uses an underlying (web) `Storage` object, such as `localStorage` and
 * `sessionStorage`, as backing data store. This class basically wraps the `Storage` object so it can be accessed through the
 * `StorageService` interface.
 */
WebStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebStorageService, _super);
    /**
     * Creates a new `WebStorageService` instance that uses the specified (web) storage object as underlying backing storage.
     *
     * @param storage Storage object which is to be wrapped in a class that implements the `StorageService` interface.
     */
    function WebStorageService(storage) {
        var _this = _super.call(this, StorageTranscoders.JSON) || this;
        _this.storage = storage;
        return _this;
    }
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param   key Identifier of the entry for which its presence in the storage is to be checked.
     * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    WebStorageService.prototype.has = /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    function (key) {
        return this.storage.getItem(key) !== null;
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    WebStorageService.prototype.remove = /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    function (key) {
        this.storage.removeItem(key);
    };
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     */
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    WebStorageService.prototype.clear = /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    function () {
        this.storage.clear();
    };
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @param   key Identifier of the entry whose value is to be retrieved.
     * @returns     The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    WebStorageService.prototype.getItem = /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    function (key) {
        /** @type {?} */
        var value = this.storage.getItem(key);
        return value !== null ? value : undefined;
    };
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @param key   Identifier of the entry for which the value is to be stored.
     * @param value The value that is to be stored.
     */
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    WebStorageService.prototype.setItem = /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    function (key, value) {
        return this.storage.setItem(key, value);
    };
    return WebStorageService;
}(BaseStorageService));
/**
 * Checks whether the specified (web) storage is available and functional. This might not be the case for older browsers. However even
 * certain browsers that do support the web storage API can, under some circumstances, have non functional storage objects. For example,
 * Safari is known to have `localStorage` and `sessionStorage` throw exceptions in private mode.
 *
 * @param {?} storage Storage object which is to be tested for availability.
 * @return {?} `true` if the specified storage can be used, `false` if not.
 */
function isStorageAvailable(storage) {
    // Check if storage is available.
    if (!storage) {
        return false;
    }
    // Check if the storage can actually be accessed.
    try {
        /** @type {?} */
        var now = Date.now();
        /** @type {?} */
        var testItemKey = "storage-test-entry-" + now;
        /** @type {?} */
        var testItemValue = "storage-test-value-" + now;
        storage.setItem(testItemKey, testItemValue);
        /** @type {?} */
        var retrievedItemValue = storage.getItem(testItemKey);
        storage.removeItem(testItemKey);
        return retrievedItemValue === testItemValue;
    }
    catch (error) {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function sessionStorageFactory() {
    try {
        if ((/** @type {?} */ (typeof sessionStorage)) !== 'undefined' && isStorageAvailable(sessionStorage)) {
            return new WebStorageService(sessionStorage);
        }
    }
    catch (_a) { }
    return new InMemoryStorageService();
}
/**
 * Injection token for the session storage service.
 * @type {?}
 */
var SESSION_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SESSION_STORAGE', { providedIn: 'root', factory: sessionStorageFactory });
/**
 * @return {?}
 */
function localStorageFactory() {
    try {
        if ((/** @type {?} */ (typeof localStorage)) !== 'undefined' && isStorageAvailable(localStorage)) {
            return new WebStorageService(localStorage);
        }
    }
    catch (_a) { }
    return new InMemoryStorageService();
}
/**
 * Injection token for the local storage service.
 * @type {?}
 */
var LOCAL_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LOCAL_STORAGE', { providedIn: 'root', factory: localStorageFactory });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated You no longer need to import the `StorageServiceModule`, since the `SESSION_STORAGE` and `LOCAL_STORAGE` injection tokens are
 * now 'self providing' in the root injector.
 */
var StorageServiceModule = /** @class */ (function () {
    function StorageServiceModule() {
    }
    StorageServiceModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"] }
    ];
    return StorageServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-webstorage-service.js.map

/***/ }),

/***/ "./src/app/shared/web-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/web-storage.service.ts ***!
  \***********************************************/
/*! exports provided: WebStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageService", function() { return WebStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");



var WIZARD_FORM_KEY = 'wizard-form-data';
var WIZARD_STEP_KEY = 'wizard-step-data';
var WebStorageService = /** @class */ (function () {
    function WebStorageService(storage) {
        this.storage = storage;
    }
    WebStorageService.prototype.saveQuestionToStorage = function (formId, questionId, questionValue) {
        var _a;
        // Get all saved form data from storage or set as an empty object
        var allForms = this.storage.get(WIZARD_FORM_KEY) || {};
        // Add form data to object
        allForms[formId] = Object.assign(allForms[formId] || {}, (_a = {}, _a[questionId] = questionValue, _a));
        // Save data to storage
        this.storage.set(WIZARD_FORM_KEY, allForms);
    };
    WebStorageService.prototype.saveFormToStorage = function (formId, formValue) {
        var allForms = this.storage.get(WIZARD_FORM_KEY) || {};
        allForms[formId] = Object.assign(allForms[formId] || {}, formValue);
        this.storage.set(WIZARD_FORM_KEY, allForms);
    };
    WebStorageService.prototype.getAllForms = function () {
        var allForms = this.storage.get(WIZARD_FORM_KEY) || {};
        return allForms;
    };
    WebStorageService.prototype.getSingleForm = function (formId) {
        var allForms = this.storage.get(WIZARD_FORM_KEY) || {};
        return allForms[formId] || null;
    };
    WebStorageService.prototype.getSingleQuestion = function (formId, questionId) {
        var allForms = this.storage.get(WIZARD_FORM_KEY) || {};
        var value = (allForms[formId] || {})[questionId];
        return value || null;
    };
    WebStorageService.prototype.saveStepToStorage = function (stepNumber) {
        this.storage.set(WIZARD_STEP_KEY, stepNumber);
    };
    WebStorageService.prototype.getStepNumber = function () {
        return this.storage.get(WIZARD_STEP_KEY);
    };
    WebStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], WebStorageService);
    return WebStorageService;
}());



/***/ }),

/***/ "./src/app/wizard/address-verification/address-verification.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/wizard/address-verification/address-verification.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <h4>This is not a recognized Chandler address</h4>\n  <p class=\"mt-3\">Below are the closest matches to the address you have entered. Please select the correct address from this list.</p>\n  <div class=\"list-group mt-3\" *ngIf=\"results.length\">\n    <button\n      type=\"button\"\n      class=\"list-group-item list-group-item-action\"\n      *ngFor=\"let result of results\"\n      (click)=\"handleAddressSelection(result)\">\n      <div>\n        <span>{{result.address1}}</span>\n        <span *ngIf=\"result.address2.length\"> {{result.address2}}</span>\n      </div>\n      <div>\n        <span>{{result.city}}</span>\n        <span> {{result.state}}</span>\n        <span> {{result.zip}}</span>\n      </div>\n    </button>\n  </div>\n  <button\n    type=\"button\"\n    class=\"btn btn-secondary mt-3\"\n    (click)=\"bsModalRef.hide()\">\n    I would like to re-enter my address\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/wizard/address-verification/address-verification.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/wizard/address-verification/address-verification.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddressVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressVerificationComponent", function() { return AddressVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var AddressVerificationComponent = /** @class */ (function () {
    function AddressVerificationComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.selectedAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.results = [];
    }
    AddressVerificationComponent.prototype.ngOnInit = function () {
    };
    AddressVerificationComponent.prototype.handleAddressSelection = function (address) {
        this.selectedAddress.emit(address);
        this.bsModalRef.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddressVerificationComponent.prototype, "selectedAddress", void 0);
    AddressVerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-address-verification',
            template: __webpack_require__(/*! ./address-verification.component.html */ "./src/app/wizard/address-verification/address-verification.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], AddressVerificationComponent);
    return AddressVerificationComponent;
}());



/***/ }),

/***/ "./src/app/wizard/configuration/configuration.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/app/wizard/configuration/configuration.constants.ts ***!
  \*****************************************************************/
/*! exports provided: step1Configuration, step2Configuration, step3Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step1Configuration", function() { return step1Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step2Configuration", function() { return step2Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step3Configuration", function() { return step3Configuration; });
var step1Configuration = {
    "id": "BUSINESS_REGISTRATION",
    "type": "fixedGroup",
    "heading": "Do you already have a business registration with the city of Chandler?",
    "subheading": "Select \"yes\" or \"no\" then click continue.",
    "questions": [
        {
            "id": "ALREADY_REGISTERED",
            "controlType": "radio",
            "options": [
                {
                    "id": "isRegistered",
                    "value": "Yes",
                    "label": "Yes, I already have business registration with the City of Chandler"
                },
                {
                    "id": "isNotRegistered",
                    "value": "No",
                    "label": "No, I do not have a business registration with the City of Chandler"
                }
            ],
            "validation": {
                "required": true
            },
            "dependencies": [
                "APPLICANT_BASIC_A",
                "APPLICANT_BASIC_B",
                "ENTITY_INFO_A",
                "ENTITY_INFO_B",
                "ENTITY_INFO_C",
                "ENTITY_INFO_D",
                "ENTITY_INFO_E",
                "OWNER_INFO_A",
                "OWNER_INFO_B",
                "LOCATION_INFO_A",
                "LOCATION_INFO_B",
                "LOCATION_INFO_C",
                "LOCATION_INFO_D",
                "LOCATION_INFO_E",
                "LOCATION_INFO_F"
            ]
        }
    ]
};
var step2Configuration = {
    "id": "BUSINESS_ADDRESS",
    "type": "fixedGroup",
    "heading": "What is your business address?",
    "subheading": "Complete the form and then click continue. <em class=\"text-danger\">* Required fields</em>",
    "questions": [
        {
            "id": "BUSINESS_ADDR1",
            "controlType": "textbox",
            "type": "text",
            "placeholder": "Address",
            "order": 1,
            "validation": {
                "required": true
            }
        },
        {
            "id": "BUSINESS_ADDR2",
            "controlType": "textbox",
            "type": "text",
            "placeholder": "Suite #",
            "order": 2
        },
        {
            "id": "BUSINESS_CITY",
            "controlType": "textbox",
            "type": "text",
            "placeholder": "City",
            "order": 3,
            "columns": 6,
            "validation": {
                "required": true
            }
        },
        {
            "id": "BUSINESS_STATE",
            "controlType": "dropdown",
            "type": "state",
            "placeholder": "State",
            "columns": 3,
            "order": 4,
            "validation": {
                "required": true
            }
        },
        {
            "id": "BUSINESS_ZIP",
            "controlType": "textbox",
            "type": "text",
            "placeholder": "Zip",
            "columns": 3,
            "order": 5,
            "validation": {
                "required": true
            }
        }
    ]
};
var step3Configuration = {
    "id": "NOT_IN_CHANDLER",
    "type": "fixedGroup",
    "heading": "It looks like your address is not within the City limits and you may not need a business registration.",
    "subheading": "Are any of the following true in regard to your business?",
    "questions": [
        {
            "id": "NONPROFIT_SOLICITOR",
            "controlType": "checkbox",
            "value": false,
            "label": "Are you a non-profit solicitor?",
            "customStyle": "switch",
            "validation": {
                "required": true
            },
        },
        {
            "id": "SPECIAL_EVENT_LIQUOR",
            "controlType": "checkbox",
            "value": false,
            "label": "Are you operating a special event serving liquor?",
            "customStyle": "switch",
            "validation": {
                "required": true
            },
        },
        {
            "id": "PEDDLER",
            "controlType": "checkbox",
            "value": false,
            "label": "Are you a peddler?",
            "customStyle": "switch",
            "validation": {
                "required": true
            },
        },
        {
            "id": "REGISTRATION_PRIVILEDGES",
            "controlType": "checkbox",
            "value": false,
            "label": "Do you still want a license to take advantage of registration privileges?",
            "customStyle": "switch",
            "validation": {
                "required": true
            },
        }
    ]
};


/***/ }),

/***/ "./src/app/wizard/configuration/configuration.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/wizard/configuration/configuration.service.ts ***!
  \***************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
        this.configUrl = './assets/wizard-config.mock-data.json';
    }
    ConfigurationService.prototype.get = function () {
        return this.http.get(this.configUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('get')));
    };
    ConfigurationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // Log error to console
            console.error(error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/wizard/goodbye/goodbye.component.html":
/*!*******************************************************!*\
  !*** ./src/app/wizard/goodbye/goodbye.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-6 mb-9\">\n  <h1>\n    Thank you for visiting!\n  </h1>\n  <p class=\"mt-3\">You do not need a business registration</p>\n  <a class=\"coc-link-arrow-left mt-2\" href=\"https://www.chandleraz.gov/business/tax-and-license\">Return to Tax & License</a>\n</div>\n"

/***/ }),

/***/ "./src/app/wizard/goodbye/goodbye.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/wizard/goodbye/goodbye.component.ts ***!
  \*****************************************************/
/*! exports provided: GoodbyeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodbyeComponent", function() { return GoodbyeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodbyeComponent = /** @class */ (function () {
    function GoodbyeComponent() {
    }
    GoodbyeComponent.prototype.ngOnInit = function () {
    };
    GoodbyeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-goodbye',
            template: __webpack_require__(/*! ./goodbye.component.html */ "./src/app/wizard/goodbye/goodbye.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoodbyeComponent);
    return GoodbyeComponent;
}());



/***/ }),

/***/ "./src/app/wizard/progress-bar/progress-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/wizard/progress-bar/progress-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"coc-wizard-progress-bar\">\n  <div class=\"coc-progress-bar-track\"></div>\n  <div class=\"coc-progress-bar-indicator\" [ngStyle]=\"{'left': progress + '%'}\">\n    <div class=\"coc-progress-bar-percent\">{{progress}}</div>\n    <div class=\"coc-progress-bar-label\">Done</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wizard/progress-bar/progress-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/wizard/progress-bar/progress-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/wizard/progress-bar/progress-bar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/wizard/question/index.ts":
/*!******************************************!*\
  !*** ./src/app/wizard/question/index.ts ***!
  \******************************************/
/*! exports provided: Question, TextboxQuestion, TextareaQuestion, CheckboxQuestion, RadioQuestion, DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _question__WEBPACK_IMPORTED_MODULE_0__["Question"]; });

/* harmony import */ var _question_textbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-textbox */ "./src/app/wizard/question/question-textbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return _question_textbox__WEBPACK_IMPORTED_MODULE_1__["TextboxQuestion"]; });

/* harmony import */ var _question_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-textarea */ "./src/app/wizard/question/question-textarea.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaQuestion", function() { return _question_textarea__WEBPACK_IMPORTED_MODULE_2__["TextareaQuestion"]; });

/* harmony import */ var _question_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-checkbox */ "./src/app/wizard/question/question-checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxQuestion", function() { return _question_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxQuestion"]; });

/* harmony import */ var _question_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-radio */ "./src/app/wizard/question/question-radio.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioQuestion", function() { return _question_radio__WEBPACK_IMPORTED_MODULE_4__["RadioQuestion"]; });

/* harmony import */ var _question_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-dropdown */ "./src/app/wizard/question/question-dropdown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return _question_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownQuestion"]; });









/***/ }),

/***/ "./src/app/wizard/question/question-checkbox.ts":
/*!******************************************************!*\
  !*** ./src/app/wizard/question/question-checkbox.ts ***!
  \******************************************************/
/*! exports provided: CheckboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxQuestion", function() { return CheckboxQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");


var CheckboxQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxQuestion, _super);
    function CheckboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.customStyle = options['customStyle'] || '';
        return _this;
    }
    return CheckboxQuestion;
}(_question__WEBPACK_IMPORTED_MODULE_1__["Question"]));



/***/ }),

/***/ "./src/app/wizard/question/question-dropdown.ts":
/*!******************************************************!*\
  !*** ./src/app/wizard/question/question-dropdown.ts ***!
  \******************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");
/* harmony import */ var _question_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question.constants */ "./src/app/wizard/question/question.constants.ts");



var DropdownQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.type = options['type'] || '';
        _this.placeholder = options['placeholder'] || '';
        switch (_this.type) {
            case 'state':
                _this.options = _question_constants__WEBPACK_IMPORTED_MODULE_2__["usStateList"];
                break;
            default:
                _this.options = options['options'] || [];
        }
        return _this;
    }
    return DropdownQuestion;
}(_question__WEBPACK_IMPORTED_MODULE_1__["Question"]));



/***/ }),

/***/ "./src/app/wizard/question/question-radio.ts":
/*!***************************************************!*\
  !*** ./src/app/wizard/question/question-radio.ts ***!
  \***************************************************/
/*! exports provided: RadioQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioQuestion", function() { return RadioQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");


var RadioQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadioQuestion, _super);
    function RadioQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'radio';
        _this.options = [];
        _this.customStyle = options['customStyle'] || '';
        _this.options = options['options'] || [];
        return _this;
    }
    return RadioQuestion;
}(_question__WEBPACK_IMPORTED_MODULE_1__["Question"]));



/***/ }),

/***/ "./src/app/wizard/question/question-textarea.ts":
/*!******************************************************!*\
  !*** ./src/app/wizard/question/question-textarea.ts ***!
  \******************************************************/
/*! exports provided: TextareaQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaQuestion", function() { return TextareaQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");


var TextareaQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaQuestion, _super);
    function TextareaQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textarea';
        _this.rows = options['rows'] || 2;
        _this.placeholder = options['placeholder'] || '';
        return _this;
    }
    return TextareaQuestion;
}(_question__WEBPACK_IMPORTED_MODULE_1__["Question"]));



/***/ }),

/***/ "./src/app/wizard/question/question-textbox.ts":
/*!*****************************************************!*\
  !*** ./src/app/wizard/question/question-textbox.ts ***!
  \*****************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");


var TextboxQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        _this.placeholder = options['placeholder'] || '';
        return _this;
    }
    return TextboxQuestion;
}(_question__WEBPACK_IMPORTED_MODULE_1__["Question"]));



/***/ }),

/***/ "./src/app/wizard/question/question.component.html":
/*!*********************************************************!*\
  !*** ./src/app/wizard/question/question.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [formGroup]=\"form\" [ngSwitch]=\"question.controlType\">\n  <div class=\"form-group\"\n    [class.coc-required]=\"question.validation.required\"\n    [ngClass]=\"{\n      'custom-control mt-1' : question.controlType === 'checkbox',\n      'custom-switch coc-custom-control-right' : question.controlType === 'checkbox' && question.customStyle === 'switch',\n      'custom-checkbox' : question.controlType === 'checkbox' && question.customStyle !== 'switch',\n      'coc-custom-radio-group' : question.controlType === 'radio'\n    }\">\n\n    <ng-container *ngSwitchCase=\"'textbox'\">\n      <label\n        *ngIf=\"question.label !== ''\"\n        [attr.for]=\"question.id\">\n        {{question.label}}\n      </label>\n      <ng-container [ngSwitch]=\"question.type\">\n        <ng-container *ngSwitchCase=\"'tel'\">\n          <input\n            cocNumbersOnly\n            type=\"text\"\n            [id]=\"question.id\"\n            [formControlName]=\"question.id\"\n            [placeholder]=\"question.placeholder\"\n            (blur)=\"saveToWebStorage()\"\n            class=\"form-control\"\n            [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'date'\">\n          <input\n            bsDatepicker\n            type=\"text\"\n            [id]=\"question.id\"\n            [formControlName]=\"question.id\"\n            [placeholder]=\"question.placeholder\"\n            (blur)=\"saveToWebStorage()\"\n            class=\"form-control\"\n            [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n          <input\n            [type]=\"question.type\"\n            [id]=\"question.id\"\n            [formControlName]=\"question.id\"\n            [placeholder]=\"question.placeholder\"\n            (blur)=\"saveToWebStorage()\"\n            class=\"form-control\"\n            [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n        </ng-container>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'textarea'\">\n      <label\n        *ngIf=\"question.label !== ''\"\n        [attr.for]=\"question.id\">\n        {{question.label}}\n      </label>\n      <textarea\n        [id]=\"question.id\"\n        [formControlName]=\"question.id\"\n        [placeholder]=\"question.placeholder\"\n        [rows]=\"question.rows\"\n        (blur)=\"saveToWebStorage()\"\n        class=\"form-control\"\n        [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n      </textarea>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'checkbox'\">\n      <input\n        type=\"checkbox\"\n        [id]=\"question.id\"\n        [formControlName]=\"question.id\"\n        (blur)=\"saveToWebStorage()\"\n        class=\"custom-control-input\"\n        [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n      <label\n        *ngIf=\"question.label !== ''\"\n        class=\"custom-control-label\"\n        [attr.for]=\"question.id\">\n        {{question.label}}\n      </label>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'radio'\">\n      <label *ngIf=\"question.label !== ''\">{{question.label}}</label>\n      <div\n        *ngFor=\"let option of question.options\"\n        class=\"custom-control\"\n        [ngClass]=\"{\n          'custom-checkbox' : question.customStyle === 'checkbox',\n          'custom-radio' : question.customStyle !== 'checkbox'\n        }\"\n        [class.coc-required]=\"question.validation.required\">\n        <input\n          type=\"radio\"\n          [id]=\"option.id\"\n          [value]=\"option.value\"\n          [formControlName]=\"question.id\"\n          (blur)=\"saveToWebStorage()\"\n          class=\"custom-control-input\"\n          [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n        <label\n          *ngIf=\"option.label !== ''\"\n          class=\"custom-control-label\"\n          [attr.for]=\"option.id\">\n          {{option.label}}\n        </label>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'dropdown'\">\n      <label\n        *ngIf=\"question.label !== ''\"\n        [attr.for]=\"question.id\">\n        {{question.label}}\n      </label>\n      <select\n        class=\"custom-select\"\n        [id]=\"question.id\"\n        [formControlName]=\"question.id\"\n        [attr.multiple]=\"question.multiple\"\n        (blur)=\"saveToWebStorage()\"\n        [value]=\"question.placeholder\"\n        [class.is-invalid]=\"control.invalid && (control.dirty || control.touched)\">\n        <option\n          *ngIf=\"question.placeholder !== ''\"\n          selected\n          hidden>\n          {{question.placeholder}}\n        </option>\n        <option\n          *ngFor=\"let option of question.options\"\n          [value]=\"option.value\">\n          {{option.label}}\n        </option>\n      </select>\n    </ng-container>\n\n    <div class=\"invalid-feedback\">\n      <span *ngIf=\"control.errors?.required\">This field is required.</span>\n      <span *ngIf=\"control.errors?.email\">Please enter a valid email.</span>\n      <span *ngIf=\"question.controlType === 'textbox' && question.type === 'tel'\">\n        <span *ngIf=\"control.errors?.maxlength || control.errors?.minlength\">\n          Phone numbers should be 10 digits.\n        </span>\n      </span>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wizard/question/question.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/wizard/question/question.component.ts ***!
  \*******************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/question.ts");
/* harmony import */ var src_app_shared_web_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/web-storage.service */ "./src/app/shared/web-storage.service.ts");





var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(webStorageService) {
        this.webStorageService = webStorageService;
    }
    QuestionComponent.prototype.saveToWebStorage = function () {
        this.webStorageService.saveFormToStorage(this.formId, this.form.value);
    };
    Object.defineProperty(QuestionComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.question.id].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionComponent.prototype, "control", {
        get: function () {
            return this.form.get(this.question.id);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _question__WEBPACK_IMPORTED_MODULE_3__["Question"])
    ], QuestionComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], QuestionComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuestionComponent.prototype, "formId", void 0);
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/wizard/question/question.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_web_storage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/wizard/question/question.constants.ts":
/*!*******************************************************!*\
  !*** ./src/app/wizard/question/question.constants.ts ***!
  \*******************************************************/
/*! exports provided: usStateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usStateList", function() { return usStateList; });
var usStateList = [
    {
        "label": "Alabama",
        "value": "AL"
    },
    {
        "label": "Alaska",
        "value": "AK"
    },
    {
        "label": "American Samoa",
        "value": "AS"
    },
    {
        "label": "Arizona",
        "value": "AZ"
    },
    {
        "label": "Arkansas",
        "value": "AR"
    },
    {
        "label": "California",
        "value": "CA"
    },
    {
        "label": "Colorado",
        "value": "CO"
    },
    {
        "label": "Connecticut",
        "value": "CT"
    },
    {
        "label": "Delaware",
        "value": "DE"
    },
    {
        "label": "District Of Columbia",
        "value": "DC"
    },
    {
        "label": "Federated States Of Micronesia",
        "value": "FM"
    },
    {
        "label": "Florida",
        "value": "FL"
    },
    {
        "label": "Georgia",
        "value": "GA"
    },
    {
        "label": "Guam Gu",
        "value": "GU"
    },
    {
        "label": "Hawaii",
        "value": "HI"
    },
    {
        "label": "Idaho",
        "value": "ID"
    },
    {
        "label": "Illinois",
        "value": "IL"
    },
    {
        "label": "Indiana",
        "value": "IN"
    },
    {
        "label": "Iowa",
        "value": "IA"
    },
    {
        "label": "Kansas",
        "value": "KS"
    },
    {
        "label": "Kentucky",
        "value": "KY"
    },
    {
        "label": "Louisiana",
        "value": "LA"
    },
    {
        "label": "Maine",
        "value": "ME"
    },
    {
        "label": "Marshall Islands",
        "value": "MH"
    },
    {
        "label": "Maryland",
        "value": "MD"
    },
    {
        "label": "Massachusetts",
        "value": "MA"
    },
    {
        "label": "Michigan",
        "value": "MI"
    },
    {
        "label": "Minnesota",
        "value": "MN"
    },
    {
        "label": "Mississippi",
        "value": "MS"
    },
    {
        "label": "Missouri",
        "value": "MO"
    },
    {
        "label": "Montana",
        "value": "MT"
    },
    {
        "label": "Nebraska",
        "value": "NE"
    },
    {
        "label": "Nevada",
        "value": "NV"
    },
    {
        "label": "New Hampshire",
        "value": "NH"
    },
    {
        "label": "New Jersey",
        "value": "NJ"
    },
    {
        "label": "New Mexico",
        "value": "NM"
    },
    {
        "label": "New York",
        "value": "NY"
    },
    {
        "label": "North Carolina",
        "value": "NC"
    },
    {
        "label": "North Dakota",
        "value": "ND"
    },
    {
        "label": "Northern Mariana Islands",
        "value": "MP"
    },
    {
        "label": "Ohio",
        "value": "OH"
    },
    {
        "label": "Oklahoma",
        "value": "OK"
    },
    {
        "label": "Oregon",
        "value": "OR"
    },
    {
        "label": "Palau",
        "value": "PW"
    },
    {
        "label": "Pennsylvania",
        "value": "PA"
    },
    {
        "label": "Puerto Rico",
        "value": "PR"
    },
    {
        "label": "Rhode Island",
        "value": "RI"
    },
    {
        "label": "South Carolina",
        "value": "SC"
    },
    {
        "label": "South Dakota",
        "value": "SD"
    },
    {
        "label": "Tennessee",
        "value": "TN"
    },
    {
        "label": "Texas",
        "value": "TX"
    },
    {
        "label": "Utah",
        "value": "UT"
    },
    {
        "label": "Vermont",
        "value": "VT"
    },
    {
        "label": "Virgin Islands",
        "value": "VI"
    },
    {
        "label": "Virginia",
        "value": "VA"
    },
    {
        "label": "Washington",
        "value": "WA"
    },
    {
        "label": "West Virginia",
        "value": "WV"
    },
    {
        "label": "Wisconsin",
        "value": "WI"
    },
    {
        "label": "Wyoming",
        "value": "WY"
    }
];


/***/ }),

/***/ "./src/app/wizard/question/question.ts":
/*!*********************************************!*\
  !*** ./src/app/wizard/question/question.ts ***!
  \*********************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.id = options.id || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.validation = options.validation || {};
        this.columns = options.columns || 0;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/wizard/step/step.component.html":
/*!*************************************************!*\
  !*** ./src/app/wizard/step/step.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid pt-2 pb-3\">\n  <div class=\"jumbotron-container\">\n    <h1 class=\"h3 text-center\">Business Registration & Renewal</h1>\n    <wizard-progress-bar [progress]=\"80\"></wizard-progress-bar>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 col-sm-10 mt-4\">\n      <h2 class=\"h3 font-weight-normal\" [innerHTML]=\"heading\"></h2>\n      <p class=\"coc-font-size-14\" [innerHTML]=\"subheading\"></p>\n      <form [formGroup]=\"form\" class=\"w-lg-75 mt-3\">\n        <div class=\"form-row\">\n          <wizard-question\n            *ngFor=\"let question of questions\"\n            class=\"col-12\"\n            [ngClass]=\"question.columns === 0 ? '' : 'col-md-' + question.columns\"\n            [question]=\"question\"\n            [form]=\"form\"\n            [formId]=\"formId\">\n          </wizard-question>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 col-sm-10 mt-4 mb-6\">\n      <button type=\"button\" class=\"btn btn-previous\" cdkStepperPrevious>\n        Back\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-next ml-3\"\n        [disabled]=\"form.invalid\"\n        cdkStepperNext>\n        Continue\n      </button>\n      <button\n        *ngIf=\"showSummaryButton\"\n        type=\"button\"\n        class=\"btn btn-next ml-3\"\n        (click)=\"goToSummary()\">\n        Skip to Summary\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wizard/step/step.component.ts":
/*!***********************************************!*\
  !*** ./src/app/wizard/step/step.component.ts ***!
  \***********************************************/
/*! exports provided: StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question */ "./src/app/wizard/question/index.ts");






var StepComponent = /** @class */ (function () {
    function StepComponent() {
        this.skipToSummary = false;
        this.summary = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showSummaryButton = false;
    }
    StepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function () {
            // Update summary button display when form values change
            _this.showSummaryButton = _this.skipToSummary && _this.form.valid;
        });
    };
    StepComponent.prototype.ngOnChanges = function (changes) {
        if (changes.skipToSummary) {
            // Update summary button display when input from parent changes
            this.showSummaryButton = changes.skipToSummary.currentValue && this.form.valid;
        }
    };
    StepComponent.prototype.ngOnDestroy = function () {
        // Subscription clean up
        // See https://stackoverflow.com/a/41177163
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    StepComponent.prototype.goToSummary = function () {
        this.summary.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StepComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StepComponent.prototype, "subheading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], StepComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StepComponent.prototype, "formId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _question__WEBPACK_IMPORTED_MODULE_5__["Question"])
    ], StepComponent.prototype, "questions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StepComponent.prototype, "skipToSummary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StepComponent.prototype, "summary", void 0);
    StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-step',
            template: __webpack_require__(/*! ./step.component.html */ "./src/app/wizard/step/step.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StepComponent);
    return StepComponent;
}());



/***/ }),

/***/ "./src/app/wizard/stepper/stepper.component.html":
/*!*******************************************************!*\
  !*** ./src/app/wizard/stepper/stepper.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.display]=\"selected ? 'block' : 'none'\">\n  <ng-container [ngTemplateOutlet]=\"selected.content\"></ng-container>\n</div>"

/***/ }),

/***/ "./src/app/wizard/stepper/stepper.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/wizard/stepper/stepper.component.ts ***!
  \*****************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");



var StepperComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StepperComponent, _super);
    function StepperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepperComponent_1 = StepperComponent;
    var StepperComponent_1;
    StepperComponent = StepperComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/wizard/stepper/stepper.component.html"),
            providers: [{
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"],
                    useExisting: StepperComponent_1
                }]
        })
    ], StepperComponent);
    return StepperComponent;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"]));



/***/ }),

/***/ "./src/app/wizard/summary-item/summary-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/wizard/summary-item/summary-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"coc-wizard-summary-item\">\n  <div class=\"row\">\n    <div class=\"col col-md-4 py-1\">\n      {{config.heading}}\n    </div>\n    <div class=\"col-auto order-md-3\">\n      <button\n        type=\"button\"\n        class=\"coc-summary-item-edit-button btn p-1\"\n        (click)=\"goToStep(config.stepNumber)\">\n        <i class=\"fal fa-pencil-alt\"></i>\n        Edit\n      </button>\n    </div>\n    <div class=\"col-12 col-md\">\n      <div class=\"row\">\n        <ng-container *ngFor=\"let question of config.formQuestions\">\n          <div\n            *ngIf=\"config.formGroup.value[question.id] !== '' && config.formGroup.value[question.id] !== null && config.formGroup.value[question.id] !== undefined\"\n            class=\"col-12 py-1\"\n            [ngClass]=\"question.columns === 0 ? '' : 'col-md-' + question.columns\">\n            <div class=\"coc-font-size-14\">\n              <span *ngIf=\"question.label !== ''\">{{question.label}}</span>\n              <span *ngIf=\"question.placeholder !== ''\">{{question.placeholder}}</span>\n            </div>\n            {{config.formGroup.value[question.id]}}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wizard/summary-item/summary-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/wizard/summary-item/summary-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SummaryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryItemComponent", function() { return SummaryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SummaryItemComponent = /** @class */ (function () {
    function SummaryItemComponent() {
        this.stepId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SummaryItemComponent.prototype.goToStep = function (step) {
        this.stepId.emit(step);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SummaryItemComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SummaryItemComponent.prototype, "stepId", void 0);
    SummaryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wizard-summary-item',
            template: __webpack_require__(/*! ./summary-item.component.html */ "./src/app/wizard/summary-item/summary-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SummaryItemComponent);
    return SummaryItemComponent;
}());



/***/ }),

/***/ "./src/app/wizard/wizard-helpers.ts":
/*!******************************************!*\
  !*** ./src/app/wizard/wizard-helpers.ts ***!
  \******************************************/
/*! exports provided: toFormQuestion, toFormGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFormQuestion", function() { return toFormQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFormGroup", function() { return toFormGroup; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question */ "./src/app/wizard/question/index.ts");


function toFormQuestion(questions) {
    var group = [];
    questions.forEach(function (question) {
        switch (question.controlType) {
            case 'textbox':
                group.push(new _question__WEBPACK_IMPORTED_MODULE_1__["TextboxQuestion"]({
                    id: question.id,
                    value: question.value,
                    label: question.label,
                    placeholder: question.placeholder,
                    order: question.order,
                    type: question.type,
                    validation: question.validation,
                    columns: question.columns
                }));
                break;
            case 'textarea':
                group.push(new _question__WEBPACK_IMPORTED_MODULE_1__["TextareaQuestion"]({
                    id: question.id,
                    value: question.value,
                    label: question.label,
                    placeholder: question.placeholder,
                    order: question.order,
                    rows: question.rows,
                    validation: question.validation,
                    columns: question.columns
                }));
                break;
            case 'checkbox':
                group.push(new _question__WEBPACK_IMPORTED_MODULE_1__["CheckboxQuestion"]({
                    id: question.id,
                    value: question.value,
                    label: question.label,
                    placeholder: question.placeholder,
                    order: question.order,
                    customStyle: question.customStyle,
                    validation: question.validation,
                    columns: question.columns
                }));
                break;
            case 'radio':
                group.push(new _question__WEBPACK_IMPORTED_MODULE_1__["RadioQuestion"]({
                    id: question.id,
                    value: question.value,
                    label: question.label,
                    order: question.order,
                    customStyle: question.customStyle,
                    options: question.options,
                    validation: question.validation,
                    columns: question.columns
                }));
                break;
            case 'dropdown':
                group.push(new _question__WEBPACK_IMPORTED_MODULE_1__["DropdownQuestion"]({
                    id: question.id,
                    value: question.value,
                    label: question.label,
                    type: question.type,
                    placeholder: question.placeholder,
                    order: question.order,
                    options: question.options,
                    validation: question.validation,
                    columns: question.columns
                }));
                break;
        }
    });
    return group.sort(function (a, b) { return a.order - b.order; });
}
function toFormGroup(questions) {
    var group = {};
    questions.forEach(function (question) {
        var validationObj = question.validation;
        var validators = [];
        // Build array of validators to pass in the new form control
        // Check to see if validation object from config is empty
        if (Object.keys(validationObj).length !== 0 && validationObj.constructor === Object) {
            // Loop through validation object for each question
            // and push angular validator into the array
            Object.keys(validationObj).forEach(function (key) {
                switch (key) {
                    case 'required':
                        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
                        break;
                    case 'email':
                        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email);
                        break;
                    case 'maxLength':
                        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(validationObj[key]));
                        break;
                    case 'minLength':
                        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(validationObj[key]));
                        break;
                }
            });
        }
        group[question.id] = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](question.value, validators);
    });
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](group);
}


/***/ }),

/***/ "./src/app/wizard/wizard-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/wizard/wizard-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WizardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardRoutingModule", function() { return WizardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard.component */ "./src/app/wizard/wizard.component.ts");
/* harmony import */ var _goodbye_goodbye_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goodbye/goodbye.component */ "./src/app/wizard/goodbye/goodbye.component.ts");





var routes = [
    {
        path: '',
        component: _wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"]
    },
    {
        path: 'goodbye',
        component: _goodbye_goodbye_component__WEBPACK_IMPORTED_MODULE_4__["GoodbyeComponent"]
    }
];
var WizardRoutingModule = /** @class */ (function () {
    function WizardRoutingModule() {
    }
    WizardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WizardRoutingModule);
    return WizardRoutingModule;
}());



/***/ }),

/***/ "./src/app/wizard/wizard.component.html":
/*!**********************************************!*\
  !*** ./src/app/wizard/wizard.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wizard-stepper\n  [selectedIndex]=\"stepperIndex\"\n  (selectionChange)=\"handleStepChange($event)\">\n\n  <cdk-step [stepControl]=\"step1Config.formGroup\">\n    <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"jumbotron-container\">\n        <h1>Business Registration & Renewal</h1>\n        <hr class=\"my-2\">\n        <p><strong>Welcome to the Chandler business registration and renewal portal.</strong> This portal will allow you to register or renew your business registration with the City of Chandler. This easy-to-use portal will ask you a series of questions to walk you through.</p>\n        <p class=\"coc-font-size-22\"><em>Simply answer the first question below to get started.</em></p>\n      </div>\n    </div>\n      \n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 mt-1\">\n          <a class=\"coc-link-small coc-link-arrow-left\" href=\"https://www.chandleraz.gov/business/tax-and-license\">Return to Tax & License</a>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4\">\n          <h2 class=\"h3 font-weight-normal\" [innerHTML]=\"step1Config.heading\"></h2>\n          <p class=\"coc-font-size-14\" [innerHTML]=\"step1Config.subheading\"></p>\n          <form [formGroup]=\"step1Config.formGroup\" class=\"mt-3\">\n            <div class=\"form-row\">\n              <wizard-question\n                *ngFor=\"let question of step1Config.formQuestions\"\n                class=\"col-12\"\n                [ngClass]=\"question.columns === 0 ? '' : 'col-md-' + question.columns\"\n                [question]=\"question\"\n                [form]=\"step1Config.formGroup\"\n                [formId]=\"step1Config.id\">\n              </wizard-question>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4 mb-6\">\n          <button type=\"button\" class=\"btn btn-next\" [disabled]=\"step1Config.formGroup.invalid\" cdkStepperNext>\n            Continue\n          </button>\n        </div>\n      </div>\n    </div>\n  </cdk-step>\n\n  <cdk-step [stepControl]=\"step2Config.formGroup\">\n    <div class=\"jumbotron jumbotron-fluid pt-2 pb-3\">\n      <div class=\"jumbotron-container\">\n        <h1 class=\"h3 text-center\">Business Registration & Renewal</h1>\n        <wizard-progress-bar [progress]=\"10\"></wizard-progress-bar>\n      </div>\n    </div>\n      \n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4\">\n          <h3 class=\"h3 font-weight-normal\" [innerHTML]=\"step2Config.heading\"></h3>\n          <p class=\"coc-font-size-14\" [innerHTML]=\"step2Config.subheading\"></p>\n          <form [formGroup]=\"step2Config.formGroup\" class=\"w-lg-75 mt-3\">\n            <div class=\"form-row\">\n              <wizard-question\n                *ngFor=\"let question of step2Config.formQuestions\"\n                class=\"col-12\"\n                [ngClass]=\"question.columns === 0 ? '' : 'col-md-' + question.columns\"\n                [question]=\"question\"\n                [form]=\"step2Config.formGroup\"\n                [formId]=\"step2Config.id\">\n              </wizard-question>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4 mb-6\">\n          <button type=\"button\" class=\"btn btn-previous\" cdkStepperPrevious>\n            Back\n          </button>\n          <button type=\"button\" class=\"btn btn-next ml-3\" [disabled]=\"step2Config.formGroup.invalid\" (click)=\"handleStep2ContinueClick()\">\n            Continue\n          </button>\n        </div>\n      </div>\n    </div>\n  </cdk-step>\n  \n  <cdk-step *ngIf=\"!isInChandler\" [stepControl]=\"step3Config.formGroup\">\n    <div class=\"jumbotron jumbotron-fluid pt-2 pb-3\">\n      <div class=\"jumbotron-container\">\n        <h1 class=\"h3 text-center\">Business Registration & Renewal</h1>\n        <wizard-progress-bar [progress]=\"10\"></wizard-progress-bar>\n      </div>\n    </div>\n      \n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4\">\n          <h2 class=\"h3 font-weight-normal\" [innerHTML]=\"step3Config.heading\"></h2>\n          <p class=\"coc-font-size-14\" [innerHTML]=\"step3Config.subheading\"></p>\n          <form [formGroup]=\"step3Config.formGroup\" class=\"mt-3\">\n            <div class=\"form-row\">\n              <wizard-question\n                *ngFor=\"let question of step3Config.formQuestions\"\n                class=\"col-12\"\n                [ngClass]=\"question.columns === 0 ? '' : 'col-md-' + question.columns\"\n                [question]=\"question\"\n                [form]=\"step3Config.formGroup\"\n                [formId]=\"step3Config.id\">\n              </wizard-question>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4 mb-6\">\n          <button type=\"button\" class=\"btn btn-previous\" cdkStepperPrevious>\n            Back\n          </button>\n          <button type=\"button\" class=\"btn btn-next ml-3\" [disabled]=\"step3Config.formGroup.invalid\" (click)=\"handleStep3ContinueClick()\">\n            Continue\n          </button>\n        </div>\n      </div>\n    </div>\n  </cdk-step>\n\n  <ng-container *ngFor=\"let config of primaryStepsConfig\">\n    <cdk-step [stepControl]=\"config.formGroup\">\n      <wizard-step\n        [heading]=\"config.heading\"\n        [subheading]=\"config.subheading\"\n        [form]=\"config.formGroup\"\n        [formId]=\"config.id\"\n        [questions]=\"config.formQuestions\"\n        (summary)=\"gotToSummary($event)\">\n      </wizard-step>\n    </cdk-step>\n  </ng-container>\n\n  <ng-container *ngFor=\"let config of secondaryStepsConfig\">\n    <cdk-step *ngIf=\"config.shouldBeDisplayed\" [stepControl]=\"config.formGroup\">\n      <wizard-step\n        [heading]=\"config.heading\"\n        [subheading]=\"config.subheading\"\n        [form]=\"config.formGroup\"\n        [formId]=\"config.id\"\n        [questions]=\"config.formQuestions\"\n        [skipToSummary]=\"skipToSummary\"\n        (summary)=\"gotToSummary($event)\">\n      </wizard-step>\n    </cdk-step>\n  </ng-container>\n  \n  <cdk-step>\n    <div class=\"jumbotron jumbotron-fluid pt-2 pb-3\">\n      <div class=\"jumbotron-container\">\n        <h1 class=\"h3 text-center\">Business Registration & Renewal</h1>\n        <wizard-progress-bar [progress]=\"99\"></wizard-progress-bar>\n      </div>\n    </div>\n      \n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4\">\n          <h3 class=\"h3 font-weight-normal\">Summary</h3>\n          <p class=\"coc-font-size-14\">Review of your answers. If everything is accurate, click submit.</p>\n          <div class=\"striped mt-3\">\n            <wizard-summary-item\n              class=\"d-block\"\n              [config]=\"step2Config\"\n              (stepId)=\"goToStep($event)\">\n            </wizard-summary-item>\n            <ng-container *ngIf=\"!isInChandler\">\n              <wizard-summary-item\n                class=\"d-block\"\n                [config]=\"step3Config\"\n                (stepId)=\"goToStep($event)\">\n              </wizard-summary-item>\n            </ng-container>\n            <ng-container *ngFor=\"let config of primaryStepsConfig\">\n              <wizard-summary-item\n                class=\"d-block\"\n                [config]=\"config\"\n                (stepId)=\"goToStep($event)\">\n              </wizard-summary-item>\n            </ng-container>\n            <ng-container *ngFor=\"let config of secondaryStepsConfig\">\n              <wizard-summary-item\n                *ngIf=\"config.shouldBeDisplayed\"\n                class=\"d-block\"\n                [config]=\"config\"\n                (stepId)=\"goToStep($event)\">\n              </wizard-summary-item>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4 mb-6\">\n          <button type=\"button\" class=\"btn btn-previous\" cdkStepperPrevious>\n            Back\n          </button>\n          <button type=\"submit\" class=\"btn btn-next ml-3\" (click)=\"handleWizardSubmit()\">\n            Submit\n          </button>\n        </div>\n      </div>\n    </div>\n  </cdk-step>\n\n  <cdk-step>\n    <div class=\"jumbotron jumbotron-fluid pt-2 pb-3\">\n      <div class=\"jumbotron-container\">\n        <h1 class=\"h3 text-center\">Business Registration & Renewal</h1>\n        <wizard-progress-bar [progress]=\"100\"></wizard-progress-bar>\n      </div>\n    </div>\n      \n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-10 mt-4\">\n          <h3 class=\"h3 font-weight-normal\">Thank you for registering</h3>\n          <p class=\"w-lg-75 mb-8\">Tempor dolor nam eget, eget in class tempor, ut imperdiet, pede tristique massa, duis donec. Sed nec tempus ac nisl, ultricies a lorem sem scelerisque justo, orci ipsum a euismod felis, pretium hendrerit, blandit est vehicula tempus volutpat. Molestie magna, a consequat justo in aliquam, ut massa facilisi. In consectetuer, eleifend faucibus est blandit, vel dolor mollis eu nonummy, euismod amet odio maecenas tristique. Nascetur urna taciti sit in aenean accusamus, auctor.</p>\n        </div>\n      </div>\n    </div>\n  </cdk-step>\n  \n</wizard-stepper>"

/***/ }),

/***/ "./src/app/wizard/wizard.component.ts":
/*!********************************************!*\
  !*** ./src/app/wizard/wizard.component.ts ***!
  \********************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/configuration.service */ "./src/app/wizard/configuration/configuration.service.ts");
/* harmony import */ var _address_verification_address_verification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address-verification/address-verification.component */ "./src/app/wizard/address-verification/address-verification.component.ts");
/* harmony import */ var _wizard_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wizard-helpers */ "./src/app/wizard/wizard-helpers.ts");
/* harmony import */ var _shared_web_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/web-storage.service */ "./src/app/shared/web-storage.service.ts");
/* harmony import */ var _configuration_configuration_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuration/configuration.constants */ "./src/app/wizard/configuration/configuration.constants.ts");











var WizardComponent = /** @class */ (function () {
    function WizardComponent(router, modalService, ConfigurationService, webStorageService) {
        this.router = router;
        this.modalService = modalService;
        this.ConfigurationService = ConfigurationService;
        this.webStorageService = webStorageService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.wizardConfig = {};
        this.step1Config = _configuration_configuration_constants__WEBPACK_IMPORTED_MODULE_10__["step1Configuration"];
        this.step2Config = _configuration_configuration_constants__WEBPACK_IMPORTED_MODULE_10__["step2Configuration"];
        this.step3Config = _configuration_configuration_constants__WEBPACK_IMPORTED_MODULE_10__["step3Configuration"];
        this.allStepsConfig = [];
        this.primaryStepsConfig = [];
        this.secondaryStepsConfig = [];
        this.savedInWebStorage = {};
        this.stepperIndex = 0;
        this.isInChandler = false;
        this.step3Continue = false;
        // This will be used to keep track of how many
        // total steps there are since steps can be
        // added or removed dynamically based on form answers
        // This value is a zero based index
        this.stepCount = 0;
        // Set an offset for the first few steps that are fixed
        this.stepCountOffset = 3;
        // Variable to control the display of the jump to summary button
        this.skipToSummary = false;
    }
    WizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get any saved form data from web storage
        this.savedInWebStorage = this.webStorageService.getAllForms();
        // Get configuration file
        this.ConfigurationService.get()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (config) {
            _this.wizardConfig = config;
        }, function (error) {
            console.error(error);
        }, function () {
            // Load all config data into local variable
            _this.allStepsConfig = _this.wizardConfig.questionGroups;
            // Convert array of questions in json config to Angular form groups
            _this.allStepsConfig.forEach(function (config) {
                // Add saved form values from web storage to config object
                _this.restoreValuesFromWebStorage(config);
                // Store converted questions in group object
                // to pass to each step and question component
                config.formQuestions = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormQuestion"])(config.questions);
                // Store questions as form group inside group object also
                config.formGroup = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormGroup"])(config.formQuestions);
                // Set flag on secondary question groups for display status
                // Init value as false, questions will be added as needed
                // based on primary question group answers
                if (config.type === 'secondary') {
                    config.shouldBeDisplayed = false;
                }
            });
            // Create new array for primary questions from config
            _this.primaryStepsConfig = _this.allStepsConfig.filter(function (config) {
                return config.type === 'primary';
            });
            _this.primaryStepsConfig.sort(function (a, b) { return a.order - b.order; });
            // Create new array for secondary questions from config
            _this.secondaryStepsConfig = _this.allStepsConfig.filter(function (config) {
                return config.type === 'secondary';
            });
            _this.secondaryStepsConfig.sort(function (a, b) { return a.order - b.order; });
            // Set 'should be displayed' based on saved/restored
            // form values
            _this.updateStepsToBeDisplayed();
            // Set flag based on value changes
            _this.primaryStepsConfig.forEach(function (config) {
                config.formGroup.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngUnsubscribe))
                    .subscribe(function () {
                    _this.updateStepsToBeDisplayed();
                });
            });
            // Subscribe to "Same As" checkbox changes
            // and call function to copy form fields
            _this.secondaryStepsConfig.forEach(function (config) {
                config.questions.forEach(function (question) {
                    if (question.sameAs) {
                        config.formGroup.get(question.id).valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngUnsubscribe))
                            .subscribe(function (value) {
                            if (value) {
                                _this.handleSameAsCheckbox(config, question.sameAs);
                            }
                        });
                    }
                });
            });
        });
        this.restoreValuesFromWebStorage(this.step1Config);
        this.step1Config.stepNumber = 0;
        this.step1Config.formQuestions = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormQuestion"])(this.step1Config.questions);
        this.step1Config.formGroup = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormGroup"])(this.step1Config.formQuestions);
        this.restoreValuesFromWebStorage(this.step2Config);
        this.step2Config.stepNumber = 1;
        this.step2Config.formQuestions = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormQuestion"])(this.step2Config.questions);
        this.step2Config.formGroup = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormGroup"])(this.step2Config.formQuestions);
        // Simulating some validation to trigger address verification modal
        this.setIsInChandler(this.step2Config.formGroup.get('BUSINESS_CITY').value);
        this.step2Config.formGroup.get('BUSINESS_CITY').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (value) {
            _this.setIsInChandler(value);
        });
        this.restoreValuesFromWebStorage(this.step3Config);
        this.step3Config.stepNumber = 2;
        this.step3Config.formQuestions = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormQuestion"])(this.step3Config.questions);
        this.step3Config.formGroup = Object(_wizard_helpers__WEBPACK_IMPORTED_MODULE_8__["toFormGroup"])(this.step3Config.formQuestions);
        // Validation to determine whether user should continue after step 3
        // If any checkbox was checked/true, continue
        // Set variable based on saved/restored question values
        this.step3Continue = Object.values(this.step3Config.formGroup.value).some(Boolean);
        // Set variable when value changes
        this.step3Config.formGroup.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (value) {
            _this.step3Continue = Object.values(value).some(Boolean);
        });
        // Set current step if there is saved data from web storage
        setTimeout(function () {
            _this.stepperIndex = _this.webStorageService.getStepNumber() || 0;
        });
    };
    WizardComponent.prototype.ngOnDestroy = function () {
        // Subscription clean up
        // See https://stackoverflow.com/a/41177163
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    WizardComponent.prototype.updateStepsToBeDisplayed = function () {
        var _this = this;
        var primaryQuestionsChecked = [];
        var secondaryQuestionsToShow = [];
        // Whenever steps are updated we need to re-index 
        // all of the step numbers
        this.stepCount = this.stepCountOffset;
        // Always include all dependent questions for
        // business registration which is step 1
        this.step1Config.questions.forEach(function (question) {
            question.dependencies.forEach(function (dep) {
                secondaryQuestionsToShow.push(dep);
            });
        });
        // Loop through all primary questions
        this.primaryStepsConfig.forEach(function (config) {
            // Assign a step number to each step config
            config.stepNumber = _this.stepCount;
            // Increment the step count
            _this.stepCount++;
            // Get all primary question values
            Object.keys(config.formGroup.controls).forEach(function (key) {
                // Only store values that are checked/yes/true
                if (config.formGroup.controls[key].value) {
                    primaryQuestionsChecked.push(key);
                }
            });
            // Get all dependencies of primaryQuestionsChecked
            // Loop through all questions
            config.questions.forEach(function (question) {
                // Check to see if this question is checked/yes/true
                if (primaryQuestionsChecked.includes(question.id)) {
                    question.dependencies.forEach(function (dep) {
                        // Check to see if it's already included
                        // If not, add it to the array
                        if (!secondaryQuestionsToShow.includes(dep)) {
                            secondaryQuestionsToShow.push(dep);
                        }
                    });
                }
            });
        });
        // Now loop through all secondary questions
        this.secondaryStepsConfig.forEach(function (config) {
            // Set everything to not display first
            config.shouldBeDisplayed = false;
            // Now set questions to be displayed
            // if our new array includes them
            if (secondaryQuestionsToShow.includes(config.id)) {
                // Assign a step number to each step config
                config.stepNumber = _this.stepCount;
                // Increment the step count
                _this.stepCount++;
                config.shouldBeDisplayed = true;
            }
            else {
                config.stepNumber = null;
            }
        });
    };
    WizardComponent.prototype.setIsInChandler = function (city) {
        if (city !== null && city !== undefined) {
            this.isInChandler = city.toLowerCase() === 'chandler';
            this.step3Config.shouldBeDisplayed = !this.isInChandler;
            this.stepCountOffset = this.isInChandler ? 2 : 3;
        }
    };
    WizardComponent.prototype.handleStep2ContinueClick = function () {
        if (this.isInChandler) {
            this.openAddressVerificationModal();
        }
        else {
            this.stepperIndex = 2;
        }
    };
    WizardComponent.prototype.openAddressVerificationModal = function () {
        var _this = this;
        // TODO: Replace temporary data with data from geocoder API
        var initialState = {
            'results': [
                { 'address1': '175 S Arizona Av', 'address2': 'Suite 2', 'city': 'Chandler', 'state': 'AZ', 'zip': '85225' },
                { 'address1': '175 S Arizona Pl', 'address2': '', 'city': 'Chandler', 'state': 'AZ', 'zip': '85225' },
                { 'address1': '175 N Arizona Av', 'address2': '', 'city': 'Chandler', 'state': 'AZ', 'zip': '85225' },
                { 'address1': '175 . Arizona Av', 'address2': 'Suite 4', 'city': 'Chandler', 'state': 'AZ', 'zip': '85225' }
            ]
        };
        this.bsModalRef = this.modalService.show(_address_verification_address_verification_component__WEBPACK_IMPORTED_MODULE_7__["AddressVerificationComponent"], {
            initialState: initialState,
            class: 'modal-dialog-centered modal-lg',
            backdrop: 'static',
            keyboard: false
        });
        this.bsModalRef.content.selectedAddress
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (address) {
            // Update form values from suggested address in modal
            _this.step2Config.formGroup.patchValue({
                BUSINESS_ADDR1: address.address1,
                BUSINESS_ADDR2: address.address2,
                BUSINESS_CITY: address.city,
                BUSINESS_STATE: address.state,
                BUSINESS_ZIP: address.zip
            });
            // Delay step change so modal closes first
            setTimeout(function () {
                _this.stepperIndex++;
            }, 500);
        });
    };
    WizardComponent.prototype.handleStep3ContinueClick = function () {
        if (this.step3Continue) {
            this.stepperIndex++;
        }
        else {
            this.router.navigate(['/wizard/goodbye']);
        }
    };
    WizardComponent.prototype.handleSameAsCheckbox = function (config, sameAs) {
        // Find the config group that matches the ID of the Same As question
        var sameAsConfig = this.secondaryStepsConfig.find(function (config) {
            return config.id === sameAs.stepName;
        });
        sameAs.mapping.forEach(function (question) {
            var _a;
            config.formGroup.patchValue((_a = {},
                _a[question.to] = sameAsConfig.formGroup.value[question.from],
                _a));
        });
    };
    WizardComponent.prototype.handleStepChange = function (event) {
        // Synchronize local step index with stepper component index
        this.stepperIndex = event.selectedIndex;
        // Save step number to web storage
        this.webStorageService.saveStepToStorage(this.stepperIndex);
        // If current step is the summary, show button to allow
        // users to jump back after editing a step
        if (this.stepperIndex === this.stepCount) {
            this.skipToSummary = true;
        }
        // TODO: replace this scroll method with a global service
        var element = document.querySelector('body');
        setTimeout(function () {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 50);
    };
    WizardComponent.prototype.goToStep = function (stepNumber) {
        this.stepperIndex = stepNumber;
    };
    WizardComponent.prototype.gotToSummary = function () {
        this.stepperIndex = this.stepCount;
    };
    WizardComponent.prototype.handleWizardSubmit = function () {
        // TODO: form submit
        this.stepperIndex++;
    };
    WizardComponent.prototype.restoreValuesFromWebStorage = function (config) {
        var _this = this;
        if (this.savedInWebStorage.hasOwnProperty(config.id)) {
            config.questions.forEach(function (question) {
                if (_this.savedInWebStorage[config.id].hasOwnProperty(question.id)) {
                    question.value = _this.savedInWebStorage[config.id][question.id];
                }
            });
        }
    };
    WizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'coc-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/wizard/wizard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"],
            _shared_web_storage_service__WEBPACK_IMPORTED_MODULE_9__["WebStorageService"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/wizard/wizard.module.ts":
/*!*****************************************!*\
  !*** ./src/app/wizard/wizard.module.ts ***!
  \*****************************************/
/*! exports provided: WizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardModule", function() { return WizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _wizard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard-routing.module */ "./src/app/wizard/wizard-routing.module.ts");
/* harmony import */ var _wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard.component */ "./src/app/wizard/wizard.component.ts");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/wizard/progress-bar/progress-bar.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/wizard/stepper/stepper.component.ts");
/* harmony import */ var _address_verification_address_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address-verification/address-verification.component */ "./src/app/wizard/address-verification/address-verification.component.ts");
/* harmony import */ var _goodbye_goodbye_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goodbye/goodbye.component */ "./src/app/wizard/goodbye/goodbye.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question/question.component */ "./src/app/wizard/question/question.component.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step/step.component */ "./src/app/wizard/step/step.component.ts");
/* harmony import */ var _summary_item_summary_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary-item/summary-item.component */ "./src/app/wizard/summary-item/summary-item.component.ts");













var WizardModule = /** @class */ (function () {
    function WizardModule() {
    }
    WizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _wizard_component__WEBPACK_IMPORTED_MODULE_5__["WizardComponent"],
                _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"],
                _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"],
                _address_verification_address_verification_component__WEBPACK_IMPORTED_MODULE_8__["AddressVerificationComponent"],
                _goodbye_goodbye_component__WEBPACK_IMPORTED_MODULE_9__["GoodbyeComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_10__["QuestionComponent"],
                _step_step_component__WEBPACK_IMPORTED_MODULE_11__["StepComponent"],
                _summary_item_summary_item_component__WEBPACK_IMPORTED_MODULE_12__["SummaryItemComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperModule"],
                _wizard_routing_module__WEBPACK_IMPORTED_MODULE_4__["WizardRoutingModule"]
            ],
            entryComponents: [
                _wizard_component__WEBPACK_IMPORTED_MODULE_5__["WizardComponent"],
                _address_verification_address_verification_component__WEBPACK_IMPORTED_MODULE_8__["AddressVerificationComponent"]
            ]
        })
    ], WizardModule);
    return WizardModule;
}());



/***/ })

}]);
//# sourceMappingURL=wizard-wizard-module.js.map