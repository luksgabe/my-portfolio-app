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
          <Img ref={imgRef} src="Images/lucas-dev.jpg" alt="foto do programador full stack"/>
        </ImageContainer>
        <Content ref={contentRef} >
          <p>Formado em Análise e Desenvolvimento de Sistemas com experiência em programação web utilizando tecnologias .NET e front-end.
            Apaixonado por tecnologia(desenvolvimento de software, Machine Learning, IoT, etc...), jogos digitais, cinema e futebol. De perfil investigativo e analítico.
            Profissional com sede de conhecimento, sempre procurando as melhores práticas de desenvolvimento e novas tendências tecnológicas para a resolução de problemas com o
            foco em sistemas web, sites institucionais e e-commerce.
          </p>
          <Infos>
            <span><strong>Nome</strong>: Lucas Gabriel</span>
            <span><strong>Idade</strong>: 28</span>
            <span><strong>Fone</strong>: (51)996880646</span>
            <span><strong>Endereço</strong>: Av Protásio Alves 7355</span>
            <span><strong>Experiência</strong>: 6 anos</span>
            <span><strong>Freelancer</strong>: Disponivel</span>
            <span><strong>Skype</strong>: luksgabe</span>
            <span><strong>E-mail</strong>: llucasgabriel94@gmail.com</span>
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