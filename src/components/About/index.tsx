import { useEffect, useRef } from "react";
import { Icon } from "../../../public/Icons";
import { 
  AboutSection,
  Container,
  Content,
  DownloadCVButton,
  GitHubButton,
  GroupButtons,
  H1,
  ImageContainer, 
  Img,
  Infos,
  LinkedInButton
} from "./style";

export const About = () => {
  const imgConfig = {
    duration: 3000
  }

  const contentConfig = {
    duration: 3000,
    distance: '150%',
    origin: 'bottom',
  }

  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    async function animate() {
      if (imgRef.current && contentRef.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(imgRef.current, imgConfig);
        sr().reveal(contentRef.current, contentConfig);
      }
    }
    animate();
  }, []);

  const downloadCvFileHandle = () => {
    const element = document.createElement("a");
    element.href =`${process.env.APP_HOST}/files/Curriculo-Lucas-Gabriel.pdf`;
    element.download = "Currículo Lucas Gabriel.pdf";
    document.body.appendChild(element);
    element.click();
  }

  const linkedinPageHandler = () => window.location.assign('https://www.linkedin.com/in/lucas-gabriel-07916b80/');
  
  const githubPageHandler = () => window.location.assign('https://github.com/luksgabe');


  return (
    <AboutSection id="About">
      <Container>
        <H1>Sobre mim</H1>
        <ImageContainer>
          <Img ref={imgRef} src="Images/dev-image.jpg" alt="foto do programador full stack"/>
        </ImageContainer>
        <Content ref={contentRef} >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Iure necessitatibus odio esse deserunt? Magnam perspiciatis necessitatibus iusto quo 
             nesciunt quia ipsum esse, 
             id nostrum provident eius obcaecati laudantium exercitationem eum!
          </p>
          <Infos>
            <span><strong>Nome</strong>: Jordan Eriksen</span>
            <span><strong>Idade</strong>: 32</span>
            <span><strong>Fone</strong>: (011)12490-4444</span>
            <span><strong>Endereço</strong>: av example</span>
            <span><strong>Experiência</strong>: 6 anos</span>
            <span><strong>Freelancer</strong>: Disponivel</span>
            <span><strong>Skype</strong>: jordK</span>
            <span><strong>E-mail</strong>: jordamEriksen@yahoo.com</span>
          </Infos>
          <GroupButtons>
            <DownloadCVButton onClick={downloadCvFileHandle} value="download">Download CV</DownloadCVButton>
            <LinkedInButton onClick={linkedinPageHandler}>Linked<Icon name="inIcon"/></LinkedInButton>
            <GitHubButton onClick={githubPageHandler}>GitHub<Icon name="github"/></GitHubButton>
          </GroupButtons>
        </Content>
      </Container>
    </AboutSection>
  );
}