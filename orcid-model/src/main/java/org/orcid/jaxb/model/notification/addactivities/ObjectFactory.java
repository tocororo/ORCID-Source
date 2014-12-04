/**
 * =============================================================================
 *
 * ORCID (R) Open Source
 * http://orcid.org
 *
 * Copyright (c) 2012-2014 ORCID, Inc.
 * Licensed under an MIT-Style License (MIT)
 * http://orcid.org/open-source-license
 *
 * This copyright and license information (including a link to the full license)
 * shall be included in its entirety in all copies or substantial portion of
 * the software.
 *
 * =============================================================================
 */
//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.11.24 at 04:27:39 PM GMT 
//

package org.orcid.jaxb.model.notification.addactivities;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.namespace.QName;

import org.orcid.jaxb.model.common.ClientId;
import org.orcid.jaxb.model.common.OrcidId;
import org.orcid.jaxb.model.common.PutCode;
import org.orcid.jaxb.model.common.Source;
import org.orcid.jaxb.model.notification.NotificationType;

/**
 * This object contains factory methods for each Java content interface and Java
 * element interface generated in the
 * org.orcid.jaxb.model.notification.addactivities package.
 * <p>
 * An ObjectFactory allows you to programatically construct new instances of the
 * Java representation for XML content. The Java representation of XML content
 * can consist of schema derived interfaces and classes representing the binding
 * of schema type definitions, element declarations and model groups. Factory
 * methods for each of these are provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ArchivedDate_QNAME = new QName("http://www.orcid.org/ns/orcid", "archivedDate");
    private final static QName _ActivityType_QNAME = new QName("http://www.orcid.org/ns/orcid", "activityType");
    private final static QName _ReadDate_QNAME = new QName("http://www.orcid.org/ns/orcid", "readDate");
    private final static QName _CreatedDate_QNAME = new QName("http://www.orcid.org/ns/orcid", "createdDate");
    private final static QName _ActivityName_QNAME = new QName("http://www.orcid.org/ns/orcid", "activityName");
    private final static QName _ExternalIdValue_QNAME = new QName("http://www.orcid.org/ns/orcid", "externalIdValue");
    private final static QName _ExternalIdType_QNAME = new QName("http://www.orcid.org/ns/orcid", "externalIdType");
    private final static QName _NotificationType_QNAME = new QName("http://www.orcid.org/ns/orcid", "notificationType");
    private final static QName _SourceName_QNAME = new QName("http://www.orcid.org/ns/orcid", "sourceName");
    private final static QName _SentDate_QNAME = new QName("http://www.orcid.org/ns/orcid", "sentDate");
    private final static QName _Host_QNAME = new QName("http://www.orcid.org/ns/orcid", "host");

    /**
     * Create a new ObjectFactory that can be used to create new instances of
     * schema derived classes for package:
     * org.orcid.jaxb.model.notification.addactivities
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link PutCode }
     * 
     */
    public PutCode createPutCode() {
        return new PutCode();
    }

    /**
     * Create an instance of {@link ExternalId }
     * 
     */
    public ExternalId createExternalId() {
        return new ExternalId();
    }

    /**
     * Create an instance of {@link OrcidId }
     * 
     */
    public OrcidId createOrcidId() {
        return new OrcidId();
    }

    /**
     * Create an instance of {@link ClientId }
     * 
     */
    public ClientId createClientId() {
        return new ClientId();
    }

    /**
     * Create an instance of {@link AuthorizationUrl }
     * 
     */
    public AuthorizationUrl createAuthorizationUrl() {
        return new AuthorizationUrl();
    }

    /**
     * Create an instance of {@link Source }
     * 
     */
    public Source createSource() {
        return new Source();
    }

    /**
     * Create an instance of {@link NotificationAddActivities }
     * 
     */
    public NotificationAddActivities createNotification() {
        return new NotificationAddActivities();
    }

    /**
     * Create an instance of {@link Activities }
     * 
     */
    public Activities createActivities() {
        return new Activities();
    }

    /**
     * Create an instance of {@link Activity }
     * 
     */
    public Activity createActivity() {
        return new Activity();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}
     * {@link XMLGregorianCalendar }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "archivedDate")
    public JAXBElement<XMLGregorianCalendar> createArchivedDate(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_ArchivedDate_QNAME, XMLGregorianCalendar.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "activityType")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    public JAXBElement<String> createActivityType(String value) {
        return new JAXBElement<String>(_ActivityType_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}
     * {@link XMLGregorianCalendar }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "readDate")
    public JAXBElement<XMLGregorianCalendar> createReadDate(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_ReadDate_QNAME, XMLGregorianCalendar.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}
     * {@link XMLGregorianCalendar }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "createdDate")
    public JAXBElement<XMLGregorianCalendar> createCreatedDate(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_CreatedDate_QNAME, XMLGregorianCalendar.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "activityName")
    public JAXBElement<String> createActivityName(String value) {
        return new JAXBElement<String>(_ActivityName_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "externalIdValue")
    public JAXBElement<String> createExternalIdValue(String value) {
        return new JAXBElement<String>(_ExternalIdValue_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "externalIdType")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    public JAXBElement<String> createExternalIdType(String value) {
        return new JAXBElement<String>(_ExternalIdType_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}
     * {@link NotificationType }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "notificationType")
    public JAXBElement<NotificationType> createNotificationType(NotificationType value) {
        return new JAXBElement<NotificationType>(_NotificationType_QNAME, NotificationType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "sourceName")
    public JAXBElement<String> createSourceName(String value) {
        return new JAXBElement<String>(_SourceName_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}
     * {@link XMLGregorianCalendar }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "sentDate")
    public JAXBElement<XMLGregorianCalendar> createSentDate(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_SentDate_QNAME, XMLGregorianCalendar.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}
     * 
     */
    @XmlElementDecl(namespace = "http://www.orcid.org/ns/orcid", name = "host")
    public JAXBElement<String> createHost(String value) {
        return new JAXBElement<String>(_Host_QNAME, String.class, null, value);
    }

}
