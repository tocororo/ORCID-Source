import { Breakpoints, BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: max-line-length
/** @type {?} */
const BROWSERLIST_REGEXP = /((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(12[_\.]2|12[_\.]([3-9]|\d{2,})|12[_\.]4|12[_\.]([5-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})[_\.]\d+|13[_\.]0|13[_\.]([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_\.]\d+)(?:[_\.]\d+)?)|(Edge\/(79|([8-9]\d|\d{3,}))(?:\.\d+)?)|(HeadlessChrome((?:\/79\.\d+\.\d+)?|(?:\/([8-9]\d|\d{3,})\.\d+\.\d+)?))|((Chromium|Chrome)\/(79|([8-9]\d|\d{3,}))\.\d+(?:\.\d+)?)|(Version\/(12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+|13\.0|13\.([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)?.*Safari\/)|(Trident\/7\.0)|(Firefox\/(68|(69|[7-9]\d|\d{3,})|72|(7[3-9]|[8-9]\d|\d{3,}))\.\d+\.\d+)|(Firefox\/(68|(69|[7-9]\d|\d{3,})|72|(7[3-9]|[8-9]\d|\d{3,}))\.\d+(pre|[ab]\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\d|\d{3,}))\.\d+)/;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformInfoService {
    /**
     * @param {?} _breakpointObserver
     * @param {?} _platform
     */
    constructor(_breakpointObserver, _platform) {
        this._breakpointObserver = _breakpointObserver;
        this._platform = _platform;
        this.platformSubject = new BehaviorSubject(null);
        this.platform = {
            unsupportedBrowser: false,
            desktop: false,
            tabletOrHandset: false,
            tablet: false,
            handset: false,
            edge: false,
            ie: false,
            firefox: false,
            safary: false,
            columns4: false,
            columns8: false,
            columns12: false,
        };
        if (!BROWSERLIST_REGEXP.test(navigator.userAgent)) {
            this.platform.unsupportedBrowser = true;
        }
        this.platform.firefox = _platform.FIREFOX;
        this.platform.safary = _platform.SAFARI;
        this.platform.ie = _platform.TRIDENT;
        this.platform.edge = _platform.EDGE;
        this.platformSubject.next(this.platform);
        this._breakpointObserver.observe([Breakpoints.Handset]).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            if (state.matches) {
                this.platform.handset = true;
            }
            else {
                this.platform.handset = false;
            }
            this.platformSubject.next(this.platform);
        }));
        this._breakpointObserver.observe([Breakpoints.Tablet]).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            if (state.matches) {
                this.platform.tablet = true;
            }
            else {
                this.platform.tablet = false;
            }
            this.platformSubject.next(this.platform);
        }));
        this._breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.Tablet])
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            if (state.matches) {
                this.platform.tabletOrHandset = true;
                this.platform.desktop = false;
            }
            else {
                this.platform.tabletOrHandset = false;
                this.platform.desktop = true;
            }
            this.platformSubject.next(this.platform);
        }));
        this._breakpointObserver
            .observe(['(min-width: 839.99px)', '(min-width: 599.99px)'])
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            if (state.breakpoints['(min-width: 839.99px)']) {
                this.platform.columns8 = false;
                this.platform.columns12 = true;
                this.platform.columns4 = false;
            }
            else if (state.breakpoints['(min-width: 599.99px)']) {
                this.platform.columns8 = true;
                this.platform.columns12 = false;
                this.platform.columns4 = false;
            }
            else {
                this.platform.columns8 = false;
                this.platform.columns12 = false;
                this.platform.columns4 = true;
            }
            this.platformSubject.next(this.platform);
        }));
    }
    /**
     * @return {?}
     */
    get() {
        return this.platformSubject.asObservable();
    }
}
PlatformInfoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PlatformInfoService.ctorParameters = () => [
    { type: BreakpointObserver },
    { type: Platform }
];
if (false) {
    /** @type {?} */
    PlatformInfoService.prototype.platformSubject;
    /** @type {?} */
    PlatformInfoService.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    PlatformInfoService.prototype._breakpointObserver;
    /**
     * @type {?}
     * @private
     */
    PlatformInfoService.prototype._platform;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformInfoModule {
}
PlatformInfoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [CommonModule, PlatformModule, LayoutModule],
                providers: [PlatformInfoService],
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

export { BROWSERLIST_REGEXP, PlatformInfoModule, PlatformInfoService };
//# sourceMappingURL=bit-orcid.angular.platform-info.js.map
