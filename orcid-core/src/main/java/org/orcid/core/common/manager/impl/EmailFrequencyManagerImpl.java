package org.orcid.core.common.manager.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.persistence.NoResultException;

import org.orcid.core.common.manager.EmailFrequencyManager;
import org.orcid.core.manager.ProfileEntityCacheManager;
import org.orcid.core.manager.v3.ProfileHistoryEventManager;
import org.orcid.core.profile.history.ProfileHistoryEventType;
import org.orcid.persistence.constants.SendEmailFrequency;
import org.orcid.persistence.dao.EmailFrequencyDao;
import org.orcid.persistence.jpa.entities.EmailFrequencyEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

public class EmailFrequencyManagerImpl implements EmailFrequencyManager {

    private static final Logger LOG = LoggerFactory.getLogger(EmailFrequencyManagerImpl.class);
    
    @Resource(name = "emailFrequencyDao")
    private EmailFrequencyDao emailFrequencyDao;
    
    @Resource(name = "emailFrequencyDaoReadOnly")
    private EmailFrequencyDao emailFrequencyDaoReadOnly;
    
    @Resource
    private ProfileEntityCacheManager profileEntityCacheManager;
    
    @Resource
    private ProfileHistoryEventManager profileHistoryEventManager;
    
    @Override
    public Map<String, String> getEmailFrequency(String orcid) {
        try {
            EmailFrequencyEntity entity = emailFrequencyDaoReadOnly.findByOrcid(orcid);
            return generateFrequencyMap(entity);
        } catch (Exception e) {
            LOG.debug("Couldn't find email_frequency for {}", orcid);
            return null;
        }
    }

    @Override
    public Map<String, String> getEmailFrequencyById(String id) {
        try {
            EmailFrequencyEntity entity = emailFrequencyDaoReadOnly.find(id);            
            Map<String, String> map = generateFrequencyMap(entity);
            map.put("orcid", entity.getOrcid());
            return map;
        } catch (Exception e) {
            LOG.error("Couldn't find email_frequency for {}", id);
            throw e;
        }
    }

    private Map<String, String> generateFrequencyMap(EmailFrequencyEntity entity) {
        Map<String, String> result = new HashMap<String, String>();
        result.put(ADMINISTRATIVE_CHANGE_NOTIFICATIONS, String.valueOf(entity.getSendAdministrativeChangeNotifications()));
        result.put(CHANGE_NOTIFICATIONS, String.valueOf(entity.getSendChangeNotifications()));
        result.put(MEMBER_UPDATE_REQUESTS, String.valueOf(entity.getSendMemberUpdateRequests()));
        result.put(QUARTERLY_TIPS, String.valueOf(entity.getSendQuarterlyTips()));
        return result;
    }
    
    @Override
    public boolean createOnRegister(String orcid, SendEmailFrequency sendChangeNotifications, SendEmailFrequency sendAdministrativeChangeNotifications,
            SendEmailFrequency sendMemberUpdateRequests, Boolean sendQuarterlyTips) {
        return createEmailFrequency(orcid, sendChangeNotifications, sendAdministrativeChangeNotifications,
                sendMemberUpdateRequests, sendQuarterlyTips, true);
    }
    
    @Override
    public boolean createOnClaim(String orcid, Boolean sendQuarterlyTips) {
        EmailFrequencyEntity entity = new EmailFrequencyEntity();
        entity.setId(UUID.randomUUID().toString());
        entity.setOrcid(orcid);
        entity.setSendAdministrativeChangeNotifications(SendEmailFrequency.WEEKLY.floatValue());
        entity.setSendChangeNotifications(SendEmailFrequency.WEEKLY.floatValue());
        entity.setSendMemberUpdateRequests(SendEmailFrequency.WEEKLY.floatValue());
        entity.setSendQuarterlyTips(sendQuarterlyTips == null ? false : sendQuarterlyTips);
        emailFrequencyDao.persist(entity);        
        profileHistoryEventManager.recordEvent(ProfileHistoryEventType.EMAIL_FREQUENCY_CREATED_ON_CLAIM, orcid, "send_quarterly_tips " + (sendQuarterlyTips == null ? false : sendQuarterlyTips));        
        return true;
    }
    
    private boolean createEmailFrequency(String orcid, SendEmailFrequency sendChangeNotifications, SendEmailFrequency sendAdministrativeChangeNotifications,
            SendEmailFrequency sendMemberUpdateRequests, Boolean sendQuarterlyTips, boolean trackEvent) {
        EmailFrequencyEntity entity = new EmailFrequencyEntity();
        entity.setId(UUID.randomUUID().toString());
        entity.setOrcid(orcid);
        entity.setSendAdministrativeChangeNotifications(sendAdministrativeChangeNotifications.floatValue());
        entity.setSendChangeNotifications(sendChangeNotifications.floatValue());
        entity.setSendMemberUpdateRequests(sendMemberUpdateRequests.floatValue());
        entity.setSendQuarterlyTips(sendQuarterlyTips);
        emailFrequencyDao.persist(entity);
        if(trackEvent) {
            profileHistoryEventManager.recordEvent(ProfileHistoryEventType.EMAIL_FREQUENCY_CREATED_ON_REGISTER, orcid, "send_quarterly_tips " + sendQuarterlyTips);
        }
        return true;
    }
    
