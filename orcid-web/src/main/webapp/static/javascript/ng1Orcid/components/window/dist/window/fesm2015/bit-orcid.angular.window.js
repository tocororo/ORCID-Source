import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, PLATFORM_ID, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* Create a new injection token for injecting the window into a component. */
/** @type {?} */
const WINDOW = new InjectionToken('WindowToken')
/* Define abstract class for obtaining reference to the global window object. */
;
/* Define abstract class for obtaining reference to the global window object. */
/**
 * @abstract
 */
class WindowRef {
    /**
     * @return {?}
     */
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    get nativeWindow() {
        return window;
    }
}
/* Create an factory function that returns the native window object. */
/**
 * @param {?} browserWindowRef
 * @param {?} platformId
 * @return {?}
 */
function windowFactory(browserWindowRef, platformId) {
    if (isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
/** @type {?} */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef,
}
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
;
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
/** @type {?} */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, PLATFORM_ID],
}
/* Create an array of providers. */
;
/* Create an array of providers. */
/** @type {?} */
const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowModule {
}
WindowModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                providers: [WINDOW_PROVIDERS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { WINDOW, WINDOW_PROVIDERS, WindowModule, WindowRef, BrowserWindowRef as ɵa, windowFactory as ɵb };
//# sourceMappingURL=bit-orcid.angular.window.js.map
