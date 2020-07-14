(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@bit/orcid.angular.window', ['exports', '@angular/common', '@angular/core'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.orcid = global.bit.orcid || {}, global.bit.orcid.angular = global.bit.orcid.angular || {}, global.bit.orcid.angular.window = {}), global.ng.common, global.ng.core));
}(this, (function (exports, common, core) { 'use strict';

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /* Create a new injection token for injecting the window into a component. */
    /** @type {?} */
    var WINDOW = new core.InjectionToken('WindowToken')
    /* Define abstract class for obtaining reference to the global window object. */
;
    /* Define abstract class for obtaining reference to the global window object. */
    /**
     * @abstract
     */
    var   /* Define abstract class for obtaining reference to the global window object. */
    /**
     * @abstract
     */
    WindowRef = /** @class */ (function () {
        function WindowRef() {
        }
        Object.defineProperty(WindowRef.prototype, "nativeWindow", {
            get: /**
             * @return {?}
             */
            function () {
                throw new Error('Not implemented.');
            },
            enumerable: true,
            configurable: true
        });
        return WindowRef;
    }());
    /* Define class that implements the abstract class and returns the native window object. */
    var   /* Define class that implements the abstract class and returns the native window object. */
    BrowserWindowRef = /** @class */ (function (_super) {
        __extends(BrowserWindowRef, _super);
        function BrowserWindowRef() {
            return _super.call(this) || this;
        }
        Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
            get: /**
             * @return {?}
             */
            function () {
                return window;
            },
            enumerable: true,
            configurable: true
        });
        return BrowserWindowRef;
    }(WindowRef));
    /* Create an factory function that returns the native window object. */
    /**
     * @param {?} browserWindowRef
     * @param {?} platformId
     * @return {?}
     */
    function windowFactory(browserWindowRef, platformId) {
        if (common.isPlatformBrowser(platformId)) {
            return browserWindowRef.nativeWindow;
        }
        return new Object();
    }
    /* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
    /** @type {?} */
    var browserWindowProvider = {
        provide: WindowRef,
        useClass: BrowserWindowRef,
    }
    /* Create an injectable provider that uses the windowFactory function for returning the native window object. */
    ;
    /* Create an injectable provider that uses the windowFactory function for returning the native window object. */
    /** @type {?} */
    var windowProvider = {
        provide: WINDOW,
        useFactory: windowFactory,
        deps: [WindowRef, core.PLATFORM_ID],
    }
    /* Create an array of providers. */
    ;
    /* Create an array of providers. */
    /** @type {?} */
    var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WindowModule = /** @class */ (function () {
        function WindowModule() {
        }
        WindowModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        providers: [WINDOW_PROVIDERS],
                    },] }
        ];
        return WindowModule;
    }());

    exports.WINDOW = WINDOW;
    exports.WINDOW_PROVIDERS = WINDOW_PROVIDERS;
    exports.WindowModule = WindowModule;
    exports.WindowRef = WindowRef;
    exports.ɵa = BrowserWindowRef;
    exports.ɵb = windowFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bit-orcid.angular.window.umd.js.map
