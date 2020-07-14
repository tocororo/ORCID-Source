/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Inject, Optional, } from '@angular/core';
import { PlatformInfoService } from '../platform-info/platform-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WINDOW } from '../window';
export class IsThisYouComponent {
    /**
     * @param {?} _platformInfo
     * @param {?} dialogRef
     * @param {?} data
     * @param {?} window
     */
    constructor(_platformInfo, dialogRef, data, window) {
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
        platformInfo => {
            this.setPlatformClasses(platformInfo);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} platformInfo
     * @return {?}
     */
    setPlatformClasses(platformInfo) {
        this.ie = platformInfo.ie;
        this.edge = platformInfo.edge;
        this.tabletOrHandset = platformInfo.tabletOrHandset;
        this.handset = platformInfo.handset;
        this.tablet = platformInfo.tablet;
        this.desktop = platformInfo.desktop;
        this.columns8 = platformInfo.columns8;
        this.columns12 = platformInfo.columns12;
        this.columns4 = platformInfo.columns4;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    goto(url) {
        this.window.location.href = url;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    gotoNewTab(id) {
        this.window.open('/' + id);
    }
    /**
     * @return {?}
     */
    confirmRegistration() {
        this.dialogRef.close(true);
    }
}
IsThisYouComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-is-this-you',
                template: "<div class=\"container\" *ngIf=\"data && data.duplicateRecords\">\r\n  <h1 class=\"mat-display-1 modal-title\">{{ data.titleLabel || titleLabel }}</h1>\r\n  <div class=\"non-fixed\">\r\n    <p class=\"mat-body-1\">\r\n      {{ data.bodyLabel || bodyLabel }}\r\n      <a href=\"https://support.orcid.org/hc/en-us/requests/new\">\r\n        {{ data.contactLabel || contactLabel }}\r\n      </a>\r\n    </p>\r\n\r\n    <table style=\"width:100%\" class=\"mat-subheading-2\">\r\n      <tr>\r\n        <th>{{ data.firstNameLabel || firstNameLabel }}</th>\r\n        <th>{{ data.lastNameLabel || lastNameLabel }}</th>\r\n        <th class=\"affiliation-colum\">\r\n          {{ data.affiliationsLabel || affiliationsLabel }}\r\n        </th>\r\n        <th>{{ data.dateCreatedLabel || dateCreatedLabel }}</th>\r\n        <th class=\"buttonsColumn\">\r\n          {{ data.viewRecordLabel || viewRecordLabel }}\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor=\"let record of data.duplicateRecords\">\r\n        <td>{{ record.givenNames }}</td>\r\n        <td>{{ record.familyNames }}</td>\r\n        <td>{{ record.institution }}</td>\r\n        <td>{{ record.createdDate }}</td>\r\n        <td>\r\n          <button mat-button color=\"primary\" (click)=\"gotoNewTab(record.orcid)\">\r\n            {{ data.viewRecordLabel || viewRecordLabel }}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"fixed\">\r\n    <button\r\n      mat-button\r\n      color=\"primary\"\r\n      class=\"mat-button-wrap-text mat-button-font-spaced\"\r\n      (click)=\"goto('sign-in')\"\r\n    >\r\n      {{ data.signinLabel || signinLabel }}\r\n    </button>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      class=\"mat-button-wrap-text mat-button-font-spaced\"\r\n      (click)=\"confirmRegistration()\"\r\n    >\r\n      {{ data.continueLabel || continueLabel }}\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                styles: [".modal-title{color:#2e7f9f}", ".non-fixed{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow-y:auto;-webkit-box-flex:1;flex-grow:1;margin-bottom:30px}.ie :host .non-fixed{display:block}.fixed{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;flex-shrink:0}.modal-title{margin:0}table{text-align:left}table th{white-space:nowrap}table .affiliation-colum{width:280px}td,th{border-bottom:1px solid #ddd;vertical-align:baseline;padding-right:10px}.container{max-height:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}a:hover{text-decoration:underline}.buttonsColumn{padding-left:16px;width:1px}:host.columns-4 .fixed,:host.columns-8 .fixed{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"]
            }] }
];
/** @nocollapse */
IsThisYouComponent.ctorParameters = () => [
    { type: PlatformInfoService },
    { type: MatDialogRef, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: Window, decorators: [{ type: Inject, args: [WINDOW,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdGhpcy15b3UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC9vcmNpZC5hbmd1bGFyLmlzLXRoaXMteW91LyIsInNvdXJjZXMiOlsiYXBwL2Nkay9pcy10aGlzLXlvdS9pcy10aGlzLXlvdS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUE7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBVWxDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7SUF1QjdCLFlBQ0UsYUFBa0MsRUFDZixTQUEyQyxFQUNsQixJQUFJLEVBQ3hCLE1BQWM7UUFGbkIsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBQTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBMUJ4QyxlQUFVLEdBQUcsb0JBQW9CLENBQUE7UUFDakMsY0FBUztRQUNQLDRDQUE0QztRQUM1QyxxUEFBcVAsQ0FBQTtRQUN2UCxpQkFBWSxHQUFHLGFBQWEsQ0FBQTtRQUM1QixtQkFBYyxHQUFHLFlBQVksQ0FBQTtRQUM3QixrQkFBYSxHQUFHLFdBQVcsQ0FBQTtRQUMzQixzQkFBaUIsR0FBRyxjQUFjLENBQUE7UUFDbEMscUJBQWdCLEdBQUcsY0FBYyxDQUFBO1FBQ2pDLG9CQUFlLEdBQUcsYUFBYSxDQUFBO1FBQy9CLGdCQUFXLEdBQUcsMENBQTBDLENBQUE7UUFDeEQsa0JBQWEsR0FBRyxrREFBa0QsQ0FBQTtRQWlCaEUsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7O0lBRUQsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsa0JBQWtCLENBQUMsWUFBWTtRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFBO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQTtRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUE7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQTtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUE7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQTtJQUN2QyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFHO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQTtJQUNqQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFFO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQzVCLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzN0RBQTJDOzthQUs1Qzs7OztZQVhRLG1CQUFtQjtZQUNuQixZQUFZLHVCQW9DaEIsUUFBUTs0Q0FDUixRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7WUFDSCxNQUFNLHVCQUFyQyxNQUFNLFNBQUMsTUFBTTs7O21CQWJmLFdBQVcsU0FBQyxZQUFZO2lCQUN4QixXQUFXLFNBQUMsVUFBVTs4QkFDdEIsV0FBVyxTQUFDLHVCQUF1QjtzQkFDbkMsV0FBVyxTQUFDLGVBQWU7cUJBQzNCLFdBQVcsU0FBQyxjQUFjO3NCQUMxQixXQUFXLFNBQUMsZUFBZTt1QkFDM0IsV0FBVyxTQUFDLGlCQUFpQjt3QkFDN0IsV0FBVyxTQUFDLGtCQUFrQjt1QkFDOUIsV0FBVyxTQUFDLGlCQUFpQjs7OztJQXJCOUIsd0NBQWlDOztJQUNqQyx1Q0FFdVA7O0lBQ3ZQLDBDQUE0Qjs7SUFDNUIsNENBQTZCOztJQUM3QiwyQ0FBMkI7O0lBQzNCLCtDQUFrQzs7SUFDbEMsOENBQWlDOztJQUNqQyw2Q0FBK0I7O0lBQy9CLHlDQUF3RDs7SUFDeEQsMkNBQWtFOztJQUVsRSxrQ0FBK0I7O0lBQy9CLGdDQUEyQjs7SUFDM0IsNkNBQXFEOztJQUNyRCxxQ0FBcUM7O0lBQ3JDLG9DQUFtQzs7SUFDbkMscUNBQXFDOztJQUNyQyxzQ0FBd0M7O0lBQ3hDLHVDQUEwQzs7SUFDMUMsc0NBQXdDOztJQUd0Qyx1Q0FBOEQ7O0lBQzlELGtDQUFnRDs7Ozs7SUFDaEQsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBJbnB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBQbGF0Zm9ybUluZm9TZXJ2aWNlIH0gZnJvbSAnLi4vcGxhdGZvcm0taW5mby9wbGF0Zm9ybS1pbmZvLnNlcnZpY2UnXHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJ1xyXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi93aW5kb3cnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pcy10aGlzLXlvdScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lzLXRoaXMteW91LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcclxuICAgICcuL2lzLXRoaXMteW91LmNvbXBvbmVudC5zY3NzLnRoZW1lLnNjc3MnLFxyXG4gICAgJy4vaXMtdGhpcy15b3UuY29tcG9uZW50LnNjc3MnLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc1RoaXNZb3VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRpdGxlTGFiZWwgPSAnQ291bGQgdGhpcyBiZSB5b3U/J1xyXG4gIGJvZHlMYWJlbCA9XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgJ1dlIGZvdW5kIHNvbWUgYWNjb3VudHMgd2l0aCB5b3VyIG5hbWUsIHdoaWNoIG1lYW5zIHlvdSBtYXkgaGF2ZSBhbHJlYWR5IGNyZWF0ZWQgYW4gT1JDSUQgaUQgdXNpbmcgYSBkaWZmZXJlbnQgZW1haWwgYWRkcmVzcy4gQmVmb3JlIGNyZWF0aW5nIGFuIGFjY291bnQsIHBsZWFzZSBjb25maXJtIHRoYXQgbm9uZSBvZiB0aGVzZSByZWNvcmRzIGJlbG9uZyB0byB5b3UuIE5vdCBzdXJlIGlmIGFueSBvZiB0aGVzZSBhcmUgeW91PydcclxuICBjb250YWN0TGFiZWwgPSAnQ29udGFjdCB1cy4nXHJcbiAgZmlyc3ROYW1lTGFiZWwgPSAnRmlyc3QgTmFtZSdcclxuICBsYXN0TmFtZUxhYmVsID0gJ0xhc3QgTmFtZSdcclxuICBhZmZpbGlhdGlvbnNMYWJlbCA9ICdBZmZpbGlhdGlvbnMnXHJcbiAgZGF0ZUNyZWF0ZWRMYWJlbCA9ICdEYXRlIENyZWF0ZWQnXHJcbiAgdmlld1JlY29yZExhYmVsID0gJ1ZpZXcgUmVjb3JkJ1xyXG4gIHNpZ25pbkxhYmVsID0gJ0kgQUxSRUFEWSBIQVZFIEFOIElELCBHTyBCQUNLIFRPIFNJR04gSU4nXHJcbiAgY29udGludWVMYWJlbCA9ICdOT05FIE9GIFRIRVNFIEFSRSBNRSwgQ09OVElOVUUgV0lUSCBSRUdJU1RSQVRJT04nXHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZWRnZScpIGVkZ2VcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmllJykgaWVcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxldE9ySGFuZHNldCcpIHRhYmxldE9ySGFuZHNldFxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFuZHNldCcpIGhhbmRzZXRcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxldCcpIHRhYmxldFxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVza3RvcCcpIGRlc2t0b3BcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbHVtbnMtOCcpIGNvbHVtbnM4XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2x1bW5zLTEyJykgY29sdW1uczEyXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2x1bW5zLTQnKSBjb2x1bW5zNFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX3BsYXRmb3JtSW5mbzogUGxhdGZvcm1JbmZvU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJc1RoaXNZb3VDb21wb25lbnQ+LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhLFxyXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luZG93OiBXaW5kb3dcclxuICApIHtcclxuICAgIF9wbGF0Zm9ybUluZm8uZ2V0KCkuc3Vic2NyaWJlKHBsYXRmb3JtSW5mbyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0UGxhdGZvcm1DbGFzc2VzKHBsYXRmb3JtSW5mbylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIHNldFBsYXRmb3JtQ2xhc3NlcyhwbGF0Zm9ybUluZm8pIHtcclxuICAgIHRoaXMuaWUgPSBwbGF0Zm9ybUluZm8uaWVcclxuICAgIHRoaXMuZWRnZSA9IHBsYXRmb3JtSW5mby5lZGdlXHJcbiAgICB0aGlzLnRhYmxldE9ySGFuZHNldCA9IHBsYXRmb3JtSW5mby50YWJsZXRPckhhbmRzZXRcclxuICAgIHRoaXMuaGFuZHNldCA9IHBsYXRmb3JtSW5mby5oYW5kc2V0XHJcbiAgICB0aGlzLnRhYmxldCA9IHBsYXRmb3JtSW5mby50YWJsZXRcclxuICAgIHRoaXMuZGVza3RvcCA9IHBsYXRmb3JtSW5mby5kZXNrdG9wXHJcbiAgICB0aGlzLmNvbHVtbnM4ID0gcGxhdGZvcm1JbmZvLmNvbHVtbnM4XHJcbiAgICB0aGlzLmNvbHVtbnMxMiA9IHBsYXRmb3JtSW5mby5jb2x1bW5zMTJcclxuICAgIHRoaXMuY29sdW1uczQgPSBwbGF0Zm9ybUluZm8uY29sdW1uczRcclxuICB9XHJcblxyXG4gIGdvdG8odXJsKSB7XHJcbiAgICB0aGlzLndpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXHJcbiAgfVxyXG5cclxuICBnb3RvTmV3VGFiKGlkKSB7XHJcbiAgICB0aGlzLndpbmRvdy5vcGVuKCcvJyArIGlkKVxyXG4gIH1cclxuXHJcbiAgY29uZmlybVJlZ2lzdHJhdGlvbigpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpXHJcbiAgfVxyXG59XHJcbiJdfQ==