package org.orcid.persistence.dao;

import org.orcid.persistence.jpa.entities.SpamEntity;

public interface SpamDao {

    Boolean exists(String orcid);

    SpamEntity create(String orcid, String sourceType, String reporterIp);

    Boolean incrementCount(String orcid);

    Boolean remove(String orcid);

    SpamEntity get(String orcid);
}
