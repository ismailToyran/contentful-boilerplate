import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '@layout/header';
import Footer from '@layout/footer';
import Container from '@components/container';
import Navigation from '@components/navigation';
import LangSwitch from '@components/lang-switch';
import GlobalStyle from '@styles/global';
import theme from '@theme';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Navigation />
          <LangSwitch />
        </Container>
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
