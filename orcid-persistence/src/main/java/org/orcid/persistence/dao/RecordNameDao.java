package org.orcid.persistence.dao;

import java.util.Date;
import java.util.List;

import org.orcid.persistence.jpa.entities.RecordNameEntity;

/**
 * 
 * @author Angel Montenegro
 * 
 */
public interface RecordNameDao extends GenericDao<RecordNameEntity, Long> {
    boolean exists(String orcid);
    
    RecordNameEntity getRecordName(String orcid, long lastModified);
    
    RecordNameEntity findByCreditName(String creditName);

    boolean updateRecordName(RecordNameEntity recordName);

    Date getLastModified(String orcid);

    List<RecordNameEntity> getRecordNames(List<String> orcids);
}
