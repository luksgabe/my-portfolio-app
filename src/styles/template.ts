import styled, { css } from "styled-components";

export {
	Wrapper,
	Main,
	Container,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6
}

const Wrapper = styled.div`
		width: 100%;
		margin: 0 auto;
`;

const Main = styled.main`
	display: block;
	background-color: #E7F6F2;
`;

const Container = styled.div`
	  display: flex;
		width: 100%;
		margin: 0 auto;
		padding: 70px 45px 45px 45px;
`

const HText = css`
	display: flex;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 900;
	line-height: 71px;
	color: var(--white);
	width: auto;
	height: max-content;
`;

const H1 = 	styled.h1`
	${HText}
`;
const H2 = 	styled.h2`
	${HText}
`;
const H3 = 	styled.h3`
	${HText}
`;
const H4 = 	styled.h4`
	${HText}
`;
const H5 = 	styled.h5`
	${HText}
`;
const H6 = 	styled.h6`
	${HText}
`;