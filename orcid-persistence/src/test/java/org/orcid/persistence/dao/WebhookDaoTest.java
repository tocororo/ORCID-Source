package org.orcid.persistence.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.orcid.persistence.jpa.entities.ClientDetailsEntity;
import org.orcid.persistence.jpa.entities.ProfileEntity;
import org.orcid.persistence.jpa.entities.WebhookEntity;
import org.orcid.persistence.jpa.entities.keys.WebhookEntityPk;
import org.orcid.test.DBUnitTest;
import org.orcid.test.OrcidJUnit4ClassRunner;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;

@RunWith(OrcidJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:orcid-persistence-context.xml" })
public class WebhookDaoTest extends DBUnitTest {

    @Resource
    private WebhookDao webhookDao;

    @Resource
    private ProfileDao profileDao;

    @Resource
    private ClientDetailsDao clientDetailsDao;

    private static final List<String> DATA_FILES = Arrays.asList("/data/SourceClientDetailsEntityData.xml",
            "/data/ProfileEntityData.xml", "/data/WorksEntityData.xml", "/data/ClientDetailsEntityData.xml",
            "/data/Oauth2TokenDetailsData.xml", "/data/WebhookEntityData.xml");

    @BeforeClass
    public static void initDBUnitData() throws Exception {
        initDBUnitData(DATA_FILES);
    }

    @AfterClass
    public static void removeDBUnitData() throws Exception {
        List<String> reversedDataFiles = new ArrayList<String>(DATA_FILES);
        Collections.reverse(reversedDataFiles);
        removeDBUnitData(reversedDataFiles);
    }

    @Test
    @Rollback(true)
    public void testMergeFindAndRemove() {
        ProfileEntity profile = new ProfileEntity("1234-1234-1234-1234");
        profileDao.merge(profile);
        ProfileEntity clientProfile = new ProfileEntity("4444-4444-4444-4449");
        profileDao.merge(clientProfile);
        ClientDetailsEntity clientDetails = new ClientDetailsEntity();
        clientDetails.setGroupProfileId(clientProfile.getId());
        clientDetails.setId(clientProfile.getId());
        clientDetailsDao.merge(clientDetails);
        WebhookEntity webhook = new WebhookEntity();
        webhook.setProfile(profile);
        webhook.setUri("http://semantico.com/orcid/1234");
        webhook.setClientDetails(clientDetails);
        webhook = webhookDao.merge(webhook);

        assertNotNull(webhook.getId());
        assertNotNull(webhook.getDateCreated());
        assertNotNull(webhook.getLastModified());
        assertEquals(webhook.getDateCreated(), webhook.getLastModified());
        
        WebhookEntityPk pk = new WebhookEntityPk();
        pk.setProfile(profile);
        pk.setUri("http://semantico.com/orcid/1234");
        WebhookEntity retrieved = webhookDao.find(pk);

        assertNotNull(retrieved);
        assertEquals("1234-1234-1234-1234", retrieved.getProfile().getId());
        assertEquals("http://semantico.com/orcid/1234", retrieved.getUri());
        assertEquals("4444-4444-4444-4449", retrieved.getClientDetails().getClientId());
        assertTrue(retrieved.isEnabled());
        assertEquals(0, retrieved.getFailedAttemptCount());
        assertNull(retrieved.getLastFailed());
        assertNotNull(retrieved.getDateCreated());
        assertNotNull(retrieved.getLastModified());
        assertEquals(webhook.getLastModified(), retrieved.getLastModified());
        assertEquals(webhook.getDateCreated(), retrieved.getDateCreated());
        assertEquals(retrieved.getDateCreated(), retrieved.getLastModified());

        webhookDao.remove(pk);
        retrieved = webhookDao.find(pk);
        assertNull(retrieved);
    }

    @Test
    @Rollback(true)
    public void testFindWebhooksReadyToProcess() {
        Date now = new Date();
        List<WebhookEntity> results = webhookDao.findWebhooksReadyToProcess(now, 5, 10);
        assertNotNull(results);
        assertEquals(1, results.size());
        Set<String> orcids = new HashSet<>();
        for (WebhookEntity result : results) {
            orcids.add(result.getProfile().getId());
        }
        assertTrue(orcids.contains("4444-4444-4444-4443"));
    }

    @Test
    @Rollback(true)
    public void testFindWebhooksReadyToProcessWhenIsNotReadyForRetry() {
        Date now = new Date();
        WebhookEntityPk pk = new WebhookEntityPk();
        pk.setProfile(profileDao.find("4444-4444-4444-4443"));
        pk.setUri("http://nowhere.com/orcid/4444-4444-4444-4443");
        WebhookEntity webhook = webhookDao.find(pk);
        webhook.setLastFailed(new Date(now.getTime() - 120 * 1000));
        webhook.setFailedAttemptCount(1);
        webhookDao.merge(webhook);

        List<WebhookEntity> results = webhookDao.findWebhooksReadyToProcess(now, 5, 10);
        assertNotNull(results);
        assertEquals(0, results.size());
    }

    @Test
    @Rollback(true)
    public void testCountWebhooksReadyToProcess() {
        Date now = new Date();
        long count = webhookDao.countWebhooksReadyToProcess(now, 5);
        assertNotNull(count);
        assertEquals(1, count);
    }

    @Test
    public void mergeTest() {
        ProfileEntity p = new ProfileEntity("4444-4444-4444-4444");
        WebhookEntityPk pk = new WebhookEntityPk(p, "http://nowhere.com/orcid/4444-4444-4444-4444");
        WebhookEntity e = webhookDao.find(pk);
        e.setFailedAttemptCount(100);
        Date dateCreated = e.getDateCreated();
        Date lastModified = e.getLastModified();
        webhookDao.merge(e);

        WebhookEntity updated = webhookDao.find(pk);
        assertEquals(dateCreated, updated.getDateCreated());
        assertTrue(updated.getLastModified().after(lastModified));
    }
       
}
