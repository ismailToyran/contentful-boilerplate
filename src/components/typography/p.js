import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

import { device } from '@theme';

const P = ({ clamp, fontSize, lineHeight, innerRef, ...props }) => {
  const height = [];
  clamp &&
    fontSize.map(font =>
      height.push(
        `${Math.ceil(font.replace(/\D/g, '') * lineHeight * clamp)}px`
      )
    );
  return (
    <StyledP
      as="p"
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

const StyledP = styled(Flex)`
  font-size: 20px;
  ${({ clamp }) =>
    clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  @media ${device.tablet} {
    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1200 - 320)));
  }
`;

export default P;
