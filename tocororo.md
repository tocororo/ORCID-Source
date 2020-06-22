


Remove from orcid-web/resources/orcid-frontend-web-servlet.xml
    <bean id="socialSignInUtils" class="org.orcid.frontend.spring.web.social.config.SocialSignInUtils" />

## to build
mvn clean install -Dmaven.test.skip=true -Dlicense.skip=true