import React from 'react'
import { Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import SEO from './seo'
import Header from './header'
import Footer from './footer'
import Container from '../container'
import Navigation from '../navigation'
import GlobalStyle from '../../styles/global'

import theme from '../../styles/theme'

const Layout = ({ title, children }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <>
      <SEO title={title} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Navigation />
          {children}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
