import styled from 'styled-components';

import {
  Container as TemplateContainer
} from "../../styles/template";

import { H1 as H1About } from "../../components/About/style"

export {
  ContactSection,
  Container,
  H1,
  Content,
}

const ContactSection = styled.section`
  display: flex;
  width: 100%;
  height: 80vh;
  background: #A5C9CA;
`;

const Container = styled(TemplateContainer)`
  flex-direction: row;
  flex-wrap: wrap; 
  width: 100%;


  @media (max-width: 600px) {
    padding:70px 0 0 0 ;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-self: baseline;
  flex-direction: column;
  font-size: 22px;
  font-weight: 400;
  color: #E7F6F2;

  @media (max-width: 350px) {
    font-size: 16px;
  }
`;


const H1 = styled(H1About)`
  padding-left: 0;
  @media (max-width: 450px) {
    font-size: 45px;
  }
  
  @media (max-width: 300px) {
      font-size: 30px;
  }

  &:before {
    width: 17rem;

    @media (max-width: 900px) {
      width: 60%;
    }
    @media (max-width: 300px) {
      width: 40%;
    }
  }
`;