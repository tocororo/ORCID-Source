/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Inject, Optional, } from '@angular/core';
import { PlatformInfoService } from '../platform-info/platform-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WINDOW } from '../window';
var IsThisYouComponent = /** @class */ (function () {
    function IsThisYouComponent(_platformInfo, dialogRef, data, window) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.window = window;
        this.titleLabel = 'Could this be you?';
        this.bodyLabel = 
        // tslint:disable-next-line: max-line-length
        'We found some accounts with your name, which means you may have already created an ORCID iD using a different email address. Before creating an account, please confirm that none of these records belong to you. Not sure if any of these are you?';
        this.contactLabel = 'Contact us.';
        this.firstNameLabel = 'First Name';
        this.lastNameLabel = 'Last Name';
        this.affiliationsLabel = 'Affiliations';
        this.dateCreatedLabel = 'Date Created';
        this.viewRecordLabel = 'View Record';
        this.signinLabel = 'I ALREADY HAVE AN ID, GO BACK TO SIGN IN';
        this.continueLabel = 'NONE OF THESE ARE ME, CONTINUE WITH REGISTRATION';
        _platformInfo.get().subscribe((/**
         * @param {?} platformInfo
         * @return {?}
         */
        function (platformInfo) {
            _this.setPlatformClasses(platformInfo);
        }));
    }
    /**
     * @return {?}
     */
    IsThisYouComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} platformInfo
     * @return {?}
     */
    IsThisYouComponent.prototype.setPlatformClasses = /**
     * @param {?} platformInfo
     * @return {?}
     */
    function (platformInfo) {
        this.ie = platformInfo.ie;
        this.edge = platformInfo.edge;
        this.tabletOrHandset = platformInfo.tabletOrHandset;
        this.handset = platformInfo.handset;
        this.tablet = platformInfo.tablet;
        this.desktop = platformInfo.desktop;
        this.columns8 = platformInfo.columns8;
        this.columns12 = platformInfo.columns12;
        this.columns4 = platformInfo.columns4;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    IsThisYouComponent.prototype.goto = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.window.location.href = url;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IsThisYouComponent.prototype.gotoNewTab = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.window.open('/' + id);
    };
    /**
     * @return {?}
     */
    IsThisYouComponent.prototype.confirmRegistration = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(true);
    };
    IsThisYouComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-is-this-you',
                    template: "<div class=\"container\" *ngIf=\"data && data.duplicateRecords\">\r\n  <h1 class=\"mat-display-1 modal-title\">{{ data.titleLabel || titleLabel }}</h1>\r\n  <div class=\"non-fixed\">\r\n    <p class=\"mat-body-1\">\r\n      {{ data.bodyLabel || bodyLabel }}\r\n      <a href=\"https://support.orcid.org/hc/en-us/requests/new\">\r\n        {{ data.contactLabel || contactLabel }}\r\n      </a>\r\n    </p>\r\n\r\n    <table style=\"width:100%\" class=\"mat-subheading-2\">\r\n      <tr>\r\n        <th>{{ data.firstNameLabel || firstNameLabel }}</th>\r\n        <th>{{ data.lastNameLabel || lastNameLabel }}</th>\r\n        <th class=\"affiliation-colum\">\r\n          {{ data.affiliationsLabel || affiliationsLabel }}\r\n        </th>\r\n        <th>{{ data.dateCreatedLabel || dateCreatedLabel }}</th>\r\n        <th class=\"buttonsColumn\">\r\n          {{ data.viewRecordLabel || viewRecordLabel }}\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor=\"let record of data.duplicateRecords\">\r\n        <td>{{ record.givenNames }}</td>\r\n        <td>{{ record.familyNames }}</td>\r\n        <td>{{ record.institution }}</td>\r\n        <td>{{ record.createdDate }}</td>\r\n        <td>\r\n          <button mat-button color=\"primary\" (click)=\"gotoNewTab(record.orcid)\">\r\n            {{ data.viewRecordLabel || viewRecordLabel }}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"fixed\">\r\n    <button\r\n      mat-button\r\n      color=\"primary\"\r\n      class=\"mat-button-wrap-text mat-button-font-spaced\"\r\n      (click)=\"goto('sign-in')\"\r\n    >\r\n      {{ data.signinLabel || signinLabel }}\r\n    </button>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      class=\"mat-button-wrap-text mat-button-font-spaced\"\r\n      (click)=\"confirmRegistration()\"\r\n    >\r\n      {{ data.continueLabel || continueLabel }}\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                    styles: [".modal-title{color:#2e7f9f}", ".non-fixed{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow-y:auto;-webkit-box-flex:1;flex-grow:1;margin-bottom:30px}.ie :host .non-fixed{display:block}.fixed{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;flex-shrink:0}.modal-title{margin:0}table{text-align:left}table th{white-space:nowrap}table .affiliation-colum{width:280px}td,th{border-bottom:1px solid #ddd;vertical-align:baseline;padding-right:10px}.container{max-height:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}a:hover{text-decoration:underline}.buttonsColumn{padding-left:16px;width:1px}:host.columns-4 .fixed,:host.columns-8 .fixed{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"]
                }] }
    ];
    /** @nocollapse */
    IsThisYouComponent.ctorParameters = function () { return [
        { type: PlatformInfoService },
        { type: MatDialogRef, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    IsThisYouComponent.propDecorators = {
        edge: [{ type: HostBinding, args: ['class.edge',] }],
        ie: [{ type: HostBinding, args: ['class.ie',] }],
        tabletOrHandset: [{ type: HostBinding, args: ['class.tabletOrHandset',] }],
        handset: [{ type: HostBinding, args: ['class.handset',] }],
        tablet: [{ type: HostBinding, args: ['class.tablet',] }],
        desktop: [{ type: HostBinding, args: ['class.desktop',] }],
        columns8: [{ type: HostBinding, args: ['class.columns-8',] }],
        columns12: [{ type: HostBinding, args: ['class.columns-12',] }],
        columns4: [{ type: HostBinding, args: ['class.columns-4',] }]
    };
    return IsThisYouComponent;
}());
export { IsThisYouComponent };
if (false) {
    /** @type {?} */
    IsThisYouComponent.prototype.titleLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.bodyLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.contactLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.firstNameLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.lastNameLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.affiliationsLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.dateCreatedLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.viewRecordLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.signinLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.continueLabel;
    /** @type {?} */
    IsThisYouComponent.prototype.edge;
    /** @type {?} */
    IsThisYouComponent.prototype.ie;
    /** @type {?} */
    IsThisYouComponent.prototype.tabletOrHandset;
    /** @type {?} */
    IsThisYouComponent.prototype.handset;
    /** @type {?} */
    IsThisYouComponent.prototype.tablet;
    /** @type {?} */
    IsThisYouComponent.prototype.desktop;
    /** @type {?} */
    IsThisYouComponent.prototype.columns8;
    /** @type {?} */
    IsThisYouComponent.prototype.columns12;
    /** @type {?} */
    IsThisYouComponent.prototype.columns4;
    /** @type {?} */
    IsThisYouComponent.prototype.dialogRef;
    /** @type {?} */
    IsThisYouComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    IsThisYouComponent.prototype.window;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdGhpcy15b3UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC9vcmNpZC5hbmd1bGFyLmlzLXRoaXMteW91LyIsInNvdXJjZXMiOlsiYXBwL2Nkay9pcy10aGlzLXlvdS9pcy10aGlzLXlvdS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUE7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRWxDO0lBK0JFLDRCQUNFLGFBQWtDLEVBQ2YsU0FBMkMsRUFDbEIsSUFBSSxFQUN4QixNQUFjO1FBSnhDLGlCQVNDO1FBUG9CLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQUE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTFCeEMsZUFBVSxHQUFHLG9CQUFvQixDQUFBO1FBQ2pDLGNBQVM7UUFDUCw0Q0FBNEM7UUFDNUMscVBBQXFQLENBQUE7UUFDdlAsaUJBQVksR0FBRyxhQUFhLENBQUE7UUFDNUIsbUJBQWMsR0FBRyxZQUFZLENBQUE7UUFDN0Isa0JBQWEsR0FBRyxXQUFXLENBQUE7UUFDM0Isc0JBQWlCLEdBQUcsY0FBYyxDQUFBO1FBQ2xDLHFCQUFnQixHQUFHLGNBQWMsQ0FBQTtRQUNqQyxvQkFBZSxHQUFHLGFBQWEsQ0FBQTtRQUMvQixnQkFBVyxHQUFHLDBDQUEwQyxDQUFBO1FBQ3hELGtCQUFhLEdBQUcsa0RBQWtELENBQUE7UUFpQmhFLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxZQUFZO1lBQ3hDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2QyxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUViLCtDQUFrQjs7OztJQUFsQixVQUFtQixZQUFZO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUE7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFBO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQTtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUE7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQTtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUE7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFBO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsaUNBQUk7Ozs7SUFBSixVQUFLLEdBQUc7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFBO0lBQ2pDLENBQUM7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLEVBQUU7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7OztJQUVELGdEQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzN0RBQTJDOztpQkFLNUM7Ozs7Z0JBWFEsbUJBQW1CO2dCQUNuQixZQUFZLHVCQW9DaEIsUUFBUTtnREFDUixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Z0JBQ0gsTUFBTSx1QkFBckMsTUFBTSxTQUFDLE1BQU07Ozt1QkFiZixXQUFXLFNBQUMsWUFBWTtxQkFDeEIsV0FBVyxTQUFDLFVBQVU7a0NBQ3RCLFdBQVcsU0FBQyx1QkFBdUI7MEJBQ25DLFdBQVcsU0FBQyxlQUFlO3lCQUMzQixXQUFXLFNBQUMsY0FBYzswQkFDMUIsV0FBVyxTQUFDLGVBQWU7MkJBQzNCLFdBQVcsU0FBQyxpQkFBaUI7NEJBQzdCLFdBQVcsU0FBQyxrQkFBa0I7MkJBQzlCLFdBQVcsU0FBQyxpQkFBaUI7O0lBcUNoQyx5QkFBQztDQUFBLEFBbkVELElBbUVDO1NBM0RZLGtCQUFrQjs7O0lBQzdCLHdDQUFpQzs7SUFDakMsdUNBRXVQOztJQUN2UCwwQ0FBNEI7O0lBQzVCLDRDQUE2Qjs7SUFDN0IsMkNBQTJCOztJQUMzQiwrQ0FBa0M7O0lBQ2xDLDhDQUFpQzs7SUFDakMsNkNBQStCOztJQUMvQix5Q0FBd0Q7O0lBQ3hELDJDQUFrRTs7SUFFbEUsa0NBQStCOztJQUMvQixnQ0FBMkI7O0lBQzNCLDZDQUFxRDs7SUFDckQscUNBQXFDOztJQUNyQyxvQ0FBbUM7O0lBQ25DLHFDQUFxQzs7SUFDckMsc0NBQXdDOztJQUN4Qyx1Q0FBMEM7O0lBQzFDLHNDQUF3Qzs7SUFHdEMsdUNBQThEOztJQUM5RCxrQ0FBZ0Q7Ozs7O0lBQ2hELG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgUGxhdGZvcm1JbmZvU2VydmljZSB9IGZyb20gJy4uL3BsYXRmb3JtLWluZm8vcGxhdGZvcm0taW5mby5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZydcclxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vd2luZG93J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaXMtdGhpcy15b3UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pcy10aGlzLXlvdS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXHJcbiAgICAnLi9pcy10aGlzLXlvdS5jb21wb25lbnQuc2Nzcy50aGVtZS5zY3NzJyxcclxuICAgICcuL2lzLXRoaXMteW91LmNvbXBvbmVudC5zY3NzJyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNUaGlzWW91Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0aXRsZUxhYmVsID0gJ0NvdWxkIHRoaXMgYmUgeW91PydcclxuICBib2R5TGFiZWwgPVxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICdXZSBmb3VuZCBzb21lIGFjY291bnRzIHdpdGggeW91ciBuYW1lLCB3aGljaCBtZWFucyB5b3UgbWF5IGhhdmUgYWxyZWFkeSBjcmVhdGVkIGFuIE9SQ0lEIGlEIHVzaW5nIGEgZGlmZmVyZW50IGVtYWlsIGFkZHJlc3MuIEJlZm9yZSBjcmVhdGluZyBhbiBhY2NvdW50LCBwbGVhc2UgY29uZmlybSB0aGF0IG5vbmUgb2YgdGhlc2UgcmVjb3JkcyBiZWxvbmcgdG8geW91LiBOb3Qgc3VyZSBpZiBhbnkgb2YgdGhlc2UgYXJlIHlvdT8nXHJcbiAgY29udGFjdExhYmVsID0gJ0NvbnRhY3QgdXMuJ1xyXG4gIGZpcnN0TmFtZUxhYmVsID0gJ0ZpcnN0IE5hbWUnXHJcbiAgbGFzdE5hbWVMYWJlbCA9ICdMYXN0IE5hbWUnXHJcbiAgYWZmaWxpYXRpb25zTGFiZWwgPSAnQWZmaWxpYXRpb25zJ1xyXG4gIGRhdGVDcmVhdGVkTGFiZWwgPSAnRGF0ZSBDcmVhdGVkJ1xyXG4gIHZpZXdSZWNvcmRMYWJlbCA9ICdWaWV3IFJlY29yZCdcclxuICBzaWduaW5MYWJlbCA9ICdJIEFMUkVBRFkgSEFWRSBBTiBJRCwgR08gQkFDSyBUTyBTSUdOIElOJ1xyXG4gIGNvbnRpbnVlTGFiZWwgPSAnTk9ORSBPRiBUSEVTRSBBUkUgTUUsIENPTlRJTlVFIFdJVEggUkVHSVNUUkFUSU9OJ1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVkZ2UnKSBlZGdlXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZScpIGllXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZXRPckhhbmRzZXQnKSB0YWJsZXRPckhhbmRzZXRcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhbmRzZXQnKSBoYW5kc2V0XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZXQnKSB0YWJsZXRcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRlc2t0b3AnKSBkZXNrdG9wXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2x1bW5zLTgnKSBjb2x1bW5zOFxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sdW1ucy0xMicpIGNvbHVtbnMxMlxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sdW1ucy00JykgY29sdW1uczRcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9wbGF0Zm9ybUluZm86IFBsYXRmb3JtSW5mb1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SXNUaGlzWW91Q29tcG9uZW50PixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSxcclxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvdzogV2luZG93XHJcbiAgKSB7XHJcbiAgICBfcGxhdGZvcm1JbmZvLmdldCgpLnN1YnNjcmliZShwbGF0Zm9ybUluZm8gPT4ge1xyXG4gICAgICB0aGlzLnNldFBsYXRmb3JtQ2xhc3NlcyhwbGF0Zm9ybUluZm8pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBzZXRQbGF0Zm9ybUNsYXNzZXMocGxhdGZvcm1JbmZvKSB7XHJcbiAgICB0aGlzLmllID0gcGxhdGZvcm1JbmZvLmllXHJcbiAgICB0aGlzLmVkZ2UgPSBwbGF0Zm9ybUluZm8uZWRnZVxyXG4gICAgdGhpcy50YWJsZXRPckhhbmRzZXQgPSBwbGF0Zm9ybUluZm8udGFibGV0T3JIYW5kc2V0XHJcbiAgICB0aGlzLmhhbmRzZXQgPSBwbGF0Zm9ybUluZm8uaGFuZHNldFxyXG4gICAgdGhpcy50YWJsZXQgPSBwbGF0Zm9ybUluZm8udGFibGV0XHJcbiAgICB0aGlzLmRlc2t0b3AgPSBwbGF0Zm9ybUluZm8uZGVza3RvcFxyXG4gICAgdGhpcy5jb2x1bW5zOCA9IHBsYXRmb3JtSW5mby5jb2x1bW5zOFxyXG4gICAgdGhpcy5jb2x1bW5zMTIgPSBwbGF0Zm9ybUluZm8uY29sdW1uczEyXHJcbiAgICB0aGlzLmNvbHVtbnM0ID0gcGxhdGZvcm1JbmZvLmNvbHVtbnM0XHJcbiAgfVxyXG5cclxuICBnb3RvKHVybCkge1xyXG4gICAgdGhpcy53aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxyXG4gIH1cclxuXHJcbiAgZ290b05ld1RhYihpZCkge1xyXG4gICAgdGhpcy53aW5kb3cub3BlbignLycgKyBpZClcclxuICB9XHJcblxyXG4gIGNvbmZpcm1SZWdpc3RyYXRpb24oKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKVxyXG4gIH1cclxufVxyXG4iXX0=