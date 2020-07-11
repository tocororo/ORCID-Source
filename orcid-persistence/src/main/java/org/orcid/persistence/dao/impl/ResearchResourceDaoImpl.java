package org.orcid.persistence.dao.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.orcid.persistence.dao.ResearchResourceDao;
import org.orcid.persistence.jpa.entities.ResearchResourceEntity;
import org.springframework.transaction.annotation.Transactional;

public class ResearchResourceDaoImpl extends GenericDaoImpl<ResearchResourceEntity, Long> implements ResearchResourceDao{

    public ResearchResourceDaoImpl() {
        super(ResearchResourceEntity.class);
    }
    
    public ResearchResourceEntity getResearchResource(String userOrcid, Long researchResourceId) {
        Query query = entityManager.createQuery("from ResearchResourceEntity where profile.id=:userOrcid and id=:researchResourceId");
        query.setParameter("userOrcid", userOrcid);
        query.setParameter("researchResourceId", Long.valueOf(researchResourceId));
        return (ResearchResourceEntity) query.getSingleResult();
    }

    @Override
    @Transactional
    public boolean removeResearchResource(String userOrcid, Long researchResourceId) {
        Query queryItem = entityManager.createQuery("delete from ResearchResourceItemEntity where research_resource_id=:researchResourceId");
        queryItem.setParameter("researchResourceId", researchResourceId);
        queryItem.executeUpdate();
        Query query = entityManager.createQuery("delete from ResearchResourceEntity where profile.id=:userOrcid and id=:researchResourceId");
        query.setParameter("userOrcid", userOrcid);
        query.setParameter("researchResourceId", researchResourceId);
        return query.executeUpdate() > 0 ? true : false;
    }    
    
    //note these are not cacheable entities as they require a session to work.
    @Override
    public List<ResearchResourceEntity> getByUser(String userOrcid, long lastModified) {
        TypedQuery<ResearchResourceEntity> query = entityManager.createQuery("from ResearchResourceEntity where profile.id=:userOrcid", ResearchResourceEntity.class);
        query.setParameter("userOrcid", userOrcid);
        return query.getResultList();
    }

    @Override
    public void removeResearchResources(String userOrcid) {
        Query queryItem = entityManager.createQuery("delete from ResearchResourceItemEntity where research_resource_id in (SELECT id from ResearchResourceEntity where profile.id=:userOrcid)");
        queryItem.setParameter("userOrcid", userOrcid);
        queryItem.executeUpdate();

        Query query = entityManager.createQuery("delete from ResearchResourceEntity where profile.id = :userOrcid");
        query.setParameter("userOrcid", userOrcid);
        query.executeUpdate();
    }

    @Override
    public boolean updateVisibilities(String orcid, ArrayList<Long> researchResourceIds, String visibility) {
        Query query = entityManager
                .createQuery("update ResearchResourceEntity set visibility=:visibility, lastModified=now() where id in (:researchResourceIds) and  profile.id=:orcid");
        query.setParameter("researchResourceIds", researchResourceIds);
        query.setParameter("visibility", visibility);
        query.setParameter("orcid", orcid);
        return query.executeUpdate() > 0 ? true : false;
    }

    /**
     * Sets the display index of a research resource
     * @param researchResourceId
     *          The rr id
     * @param orcid
     *          The rr owner 
     * @return true if the rr index was correctly set                  
     * */
    @Override
    @Transactional
    public boolean updateToMaxDisplay(String orcid, Long researchResourceId) {
        Query query = entityManager.createNativeQuery("UPDATE research_resource SET display_index=(select coalesce(MAX(display_index) + 1, 0) from research_resource where orcid=:orcid and id != :researchResourceId ), last_modified=now() WHERE id=:researchResourceId");        
        query.setParameter("researchResourceId", researchResourceId);
        query.setParameter("orcid", orcid);
        return query.executeUpdate() > 0;
    }

    @Override
    public Boolean hasPublicResearchResources(String orcid) {
        Query query = entityManager.createNativeQuery("SELECT count(*) FROM research_resource WHERE orcid=:orcid AND visibility='PUBLIC'");
        query.setParameter("orcid", orcid);
        Long result = ((BigInteger)query.getSingleResult()).longValue();
        return (result != null && result > 0);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<BigInteger> getResearchResourcesReferencingOrgs(List<Long> orgIds) {
        Query query = entityManager.createNativeQuery("SELECT distinct rr.id FROM research_resource rr LEFT JOIN research_resource_org rro ON rr.id = rro.research_resource_id LEFT JOIN research_resource_item rri ON rr.id = rri.research_resource_id LEFT JOIN research_resource_item_org rrio ON rri.id = rrio.research_resource_item_id WHERE rro.org_id IN (:orgIds) OR rrio.org_id IN (:orgIds)");
        query.setParameter("orgIds", orgIds);
        return query.getResultList();
    }

}
