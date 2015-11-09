//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2015.10.26 at 11:29:18 AM GMT 
//


package xmlns.org.eurocris.cerif_1;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for cfPers_ResProd__Type complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="cfPers_ResProd__Type">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cfPersId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
 *         &lt;element name="cfResProdId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
 *         &lt;group ref="{urn:xmlns:org:eurocris:cerif-1.6-2}cfCoreClassWithFraction__Group"/>
 *         &lt;element name="cfConditions" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="cfAvailability" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="cfPrice" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfAmount__Type" minOccurs="0"/>
 *         &lt;element name="cfIPR" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="cfOrder" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "cfPers_ResProd__Type", propOrder = {
    "cfPersId",
    "cfResProdId",
    "cfClassId",
    "cfClassSchemeId",
    "cfStartDate",
    "cfEndDate",
    "cfFraction",
    "cfConditions",
    "cfAvailability",
    "cfPrice",
    "cfIPR",
    "cfOrder"
})
public class CfPersResProdType {

    @XmlElement(required = true)
    protected String cfPersId;
    @XmlElement(required = true)
    protected String cfResProdId;
    @XmlElement(required = true)
    protected String cfClassId;
    @XmlElement(required = true)
    protected String cfClassSchemeId;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar cfStartDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar cfEndDate;
    protected Float cfFraction;
    protected String cfConditions;
    protected String cfAvailability;
    protected CfAmountType cfPrice;
    protected String cfIPR;
    protected Integer cfOrder;

    /**
     * Gets the value of the cfPersId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfPersId() {
        return cfPersId;
    }

    /**
     * Sets the value of the cfPersId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfPersId(String value) {
        this.cfPersId = value;
    }

    /**
     * Gets the value of the cfResProdId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfResProdId() {
        return cfResProdId;
    }

    /**
     * Sets the value of the cfResProdId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfResProdId(String value) {
        this.cfResProdId = value;
    }

    /**
     * Gets the value of the cfClassId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfClassId() {
        return cfClassId;
    }

    /**
     * Sets the value of the cfClassId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfClassId(String value) {
        this.cfClassId = value;
    }

    /**
     * Gets the value of the cfClassSchemeId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfClassSchemeId() {
        return cfClassSchemeId;
    }

    /**
     * Sets the value of the cfClassSchemeId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfClassSchemeId(String value) {
        this.cfClassSchemeId = value;
    }

    /**
     * Gets the value of the cfStartDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCfStartDate() {
        return cfStartDate;
    }

    /**
     * Sets the value of the cfStartDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCfStartDate(XMLGregorianCalendar value) {
        this.cfStartDate = value;
    }

    /**
     * Gets the value of the cfEndDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCfEndDate() {
        return cfEndDate;
    }

    /**
     * Sets the value of the cfEndDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCfEndDate(XMLGregorianCalendar value) {
        this.cfEndDate = value;
    }

    /**
     * Gets the value of the cfFraction property.
     * 
     * @return
     *     possible object is
     *     {@link Float }
     *     
     */
    public Float getCfFraction() {
        return cfFraction;
    }

    /**
     * Sets the value of the cfFraction property.
     * 
     * @param value
     *     allowed object is
     *     {@link Float }
     *     
     */
    public void setCfFraction(Float value) {
        this.cfFraction = value;
    }

    /**
     * Gets the value of the cfConditions property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfConditions() {
        return cfConditions;
    }

    /**
     * Sets the value of the cfConditions property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfConditions(String value) {
        this.cfConditions = value;
    }

    /**
     * Gets the value of the cfAvailability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfAvailability() {
        return cfAvailability;
    }

    /**
     * Sets the value of the cfAvailability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfAvailability(String value) {
        this.cfAvailability = value;
    }

    /**
     * Gets the value of the cfPrice property.
     * 
     * @return
     *     possible object is
     *     {@link CfAmountType }
     *     
     */
    public CfAmountType getCfPrice() {
        return cfPrice;
    }

    /**
     * Sets the value of the cfPrice property.
     * 
     * @param value
     *     allowed object is
     *     {@link CfAmountType }
     *     
     */
    public void setCfPrice(CfAmountType value) {
        this.cfPrice = value;
    }

    /**
     * Gets the value of the cfIPR property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfIPR() {
        return cfIPR;
    }

    /**
     * Sets the value of the cfIPR property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfIPR(String value) {
        this.cfIPR = value;
    }

    /**
     * Gets the value of the cfOrder property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getCfOrder() {
        return cfOrder;
    }

    /**
     * Sets the value of the cfOrder property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setCfOrder(Integer value) {
        this.cfOrder = value;
    }

}
