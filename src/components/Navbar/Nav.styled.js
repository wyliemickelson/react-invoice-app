import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  background-color: #373B53;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .nav_buttons {
    display: flex;
    align-items: center;

    * + * {
    border-left: 1px solid #494E6E;
    }
  }
`