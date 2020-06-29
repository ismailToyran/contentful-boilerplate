import React, { useContext } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { GlobalDispatchContext, GlobalStateContext } from '@context';

import SEO from '@components/seo';
import { P } from '@typography';

const About = ({ data }) => {
  const { banner } = data.node;
  const imageData = banner.fluid;
  const { aspectRatio } = banner.fluid;
  const dispatch = useContext(GlobalDispatchContext);
  const { isDark } = useContext(GlobalStateContext);
  return (
    <>
      <SEO title="About me" />
      <StyledBackgroundImage
        Tag="section"
        fluid={imageData}
        aspectRatio={aspectRatio}
        preserveStackingContext
      >
        <h1 style={{ color: '#000' }}>{banner.title}</h1>
        <P>ASD</P>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'TOGGLE_THEME', payload: !isDark });
          }}
        >
          Toggle Theme
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'SWITCH_LANG', payload: 'en' });
          }}
        >
          En
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'SWITCH_LANG', payload: 'tr' });
          }}
        >
          Tr
        </button>
      </StyledBackgroundImage>
    </>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: ${({ aspectRatio }) =>
    aspectRatio ? `calc(100vw / ${aspectRatio})` : '100%'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    margin: 0;
  }
`;

export default About;
