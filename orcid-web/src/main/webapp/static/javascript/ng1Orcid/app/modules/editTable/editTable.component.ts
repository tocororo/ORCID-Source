declare var om: any;
declare var orcidVar: any;

//Import all the angular components

import { NgForOf, NgIf } 
    from '@angular/common'; 

import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } 
    from '@angular/core';

import { Observable, Subject, Subscription } 
    from 'rxjs';

import { takeUntil } 
    from 'rxjs/operators';

import { AccountService } 
    from '../../shared/account.service.ts'; 

import { PreferencesService } 
    from '../../shared/preferences.service.ts';

@Component({
    selector: 'edit-table-ng2',
    template:  scriptTmpl("edit-table-ng2-template")
})
export class EditTableComponent implements AfterViewInit, OnDestroy, OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    
    changePasswordPojo: any;
    errorUpdatingVisibility: any;
    initSecurityQuestionFlag: boolean;
    password: any;
    prefs: any;
    primaryEmail: string;
    securityQuestions: any;
    securityQuestionPojo: any;
    showConfirmationWindow: any;
    showSection: any;
    showSendDeactivateEmailSuccess: boolean;
    toggleText: any;
    
    constructor(
        private cdr:ChangeDetectorRef,
        private accountService: AccountService,
        private preferencesService: PreferencesService,
    ) {
        this.changePasswordPojo = {};
        this.errorUpdatingVisibility = false;
        this.initSecurityQuestionFlag = false;
        this.prefs = {};
        this.primaryEmail="";
        this.securityQuestions = [];
        this.securityQuestionPojo = {
            securityQuestionId: null
        };
        this.showConfirmationWindow = false;
        this.showSection = {
            'deactivate': (window.location.hash === "#editDeactivate"),
            'deprecate': (window.location.hash === "#editDeprecate"),
            'editEmail': (window.location.hash === "#editEmail"),
            'editLanguage': false,
            'editPassword': (window.location.hash === "#editPassword"),
            'editPrivacy': (window.location.hash === "#editPrivacyPreferences"),
            'editSecurityQuestion': (window.location.hash === "#editSecurityQuestion"),
            'twoFA': (window.location.hash === "#edit2FA"),
            'getMyData': false
        };
        this.showSendDeactivateEmailSuccess=false;
        this.toggleText = {}; 
    }

    securityQuestionCheckCredentials(): void {
        if( orcidVar.isPasswordConfirmationRequired ){
            this.showConfirmationWindow = true;
        } else {
            this.saveChangeSecurityQuestion();
        }
    };

    getChangePassword(): void {
        this.accountService.getChangePassword()
        .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
        .subscribe(
            data => {
                if(data) {
                    this.changePasswordPojo = data;
                }
            },
            error => {
                //console.log('getformDataError', error);
            } 
        );
 
    };

    getPreferences(): void {
        this.preferencesService.getPrivacyPreferences()
            .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
        .subscribe(
            preferences => {
                this.prefs = preferences;
                this.cdr.detectChanges();
            },
            error => {
                // something bad is happening!
                console.log("error getting preferences");
            } 
        );
    };

    getSecurityQuestion(): void {
        this.accountService.getSecurityQuestion()
        .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
        .subscribe(
            data => {
                this.securityQuestionPojo = data;
            },
            error => {
                //console.log('error with security question.json', error);
            } 
        );
    };

    initSecurityQuestion( obj ): void{
        if( this.initSecurityQuestionFlag == false ){
            this.initSecurityQuestionFlag = true;
            let objLastIndex = obj.length - 1;

            if(obj[objLastIndex] == ""){
                obj = obj.slice(0, -1);
            }
            this.securityQuestions = obj;
        }
    }

    saveChangePassword(): void {
        this.accountService.saveChangePassword( this.changePasswordPojo )
        .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
        .subscribe(
            data => {
                this.changePasswordPojo = data;

            },
            error => {
                //console.log('setformDataError', error);
            } 
        );
    }

    saveChangeSecurityQuestion(): void {
        this.accountService.submitModal( this.securityQuestionPojo )
        .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
        .subscribe(
            data => {
                this.securityQuestionPojo = data;
            },
            error => {
                //console.log('error with security question', error);
            } 
        );
        this.securityQuestionPojo.password=null;
    };

    sendDeactivateEmail(): void {
        console.log("send deactivate")
        this.accountService.sendDeactivateEmail()
        .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
        .subscribe(
            data => {
                this.primaryEmail = data;
                this.showSendDeactivateEmailSuccess=true;
                console.log(this.primaryEmail);
                console.log(this.showSendDeactivateEmailSuccess);
            },
            error => {
                //console.log('setformDataError', error);
            } 
        );

    };

    toggleSection(sectionName): void {
        this.showSection[sectionName] = !this.showSection[sectionName];
        this.updateToggleText(sectionName);
    };

    updateActivitiesVisibilityDefault(oldPriv, newPriv, $event: any): void {
        this.errorUpdatingVisibility = false;
        this.preferencesService.updateDefaultVisibility(newPriv)
            .pipe(    
            takeUntil(this.ngUnsubscribe)
        )
                .subscribe(
                    response => {
                        this.prefs['default_visibility'] = newPriv;
                        this.cdr.detectChanges();
                    },
                    error => {
                        this.prefs['default_visibility'] = oldPriv; 
                        this.errorUpdatingVisibility = true;
                        this.cdr.detectChanges();
                        // something bad is happening!
                        console.log("error updating preferences");
                    } 
                );    
    };

    updateToggleText(sectionName){
        switch(sectionName) { 
            case 'editSecurityQuestion': {
                if(this.showSection[sectionName]==true){
                    this.toggleText[sectionName] = om.get("manage.editTable.hide");
                } else {
                    this.toggleText[sectionName] = om.get("manage.editTable.edit");
                    this.securityQuestionPojo.errors = [];
                }
                break; 
            }
            case 'deactivate': { 
                if(this.showSection[sectionName]==true){
                    this.toggleText[sectionName] = om.get("manage.editTable.hide");
                } else {
                    this.toggleText[sectionName] = om.get("manage.editTable.deactivateRecord");
                    this.showSendDeactivateEmailSuccess=false;
                }
                break; 
            } 
            case 'deprecate': { 
                if(this.showSection[sectionName]==true){
                    this.toggleText[sectionName] = om.get("manage.editTable.hide");
                } else {
                    this.toggleText[sectionName] = om.get("manage.editTable.removeDuplicate");
                }
                break; 
            } 
            case 'getMyData': {
                if(this.showSection[sectionName]==true){
                    this.toggleText[sectionName] = om.get("manage.editTable.hide");
                } else {
                    this.toggleText[sectionName] = om.get("manage.editTable.show");
                }
                break;
            }
            default: { 
                if(this.showSection[sectionName]==true){
                    this.toggleText[sectionName] = om.get("manage.editTable.hide");
                } else {
                    this.toggleText[sectionName] = om.get("manage.editTable.edit");
                }
                break; 
            } 
        } 

    }
   

    //Default init functions provided by Angular Core
    ngAfterViewInit() {
        //Fire functions AFTER the view inited. Useful when DOM is required or access children directives
    };

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };

    ngOnInit() {
        for(var key in this.showSection){
            this.updateToggleText(key);
        }
        this.getChangePassword();
        this.getPreferences();
        this.getSecurityQuestion();
    }; 
}
