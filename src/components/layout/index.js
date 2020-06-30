import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '@layout/header';
import Footer from '@layout/footer';
import Container from '@components/container';
import Navigation from '@components/navigation';
import LangSwitch from '@components/lang-switch';

import GlobalStyle from '@styles/global';
import theme from '@theme';
import { usePageContext } from '@hooks';

const Layout = ({ children, pageContext: { langKey } }) => {
  usePageContext(langKey);
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
