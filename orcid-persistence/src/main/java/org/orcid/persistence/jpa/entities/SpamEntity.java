package org.orcid.persistence.jpa.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "work")
public class SpamEntity {

	private String orcid;
	private Integer count;
	private String sourceType;
	private String reporterIp;
	private Date reportedDate;

	public String getOrcid() {
		return orcid;
	}

	public void setOrcid(String orcid) {
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
