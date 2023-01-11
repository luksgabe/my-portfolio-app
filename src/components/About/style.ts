import Image from "next/image";
import styled from "styled-components";
import { GlobalArea } from "../../styles/parallax";

import { H1 as H1Template, Container as TemplateContainer } from "../../styles/template";

export {
  AboutSection,
  Container,
  ImageContainer,
  ImageStyle,
  Content,
  H1,
  Infos,
  GroupButtons,
  DownloadCVButton,
  LinkedInButton,
  GitHubButton,
}

const AboutSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #2C3333;
  
  @media (max-width: 850px) and (max-height: 1180px) { //Ipad air
    min-height: 65vh;
  }

  @media (max-width: 912px) and (max-height: 1368px) { //surface pro
    min-height: 45vh;
  }

  @media (max-width: 1280px) and (max-height: 800px) { //nest hub max
    min-height: 70vh;
  }
`;

const Container = styled(TemplateContainer)`
  flex-direction: row;
  flex-wrap: wrap; 
  width: 100%;

  @media (max-width: 850px) and (max-height: 1180px) {
    height: fit-content;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-start;
  visibility: hidden;
  box-sizing: content-box;
  ${GlobalArea}

  @media (max-width: 900px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    height: 50vh;
  }

  @media (max-width: 500px) and (max-height: 915px) { /* IPhone XR */
    height: 40vh;
  }

  @media (max-width: 400px) and (max-height: 740px) { /* IPhone SE */
    height: 50vh;
  }
`;

const ImageStyle = styled(Image) `
  display: flex !important;
  min-width: auto !important;
  width: 15rem !important;
  min-height: auto !important;
  height: 300px !important;
  border-radius: 50%;
  

  @media (max-width: 300px) {
    width: 70% !important;
    height: auto !important;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  ${GlobalArea}
  
  @media (max-width: 600px) {
    width: 100% !important;
  }

  @media (max-width: 415px) {
    padding: 0px 15px 0px 15px;
  }

  @media (max-width: 300px) {
    padding: 0;
  }

  & > p {
    color: #E7F6F2;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 300;
    font-style: normal;
    font-family: 'Roboto';
    
    @media (max-width: 300px) {
      font-size: 12px;
    }

  }

  @media (max-width: 900px) {
    width: 60%;
  }
`;

const H1 = styled(H1Template)`
  color: #E7F6F2;
  font-weight: 400;
  font-size: 60px;
  position: relative;
  padding-top: 1rem;
  width: 100%;
  padding-left: 25rem;

  &:before {
    content: "";
    position: absolute;
    width: 12rem;
    height: 1px;
    bottom: 0;
    border-bottom: 4px solid #E7F6F2;
    transition: all 0.3s ease-in-out;
    @media (max-width: 900px) {
      width: 60%;
    }
    @media (max-width: 600px) {
      width: 40%;
    }
  }

    @media (max-width: 950px) {
      width: 100%;
      justify-content: center;
      padding-left: 0;
    }

    @media (max-width: 300px) {
      font-size: 30px;
    }

`;

const Infos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 213px;
  border: 2px solid #E7F6F2;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;

  & > span {
    color: #E7F6F2;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      width: 100%;
      justify-content: start;
      padding-left: 1rem;
    }

    @media (max-width: 300px) {
      padding:0;
      font-size: 12px;
    }

  }
`;

const GroupButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 1rem;
  justify-content: space-around;
`;

const ButtonAbout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E7F6F2;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 567;
  font-size: 18px;
  line-height: 21px;
  width: 230px;
  height: 49px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 1rem;

  & > svg {
    display: flex;
    margin: 0 0 9px -16px;
  }

  @media (max-width: 1130px) {
    width: 30%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const DownloadCVButton = styled(ButtonAbout)`
  background: #A5C9CA;
`;

const LinkedInButton = styled(ButtonAbout)`
  background: #0E76A8;
`;

const GitHubButton = styled(ButtonAbout)`
  background: #868E96;
  color: #2C3333;
`;