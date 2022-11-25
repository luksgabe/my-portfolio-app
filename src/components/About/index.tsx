import { 
  AboutSection,
  Container,
  Content,
  GroupButtons,
  H1,
  ImageContainer, 
  Img,
  Infos
} from "./style";

export const About = () => {

  return (
    // <AboutSection id="Sobre">
    //   <Container>
    //     <H1>Sobre mim</H1>
    //     <ImageContainer>
    //       <Img src="Images/lucas-dev.jpg" alt="foto do programador full stack"/>
    //     </ImageContainer>
    //     <Content>
    //       <p>Formado em Análise e Desenvolvimento de Sistemas com experiência em programação web utilizando tecnologias .NET e front-end.
    //           Apaixonado por tecnologia(desenvolvimento de software, Machine Learning, IoT, etc...), jogos digitais, cinema e futebol. De perfil investigativo e analítico.
    //           Profissional com sede de conhecimento, sempre procurando as melhores práticas de desenvolvimento e novas tendências tecnológicas para a resolução de problemas com o
    //           foco em sistemas web, sites institucionais e e-commerce.
    //       </p>
    //       <Infos>
    //         <span><strong>Nome</strong>: Lucas Gabriel</span>
    //         <span><strong>Idade</strong>: 28</span>
    //         <span><strong>Fone</strong>: (51)996880646</span>
    //         <span><strong>Endereço</strong>: Av Protásio Alves 7355</span>
    //         <span><strong>Experiência</strong>: 6 anos</span>
    //         <span><strong>Freelancer</strong>: Disponivel</span>
    //         <span><strong>Skype</strong>: luksgabe</span>
    //         <span><strong>E-mail</strong>: llucasgabriel94@gmail.com</span>
    //       </Infos>
    //       <GroupButtons>
    //         <button style={{background: '#A5C9CA'}}>Download CV</button>
    //         <button style={{background: '#0E76A8'}}>Linkedin</button>
    //         <button style={{color:'#2C3333', background: '#868E96'}}>GitHub</button>
    //       </GroupButtons>
    //     </Content>
    //   </Container>
    // </AboutSection>
    <AboutSection id="Sobre">
      <Container>
        <H1>Sobre mim</H1>
        <ImageContainer>
          <Img src="Images/lucas-dev.jpg" alt="foto do programador full stack"/>
        </ImageContainer>
        <Content>
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
            <button style={{background: '#A5C9CA'}}>Download CV</button>
            <button style={{background: '#0E76A8'}}>Linkedin</button>
            <button style={{color:'#2C3333', background: '#868E96'}}>GitHub</button>
          </GroupButtons>
        </Content>
      </Container>
    </AboutSection>
  );
}