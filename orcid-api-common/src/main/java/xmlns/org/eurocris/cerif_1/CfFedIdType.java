//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2015.10.26 at 11:29:18 AM GMT 
//


package xmlns.org.eurocris.cerif_1;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElements;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for cfFedId__Type complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="cfFedId__Type">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cfFedIdId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type" minOccurs="0"/>
 *         &lt;element name="cfInstId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
 *         &lt;element name="cfFedId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;group ref="{urn:xmlns:org:eurocris:cerif-1.6-2}cfCoreClass__Group"/>
 *         &lt;choice maxOccurs="unbounded" minOccurs="0">
 *           &lt;element name="cfFedId_Class" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfCoreClassWithFraction__Type"/>
 *           &lt;element name="cfFedId_Srv">
 *             &lt;complexType>
 *               &lt;complexContent>
 *                 &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                   &lt;sequence>
 *                     &lt;element name="cfSrvId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
 *                     &lt;group ref="{urn:xmlns:org:eurocris:cerif-1.6-2}cfCoreClassWithFraction__Group"/>
 *                   &lt;/sequence>
 *                 &lt;/restriction>
 *               &lt;/complexContent>
 *             &lt;/complexType>
 *           &lt;/element>
 *         &lt;/choice>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "cfFedId__Type", propOrder = {
    "cfFedIdId",
    "cfInstId",
    "cfFedId",
    "cfClassId",
    "cfClassSchemeId",
    "cfStartDate",
    "cfEndDate",
    "cfFedIdClassOrCfFedIdSrv"
})
public class CfFedIdType {

    protected String cfFedIdId;
    @XmlElement(required = true)
    protected String cfInstId;
    @XmlElement(required = true)
    protected String cfFedId;
    @XmlElement(required = true)
    protected String cfClassId;
    @XmlElement(required = true)
    protected String cfClassSchemeId;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar cfStartDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar cfEndDate;
    @XmlElements({
        @XmlElement(name = "cfFedId_Class", type = CfCoreClassWithFractionType.class),
        @XmlElement(name = "cfFedId_Srv", type = CfFedIdType.CfFedIdSrv.class)
    })
    protected List<Object> cfFedIdClassOrCfFedIdSrv;

    /**
     * Gets the value of the cfFedIdId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfFedIdId() {
        return cfFedIdId;
    }

    /**
     * Sets the value of the cfFedIdId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfFedIdId(String value) {
        this.cfFedIdId = value;
    }

    /**
     * Gets the value of the cfInstId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfInstId() {
        return cfInstId;
    }

    /**
     * Sets the value of the cfInstId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfInstId(String value) {
        this.cfInstId = value;
    }

    /**
     * Gets the value of the cfFedId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCfFedId() {
        return cfFedId;
    }

    /**
     * Sets the value of the cfFedId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCfFedId(String value) {
        this.cfFedId = value;
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
     * Gets the value of the cfFedIdClassOrCfFedIdSrv property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the cfFedIdClassOrCfFedIdSrv property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCfFedIdClassOrCfFedIdSrv().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CfCoreClassWithFractionType }
     * {@link CfFedIdType.CfFedIdSrv }
     * 
     * 
     */
    public List<Object> getCfFedIdClassOrCfFedIdSrv() {
        if (cfFedIdClassOrCfFedIdSrv == null) {
            cfFedIdClassOrCfFedIdSrv = new ArrayList<Object>();
        }
        return this.cfFedIdClassOrCfFedIdSrv;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="cfSrvId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
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
    @XmlType(name = "", propOrder = {
        "cfSrvId",
        "cfClassId",
        "cfClassSchemeId",
        "cfStartDate",
        "cfEndDate",
        "cfFraction"
    })
    public static class CfFedIdSrv {

        @XmlElement(required = true)
        protected String cfSrvId;
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
         * Gets the value of the cfSrvId property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getCfSrvId() {
            return cfSrvId;
        }

        /**
         * Sets the value of the cfSrvId property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setCfSrvId(String value) {
            this.cfSrvId = value;
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

}
