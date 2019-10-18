package org.orcid.pojo.ajaxForm;

import java.io.Serializable;
import java.util.Date;

public class SpamRecord implements Serializable {
    private static final long serialVersionUID = -3804287919129012252L;
    private Text orcid;
    private Integer count;
    private String sourceType;
    private String reporterIp;
    private Date reportedDate;

    public Text getOrcid() {
        return orcid;
    }

    public void setOrcid(Text orcid) {
        this.orcid = orcid;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getSourceType() {
        return sourceType;
    }

    public void setSourceType(String sourceType) {
        this.sourceType = sourceType;
    }

    public String getReporterIp() {
        return reporterIp;
    }

    public void setReporterIp(String reporterIp) {
        this.reporterIp = reporterIp;
    }

    public Date getReportedDate() {
        return reportedDate;
    }

    public void setReportedDate(Date reportedDate) {
        this.reportedDate = reportedDate;
    }

}
