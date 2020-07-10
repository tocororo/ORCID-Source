package org.orcid.persistence.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.orcid.persistence.jpa.entities.ProfileEntity;
import org.orcid.persistence.jpa.entities.ResearcherUrlEntity;
import org.orcid.test.DBUnitTest;
import org.orcid.test.OrcidJUnit4ClassRunner;
import org.orcid.utils.DateFieldsOnBaseEntityUtils;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@RunWith(OrcidJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:orcid-persistence-context.xml" })
public class ResearcherUrlDaoTest extends DBUnitTest {

    private static String USER_ORCID = "0000-0000-0000-0003";
    private static String OTHER_USER_ORCID = "0000-0000-0000-0001";
    
    @Resource(name = "researcherUrlDao")
    private ResearcherUrlDao dao;

    @BeforeClass
    public static void initDBUnitData() throws Exception {
        initDBUnitData(Arrays.asList("/data/SubjectEntityData.xml", "/data/SourceClientDetailsEntityData.xml",
                "/data/ProfileEntityData.xml"));
    }

    @AfterClass
    public static void removeDBUnitData() throws Exception {
        removeDBUnitData(Arrays.asList("/data/ProfileEntityData.xml", "/data/SubjectEntityData.xml"));
    }

    @Test
    @Rollback(true)
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void testfindResearcherUrls() {
        List<ResearcherUrlEntity> researcherUrls = dao.getResearcherUrls("4444-4444-4444-4443", 0L);
        assertNotNull(researcherUrls);
        assertEquals(6, researcherUrls.size());
    }

    @Test
    @Rollback(true)
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void testfindResearcherUrl() {
        ResearcherUrlEntity researcherUrl = dao.getResearcherUrl("4444-4444-4444-4441", 1L);
        assertNotNull(researcherUrl);
        assertEquals("444_1", researcherUrl.getUrlName());
        
        try {
            researcherUrl = dao.getResearcherUrl("4444-4444-4444-5555", 1L);
            fail();
        } catch(NoResultException e) {
            
        }
        
    }

    @Test
    @Rollback(true)
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void testAddResearcherUrl() throws IllegalAccessException {
        assertEquals(6, dao.getResearcherUrls("4444-4444-4444-4443", 0L).size());
        ResearcherUrlEntity newRUrl = new ResearcherUrlEntity();
        DateFieldsOnBaseEntityUtils.setDateFields(newRUrl, new Date());
        newRUrl.setClientSourceId("APP-5555555555555555");
        newRUrl.setUrl("www.4443.com");
        newRUrl.setUrlName("test");
        newRUrl.setUser(new ProfileEntity("4444-4444-4444-4443"));
        newRUrl.setVisibility("PUBLIC");
        newRUrl = dao.merge(newRUrl);
        assertNotNull(newRUrl);
        assertEquals(7, dao.getResearcherUrls("4444-4444-4444-4443", 0L).size());
        for(ResearcherUrlEntity rUrl : dao.getResearcherUrls("4444-4444-4444-4443", 0L)) {
            if("www.4443.com".equals(rUrl.getUrl())) {
                assertEquals("APP-5555555555555555", rUrl.getElementSourceId());
            }
        }
    }

    @Test
    @Rollback(true)
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void testDeleteResearcherUrl() {
        List<ResearcherUrlEntity> researcherUrls = dao.getResearcherUrls("4444-4444-4444-4443", 0L);
        assertNotNull(researcherUrls);
        assertEquals(6, researcherUrls.size());
        dao.deleteResearcherUrl("4444-4444-4444-4443", researcherUrls.get(0).getId());
        researcherUrls = dao.getResearcherUrls("4444-4444-4444-4443", 0L);
        assertNotNull(researcherUrls);
        assertEquals(5, researcherUrls.size());
    }

    @Test
    @Rollback(true)
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void testCannotAddDuplicatedResearcherUrl() throws IllegalAccessException {
        try {
            ResearcherUrlEntity newRUrl = new ResearcherUrlEntity();
            DateFieldsOnBaseEntityUtils.setDateFields(newRUrl, new Date());
            newRUrl.setClientSourceId("4444-4444-4444-4443");
            newRUrl.setUrl("http://www.researcherurl2.com?id=1");
            newRUrl.setUrlName("test");
            newRUrl.setUser(new ProfileEntity("4444-4444-4444-4443"));
            newRUrl.setVisibility("PUBLIC");
            newRUrl = dao.merge(newRUrl);
            assertNotNull(newRUrl);
            fail();
        } catch (PersistenceException e) {

        }
    }
    
    @Test
    public void removeAllTest() {
        long initialNumber = dao.countAll();
        long elementThatBelogsToUser = dao.getResearcherUrls(USER_ORCID, 0L).size();
        long otherUserElements = dao.getResearcherUrls(OTHER_USER_ORCID, 0L).size();
        assertEquals(5, elementThatBelogsToUser);
        assertTrue(elementThatBelogsToUser < initialNumber);
        assertEquals(3, otherUserElements);
        //Remove all elements that belongs to USER_ORCID
        dao.removeAllResearcherUrls(USER_ORCID);
        
        long finalNumberOfElements = dao.countAll();
        long finalNumberOfOtherUserElements = dao.getResearcherUrls(OTHER_USER_ORCID, 0L).size();
        long finalNumberOfElementsThatBelogsToUser = dao.getResearcherUrls(USER_ORCID, 0L).size();
        assertEquals(0, finalNumberOfElementsThatBelogsToUser);
        assertEquals(otherUserElements, finalNumberOfOtherUserElements);
        assertEquals((initialNumber - elementThatBelogsToUser), finalNumberOfElements);
    }
    
    @Test
    public void mergeTest() {
        ResearcherUrlEntity e = dao.find(20L);
        e.setDisplayIndex(1000L);
        Date dateCreated = e.getDateCreated();
        Date lastModified = e.getLastModified();
        dao.merge(e);

        ResearcherUrlEntity updated = dao.find(20L);
        assertEquals(dateCreated, updated.getDateCreated());
        assertTrue(updated.getLastModified().after(lastModified));
    }
    
    @Test
    public void persistTest() {
        ResearcherUrlEntity e = new ResearcherUrlEntity();
        e.setUser(new ProfileEntity("0000-0000-0000-0002")); 
        e.setVisibility("PUBLIC");
        e.setUrl("https://orcid.org");
        
        dao.persist(e);
        assertNotNull(e.getId());
        assertNotNull(e.getDateCreated());
        assertNotNull(e.getLastModified());
        assertEquals(e.getDateCreated(), e.getLastModified());
        
        ResearcherUrlEntity e2 = dao.find(e.getId());
        assertNotNull(e2.getDateCreated());
        assertNotNull(e2.getLastModified());
        assertEquals(e.getLastModified(), e2.getLastModified());
        assertEquals(e.getDateCreated(), e2.getDateCreated());
        assertEquals(e2.getDateCreated(), e2.getLastModified());
    }
}