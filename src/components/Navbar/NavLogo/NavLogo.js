import React from 'react'
import { StyledNavLogo } from './NavLogo.styled'

import logo from '../../../assets/logo.svg'

export const NavLogo = () => {
  return (
    <StyledNavLogo>
      <img src={logo} alt="site logo" />
    </StyledNavLogo>
  )
}
