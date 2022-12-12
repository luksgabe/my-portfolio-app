import styled from "styled-components";

export {
  Box,
  Image
}

const Box = styled.div`
  display: flex;
  width: 362px;
  height: 223px;
  border: 2px solid #D7E6E2;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 1.0s ease-in-out;
  z-index:0;
  color: #E7F6F2;



  @media (max-width: 1050px) {
      width: 300px;
  }
  @media (max-width: 1225px) {
      width: 280px;
  }

  @media (max-width: 950px) {
    width: 260px;
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: flex;
  justify-content: center;
  width: 197.67px;
  height: 151px;
  border-radius: 50px;
`