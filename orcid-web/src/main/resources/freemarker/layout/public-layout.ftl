<#macro base>
    <!DOCTYPE html>
    <html class="no-js oldie" lang="en">
    <#include "/common/html-head.ftl" />
    <body
    <@orcid.checkFeatureStatus 'WIDE_GRID'> class="wide-grid" </@orcid.checkFeatureStatus> 
    >
    <div id="skip-link">
        <a href="#main" class="a11yLinks">Skip to main content</a>
    </div>

    <style type="text/css">
        .a11yLinks {
            position: absolute !important;
        }
        .a11yLinks:not(:focus) {
            clip: rect(1px 1px 1px 1px);
            clip: rect(1px, 1px, 1px, 1px);
            overflow: hidden;
            height: 1px;
        }
    </style>    

    <root-cmp role="presentation">
        <style type="text/css">
            body, html {
                height: 100%;
            }
            .app-loading {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
            }
        </style>        
        <noscript>
            <div class="alert alert-banner">
                 ${springMacroRequestContext.getMessage("common.browser-checks.functionalityofthissite")} <a href="http://www.enable-javascript.com/" target="common.browser-checks.instructionhowtoadd">
                 ${springMacroRequestContext.getMessage("common.browser-checks.instructionhowtoadd")}</a>.<br>
                 ${springMacroRequestContext.getMessage("common.cookies.orcid_uses")} <a href="${baseUri}/privacy-policy#TrackingTechnology" target="common.cookies.learn_more">
                 ${springMacroRequestContext.getMessage("common.cookies.learn_more")}</a>.
            </div>
            <style type="text/css"> 
            .app-loading {
                display: none;
            }
            </style>
        </noscript>            
        <div class="app-loading">
        <!--[if ! lte IE 9]><!-->
            <i class="spin green x8" style="line-height: 0px;" id="spinner"><img src="${staticCdn}/img/svg/refresh-curve-arrows.svg" class="spinner flip" width="85" height ="85"/></i>
        <!--<![endif]-->

        <!--[if lte IE 9]>
            <img src="${staticCdn}/img/spin-big.gif" class="spinner" width="85" height ="85"/>
        <![endif]-->

        </div>
    </root-cmp>
    <#nested />
    <!--Content from this template (below) or other templates inside base macro tags appears here-->
    <#include "/common/scripts.ftl" />
    </body>
    </html>
</#macro>

<#macro nav></#macro>

<#macro footer></#macro>

