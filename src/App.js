import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.style';
import Nav from './components/Navbar/Nav';
import Invoices from './components/Invoices';
import { theme } from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
        <Invoices />
      </>
    </ThemeProvider>
  );
}

export default App;
