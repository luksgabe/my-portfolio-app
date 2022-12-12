import styled, { createGlobalStyle } from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
    scroll-behavior: smooth;

    color: #242424;
    font-family: Roboto;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--pattern);
  }
  :root {
  --primary: #2C3333;
  --secondary: #395B64;
  --tertiary: #A5C9CA;
  --pattern: #E7F6F2
  --white: #D9D9D9;
  --gray: #7A7A7A;
  }
`;


export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  background-color: #E7F6F2;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  & span {
    font-size: 16px;
    font-weight: bold;
    font-family: Roboto;
  }

  & > hr {
    border: 0.5px solid #7A7A7A;
    width: 90%;
  }
  
  & > div {
    overflow-y: scroll;

    & > p {
      text-align: center;
      font-family: Roboto;
    }
  }

  & > button  {
    display: flex;
    align-self: center;
    background: #395B64;
    width: 5rem;
    height: 3rem;
    border-radius: 15px;
    color: #E7F6F2;
    font-weight: 500;
    justify-content: center;
    align-items: center;
  }
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;