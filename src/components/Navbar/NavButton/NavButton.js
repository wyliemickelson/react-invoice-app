import React from 'react'
import { StyledNavButton } from './NavButton.styled'

export const NavButton = ({ src, alt }) => {
  return (
    <StyledNavButton>
      <button><img src={src} alt={alt} /></button>
    </StyledNavButton>
  )
}
