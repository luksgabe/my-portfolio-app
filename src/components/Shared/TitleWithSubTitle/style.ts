import styled from "styled-components"

import {
  H1 as H1Template,
  H2 as H2Template
} from "../../../styles/template";

export {
  H1,
  H2,
}

const H1 = styled(H1Template)`
  color: #E7F6F2;
  font-weight: 400;
  font-size: 35px;
  position: relative;
  padding-top: 1rem;
  width: 100%;

  @media (max-width: 400px) {
      font-size: 20px;
      text-align: center;
  }

  @media (max-width: 300px) {
      font-size: 20px;
      text-align: center;
  }
`

const H2 = styled(H2Template)`
  color: #E7F6F2;
  font-weight: 400;
  font-size: 60px;
  position: relative;
  width: 100%;
  margin-top: -25px;

  @media (max-width: 400px) {
      font-size: 40px;
  }

  @media (max-width: 300px) {
      font-size: 30px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 17rem;
    height: 1px;
    bottom: 0;
    border-bottom: 4px solid #E7F6F2;
    transition: all 0.3s ease-in-out;


    @media (max-width: 900px) {
      width: 60%;
    }
  }
`