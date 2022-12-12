import styled from "styled-components";

import {
  Container as TemplateContainer
} from "../../styles/template";

export {
  ServiceSection,
  Container,
  Content,
  TextContainer
}

const ServiceSection = styled.section`
    display: flex;
    width:100%;
    min-height:100vh;
    background:#395B64;
`;

const Container = styled(TemplateContainer)`
  flex-direction: row;
  flex-wrap: wrap; 
  width: 100%;

  @media (max-width: 600px) {
    padding:70px 0 0 0 ;
  }
`;

const TextContainer = styled.div`
  display: flex;
  width:100%;
  padding-top: 1rem;
  justify-content: center;  
  height: auto;
  min-height: 30vh;

  & > p {
      width: 600px;
      text-align: center;
      color: #E7F6F2;
      transition: all 0.05s ease-in-out;
    }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 3rem;
  z-index: 0;

  &.swiper-button-next {
    top: 130px !important;
  }
  &.swiper-button-prev {
    top: 130px !important;
  }
`;
