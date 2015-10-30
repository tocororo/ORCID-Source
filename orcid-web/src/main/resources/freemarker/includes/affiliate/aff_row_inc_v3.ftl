<#--

    =============================================================================

    ORCID (R) Open Source
    http://orcid.org

    Copyright (c) 2012-2014 ORCID, Inc.
    Licensed under an MIT-Style License (MIT)
    http://orcid.org/open-source-license

    This copyright and license information (including a link to the full license)
    shall be included in its entirety in all copies or substantial portion of
    the software.

    =============================================================================

-->
<div class="row">        
  	<!-- Information -->
	<div class="col-md-10 col-sm-10 col-xs-8 bottomBuffer">
	    <h3 class="workspace-title">
	    	
        	<span ng-bind-html="group.getActive().affiliationName.value"></span>:
        	<span ng-bind="group.getActive().city.value"></span><span ng-show="group.getActive().region.value">, </span><span ng-bind="group.getActive().region.value"></span>, <span ng-bind="group.getActive().countryForDisplay"></span>        	        	        	        	
        </h3>
        <div class="info-detail">
        	<div class="info-date">
        	        	
	        	<span class="affiliation-date" ng-show="group.getActive().startDate">
	        	    <span ng-show="group.getActive().startDate.year">{{group.getActive().startDate.year}}</span><span ng-show="group.getActive().startDate.month">-{{group.getActive().startDate.month}}</span>
	        	    <span><@orcid.msg 'workspace_affiliations.dateSeparator'/></span>
	        	    <span ng-hide="group.getActive().endDate.year"><@orcid.msg 'workspace_affiliations.present'/></span>
	        		<span ng-show="group.getActive().endDate.year">{{group.getActive().endDate.year}}</span><span ng-show="group.getActive().endDate.month">-{{group.getActive().endDate.month}}</span><span ng-show="group.getActive().endDate.day">-{{group.getActive().endDate.day}}</span>
	            </span>
	            
	            <span class="affiliation-date" ng-show="!group.getActive().startDate && group.getActive().endDate">
	        	     <span ng-show="group.getActive().endDate.year">{{group.getActive().endDate.year}}</span><span ng-show="group.getActive().endDate.month">-{{group.getActive().endDate.month}}</span><span ng-show="group.getActive().endDate.day">-{{group.getActive().endDate.day}}</span>
	        	</span>
	        	        	
        	</div>
        	        	
        	<span class="divisor" ng-show="(group.getActive().startDate || group.getActive().endDate) && (group.getActive().roleTitle.value || group.getActive().departmentName.value)"></span>
        	
        	<div class="role" ng-show="group.getActive().roleTitle.value">
	            <span ng-bind-html="group.getActive().roleTitle.value"></span>
        	</div>
			<span ng-show="group.getActive().departmentName.value">
				<span ng-show="group.getActive().roleTitle.value">&nbsp;</span>(<span ng-bind="group.getActive().departmentName.value" ng-cloak></span>)
			</span>
        </div>
       </div>
       <!-- Privacy Settings -->
       <div class="col-md-2 col-sm-2 col-xs-4 workspace-toolbar">       	
       	<#if !(isPublicProfile??)>       		
       		<ul class="workspace-private-toolbar">	
			 	<li>
					<@orcid.privacyToggle2  angularModel="group.getActive().visibility.visibility"
					questionClick="toggleClickPrivacyHelp(group.getActive().putCode.value)"
					clickedClassCheck="{'popover-help-container-show':privacyHelp[group.getActive().putCode.value]==true}" 
					publicClick="setPrivacy(group.getActive(), 'PUBLIC', $event)" 
	                  	limitedClick="setPrivacy(group.getActive(), 'LIMITED', $event)" 
	                  	privateClick="setPrivacy(group.getActive(), 'PRIVATE', $event)" />
                </li>			        
        	</ul>
        </#if>
	</div>
</div>
<div class="row source-line">
	<div class="col-md-12 col-sm-12 col-xs-12">
		<div class="sources-container-header">          
			<div class="row">
				<div class="col-md-7 col-sm-7 col-xs-7">
					<@orcid.msg 'groups.common.source'/>: {{group.getActive().sourceName}}	
				</div>
				<div class="col-md-3 col-sm-3 col-xs-3">
					<@orcid.msg 'groups.common.created'/>: <span ng-bind="group.getActive().createdDate | ajaxFormDateToISO8601"></span>
				</div>				
				<div class="col-md-2 col-sm-2 col-xs-2">
					<ul class="sources-options">
						<#if !(isPublicProfile??)>
							<li ng-show="group.getActive().source == '${effectiveUserOrcid}'">
								<a ng-click="openEditAffiliation(group.getActive())" ng-mouseenter="showTooltip(group.getActive().putCode.value+'-edit')" ng-mouseleave="hideTooltip(group.getActive().putCode.value+'-edit')">
								    <span class="glyphicon glyphicon-pencil"></span>
								</a>
								<div class="popover popover-tooltip top edit-source-popover ng-hide" ng-show="showElement[group.getActive().putCode.value+'-edit'] == true"> 
								    <div class="arrow"></div>
								    <div class="popover-content">
								        <span ><@orcid.msg 'groups.common.edit_my'/></span>
								    </div>                
								</div>	
							</li>   
					        <li>
					            <a href ng-click="deleteAffiliation(group.getActive())" ng-mouseenter="showTooltip(group.getActive().putCode.value+'-delete')" ng-mouseleave="hideTooltip(group.getActive().putCode.value+'-delete')" class="glyphicon glyphicon-trash"></a>
					            <div class="popover popover-tooltip top delete-source-popover ng-hide" ng-show="showElement[group.getActive().putCode.value+'-delete'] == true"> 
								 	<div class="arrow"></div>
								    <div class="popover-content">
								    	 <@orcid.msg 'groups.common.delete_this_source' />
								    </div>                
								</div>
					        </li>
				         </#if>  
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
