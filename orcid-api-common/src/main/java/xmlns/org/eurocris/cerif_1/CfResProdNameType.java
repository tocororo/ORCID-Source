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
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for cfResProdName__Type complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="cfResProdName__Type">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cfResProdId" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfId__Type"/>
 *         &lt;element name="cfName" type="{urn:xmlns:org:eurocris:cerif-1.6-2}cfMLangString__Type"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "cfResProdName__Type", propOrder = {
    "cfResProdId",
    "cfName"
})
public class CfResProdNameType {

    @XmlElement(required = true)
    protected String cfResProdId;
    @XmlElement(required = true)
    protected CfMLangStringType cfName;

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
     * Gets the value of the cfName property.
     * 
     * @return
     *     possible object is
     *     {@link CfMLangStringType }
     *     
     */
    public CfMLangStringType getCfName() {
        return cfName;
    }

    /**
     * Sets the value of the cfName property.
     * 
     * @param value
     *     allowed object is
     *     {@link CfMLangStringType }
     *     
     */
    public void setCfName(CfMLangStringType value) {
        this.cfName = value;
    }

}
