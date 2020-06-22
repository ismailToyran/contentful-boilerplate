import React from 'react';
import { ThemeProvider } from 'styled-components';

import SEO from './seo';
import Header from './header';
import Footer from './footer';
import Container from '../container';
import Navigation from '../navigation';
import GlobalStyle from '../../styles/global';

import theme from '../../styles/theme';

const Layout = ({ title, children, noHeader, noNavigation, noFooter }) => {
  return (
    <>
      <SEO title={title} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {!noHeader && <Header />}
        {!noNavigation && (
          <Container>
            <Navigation />
          </Container>
        )}
        {children}
        {!noFooter && <Footer />}
      </ThemeProvider>
    </>
  );
};

export default Layout;
