package org.orcid.core.manager.v3.impl;

import java.util.List;

import javax.annotation.Resource;

import org.orcid.core.manager.v3.ProfileHistoryEventManager;
import org.orcid.core.profile.history.ProfileHistoryEventType;
import org.orcid.persistence.dao.ProfileHistoryEventDao;
import org.orcid.persistence.jpa.entities.ProfileHistoryEventEntity;

public class ProfileHistoryEventManagerImpl implements ProfileHistoryEventManager {
    
    @Resource
    private ProfileHistoryEventDao profileHistoryDao;

    @Override
    public void recordEvent(ProfileHistoryEventType eventType, String orcid) {
        ProfileHistoryEventEntity profileHistoryEvent = new ProfileHistoryEventEntity();
        profileHistoryEvent.setEventType(eventType.getLabel());
        profileHistoryEvent.setOrcid(orcid);
        profileHistoryDao.persist(profileHistoryEvent);
    }
    
    @Override
    public void recordEvent(ProfileHistoryEventType eventType, String orcid, String comments) {
        ProfileHistoryEventEntity profileHistoryEvent = new ProfileHistoryEventEntity();
        profileHistoryEvent.setEventType(eventType.getLabel());
        profileHistoryEvent.setOrcid(orcid);
        profileHistoryEvent.setComment(comments);
        profileHistoryDao.persist(profileHistoryEvent);
    }

    @Override
    public List<ProfileHistoryEventEntity> getProfileHistoryForOrcid(String orcid) {
        return profileHistoryDao.findByProfile(orcid);
    }

}
