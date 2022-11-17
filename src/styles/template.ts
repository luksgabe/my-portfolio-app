import styled, { css } from "styled-components";

export {
	Wrapper,
	Main,
	PageContainer,
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

const PageContainer = styled.div`
	  width: 100%;
		max-width: 720px;
		margin: 0 auto;
		padding: 0 20px;
`

const HText = css`
	display: flex;
	font-weight: 900;
	color: var(--pattern);
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