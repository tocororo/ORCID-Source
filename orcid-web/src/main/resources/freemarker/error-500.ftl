<@public classes=['home'] nav="signin">
<div class="row">
    <div class="col-md-offset-3 col-md-9 col-sm-12 col-xs-12">
        <p>${springMacroRequestContext.getMessage("error-500.hasbeenproblemwithserver")} <a href="https://support.orcid.org/hc/en-us/requests/new">${springMacroRequestContext.getMessage("error-500.support")}</a>.</p>
    </div>
</div>
</@public>
