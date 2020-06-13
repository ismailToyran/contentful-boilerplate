import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

import SEO from './seo'
import Header from './header'
import Footer from './footer'
import Container from '../container'
import Navigation from '../navigation'

const GlobalStyle = createGlobalStyle`
body {
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 1.65;
  color: #373F49;
  background: #eee;
  margin: 0;
}

img {
  display: block;
  width: 100%;
}

h1,
h2,
h3 {
  font-size: 2em;
  font-weight: normal;
}

a {
  color: currentColor;
}

.wrapper {
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
}

.article-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5vmin;
}

.section-headline {
  padding: 0 0 0.4em 0;
  margin: 0 0 5vmin 0;
  border-bottom: 1px solid #ddd;
}

.list-inline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-inline li {
  display: inline-block;
}
`

const Layout = ({ title, children }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <>
      <SEO title={title}/>
      <GlobalStyle />
      <Header />
      <Container>
        <Navigation />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout