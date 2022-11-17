import styled, { css } from "styled-components";

export {
  Module,
  GlobalParallax,
  GlobalArea
}


const Module = styled.section`
  > p {
    margin-bottom: 40px;
  }

  > h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const GlobalParallax = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -moz-background-size: cover;

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
  }
`;

const GlobalArea = css`
  visibility: hidden;
`