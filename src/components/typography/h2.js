import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

const H2 = ({ clamp, fontSize, lineHeight, innerRef, ...props }) => {
  const height = [];
  clamp &&
    fontSize.map(font =>
      height.push(
        `${Math.ceil(font.replace(/\D/g, '') * lineHeight * clamp)}px`
      )
    );
  return (
    <StyledH2
      as="h2"
      ref={innerRef}
      m="0"
      clamp={clamp}
      fontSize={fontSize}
      lineHeight={lineHeight}
      height={clamp ? height : 'auto'}
      {...props}
    />
  );
};

const StyledH2 = styled(Flex)`
  ${({ clamp }) =>
    clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export default H2;
