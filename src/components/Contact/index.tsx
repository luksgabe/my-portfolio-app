
import TitleWithSubtitle from "../Shared/TitleWithSubTitle/Index";
import { ContactSection, Container, Content, H1 } from "./style";

export const Contact = () => {
  return (
    <ContactSection id="Contact">
      <Container>
        <H1>Entre em contato</H1>
        <Content>
          <span><strong>E-mail</strong>: jordamEriksen@yahoo.com</span>
          <span><strong>Whatsapp</strong>: +55(011)12490-4444</span>
          <span><strong>Linkedin</strong>: <a href="https://www.linkedin.com/in/jordam-Erikem-07916b80/">in/jordam-Erikem-07916b80</a></span>
        </Content>
      </Container>
    </ContactSection>
  );
}