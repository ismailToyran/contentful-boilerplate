import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import ArticlePreview from '@components/article-preview';

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allContentfulBlogPost.edges;
  return (
    <>
      <SEO title={siteTitle} />
      <div style={{ background: '#fff' }}>
        <Hero>Blog</Hero>
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

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61.8vh;
  max-height: 400px;
  background: #e1e1e1;
  font-size: 2em;
  overflow: hidden;
`;

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexEnQuery {
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
              ...GatsbyContentfulFluid_tracedSVG
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
  }
`;
