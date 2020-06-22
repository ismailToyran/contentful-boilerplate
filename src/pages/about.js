import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Layout from '@layout';

const About = ({ data }) => {
  const { banner } = data.allContentfulHomepage.edges[0].node;
  const imageData = banner.fluid;
  const { aspectRatio } = banner.fluid;

  return (
    <Layout title="About me" noHeader noNavigation noFooter>
      <StyledBackgroundImage
        Tag="section"
        fluid={imageData}
        aspectRatio={aspectRatio}
        preserveStackingContext
      >
        <h1 style={{ color: '#000' }}>{banner.title}</h1>
      </StyledBackgroundImage>
    </Layout>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: ${props =>
    props.aspectRatio ? `calc(100vw / ${props.aspectRatio})` : '100%'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    margin: 0;
  }
`;

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulHomepage {
      edges {
        node {
          banner {
            id
            title
            description
            fluid(quality: 100, maxWidth: 2560, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
