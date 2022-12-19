import styled from "styled-components"

export {
  FooterContainer,
  ExternalLinksContainer,
  Image
}

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 20vh;
  background: #2C3333;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  color: #E7F6F2;

  & > h4 {
    width: 45%;

    @media screen and (max-width: 440px) {
      text-align: center;
      width: 100%;
    }
  }
`

const ExternalLinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 55%;

  & > div {
    display: flex;
    width: 15rem;
    justify-content: space-between;
  }

  @media screen and (max-width: 440px) {
      justify-content: center;
      width: 100%;
  }
`;

const Image = styled.img`
  display:flex;
  width: 60px;
  height: 57px;
`;


