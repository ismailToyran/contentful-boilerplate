import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const UL = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 20vh;
  max-height: 100px;
  font-size: 1.25em;
`;

const LI = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  a {
    color: currentColor;
  }
`;

export default () => (
  <nav role="navigation">
    <UL>
      <LI>
        <Link to="/">Home</Link>
      </LI>
      <LI>
        <Link to="/blog/">Blog</Link>
      </LI>
    </UL>
  </nav>
);
