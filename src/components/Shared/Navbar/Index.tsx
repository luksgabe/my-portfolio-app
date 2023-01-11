import { useEffect, useState } from "react";
import { useText } from "../../../contexts/TextContext";
import { Logo, NavbaGlobalStyle, Navbar as NavbarContainer, NavBarToggler, NavItem, NavLink, NavMenu } from "./style";
import { Link, animateScroll as scroll } from "react-scroll";

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
      <Logo href="#" changeNavProps={changeNavProps}>Jordan Eriksen</Logo>
      <NavMenu changeNavProps={changeNavProps} togglerClick={togglerClick}>
        <NavItem changeNavProps={changeNavProps}>
          {/* <NavLink href="#Home" changeNavProps={changeNavProps}>{navbar.home}</NavLink> */}
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {navbar.home}
          </Link>
        </NavItem>
        <NavItem changeNavProps={changeNavProps}>
        <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {navbar.about}
          </Link>
        </NavItem>
        <NavItem changeNavProps={changeNavProps}>
          <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              {navbar.services}
            </Link>
        </NavItem>
        <NavItem changeNavProps={changeNavProps}>
          <Link
              to="Experiences"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              {navbar.experiences}
          </Link>
        </NavItem>
        <NavItem changeNavProps={changeNavProps}>
          <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              {navbar.contact}
          </Link>
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