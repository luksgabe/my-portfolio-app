import { ExternalLinksContainer, FooterContainer, Image } from "./styled"

export const Footer = () => {
  return (
    <FooterContainer>
      <h4>@Copyright Lucas Gabriel</h4>
      <ExternalLinksContainer>
        <div>
          <a href="https://www.linkedin.com/in/lucas-gabriel-07916b80/">
            <Image src="Images/linkedin.png" alt="Linkedin"/>
          </a>
          <a href="https://github.com/luksgabe">
            <Image src="Images/github.png" alt="Github"/>
          </a>
          <a href="https://www.instagram.com/luksgabe/">
            <Image src="Images/logotipo-do-instagram.png" alt="Linkedin"/>
          </a>  
        </div>
      </ExternalLinksContainer>
    </FooterContainer>
  )
}