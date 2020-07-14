(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@bit/orcid.angular.platform-info', ['exports', '@angular/cdk/layout', '@angular/cdk/platform', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.orcid = global.bit.orcid || {}, global.bit.orcid.angular = global.bit.orcid.angular || {}, global.bit.orcid.angular['platform-info'] = {}), global.ng.cdk.layout, global.ng.cdk.platform, global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, layout, platform, core, rxjs, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable-next-line: max-line-length
    /** @type {?} */
    var BROWSERLIST_REGEXP = /((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(12[_\.]2|12[_\.]([3-9]|\d{2,})|12[_\.]4|12[_\.]([5-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})[_\.]\d+|13[_\.]0|13[_\.]([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_\.]\d+)(?:[_\.]\d+)?)|(Edge\/(79|([8-9]\d|\d{3,}))(?:\.\d+)?)|(HeadlessChrome((?:\/79\.\d+\.\d+)?|(?:\/([8-9]\d|\d{3,})\.\d+\.\d+)?))|((Chromium|Chrome)\/(79|([8-9]\d|\d{3,}))\.\d+(?:\.\d+)?)|(Version\/(12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+|13\.0|13\.([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)?.*Safari\/)|(Trident\/7\.0)|(Firefox\/(68|(69|[7-9]\d|\d{3,})|72|(7[3-9]|[8-9]\d|\d{3,}))\.\d+\.\d+)|(Firefox\/(68|(69|[7-9]\d|\d{3,})|72|(7[3-9]|[8-9]\d|\d{3,}))\.\d+(pre|[ab]\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\d|\d{3,}))\.\d+)/;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlatformInfoService = /** @class */ (function () {
        function PlatformInfoService(_breakpointObserver, _platform) {
            var _this = this;
            this._breakpointObserver = _breakpointObserver;
            this._platform = _platform;
            this.platformSubject = new rxjs.BehaviorSubject(null);
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
            this._breakpointObserver.observe([layout.Breakpoints.Handset]).subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (state.matches) {
                    _this.platform.handset = true;
                }
                else {
                    _this.platform.handset = false;
                }
                _this.platformSubject.next(_this.platform);
            }));
            this._breakpointObserver.observe([layout.Breakpoints.Tablet]).subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (state.matches) {
                    _this.platform.tablet = true;
                }
                else {
                    _this.platform.tablet = false;
                }
                _this.platformSubject.next(_this.platform);
            }));
            this._breakpointObserver
                .observe([layout.Breakpoints.Handset, layout.Breakpoints.Tablet])
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (state.matches) {
                    _this.platform.tabletOrHandset = true;
                    _this.platform.desktop = false;
                }
                else {
                    _this.platform.tabletOrHandset = false;
                    _this.platform.desktop = true;
                }
                _this.platformSubject.next(_this.platform);
            }));
            this._breakpointObserver
                .observe(['(min-width: 839.99px)', '(min-width: 599.99px)'])
                .subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                if (state.breakpoints['(min-width: 839.99px)']) {
                    _this.platform.columns8 = false;
                    _this.platform.columns12 = true;
                    _this.platform.columns4 = false;
                }
                else if (state.breakpoints['(min-width: 599.99px)']) {
                    _this.platform.columns8 = true;
                    _this.platform.columns12 = false;
                    _this.platform.columns4 = false;
                }
                else {
                    _this.platform.columns8 = false;
                    _this.platform.columns12 = false;
                    _this.platform.columns4 = true;
                }
                _this.platformSubject.next(_this.platform);
            }));
        }
        /**
         * @return {?}
         */
        PlatformInfoService.prototype.get = /**
         * @return {?}
         */
        function () {
            return this.platformSubject.asObservable();
        };
        PlatformInfoService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PlatformInfoService.ctorParameters = function () { return [
            { type: layout.BreakpointObserver },
            { type: platform.Platform }
        ]; };
        return PlatformInfoService;
    }());
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
    var PlatformInfoModule = /** @class */ (function () {
        function PlatformInfoModule() {
        }
        PlatformInfoModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [common.CommonModule, platform.PlatformModule, layout.LayoutModule],
                        providers: [PlatformInfoService],
                    },] }
        ];
        return PlatformInfoModule;
    }());

    exports.BROWSERLIST_REGEXP = BROWSERLIST_REGEXP;
    exports.PlatformInfoModule = PlatformInfoModule;
    exports.PlatformInfoService = PlatformInfoService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bit-orcid.angular.platform-info.umd.js.map
