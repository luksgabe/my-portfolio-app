import styled, { css } from "styled-components";
import { GlobalArea, GlobalParallax, Module } from "../../styles/parallax";
import { 
  H1 as H1Text,
  H2 as H2Text,
} from "../../styles/template";

export {
  HomeParallax,
  H1,
  H2,
}

const HomeParallax = styled(Module)`
  ${GlobalParallax}
  background-image: url("Images/Home.jpg");
`;

const localH1 = css`
	font-size: 80px;
	font-weight: 400;
	line-height: 93.75px;
	color: #fff;
  justify-content: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const localH2 = css`
	font-size: 30px;
	font-weight: 400;
	line-height: 35px;
	color: #fff;
  justify-content: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H1 = styled(H1Text)`
  ${localH1}
  ${GlobalArea}
`;

const H2 = styled(H2Text)`
  ${localH2}
  ${GlobalArea}
`;