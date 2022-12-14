import { useEffect, useState } from "react";
import { useText } from "../../../contexts/TextContext";
import { Logo, NavbaGlobalStyle, Navbar as NavbarContainer, NavBarToggler, NavItem, NavLink, NavMenu } from "./style";

export const Navbar = () => {
  const { navbar } = useText();

  const [changeNavProps, setChangeNavProps] = useState<boolean>(false);
  const [togglerClick, setTogglerClick] = useState<boolean>(false);

  const navLinkHandle = (scrollValue: number) => {
    if(scrollValue > 520) {
      setChangeNavProps(true);
    } else if(scrollValue < 520){
      setChangeNavProps(false);
    }
  }

  const navBarTogglerClickHandler = () => {
    setTogglerClick(!togglerClick);
  }

  useEffect(() => {
    window.onscroll = event => {
      navLinkHandle(document.documentElement.scrollTop);
    }
  }, [])

  return (
    <NavbarContainer changeNavProps={changeNavProps}>
      <NavbaGlobalStyle />
      <Logo href="#" changeNavProps={changeNavProps}>Lucas Gabriel</Logo>
      <NavMenu changeNavProps={changeNavProps} togglerClick={togglerClick}>
        <NavItem>
          <NavLink href="#Home" changeNavProps={changeNavProps}>{navbar.home}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Sobre" changeNavProps={changeNavProps}>{navbar.about}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Services" changeNavProps={changeNavProps}>{navbar.services}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Experiences" changeNavProps={changeNavProps}>{navbar.experiences}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Contact" changeNavProps={changeNavProps}>{navbar.contact}</NavLink>
        </NavItem>
      </NavMenu>
      <NavBarToggler onClick={navBarTogglerClickHandler} changeNavProps={changeNavProps} togglerClick={togglerClick}>
        <span></span>
        <span></span>
        <span></span>
      </NavBarToggler>
    </NavbarContainer>
  );
}