<script type="text/ng-template" id="biography-ng2-template">
    <!-- Locked error message -->    
    <div class="workspace-inner workspace-header row" *ngIf="userInfo['LOCKED'] == 'true'">
        <div class="col-md-12 col-sm-12 col-xs-12 alert alert-error readme">
            <strong><@orcid.msg 'workspace.locked.header'/></strong>
            <p><@orcid.msg 'workspace.locked.message_1'/><a href="https://support.orcid.org/hc/en-us/requests/new" target="Orcid_support"><@orcid.msg 'workspace.locked.message_2'/></a><@orcid.msg 'workspace.locked.message_3'/></p>
        </div>
    </div>                
    <div class="biography-controller" id="bio-section" aria-labelledby="labelbiography">
        <div class="row" role="presentation">
            <div class="col-md-9 col-sm-8 col-xs-4" role="presentation">
                <h2 id="labelbiography"(click)="toggleEdit()" class="workspace-title" aria-describedby="tooltip-helpPopoverBio">${springMacroRequestContext.getMessage("manage_bio_settings.labelbiography")}</h2>  
                <div class="popover-help-container" role="presentation" >
                    <i class="glyphicon glyphicon-question-sign" role="presentation"></i>
                    <div id="bio-help" class="popover bottom" role="presentation">
                        <div class="arrow" role="presentation"></div>
                        <div class="popover-content" role="presentation">
                            <p  id="tooltip-helpPopoverBio" role="tooltip"><@orcid.msg 'manage_bio_settings.helpPopoverBio'/></p>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="col-md-3 col-sm-4 col-xs-8" role="presentation">
                <ul class="inline-list bio-edit right" role="presentation">
                    <li>
                        <div (click)="toggleEdit()" *ngIf="!showEdit" class="edit-biography edit-option popover-help-container" role="Button" aria-label="<@orcid.msg 'common.edit'/>" describedby="tooltip-editBio">
                            <span class="glyphicon glyphicon-pencil"  role="presentation"></span>
                            <div class="popover top tooltip-edit tooltip-text">
                                <div class="arrow"></div>
                                <div class="popover-content">
                                    <span><@orcid.msg 'groups.common.edit_my' /></span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <privacy-toggle-ng2 
                            [dataPrivacyObj]="formData"  
                            (privacyUpdate)="privacyChange($event)"
                            elementId="bio-privacy-toggle" 
                            privacyNodeName="visibility" 
                        ></privacy-toggle-ng2>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="row" role="presentation">
            <div class="col-md-12" role="presentation">   
                <div style="white-space: pre-wrap" *ngIf="!showEdit" (click)="toggleEdit()">{{formData?.biography?.value}}</div> 
            </div>
        </div>
        
        <div *ngIf="showEdit" class="biography-edit">
            <div class="row">
                <div class="col-md-12 col-xs-12 col-sm-12">
                    <textarea id="biography" name="biography" class="input-xlarge" rows="20" (change)="checkLength()" [(ngModel)]="formData.biography.value"></textarea>
                </div>
            </div>
            <div class="row" role="presentation">
                <div class="col-md-12 col-sm-12 col-xs-12" role="presentation">
                    <span class="orcid-error" *ngIf="lengthError==true">
                        <div>${springMacroRequestContext.getMessage("Length.changePersonalInfoForm.biography")}</div>
                    </span>
                    <span class="orcid-error" *ngIf="formData?.biography?.errors?.length > 0">
                        <div *ngFor='let error of formData?.biography?.errors'>{{error}}</div>
                    </span>
                </div>
            </div>
            <div class="row">                                   
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="pull-right full-width">
                        <a class="cancel" (click)="cancel()"><@spring.message "freemarker.btncancel"/></a>
                        <button class="btn btn-primary" (click)="setformData()"><@spring.message "freemarker.btnsavechanges"/></button>
                    </div>
                </div>
            </div>                                                          
        </div>
    </div>
    
</script>
