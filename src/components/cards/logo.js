import React from 'react';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';
import Img from 'gatsby-image';

const LogoCard = ({ fixed, title, ...props }) => {
  return (
    <StyledLogoCard {...props}>
      <Img
        fixed={fixed}
        alt={title}
        imgStyle={{
          objectFit: 'contain'
        }}
      />
    </StyledLogoCard>
  );
};

const StyledLogoCard = styled(Flex)`
  justify-content: center;
  align-items: center;
  max-width: 200px;
  width: 100%;
  height: 150px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 60%;
    max-height: 60%;
    transition: 0.5s;
    filter: grayscale(100%);
    opacity: 0.5;
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

export default LogoCard;
