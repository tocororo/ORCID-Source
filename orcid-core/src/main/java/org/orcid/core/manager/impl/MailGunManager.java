package org.orcid.core.manager.impl;

/**
 * =============================================================================
 *
 * ORCID (R) Open Source
 * http://orcid.org
 *
 * Copyright (c) 2012-2014 ORCID, Inc.
 * Licensed under an MIT-Style License (MIT)
 * http://orcid.org/open-source-license
 *
 * This copyright and license information (including a link to the full license)
 * shall be included in its entirety in all copies or substantial portion of
 * the software.
 *
 * =============================================================================
 */
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;

public class MailGunManager {

    /*
     * Non-production keys will throw 500 errors
     * 
     * From mailguns home page! Yey!
     * 
     * curl -s -k --user api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0 \
     * https://api.mailgun.net/v2/samples.mailgun.org/messages \ -F
     * from='Excited User <me@samples.mailgun.org>' \ -F to='Dude
     * <dude@mailgun.net>'\ -F to=devs@mailgun.net \ -F subject='Hello' \ -F
     * text='Testing some Mailgun awesomeness!'
     */

    @Value("${com.mailgun.apiKey:key-3ax6xnjp29jd6fds4gc373sgvjxteol0}")
    private String apiKey;

    @Value("${com.mailgun.apiUrl:https://api.mailgun.net/v2}")
    private String apiUrl;

    @Value("${com.mailgun.verify.apiUrl:https://api.mailgun.net/v2/samples.mailgun.org/messages}")
    private String verifyApiUrl;

    @Value("${com.mailgun.notify.apiUrl:https://api.mailgun.net/v2/samples.mailgun.org/messages}")
    private String notifyApiUrl;
    
    @Value("${com.mailgun.marketing.apiUrl:https://api.mailgun.net/v2/samples.mailgun.org/messages}")
    private String marketingApiUrl;

    @Value("${com.mailgun.testmode:yes}")
    private String testmode;

    @Value("${com.mailgun.regexFilter:.*(orcid\\.org|mailinator\\.com|rcpeters\\.com)$}")
    private String filter;

    private static final Logger LOGGER = LoggerFactory.getLogger(MailGunManager.class);

    public boolean sendMarketingEmail(String from, String to, String subject, String text, String html) {
        return sendEmail(from, to, subject, text, html, true);
    }
    
    public boolean sendEmail(String from, String to, String subject, String text, String html) {
        return sendEmail(from, to, subject, text, html, false);
    }
    
    public boolean sendEmail(String from, String to, String subject, String text, String html, boolean marketing) {

            
        //  no mailgun in tocororo....      
        return true;
//        Client client = Client.create();
//        client.addFilter(new HTTPBasicAuthFilter("api", getApiKey()));
//
//        // determine correct api based off domain.
//        WebResource webResource = null;
//        String fromEmail = getFromEmail(from);
//        if(marketing)
//            webResource = client.resource(getMarketingApiUrl());
//        else if (fromEmail.endsWith("@verify.orcid.org"))
//            webResource = client.resource(getVerifyApiUrl());
//        else if (fromEmail.endsWith("@notify.orcid.org"))
//            webResource = client.resource(getNotifyApiUrl());
//        else
//            webResource = client.resource(getApiUrl());        
//        
//        MultivaluedMapImpl formData = new MultivaluedMapImpl();
//        formData.add("from", from);
//        formData.add("to", to);
//        formData.add("subject", subject);
//        formData.add("text", text);
//        if (html != null) {
//            formData.add("html", html);
//        }
//        formData.add("o:testmode", testmode);
//
//        // the filter is used to prevent sending email to users in qa and
//        // sandbox
//        if (to.matches(filter)) {
//            ClientResponse cr = webResource.type(MediaType.APPLICATION_FORM_URLENCODED).post(ClientResponse.class, formData);
//            if (cr.getStatus() != 200) {
//                LOGGER.warn("Post MailGunManager.sendEmail to {} not accepted\nstatus: {}\nbody: {}", 
//                        new Object[] { formData.get("to"), cr.getStatus(), cr.getEntity(String.class) });
//                return false;
//            }
//            return true;
//        } else {
//            LOGGER.debug("Email not sent to {} due to regex mismatch", formData.get("to"));
//            return false;
//        }
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getApiUrl() {
        return apiUrl;
    }

    public void setApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
    }

    public String getVerifyApiUrl() {
        return verifyApiUrl;
    }

    public void setVerifyApiUrl(String verifyApiUrl) {
        this.verifyApiUrl = verifyApiUrl;
    }

    public String getNotifyApiUrl() {
        return notifyApiUrl;
    }
    
    public void setNotifyApiUrl(String notifyApiUrl) {
        this.notifyApiUrl = notifyApiUrl;
    }

    public String getMarketingApiUrl() {
        return marketingApiUrl;
    }

    public void setMarketingApiUrl(String marketingApiUrl) {
        this.marketingApiUrl = marketingApiUrl;
    }

    private String getFromEmail(String from) {
        int indexOfLt = from.indexOf('<');
        if (indexOfLt != -1) {
            int indexOfGt = from.indexOf('>');
            from = from.substring(indexOfLt + 1, indexOfGt);
        }
        return from.trim();
    }
}
