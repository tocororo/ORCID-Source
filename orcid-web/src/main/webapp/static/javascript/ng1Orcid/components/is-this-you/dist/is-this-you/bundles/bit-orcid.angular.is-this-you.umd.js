(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@bit/orcid.angular.platform-info'), require('@angular/material/dialog'), require('@bit/orcid.angular.window'), require('@angular/common'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@bit/orcid.angular.is-this-you', ['exports', '@angular/core', '@bit/orcid.angular.platform-info', '@angular/material/dialog', '@bit/orcid.angular.window', '@angular/common', '@angular/material'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.orcid = global.bit.orcid || {}, global.bit.orcid.angular = global.bit.orcid.angular || {}, global.bit.orcid.angular['is-this-you'] = {}), global.ng.core, global.orcid_angular_platformInfo, global.ng.material.dialog, global.orcid_angular_window, global.ng.common, global.ng.material));
}(this, (function (exports, core, orcid_angular_platformInfo, dialog, orcid_angular_window, common, material) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'app-is-this-you',
                        template: "<div class=\"container\" *ngIf=\"data && data.duplicateRecords\">\r\n  <h1 class=\"mat-display-1 modal-title\">{{ data.titleLabel || titleLabel }}</h1>\r\n  <div class=\"non-fixed\">\r\n    <p class=\"mat-body-1\">\r\n      {{ data.bodyLabel || bodyLabel }}\r\n      <a href=\"https://support.orcid.org/hc/en-us/requests/new\">\r\n        {{ data.contactLabel || contactLabel }}\r\n      </a>\r\n    </p>\r\n\r\n    <table style=\"width:100%\" class=\"mat-subheading-2\">\r\n      <tr>\r\n        <th>{{ data.firstNameLabel || firstNameLabel }}</th>\r\n        <th>{{ data.lastNameLabel || lastNameLabel }}</th>\r\n        <th class=\"affiliation-colum\">\r\n          {{ data.affiliationsLabel || affiliationsLabel }}\r\n        </th>\r\n        <th>{{ data.dateCreatedLabel || dateCreatedLabel }}</th>\r\n        <th class=\"buttonsColumn\">\r\n          {{ data.viewRecordLabel || viewRecordLabel }}\r\n        </th>\r\n      </tr>\r\n      <tr *ngFor=\"let record of data.duplicateRecords\">\r\n        <td>{{ record.givenNames }}</td>\r\n        <td>{{ record.familyNames }}</td>\r\n        <td>{{ record.institution }}</td>\r\n        <td>{{ record.createdDate }}</td>\r\n        <td>\r\n          <button mat-button color=\"primary\" (click)=\"gotoNewTab(record.orcid)\">\r\n            {{ data.viewRecordLabel || viewRecordLabel }}\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"fixed\">\r\n    <button\r\n      mat-button\r\n      color=\"primary\"\r\n      class=\"mat-button-wrap-text mat-button-font-spaced\"\r\n      (click)=\"goto('sign-in')\"\r\n    >\r\n      {{ data.signinLabel || signinLabel }}\r\n    </button>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      class=\"mat-button-wrap-text mat-button-font-spaced\"\r\n      (click)=\"confirmRegistration()\"\r\n    >\r\n      {{ data.continueLabel || continueLabel }}\r\n    </button>\r\n  </div>\r\n</div>\r\n",
                        styles: [".modal-title{color:#2e7f9f}", ".non-fixed{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow-y:auto;-webkit-box-flex:1;flex-grow:1;margin-bottom:30px}.ie :host .non-fixed{display:block}.fixed{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;flex-shrink:0}.modal-title{margin:0}table{text-align:left}table th{white-space:nowrap}table .affiliation-colum{width:280px}td,th{border-bottom:1px solid #ddd;vertical-align:baseline;padding-right:10px}.container{max-height:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}a:hover{text-decoration:underline}.buttonsColumn{padding-left:16px;width:1px}:host.columns-4 .fixed,:host.columns-8 .fixed{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"]
                    }] }
        ];
        /** @nocollapse */
        IsThisYouComponent.ctorParameters = function () { return [
            { type: orcid_angular_platformInfo.PlatformInfoService },
            { type: dialog.MatDialogRef, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [dialog.MAT_DIALOG_DATA,] }] },
            { type: Window, decorators: [{ type: core.Inject, args: [orcid_angular_window.WINDOW,] }] }
        ]; };
        IsThisYouComponent.propDecorators = {
            edge: [{ type: core.HostBinding, args: ['class.edge',] }],
            ie: [{ type: core.HostBinding, args: ['class.ie',] }],
            tabletOrHandset: [{ type: core.HostBinding, args: ['class.tabletOrHandset',] }],
            handset: [{ type: core.HostBinding, args: ['class.handset',] }],
            tablet: [{ type: core.HostBinding, args: ['class.tablet',] }],
            desktop: [{ type: core.HostBinding, args: ['class.desktop',] }],
            columns8: [{ type: core.HostBinding, args: ['class.columns-8',] }],
            columns12: [{ type: core.HostBinding, args: ['class.columns-12',] }],
            columns4: [{ type: core.HostBinding, args: ['class.columns-4',] }]
        };
        return IsThisYouComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IsThisYouModule = /** @class */ (function () {
        function IsThisYouModule() {
        }
        IsThisYouModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [IsThisYouComponent],
                        imports: [
                            common.CommonModule,
                            material.MatButtonModule,
                            orcid_angular_platformInfo.PlatformInfoModule,
                            orcid_angular_window.WindowModule,
                            material.MatDialogModule,
                        ],
                        exports: [IsThisYouComponent],
                    },] }
        ];
        return IsThisYouModule;
    }());

    exports.IsThisYouComponent = IsThisYouComponent;
    exports.IsThisYouModule = IsThisYouModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bit-orcid.angular.is-this-you.umd.js.map
