import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

const H4 = ({ clamp, fontSize, lineHeight, innerRef, ...props }) => {
  const height = [];
  clamp &&
    fontSize.map(font =>
      height.push(
        `${Math.ceil(font.replace(/\D/g, '') * lineHeight * clamp)}px`
      )
    );
  return (
    <StyledH4
      as="h4"
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

const StyledH4 = styled(Flex)`
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

export default H4;
