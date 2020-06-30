import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import Hero from '@components/hero';
import ArticlePreview from '@components/article-preview';

import { usePageContext } from '@hooks';

const RootIndex = ({ data, pageContext: { langKey } }) => {
  usePageContext(langKey);
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allContentfulBlogPost.edges;
  const [author] = data.allContentfulPerson.edges;

  return (
    <>
      <SEO title={siteTitle} />
      <div style={{ background: '#fff' }}>
        <Hero data={author.node} />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeEnQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
