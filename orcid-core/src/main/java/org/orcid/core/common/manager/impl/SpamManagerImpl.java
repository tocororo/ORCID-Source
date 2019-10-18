package org.orcid.core.common.manager.impl;

import javax.annotation.Resource;

import org.orcid.core.common.manager.SpamManager;
import org.orcid.persistence.dao.SpamDao;
import org.orcid.persistence.jpa.entities.SpamEntity;
import org.orcid.pojo.ajaxForm.SpamRecord;
import org.orcid.pojo.ajaxForm.Text;

public class SpamManagerImpl implements SpamManager {

    @Resource(name="spamDao")
    protected SpamDao spamDao;
    
    @Resource(name="spamDaoReadOnly")
    protected SpamDao spamDaoReadOnly;
    
    @Override
    public Boolean exists(String orcid) {
        return spamDaoReadOnly.exists(orcid);
    }

    @Override
    public SpamRecord create(String orcid, String sourceType, String reporterIp) {
        SpamEntity se = spamDao.create(orcid, sourceType, reporterIp);        
        return toSpamRecord(se);
    }

    @Override
    public Boolean incrementCount(String orcid) {
        return spamDao.incrementCount(orcid);
    }

    @Override
    public Boolean remove(String orcid) {
        return spamDao.remove(orcid);
    }

    @Override
    public SpamRecord get(String orcid) {
        SpamEntity se = spamDaoReadOnly.get(orcid);
        return toSpamRecord(se);
    }

    private SpamRecord toSpamRecord(SpamEntity se) {
        SpamRecord sr = new SpamRecord();
        sr.setCount(se.getCount());
        sr.setOrcid(Text.valueOf(se.getOrcid()));
        sr.setReportedDate(se.getReportedDate());
        sr.setReporterIp(se.getReporterIp());
        sr.setSourceType(se.getSourceType());
        return sr;
    }
}
