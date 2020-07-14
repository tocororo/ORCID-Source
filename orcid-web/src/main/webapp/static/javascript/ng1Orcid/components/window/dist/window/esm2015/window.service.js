/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, PLATFORM_ID, } from '@angular/core';
/* Create a new injection token for injecting the window into a component. */
/** @type {?} */
export const WINDOW = new InjectionToken('WindowToken')
/* Define abstract class for obtaining reference to the global window object. */
;
/* Define abstract class for obtaining reference to the global window object. */
/**
 * @abstract
 */
export class WindowRef {
    /**
     * @return {?}
     */
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
export class BrowserWindowRef extends WindowRef {
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
export function windowFactory(browserWindowRef, platformId) {
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
export const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L29yY2lkLmFuZ3VsYXIud2luZG93LyIsInNvdXJjZXMiOlsid2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQ25ELE9BQU8sRUFHTCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFBOzs7QUFHdEIsTUFBTSxPQUFPLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFFdkQsZ0ZBQWdGOzs7Ozs7QUFDaEYsTUFBTSxPQUFnQixTQUFTOzs7O0lBQzdCLElBQUksWUFBWTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0NBQ0Y7O0FBR0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7SUFDN0M7UUFDRSxLQUFLLEVBQUUsQ0FBQTtJQUNULENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7Q0FDRjs7Ozs7OztBQUdELE1BQU0sVUFBVSxhQUFhLENBQzNCLGdCQUFrQyxFQUNsQyxVQUFrQjtJQUVsQixJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxDQUFBO0tBQ3JDO0lBQ0QsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFBO0FBQ3JCLENBQUM7OztNQUdLLHFCQUFxQixHQUFrQjtJQUMzQyxPQUFPLEVBQUUsU0FBUztJQUNsQixRQUFRLEVBQUUsZ0JBQWdCO0NBQzNCO0FBRUQsZ0hBQWdIOzs7O01BQzFHLGNBQWMsR0FBb0I7SUFDdEMsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUUsYUFBYTtJQUN6QixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0NBQy9CO0FBRUQsbUNBQW1DOzs7O0FBQ25DLE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQge1xyXG4gIENsYXNzUHJvdmlkZXIsXHJcbiAgRmFjdG9yeVByb3ZpZGVyLFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIFBMQVRGT1JNX0lELFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG4vKiBDcmVhdGUgYSBuZXcgaW5qZWN0aW9uIHRva2VuIGZvciBpbmplY3RpbmcgdGhlIHdpbmRvdyBpbnRvIGEgY29tcG9uZW50LiAqL1xyXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3dUb2tlbicpXHJcblxyXG4vKiBEZWZpbmUgYWJzdHJhY3QgY2xhc3MgZm9yIG9idGFpbmluZyByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0LiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2luZG93UmVmIHtcclxuICBnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB8IE9iamVjdCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKVxyXG4gIH1cclxufVxyXG5cclxuLyogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LiAqL1xyXG5leHBvcnQgY2xhc3MgQnJvd3NlcldpbmRvd1JlZiBleHRlbmRzIFdpbmRvd1JlZiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB8IE9iamVjdCB7XHJcbiAgICByZXR1cm4gd2luZG93XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDcmVhdGUgYW4gZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2luZG93RmFjdG9yeShcclxuICBicm93c2VyV2luZG93UmVmOiBCcm93c2VyV2luZG93UmVmLFxyXG4gIHBsYXRmb3JtSWQ6IE9iamVjdFxyXG4pOiBXaW5kb3cgfCBPYmplY3Qge1xyXG4gIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXJXaW5kb3dSZWYubmF0aXZlV2luZG93XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgT2JqZWN0KClcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgaW5qZWN0YWJsZSBwcm92aWRlciBmb3IgdGhlIFdpbmRvd1JlZiB0b2tlbiB0aGF0IHVzZXMgdGhlIEJyb3dzZXJXaW5kb3dSZWYgY2xhc3MuICovXHJcbmNvbnN0IGJyb3dzZXJXaW5kb3dQcm92aWRlcjogQ2xhc3NQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBXaW5kb3dSZWYsXHJcbiAgdXNlQ2xhc3M6IEJyb3dzZXJXaW5kb3dSZWYsXHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIHRoYXQgdXNlcyB0aGUgd2luZG93RmFjdG9yeSBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIHRoZSBuYXRpdmUgd2luZG93IG9iamVjdC4gKi9cclxuY29uc3Qgd2luZG93UHJvdmlkZXI6IEZhY3RvcnlQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBXSU5ET1csXHJcbiAgdXNlRmFjdG9yeTogd2luZG93RmFjdG9yeSxcclxuICBkZXBzOiBbV2luZG93UmVmLCBQTEFURk9STV9JRF0sXHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhbiBhcnJheSBvZiBwcm92aWRlcnMuICovXHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfUFJPVklERVJTID0gW2Jyb3dzZXJXaW5kb3dQcm92aWRlciwgd2luZG93UHJvdmlkZXJdXHJcbiJdfQ==