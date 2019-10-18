package org.orcid.persistence.dao.impl;

import java.util.Date;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.orcid.persistence.dao.SpamDao;
import org.orcid.persistence.jpa.entities.SpamEntity;

public class SpamDaoImpl implements SpamDao {

    @Resource(name = "entityManager")
    protected EntityManager entityManager;

    @Override
    public Boolean exists(String orcid) {
        TypedQuery<Long> query = entityManager.createQuery("SELECT count(e.orcid) FROM SpamEntity e WHERE e.orcid=:orcid", Long.class);
        query.setParameter("orcid", orcid);
        Long result = query.getSingleResult();
        return (result != null && result > 0);
    }

    @Override
    public SpamEntity create(String orcid, String sourceType, String reporterIp) {
        Date now = new Date();
        SpamEntity e = new SpamEntity();
        e.setCount(1);
        e.setOrcid(orcid);
        e.setSourceType(sourceType);
        e.setReporterIp(reporterIp);
        e.setReportedDate(now);
        entityManager.persist(e);
        return e;
    }

    @Override
    public Boolean incrementCount(String orcid) {
        Query q = entityManager.createNativeQuery("UPDATE spam SET count = count + 1 WHERE orcid=:orcid");
        q.setParameter("orcid", orcid);
        return q.executeUpdate() > 0;
    }

    @Override
    public Boolean remove(String orcid) {
        Query q = entityManager.createNativeQuery("DELETE FROM spam WHERE orcid=:orcid");
        q.setParameter("orcid", orcid);
        return q.executeUpdate() > 0;
    }

    @Override
    public SpamEntity get(String orcid) {
        TypedQuery<SpamEntity> query = entityManager.createQuery("FROM SpamEntity e WHERE e.orcid=:orcid", SpamEntity.class);
        query.setParameter("orcid", orcid);
        return query.getSingleResult();
    }

}
