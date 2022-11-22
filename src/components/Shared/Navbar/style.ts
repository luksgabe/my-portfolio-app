import styled, { createGlobalStyle } from "styled-components"

export {
  NavbaGlobalStyle,
  Navbar,
  NavMenu,
  NavItem,
  NavLink,
  Logo,
  NavBarToggler
}

interface NavProps {
  changeNavProps?: boolean;
  togglerClick?: boolean;
}

const NavbaGlobalStyle = createGlobalStyle`
  li {
    list-style: none;
  }
  a {
    color: #E7F6F2;
    text-decoration: none;
    transition: 0.3s;
  }
`;

const Navbar = styled.nav<NavProps>`
    display: flex;
    height: ${(props) => (props.changeNavProps ? '70px' : '100px')};
    min-height: 70px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 34px;
    background:  ${(props) => (props.changeNavProps ? '#E7F6F2' : 'rgba(0, 0, 0, 0.6)')};
    top: 0;
    position: fixed;
    z-index: 1;
    transition: all 0.3s ease-in-out;
`;

const Logo = styled.a<NavProps>`
  color: ${(props) => (props.changeNavProps ? '#2C3333' : '#E7F6F2')};
  font-size: 2rem;
  font-weight: bold;
`;

const NavMenu = styled.ul<NavProps>`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    position: fixed;
    left: -100%;
    top: ${(props) => (props.changeNavProps ? '54px' : '100px')};
    gap: 0;
    border-radius: 0 0 20px 20px;
    background: ${(props) => (props.changeNavProps ? '#E7F6F2' : 'rgba(0, 0, 0, 0.6)')};
    text-align: center;
    flex-direction: column;
    padding: 30px 0px 0px 0px;
    width: 100%;
    transition: 0.3s;

    ${(props => (props.togglerClick ? 
      `left: 0;`: ''
  ))}
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    margin: 16px 0;
  }
`
const NavLink = styled.a<NavProps>`
  color: ${(props) => (props.changeNavProps ? '#2C3333' : '#E7F6F2')};
  transition: 0.5s ease;
  &:hover {
    color: ${(props) => (props.changeNavProps ? '#395B64' : '#0088d2')};;
  }
`;

const NavBarToggler = styled.div<NavProps>`
  display: none;
  cursor: pointer;

  > span {
    display: block;
    width: 28px;
    height: 3px;
    border-radius: 2px;
    margin: 5px auto;
    background-color: ${(props) => (props.changeNavProps ? '#2C3333' : '#E7F6F2')};
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: block;

    ${(props => (props.togglerClick ? 
      `span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
      `
      : ''
    ))}
  }
`;



