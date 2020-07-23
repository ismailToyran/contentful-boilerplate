import React from 'react';
import { graphql } from 'gatsby';

import About from '@inner-layouts/about';

export default ({ data }) => {
  return <About data={data.allContentfulHomepage.edges[0]} />;
};

export const pageQuery = graphql`
  query AboutTrQuery {
    allContentfulHomepage(filter: { node_locale: { eq: "tr-TR" } }) {
      edges {
        node {
          node_locale
          banner {
            id
            title
            description
            fluid(quality: 100, maxWidth: 2560, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          richText {
            id
            content {
              nodeType
              content {
                value
                marks {
                  type
                }
              }
            }
          }
          logos {
            id
            title
            fluid(
              quality: 100
              maxWidth: 400
              maxHeight: 400
              resizingBehavior: SCALE
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
