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
 * <p>Java class for cfPers_DC__Type complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="cfPers_DC__Type">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cfPersId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
 *         &lt;element name="cfDCId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="cfDCScheme" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;group ref="{urn:xmlns:org:eurocris:cerif-1.6-2}cfCoreClassWithFraction__Group"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "cfPers_DC__Type", propOrder = {
    "cfPersId",
    "cfDCId",
    "cfDCScheme",
    "cfClassId",
    "cfClassSchemeId",
    "cfStartDate",
    "cfEndDate",
    "cfFraction"
})
public class CfPersDCType {

    @XmlElement(required = true)
    protected String cfPersId;
    @XmlElement(required = true)
    protected String cfDCId;
    @XmlElement(required = true)
    protected String cfDCScheme;
    @XmlElement(required = true)
    protected String cfClassId;
    @XmlElement(required = true)
    protected String cfClassSchemeId;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar cfStartDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar cfEndDate;
    protected Float cfFraction;

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
     * Gets the value of the cfDCId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfDCId() {
        return cfDCId;
    }

    /**
     * Sets the value of the cfDCId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfDCId(String value) {
        this.cfDCId = value;
    }

    /**
     * Gets the value of the cfDCScheme property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfDCScheme() {
        return cfDCScheme;
    }

    /**
     * Sets the value of the cfDCScheme property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfDCScheme(String value) {
        this.cfDCScheme = value;
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

}
