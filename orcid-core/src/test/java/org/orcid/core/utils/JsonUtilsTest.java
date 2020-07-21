package org.orcid.core.utils;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.Test;
import org.orcid.jaxb.model.common.Relationship;
import org.orcid.jaxb.model.message.Contributor;
import org.orcid.jaxb.model.message.CreditName;
import org.orcid.jaxb.model.message.WorkContributors;
import org.orcid.jaxb.model.v3.release.common.Url;
import org.orcid.jaxb.model.message.ContributorEmail;

import com.fasterxml.jackson.databind.JsonNode;

/**
 * 
 * @author Will Simpson
 * 
 */
public class JsonUtilsTest {

    @Test
    public void testWorkContributorsToJsonString() {
        WorkContributors workContributors = new WorkContributors();
        Contributor contributor1 = new Contributor();
        workContributors.getContributor().add(contributor1);
        contributor1.setCreditName(new CreditName("A Contributor\u0000"));
        contributor1.setContributorEmail(new ContributorEmail("test@test.com\u0000"));
        String result = JsonUtils.convertToJsonString(workContributors);
        assertEquals(
                "{\"contributor\":[{\"contributorOrcid\":null,\"creditName\":{\"content\":\"A Contributor\",\"visibility\":null},\"contributorEmail\":{\"value\":\"test@test.com\"},\"contributorAttributes\":null}]}",
                result);
    }
    
    @Test
    public void testWorkContributorsV2_0ToJsonString_RemoveNullUnicode() {
        org.orcid.jaxb.model.record_v2.WorkContributors workContributors = new org.orcid.jaxb.model.record_v2.WorkContributors();
        org.orcid.jaxb.model.common_v2.Contributor contributor1 = new org.orcid.jaxb.model.common_v2.Contributor();
        workContributors.getContributor().add(contributor1);
        contributor1.setCreditName(new org.orcid.jaxb.model.common_v2.CreditName("A Contributor\u0000"));
        contributor1.setContributorEmail(new org.orcid.jaxb.model.common_v2.ContributorEmail("test@test.com\u0000"));        
        
        String result = JsonUtils.convertToJsonString(workContributors);
        assertEquals(
                "{\"contributor\":[{\"contributorOrcid\":null,\"creditName\":{\"content\":\"A Contributor\"},\"contributorEmail\":{\"value\":\"test@test.com\"},\"contributorAttributes\":null}]}",
                result);
    }
    
    @Test
    public void testWorkContributorsV3_0ToJsonString_RemoveNullUnicode() {
        org.orcid.jaxb.model.v3.release.record.WorkContributors workContributors = new org.orcid.jaxb.model.v3.release.record.WorkContributors();
        org.orcid.jaxb.model.v3.release.common.Contributor contributor1 = new org.orcid.jaxb.model.v3.release.common.Contributor();
        workContributors.getContributor().add(contributor1);
        contributor1.setCreditName(new org.orcid.jaxb.model.v3.release.common.CreditName("A Contributor\u0000"));
        contributor1.setContributorEmail(new org.orcid.jaxb.model.v3.release.common.ContributorEmail("test@test.com\u0000"));

        String result = JsonUtils.convertToJsonString(workContributors);
        assertEquals(
                "{\"contributor\":[{\"contributorOrcid\":null,\"creditName\":{\"content\":\"A Contributor\"},\"contributorEmail\":{\"value\":\"test@test.com\"},\"contributorAttributes\":null}]}",
                result);
    }
    
    @Test
    public void testWorkExternalIdsV2_0ToJsonString_KeepNullUnicode() {
        org.orcid.jaxb.model.record_v2.ExternalIDs extIds = new org.orcid.jaxb.model.record_v2.ExternalIDs();
        org.orcid.jaxb.model.record_v2.ExternalID extId1 = new org.orcid.jaxb.model.record_v2.ExternalID();
        extId1.setRelationship(org.orcid.jaxb.model.record_v2.Relationship.SELF);
        extId1.setUrl(new org.orcid.jaxb.model.common_v2.Url("https://test.orcid.org"));
        extId1.setValue("extId1\u0000");
        extId1.setType("DOI");
        extIds.getExternalIdentifier().add(extId1);
        String result = JsonUtils.convertToJsonString(extIds);
        assertEquals(
                "{\"externalIdentifier\":[{\"type\":\"DOI\",\"value\":\"extId1\\u0000\",\"url\":{\"value\":\"https://test.orcid.org\"},\"relationship\":\"SELF\"}]}",
                result);
    }
    
