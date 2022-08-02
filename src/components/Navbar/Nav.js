import React from "react";
import { StyledNav } from "./Nav.styled";

import avatar from '../../assets/image-avatar.jpg'
import moon from '../../assets/icon-moon.svg'
import { NavLogo } from "./NavLogo/NavLogo";
import { NavButton } from "./NavButton/NavButton";

const Nav = () => {
  
  return (
    <StyledNav>
      <NavLogo />
      <div className="nav_buttons">
        <NavButton src={moon} alt="moon icon" />
        <NavButton src={avatar} alt="avatar" />
      </div>
    </StyledNav>
  )
}

export default Nav;