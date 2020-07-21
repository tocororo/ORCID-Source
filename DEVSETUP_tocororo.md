

CREATE DATABASE orcid;
CREATE USER orcid WITH PASSWORD 'orcid'; 
GRANT ALL PRIVILEGES ON DATABASE orcid to orcid;

CREATE DATABASE statistics; 
CREATE USER statistics WITH PASSWORD 'statistics'; 
GRANT ALL PRIVILEGES ON DATABASE statistics to statistics;

CREATE USER orcidro WITH PASSWORD 'orcidro';
GRANT CONNECT ON DATABASE orcid to orcidro;
GRANT SELECT ON ALL TABLES IN SCHEMA public to orcidro;

CREATE DATABASE features;
GRANT ALL PRIVILEGES ON DATABASE features to orcid;

CREATE DATABASE message_listener;
GRANT ALL PRIVILEGES ON DATABASE message_listener to orcid;



CREATE USER dw_user WITH PASSWORD 'dw_user';


-Dorg.apache.tomcat.util.buf.UDecoder.ALLOW_ENCODED_SLASH=true -Dcom.mailgun.testmode=no -Dorg.orcid.message-listener.properties=classpath:message-listener.properties -Dorg.orcid.message-listener.development_mode=true -Dorg.orcid.activemq.config.file=classpath:orcid-activemq.properties -Dorg.orcid.persistence.messaging.enabled=true -Dorg.orcid.persistence.path="/Users/malayo/orcidmq"

## to build
mvn clean install -Dmaven.test.skip=true -Dlicense.skip=true