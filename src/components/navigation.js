import React, { useContext } from 'react';
import styled from 'styled-components';

import Link from '@components/link';
import { GlobalStateContext } from '@context';

const Navigation = () => {
  const { isDark } = useContext(GlobalStateContext);
  return (
    <StyledNav role="navigation" isDark={isDark}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 20vh;
    max-height: 100px;
    font-size: 1.25em;
    li {
      display: inline-flex;
      align-items: center;
      margin: 0 1em;
      a {
        color: currentColor;
      }
    }
  }
`;

export default Navigation;