<#macro public css=[] js=[] classes=[] other=[] nav="" >
    <@base>
        <#include "/includes/ng2_templates/alert-banner-ng2-template.ftl">  
        <alert-banner-ng2></alert-banner-ng2>       
        <!--OAUTH SCREEN HEADER-->
        <#if (RequestParameters['oauth'])?? || nav == "oauth-error" || nav == "oauth-error-mismatch">            
            <div class="container">
                <div id="main" role="main" aria-label="main">
                    <div class="row top-header">
                        <div class="col-md-6 col-md-offset-3 centered logo topBuffer">
                            <a href="https://orcid.org" alt="ORCID logo">
                                <script type="text/ng-template" id="oauth-header-ng2-template">
                                    <img src="{{assetsPath}}/img/orcid-logo-208-64.png" width="208px" height="64px" alt="ORCID logo">
                                </script>
                                <oauth-header-ng2></oauth-header-ng2>
                            </a>
                        </div>       
                    </div> 
        </#if>
        <!--NON-OAUTH HEADER-->
        <!--hide header if oauth login-->
        <#if !(RequestParameters['oauth'])??>  
            <#include "/includes/ng2_templates/language-ng2-template.ftl">
            <@orcid.checkFeatureStatus 'ENABLE_HEADER2'>
                <#include "/includes/ng2_templates/user-menu-template.ftl">
                <#include "/includes/ng2_templates/header2-ng2-template.ftl">
                <header2-ng2></header2-ng2>
            </@orcid.checkFeatureStatus>
         
            <div class="container"
             <@orcid.checkFeatureStatus 'NEW_FOOTER'> style="min-height: calc(100% - 118px);" </@orcid.checkFeatureStatus> 
             >
                <@orcid.checkFeatureStatus featureName='ENABLE_HEADER2' enabled=false>
                    <#include "/includes/ng2_templates/header-ng2-template.ftl">
                    <div class="header center">
                        <header-ng2></header-ng2>
                    </div><!-- .header -->
                </@orcid.checkFeatureStatus>
                <div id="main" role="main" aria-label="main" class="main <@orcid.checkFeatureStatus 'ENABLE_HEADER2'>header2-main</@orcid.checkFeatureStatus>">
        </#if>
                <script type="text/ng-template" id="maintenance-message-ng2-template">
                    <div *ngIf="maintenanceMessage!='' && visible" class="row">
                        <div class="maintenance-header">              
                           <p [innerHtml]="maintenanceMessage"></p>
                        </div>
                    </div>    
                </script>
                <maintenance-ng2></maintenance-ng2>
                    
                <#nested>
                <!--Content from other templates inside public macro tags appears here-->
                </div>
            </div><!-- .container -->
        <!--FOOTER-->
        <!--hide footer if oauth login-->
        <#if !(RequestParameters['oauth'])?? && nav != "oauth-error" && nav != "oauth-error-mismatch">
            <script type="text/ng-template" id="footer-ng2-template">
                <div class="header2-see-more container" role="Complementary" aria-label="<@orcid.msg 'aria.orcid-statistics'/>">
                    <div>
                    {{liveIds}} <@orcid.msg'public-layout.amount_ids'/> 
                    <a href="{{getBaseUri()}}/statistics" title="">
                        <@orcid.msg 'public-layout.see_more'/>
                    </a>
                    </div>
                </div>
                <@orcid.checkFeatureStatus 'NEW_FOOTER'>
                    <footer class="footer-main" aria-label="<@orcid.msg 'aria.footer'/>">
                        <div class="container" role="presentation">
            	            <span id="noop" role="presentation"><!-- For automated tests --> </span>
                            <div class="row footer-row-container" role="presentation"> 

                                <div class="footer-row-text-container" role="presentation">
                                    <div>
                                        <div class="footer-row-icons-container" role="presentation">
                                            <a href="{{aboutUri}}" alt="ORCID logo">
                                                <img *ngIf="assetsPath != null" src="{{assetsPath + '/img/orcid-logo.svg'}}" width="110px" alt="ORCID logo">
                                            </a>
                                            <nav aria-label="social">
                                                <ul class="inline-list" role="presentation">
                                                    <li role="presentation"><a class="social-button" href="https://twitter.com/orcid_org" target="social-twitter" rel="noreferrer"><span class="social social-twitter" aria-label="twitter"></span></a></li>
                                                    <li role="presentation"><a class="social-button" href="http://orcid.org/blog/feed" target="social-rss" rel="noreferrer"><span class="social social-rss" aria-label="rss"></span></a></li>
                                                    <li role="presentation"><a class="social-button" href="https://github.com/ORCID" target="social-github" rel="noreferrer"><span class="social social-github" aria-label="github"></span></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>

                                    <p role="presentation">
                                        <a rel="license noreferrer" target="footer.copyright_cc0" href="http://creativecommons.org/publicdomain/zero/1.0/" ><img *ngIf="assetsPath != null" src="{{assetsPath + '/img/cc0_80x15.png'}}" style="border-style: none; margin-right: 4px;" alt="CC0" /></a> <@orcid.msg 'footer.copyright_cc0_1'/> <a rel="license noreferrer" target="footer.copyright_cc0" class="footer-url" href="http://creativecommons.org/publicdomain/zero/1.0/"><@orcid.msg 'footer.copyright_cc0_2'/></a><@orcid.msg 'common.period'/> <@orcid.msg 'footer.copyright_cc0_3'/><@orcid.msg 'common.period'/></p>
                                    <nav>
                                        <ul class="inline-list">
                                            <li><a href="{{aboutUri}}/footer/privacy-policy"><@orcid.msg 'public-layout.privacy_policy'/></a></li>
                                            <li><a href="{{aboutUri}}/content/orcid-terms-use"><@orcid.msg 'public-layout.terms_of_use'/></a></li>
                                            <li><a href="https://orcid.org/orcid-dispute-procedures">Dispute procedures</a></li>
                                            <li><a href="https://support.orcid.org/hc/en-us/requests/new"><@orcid.msg 'public-layout.contact_us'/></a></li>
                                            <li><a href="https://orcid.org/trademark-and-id-display-guidelines">Trademark &amp; iD display guidelines</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </footer>
                </@orcid.checkFeatureStatus>
                <@orcid.checkFeatureStatus featureName='NEW_FOOTER' enabled=false>
                    <div id="footer" class="footer clear-fix">
                        <span id="noop"><!-- For automated tests --> </span>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-11 col-md-offset-1">
                                    <ul class="col-md-11 col-md-offset-1">
                                        <li class=""><a href="https://support.orcid.org/hc/en-us/requests/new"><@orcid.msg 'public-layout.contact_us'/></a></li>
                                        <li class=""><a href="{{aboutUri}}/footer/privacy-policy"><@orcid.msg 'public-layout.privacy_policy'/></a></li>
                                        <li class=""><a href="{{aboutUri}}/content/orcid-terms-use"><@orcid.msg 'public-layout.terms_of_use'/></a></li>
                                        <li class=""><a href="{{aboutUri}}/open-source-license"><@orcid.msg 'footer.openSource'/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </@orcid.checkFeatureStatus>
                <form action="{{getBaseUri()}}" aria-hidden="true">
                    <input id="imageUrl" type="hidden" value="{{assetsPath}}/images">                
                </form>
            </script>
            <footer-ng2></footer-ng2>
        </#if>
    </@base>
</#macro>

