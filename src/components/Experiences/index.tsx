import { ReactElement, useState } from "react";
import ReactHtmlParser from 'react-html-parser'; 
import { JobExperience } from "../../models/JobExperience"
import TitleWithSubtitle from "../Shared/TitleWithSubTitle/Index"
import { Container, ContainerTimeLineLeft, ContainerTimeLineRight, Content, ExperiencesSection, TimeLineContent, TimeLineContentHeader } from "./style";

export const Experiences = () => {
  
  const jobExperienceList: JobExperience[] = [
    {
      id: 1,
      companyName: "DBC Company",
      companyPosition: ".Net Full Stack",
      date: "June 2017 - Dezember 2022",
      description: `
      Trabalho no desenvolvimento do portal da vendedora, sistema que permite gerenciar recursos das lojas da Arezzo.
      <br />
      Tecnologias usadas:
      <br />
      - .Net 5
      <br />
      - React
      <br />
      - PostgreSql
      <br />
      - Docker
      <br />
      - ElasticSearch
      `
    },
    {
      id: 2,
      companyName: "DBC Company",
      companyPosition: ".Net Full Stack",
      date: "06/22 - 12/22",
      description: `
      Trabalho no desenvolvimento do portal da vendedora, sistema que permite gerenciar recursos das lojas da Arezzo.
      <br />
      Tecnologias usadas:
      <br />
      - .Net 5
      <br />
      - React
      <br />
      - PostgreSql
      <br />
      - Docker
      <br />
      - ElasticSearch
      `
    },
    {
      id: 3,
      companyName: "DBC Company",
      companyPosition: ".Net Full Stack",
      date: "06/22 - 12/22",
      description: `
      Trabalho no desenvolvimento do portal da vendedora, sistema que permite gerenciar recursos das lojas da Arezzo.
      <br />
      Tecnologias usadas:
      <br />
      - .Net 5
      <br />
      - React
      <br />
      - PostgreSql
      <br />
      - Docker
      <br />
      - ElasticSearch
      `
    },
    {
      id: 4,
      companyName: "DBC Company",
      companyPosition: ".Net Full Stack",
      date: "06/22 - 12/22",
      description: `
      Trabalho no desenvolvimento do portal da vendedora, sistema que permite gerenciar recursos das lojas da Arezzo.
      <br />
      Tecnologias usadas:
      <br />
      - .Net 5
      <br />
      - React
      <br />
      - PostgreSql
      <br />
      - Docker
      <br />
      - ElasticSearch
      `
    },
    {
      id: 5,
      companyName: "DBC Company",
      companyPosition: ".Net Full Stack",
      date: "06/22 - 12/22",
      description: `
      Trabalho no desenvolvimento do portal da vendedora, sistema que permite gerenciar recursos das lojas da Arezzo.
      <br />
      Tecnologias usadas:
      <br />
      - .Net 5
      <br />
      - React
      <br />
      - PostgreSql
      <br />
      - Docker
      <br />
      - ElasticSearch
      `
    }
  ];
  
  const [listExperience, setListExperience] = useState(jobExperienceList)
  
  const renderContainerTimeLine = (exp:JobExperience,  index: number): ReactElement => {
    if(index % 2 === 0) {
      return (
        <ContainerTimeLineLeft key={exp.id}>
          <TimeLineContent>
            <TimeLineContentHeader>
              <h4>{exp.companyName}  {exp.date}</h4>
            </TimeLineContentHeader>
            <p>{ ReactHtmlParser (exp.description) }</p>
          </TimeLineContent>
        </ContainerTimeLineLeft>
      )
    } else return (
      <ContainerTimeLineRight key={exp.id}>
        <TimeLineContent>
          <TimeLineContentHeader>
            <h4>{exp.companyName}  {exp.date}</h4>
          </TimeLineContentHeader>
          <p>{ ReactHtmlParser (exp.description) }</p>
        </TimeLineContent>
      </ContainerTimeLineRight>
    )
    
  }

  return (
      <ExperiencesSection id="Experiences">
        <Container>
          <TitleWithSubtitle title={'Minha jornada'} subTitle={'Minhas Experiências'} color={"#2C3333"} />
          <Content>
            {
              listExperience.map((exp, index) => {
                return renderContainerTimeLine(exp, index);
              })
            }
          </Content>
        </Container>
      </ExperiencesSection>
  )
}