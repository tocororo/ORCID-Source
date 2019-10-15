package org.orcid.persistence.dao.impl;

import javax.annotation.Resource;
import javax.persistence.EntityManager;

import org.orcid.persistence.dao.SpamDao;
import org.orcid.persistence.jpa.entities.SpamEntity;

public class SpamDaoImpl implements SpamDao {

	@Resource(name="entityManager")
    protected EntityManager entityManager;

	@Override
	public Boolean exists(String orcid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean create(String orcid, String sourceType, String reporterIp) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean incrementCount(String orcid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean remove(String orcid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SpamEntity get(String orcid) {
		// TODO Auto-generated method stub
		return null;
	}

}
