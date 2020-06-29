import React from 'react';
import { graphql } from 'gatsby';

import About from '@inner-layouts/about';

import { usePathContext } from '@hooks';

export default ({ data, pathContext: { langKey } }) => {
  usePathContext(langKey);
  return <About data={data.allContentfulHomepage.edges[0]} />;
};

export const pageQuery = graphql`
  query AboutEnQuery {
    allContentfulHomepage(filter: { node_locale: { eq: "en-US" } }) {
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
        }
      }
    }
  }
`;