    @Test
    public void testWorkExternalIdsV3_0ToJsonString_KeepNullUnicode() {
        org.orcid.jaxb.model.v3.release.record.ExternalIDs extIds = new org.orcid.jaxb.model.v3.release.record.ExternalIDs();
        org.orcid.jaxb.model.v3.release.record.ExternalID extId1 = new org.orcid.jaxb.model.v3.release.record.ExternalID();
        extId1.setRelationship(Relationship.SELF);
        extId1.setUrl(new Url("https://test.orcid.org"));
        extId1.setValue("extId1\u0000");
        extId1.setType("DOI");
        extIds.getExternalIdentifier().add(extId1);
        String result = JsonUtils.convertToJsonString(extIds);
        assertEquals(
                "{\"externalIdentifier\":[{\"type\":\"DOI\",\"value\":\"extId1\\u0000\",\"normalized\":null,\"normalizedError\":null,\"url\":{\"value\":\"https://test.orcid.org\"},\"relationship\":\"SELF\"}]}",
                result);
    }
    
    @Test
    public void testFundingContributorsV2_0ToJsonString_RemoveNullUnicode() {
        org.orcid.jaxb.model.record_v2.FundingContributors fundingContributors = new org.orcid.jaxb.model.record_v2.FundingContributors();
        org.orcid.jaxb.model.record_v2.FundingContributor contributor1 = new org.orcid.jaxb.model.record_v2.FundingContributor();
        fundingContributors.getContributor().add(contributor1);
        contributor1.setCreditName(new org.orcid.jaxb.model.common_v2.CreditName("A Contributor\u0000"));
        contributor1.setContributorEmail(new org.orcid.jaxb.model.common_v2.ContributorEmail("test@test.com\u0000"));        
        
        String result = JsonUtils.convertToJsonString(fundingContributors);
        assertEquals(
                "{\"contributor\":[{\"contributorOrcid\":null,\"creditName\":{\"content\":\"A Contributor\"},\"contributorEmail\":{\"value\":\"test@test.com\"},\"contributorAttributes\":null}]}",
                result);
    }
    
    @Test
    public void testContributorsV3_0ToJsonString_RemoveNullUnicode() {
        org.orcid.jaxb.model.v3.release.record.FundingContributors fundingContributors = new org.orcid.jaxb.model.v3.release.record.FundingContributors();
        org.orcid.jaxb.model.v3.release.record.FundingContributor contributor1 = new org.orcid.jaxb.model.v3.release.record.FundingContributor();
        fundingContributors.getContributor().add(contributor1);
        contributor1.setCreditName(new org.orcid.jaxb.model.v3.release.common.CreditName("A Contributor\u0000"));
        contributor1.setContributorEmail(new org.orcid.jaxb.model.v3.release.common.ContributorEmail("test@test.com\u0000"));

        String result = JsonUtils.convertToJsonString(fundingContributors);
        assertEquals(
                "{\"contributor\":[{\"contributorOrcid\":null,\"creditName\":{\"content\":\"A Contributor\"},\"contributorEmail\":{\"value\":\"test@test.com\"},\"contributorAttributes\":null}]}",
                result);
    }
    
    @Test
    public void testJsonStringToWorkContributors() {
        String jsonString = "{\"contributor\":[{\"contributorOrcid\":null,\"creditName\":{\"content\":\"A Contributor\",\"visibility\":null},\"contributorEmail\":null,\"contributorAttributes\":null}]}";
        WorkContributors workContributors = JsonUtils.<WorkContributors> readObjectFromJsonString(jsonString, WorkContributors.class);
        assertEquals(1, workContributors.getContributor().size());
        assertEquals("A Contributor", workContributors.getContributor().get(0).getCreditName().getContent());
    }

    @Test
    public void testJsonStringToWorkExternalIdentifiersV1_2() {
        String jsonString1_2ExternalIdentifiers = "{\"workExternalIdentifier\":[{\"workExternalIdentifierType\":\"DOI\",\"workExternalIdentifierId\":{\"content\":\"12345\"}}],\"scope\":null}";
        org.orcid.jaxb.model.message.WorkExternalIdentifiers wExtId1_2 = JsonUtils.<org.orcid.jaxb.model.message.WorkExternalIdentifiers> readObjectFromJsonString(jsonString1_2ExternalIdentifiers, org.orcid.jaxb.model.message.WorkExternalIdentifiers.class);
        assertNotNull(wExtId1_2);
        assertNotNull(wExtId1_2.getWorkExternalIdentifier());
        org.orcid.jaxb.model.message.WorkExternalIdentifier extId = wExtId1_2.getWorkExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.message.WorkExternalIdentifierType.DOI, extId.getWorkExternalIdentifierType());
        assertEquals("12345", extId.getWorkExternalIdentifierId().getContent());
        
