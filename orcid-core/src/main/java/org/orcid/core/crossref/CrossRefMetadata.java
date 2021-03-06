package org.orcid.core.crossref;

import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 
 * @author Will Simpson
 * 
 */
@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class CrossRefMetadata {

    private String doi;

    private float score;

    private float normalizedScore;

    private String title;

    private String fullCitation;

    private String shortCitation;

    private String coins;

    public String getDoi() {
        return doi;
    }

    public void setDoi(String doi) {
        this.doi = doi;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    public float getNormalizedScore() {
        return normalizedScore;
    }

    public void setNormalizedScore(float normalizedScore) {
        this.normalizedScore = normalizedScore;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFullCitation() {
        return fullCitation;
    }

    public void setFullCitation(String fullCitation) {
        this.fullCitation = fullCitation;
    }

    public String getShortCitation() {
        return shortCitation;
    }

    public void setShortCitation(String shortCitation) {
        this.shortCitation = shortCitation;
    }

    public String getCoins() {
        return coins;
    }

    public void setCoins(String coins) {
        this.coins = coins;
    }

}
