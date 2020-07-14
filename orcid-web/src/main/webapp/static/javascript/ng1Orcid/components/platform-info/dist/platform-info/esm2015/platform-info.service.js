/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BROWSERLIST_REGEXP } from './browserlist.regexp';
export class PlatformInfoService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0taW5mby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC9vcmNpZC5hbmd1bGFyLnBsYXRmb3JtLWluZm8vIiwic291cmNlcyI6WyJwbGF0Zm9ybS1pbmZvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFBO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBR3pELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBa0I5QixZQUNVLG1CQUF1QyxFQUN2QyxTQUFtQjtRQURuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFuQjdCLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDLENBQUE7UUFFekQsYUFBUSxHQUFpQjtZQUN2QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsZUFBZSxFQUFFLEtBQUs7WUFDdEIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxLQUFLO1lBQ1gsRUFBRSxFQUFFLEtBQUs7WUFDVCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUE7UUFNQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqRCxJQUFJ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SUFBSSxDQUFBO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTthQUMvQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtnQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzFDLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVNLEdBQUc7UUFDUixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDNUMsQ0FBQzs7O1lBcEZGLFVBQVU7Ozs7WUFQRixrQkFBa0I7WUFDbEIsUUFBUTs7OztJQVFmLDhDQUF5RDs7SUFFekQsdUNBYUM7Ozs7O0lBR0Msa0RBQStDOzs7OztJQUMvQyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCdcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xyXG5pbXBvcnQgeyBQbGF0Zm9ybUluZm8gfSBmcm9tICcuL3BsYXRmb3JtLWluZm8udHlwZSdcclxuaW1wb3J0IHsgQlJPV1NFUkxJU1RfUkVHRVhQIH0gZnJvbSAnLi9icm93c2VybGlzdC5yZWdleHAnXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybUluZm9TZXJ2aWNlIHtcclxuICBwbGF0Zm9ybVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBsYXRmb3JtSW5mbz4obnVsbClcclxuXHJcbiAgcGxhdGZvcm06IFBsYXRmb3JtSW5mbyA9IHtcclxuICAgIHVuc3VwcG9ydGVkQnJvd3NlcjogZmFsc2UsXHJcbiAgICBkZXNrdG9wOiBmYWxzZSxcclxuICAgIHRhYmxldE9ySGFuZHNldDogZmFsc2UsXHJcbiAgICB0YWJsZXQ6IGZhbHNlLFxyXG4gICAgaGFuZHNldDogZmFsc2UsXHJcbiAgICBlZGdlOiBmYWxzZSxcclxuICAgIGllOiBmYWxzZSxcclxuICAgIGZpcmVmb3g6IGZhbHNlLFxyXG4gICAgc2FmYXJ5OiBmYWxzZSxcclxuICAgIGNvbHVtbnM0OiBmYWxzZSxcclxuICAgIGNvbHVtbnM4OiBmYWxzZSxcclxuICAgIGNvbHVtbnMxMjogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2JyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyLFxyXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7XHJcbiAgICBpZiAoIUJST1dTRVJMSVNUX1JFR0VYUC50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgIHRoaXMucGxhdGZvcm0udW5zdXBwb3J0ZWRCcm93c2VyID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGxhdGZvcm0uZmlyZWZveCA9IF9wbGF0Zm9ybS5GSVJFRk9YXHJcbiAgICB0aGlzLnBsYXRmb3JtLnNhZmFyeSA9IF9wbGF0Zm9ybS5TQUZBUklcclxuICAgIHRoaXMucGxhdGZvcm0uaWUgPSBfcGxhdGZvcm0uVFJJREVOVFxyXG4gICAgdGhpcy5wbGF0Zm9ybS5lZGdlID0gX3BsYXRmb3JtLkVER0VcclxuICAgIHRoaXMucGxhdGZvcm1TdWJqZWN0Lm5leHQodGhpcy5wbGF0Zm9ybSlcclxuXHJcbiAgICB0aGlzLl9icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbQnJlYWtwb2ludHMuSGFuZHNldF0pLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybS5oYW5kc2V0ID0gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0uaGFuZHNldCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wbGF0Zm9ybVN1YmplY3QubmV4dCh0aGlzLnBsYXRmb3JtKVxyXG4gICAgfSlcclxuICAgIHRoaXMuX2JyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtCcmVha3BvaW50cy5UYWJsZXRdKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG4gICAgICBpZiAoc3RhdGUubWF0Y2hlcykge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0udGFibGV0ID0gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm0udGFibGV0ID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBsYXRmb3JtU3ViamVjdC5uZXh0KHRoaXMucGxhdGZvcm0pXHJcbiAgICB9KVxyXG4gICAgdGhpcy5fYnJlYWtwb2ludE9ic2VydmVyXHJcbiAgICAgIC5vYnNlcnZlKFtCcmVha3BvaW50cy5IYW5kc2V0LCBCcmVha3BvaW50cy5UYWJsZXRdKVxyXG4gICAgICAuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuICAgICAgICBpZiAoc3RhdGUubWF0Y2hlcykge1xyXG4gICAgICAgICAgdGhpcy5wbGF0Zm9ybS50YWJsZXRPckhhbmRzZXQgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLnBsYXRmb3JtLmRlc2t0b3AgPSBmYWxzZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXRmb3JtLnRhYmxldE9ySGFuZHNldCA9IGZhbHNlXHJcbiAgICAgICAgICB0aGlzLnBsYXRmb3JtLmRlc2t0b3AgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TdWJqZWN0Lm5leHQodGhpcy5wbGF0Zm9ybSlcclxuICAgICAgfSlcclxuXHJcbiAgICB0aGlzLl9icmVha3BvaW50T2JzZXJ2ZXJcclxuICAgICAgLm9ic2VydmUoWycobWluLXdpZHRoOiA4MzkuOTlweCknLCAnKG1pbi13aWR0aDogNTk5Ljk5cHgpJ10pXHJcbiAgICAgIC5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZS5icmVha3BvaW50c1snKG1pbi13aWR0aDogODM5Ljk5cHgpJ10pIHtcclxuICAgICAgICAgIHRoaXMucGxhdGZvcm0uY29sdW1uczggPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5wbGF0Zm9ybS5jb2x1bW5zMTIgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLnBsYXRmb3JtLmNvbHVtbnM0ID0gZmFsc2VcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmJyZWFrcG9pbnRzWycobWluLXdpZHRoOiA1OTkuOTlweCknXSkge1xyXG4gICAgICAgICAgdGhpcy5wbGF0Zm9ybS5jb2x1bW5zOCA9IHRydWVcclxuICAgICAgICAgIHRoaXMucGxhdGZvcm0uY29sdW1uczEyID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMucGxhdGZvcm0uY29sdW1uczQgPSBmYWxzZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXRmb3JtLmNvbHVtbnM4ID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMucGxhdGZvcm0uY29sdW1uczEyID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMucGxhdGZvcm0uY29sdW1uczQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxhdGZvcm1TdWJqZWN0Lm5leHQodGhpcy5wbGF0Zm9ybSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQoKTogT2JzZXJ2YWJsZTxQbGF0Zm9ybUluZm8+IHtcclxuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtU3ViamVjdC5hc09ic2VydmFibGUoKVxyXG4gIH1cclxufVxyXG4iXX0=