    @Override
    public boolean updateSendChangeNotifications(String orcid, SendEmailFrequency frequency) {
        boolean result = false;
        if(emailFrequencyExists(orcid)) {
            result = emailFrequencyDao.updateSendChangeNotifications(orcid, frequency);
        } else {
            LOG.error("Unable to find email frequencies for {}", orcid);
            throw new IllegalArgumentException("Unable to find email frequencies for " + orcid);
        }        
        
        profileHistoryEventManager.recordEvent(ProfileHistoryEventType.UPDATE_AMEND_NOTIF_FREQ, orcid, "New value: " + frequency.value());
        
        return result;
    }

    @Override
    public boolean updateSendAdministrativeChangeNotifications(String orcid, SendEmailFrequency frequency) {
        boolean result = false;
        if(emailFrequencyExists(orcid)) {
            result = emailFrequencyDao.updateSendAdministrativeChangeNotifications(orcid, frequency);
        } else {
            LOG.error("Unable to find email frequencies for {}", orcid);
            throw new IllegalArgumentException("Unable to find email frequencies for " + orcid);
        }        
        
        profileHistoryEventManager.recordEvent(ProfileHistoryEventType.UPDATE_ADMINISTRATIVE_NOTIF_FREQ, orcid, "New value: " + frequency.value());
        
        return result;
    }

    @Override
    public boolean updateSendMemberUpdateRequests(String orcid, SendEmailFrequency frequency) {
        boolean result = false;
        if(emailFrequencyExists(orcid)) {
            result = emailFrequencyDao.updateSendMemberUpdateRequests(orcid, frequency);
        } else {
            LOG.error("Unable to find email frequencies for {}", orcid);
            throw new IllegalArgumentException("Unable to find email frequencies for " + orcid);    
        }        
        
        profileHistoryEventManager.recordEvent(ProfileHistoryEventType.UPDATE_MEMBER_PERMISSION_NOTIF_FREQ, orcid, "New value: " + frequency.value());
        
        return result;
    }

    @Override
    public boolean updateSendQuarterlyTips(String orcid, Boolean enabled) {
        boolean result = false;
        if(emailFrequencyExists(orcid)) {
            result = emailFrequencyDao.updateSendQuarterlyTips(orcid, enabled);
        } else {
            LOG.error("Unable to find email frequencies for {}", orcid);
            throw new IllegalArgumentException("Unable to find email frequencies for " + orcid);
        }

        profileHistoryEventManager.recordEvent(ProfileHistoryEventType.UPDATE_QUARTERLY_TIPS_NOTIF, orcid, "New value: " + enabled);
        
        return result;
    }
    
    @Override
    public boolean emailFrequencyExists(String orcid) {
        try {
            emailFrequencyDao.findByOrcid(orcid);            
        } catch(NoResultException nre) {
            return false;
        }
        return true;
    }
    
    @Override
    @Transactional
    public boolean update(String orcid, SendEmailFrequency sendChangeNotifications, SendEmailFrequency sendAdministrativeChangeNotifications,
            SendEmailFrequency sendMemberUpdateRequests, Boolean sendQuarterlyTips) {
        EmailFrequencyEntity entity = emailFrequencyDao.findByOrcid(orcid);
        entity.setSendAdministrativeChangeNotifications(sendAdministrativeChangeNotifications.floatValue());
        entity.setSendChangeNotifications(sendChangeNotifications.floatValue());
        entity.setSendMemberUpdateRequests(sendMemberUpdateRequests.floatValue());
        entity.setSendQuarterlyTips(sendQuarterlyTips);
        emailFrequencyDao.merge(entity);
        return true;
    }
    
    @Override
    @Transactional
    public boolean updateById(String id, SendEmailFrequency sendChangeNotifications, SendEmailFrequency sendAdministrativeChangeNotifications,
            SendEmailFrequency sendMemberUpdateRequests, Boolean sendQuarterlyTips) {
        EmailFrequencyEntity entity = emailFrequencyDao.find(id);
        entity.setSendAdministrativeChangeNotifications(sendAdministrativeChangeNotifications.floatValue());
        entity.setSendChangeNotifications(sendChangeNotifications.floatValue());
        entity.setSendMemberUpdateRequests(sendMemberUpdateRequests.floatValue());
        entity.setSendQuarterlyTips(sendQuarterlyTips);
        emailFrequencyDao.merge(entity);
        return true;
    }

    @Override
    public String findOrcidId(String id) {
        EmailFrequencyEntity entity = emailFrequencyDao.find(id);
        return entity.getOrcid();
    }
}
