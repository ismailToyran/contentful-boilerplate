import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { GlobalStateContext } from '@context';

const CustomLink = ({ children, to, className, ...props }) => {
  const { lang } = useContext(GlobalStateContext);
  const defaultLang = 'en';

  const isActive = className => ({ location, href }) => {
    const activeClassName = { className: `${className} active` };
    return href !== ('/' || `/${lang}/`) && location.pathname.includes(href)
      ? activeClassName
      : location.pathname === href
      ? activeClassName
      : { className };
  };

  return (
    <Link
      to={lang === defaultLang ? to : `/${lang}${to}`}
      getProps={isActive(className)}
      {...props}
    >
      {children}
    </Link>
  );
};

const StyledLink = styled(CustomLink)`
  &.active {
    color: red;
  }
`;

export default StyledLink;