        String jsonString2_ExternalIdentifiers = "{\"workExternalIdentifier\":[{\"url\":\"http://orcid.org\", \"relationship\":\"SELF\", \"workExternalIdentifierType\":\"DOI\",\"workExternalIdentifierId\":{\"content\":\"67890\"}}],\"scope\":null}";
        wExtId1_2 = JsonUtils.<org.orcid.jaxb.model.message.WorkExternalIdentifiers> readObjectFromJsonString(jsonString2_ExternalIdentifiers, org.orcid.jaxb.model.message.WorkExternalIdentifiers.class);
        assertNotNull(wExtId1_2);
        assertNotNull(wExtId1_2.getWorkExternalIdentifier());
        extId = wExtId1_2.getWorkExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.message.WorkExternalIdentifierType.DOI, extId.getWorkExternalIdentifierType());
        assertEquals("67890", extId.getWorkExternalIdentifierId().getContent());
    }
    
    @Test
    public void testJsonStringToWorkExternalIdentifiersV2_0() {
        String jsonString1_2ExternalIdentifiers = "{\"workExternalIdentifier\":[{\"workExternalIdentifierType\":\"DOI\",\"workExternalIdentifierId\":{\"content\":\"12345\"}}],\"scope\":null}";
        org.orcid.jaxb.model.record_rc1.WorkExternalIdentifiers wExtId2_0 = JsonUtils.<org.orcid.jaxb.model.record_rc1.WorkExternalIdentifiers> readObjectFromJsonString(jsonString1_2ExternalIdentifiers, org.orcid.jaxb.model.record_rc1.WorkExternalIdentifiers.class);
        assertNotNull(wExtId2_0);
        assertNotNull(wExtId2_0.getWorkExternalIdentifier());
        org.orcid.jaxb.model.record_rc1.WorkExternalIdentifier extId = wExtId2_0.getWorkExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.record_rc1.WorkExternalIdentifierType.DOI, extId.getWorkExternalIdentifierType());
        assertEquals("12345", extId.getWorkExternalIdentifierId().getContent());
        assertNull(extId.getUrl());
        assertNull(extId.getRelationship());
        
        String jsonString2_ExternalIdentifiers = "{\"workExternalIdentifier\":[{\"url\":\"http://orcid.org\", \"relationship\":\"SELF\", \"workExternalIdentifierType\":\"DOI\",\"workExternalIdentifierId\":{\"content\":\"67890\"}}],\"scope\":null}";
        wExtId2_0 = JsonUtils.<org.orcid.jaxb.model.record_rc1.WorkExternalIdentifiers> readObjectFromJsonString(jsonString2_ExternalIdentifiers, org.orcid.jaxb.model.record_rc1.WorkExternalIdentifiers.class);
        assertNotNull(wExtId2_0);
        assertNotNull(wExtId2_0.getWorkExternalIdentifier());
        extId = wExtId2_0.getWorkExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.record_rc1.WorkExternalIdentifierType.DOI, extId.getWorkExternalIdentifierType());
        assertEquals("67890", extId.getWorkExternalIdentifierId().getContent());
        assertNotNull(extId.getUrl());
        assertEquals("http://orcid.org", extId.getUrl().getValue());
        assertNotNull(extId.getRelationship());
        assertEquals(org.orcid.jaxb.model.record_rc1.Relationship.SELF, extId.getRelationship());
        
    }
    
    @Test
    public void testJsonStringToFundingExternalIdentifiersV1_2(){
        String jsonString1_2ExternalIdentifiers = "{\"fundingExternalIdentifier\":[{\"type\":\"GRANT_NUMBER\",\"value\":\"123\",\"url\":{\"value\":\"http://orcid.org\"}}]}";
        org.orcid.jaxb.model.message.FundingExternalIdentifiers fExtId1_2 = JsonUtils.<org.orcid.jaxb.model.message.FundingExternalIdentifiers> readObjectFromJsonString(jsonString1_2ExternalIdentifiers, org.orcid.jaxb.model.message.FundingExternalIdentifiers.class);
        assertNotNull(fExtId1_2);
        assertNotNull(fExtId1_2.getFundingExternalIdentifier());
        org.orcid.jaxb.model.message.FundingExternalIdentifier extId = fExtId1_2.getFundingExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.message.FundingExternalIdentifierType.GRANT_NUMBER, extId.getType());
        assertEquals("123", extId.getValue());
        assertNotNull(extId.getUrl());
        assertEquals("http://orcid.org", extId.getUrl().getValue());
        
        String jsonString2_0ExternalIdentifiers = "{\"fundingExternalIdentifier\":[{\"relationship\":\"SELF\",\"type\":\"GRANT_NUMBER\",\"value\":\"456\",\"url\":{\"value\":\"http://orcid.org/updated\"}}]}";
        fExtId1_2 = JsonUtils.<org.orcid.jaxb.model.message.FundingExternalIdentifiers> readObjectFromJsonString(jsonString2_0ExternalIdentifiers, org.orcid.jaxb.model.message.FundingExternalIdentifiers.class);
        extId = fExtId1_2.getFundingExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.message.FundingExternalIdentifierType.GRANT_NUMBER, extId.getType());
        assertEquals("456", extId.getValue());
        assertNotNull(extId.getUrl());
        assertEquals("http://orcid.org/updated", extId.getUrl().getValue());        
    }
    
    @Test
    public void testJsonStringToFundingExternalIdentifiersV2_0(){
        String jsonString1_2ExternalIdentifiers = "{\"externalIdentifier\":[{\"type\":\"GRANT_NUMBER\",\"value\":\"123\",\"url\":{\"value\":\"http://orcid.org\"}}]}";
        org.orcid.jaxb.model.record_rc1.FundingExternalIdentifiers fExtId2_0 = JsonUtils.<org.orcid.jaxb.model.record_rc1.FundingExternalIdentifiers> readObjectFromJsonString(jsonString1_2ExternalIdentifiers, org.orcid.jaxb.model.record_rc1.FundingExternalIdentifiers.class);
        assertNotNull(fExtId2_0);
        assertNotNull(fExtId2_0.getExternalIdentifier());
        org.orcid.jaxb.model.record_rc1.FundingExternalIdentifier extId = fExtId2_0.getExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.record_rc1.FundingExternalIdentifierType.GRANT_NUMBER, extId.getType());
        assertEquals("123", extId.getValue());
        assertNotNull(extId.getUrl());
        assertEquals("http://orcid.org", extId.getUrl().getValue());
        
        String jsonString2_0ExternalIdentifiers = "{\"externalIdentifier\":[{\"relationship\":\"SELF\",\"type\":\"GRANT_NUMBER\",\"value\":\"456\",\"url\":{\"value\":\"http://orcid.org/updated\"}}]}";
        fExtId2_0 = JsonUtils.<org.orcid.jaxb.model.record_rc1.FundingExternalIdentifiers> readObjectFromJsonString(jsonString2_0ExternalIdentifiers, org.orcid.jaxb.model.record_rc1.FundingExternalIdentifiers.class);
        assertNotNull(fExtId2_0);
        assertNotNull(fExtId2_0.getExternalIdentifier());
        extId = fExtId2_0.getExternalIdentifier().get(0);
        assertEquals(org.orcid.jaxb.model.record_rc1.FundingExternalIdentifierType.GRANT_NUMBER, extId.getType());
        assertEquals("456", extId.getValue());
        assertNotNull(extId.getUrl());
        assertEquals("http://orcid.org/updated", extId.getUrl().getValue());
        assertEquals(org.orcid.jaxb.model.record_rc1.Relationship.SELF, extId.getRelationship());        
    }
    
    @Test
    public void testJsonFileToJsonNode() throws URISyntaxException {
        Path path = Paths.get(getClass().getClassLoader()
                .getResource("json_object.json").toURI());
        File test = path.toFile();
        assertTrue(test.exists());
        
        JsonNode rootNode = JsonUtils.read(test);        
        assertEquals("string_value", rootNode.get("string").asText());
        assertFalse(rootNode.get("boolean").asBoolean());
        assertEquals(123456, rootNode.get("number").asInt());
        assertEquals(3, rootNode.get("array").size());
        assertEquals("element1", rootNode.get("array").get(0).asText());
        assertEquals("element2", rootNode.get("array").get(1).asText());
        assertEquals("element3", rootNode.get("array").get(2).asText());
        assertEquals("id", rootNode.get("object").get("att1").asText());
        assertEquals("name", rootNode.get("object").get("att2").asText());
        assertEquals("size", rootNode.get("object").get("att3").asText());
        assertEquals("object_1", rootNode.get("object_array").get(0).get("id").asText());
        assertEquals("object_2", rootNode.get("object_array").get(1).get("id").asText());
        assertEquals("object_3", rootNode.get("object_array").get(2).get("id").asText());
    }    
}
