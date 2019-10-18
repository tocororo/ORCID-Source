package org.orcid.core.common.manager;

import org.orcid.pojo.ajaxForm.SpamRecord;

public interface SpamManager {
    Boolean exists(String orcid);

    SpamRecord create(String orcid, String sourceType, String reporterIp);

    Boolean incrementCount(String orcid);

    Boolean remove(String orcid);

    SpamRecord get(String orcid);
}
