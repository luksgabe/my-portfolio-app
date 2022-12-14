import styled, { css } from 'styled-components';

import {
  Container as TemplateContainer
} from "../../styles/template";

export {
  ExperiencesSection,
  Container,
  Content,
  ContainerTimeLineLeft,
  ContainerTimeLineRight,
  TimeLineContent,
  TimeLineContentHeader
}

const ExperiencesSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #E7F6F2;
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
  font-family: 'Roboto';
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #E7F6F2;

  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #474e5d;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

    @media screen and (max-width: 600px) {
      left: 31px;
    }
  }
`;

const ContainerTimeLine = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #E7F6F2;
    border: 4px solid #A5C9CA;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &:before {
    @media screen and (max-width: 600px) {
      left: 60px;
      border: medium solid #E7F6F2;
      border-width: 10px 10px 10px 0;
      border-color: transparent #395B64 transparent transparent;
    }
  }
`;

const ContainerTimeLineLeft = styled(ContainerTimeLine)`
  left: 0;

  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #A5C9CA;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #395B64;
    
    @media screen and (max-width: 600px) {
      border-color: transparent #395B64 transparent transparent;
      left: 60px;
      border-width: 10px 10px 10px 0px;
    }
  }

  &:after {
    @media screen and (max-width: 600px) {
      left: 15px;
    }
  }
`;

const ContainerTimeLineRight = styled(ContainerTimeLine)`
  left: 50%;

  @media screen and (max-width: 600px) { 
    left: 0%;
  }

  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #A5C9CA;
    border-width: 10px 10px 10px 0;
    border-color: transparent #395B64 transparent transparent;

    @media screen and (max-width: 600px) { 
      left: 60px;
    }
  }

  &:after {
    left: -16px;
    
    @media screen and (max-width: 600px) { 
      left: 15px;
    }
  }
`;

const TimeLineContent = styled.div`
  background-color: #A5C9CA;
  position: relative;
  border-radius: 6px;

  & > p {
    text-align: left;
    padding: 0px 10px 0px 10px;
    @media screen and (max-width: 300px) {
      font-size: 12px;
    }
  }
`;

const TimeLineContentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  background: #395B64;
  color: #E7F6F2;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  justify-content: center;

  & > h4 {
    @media screen and (max-width: 300px) {
      font-size: 12px;
    }
  }
`;
