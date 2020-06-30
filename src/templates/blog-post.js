import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import SEO from '@components/seo';

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`;

const HeroImage = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;
  return (
    <>
      <SEO title={post.title} />
      <div style={{ background: '#fff' }}>
        <Hero>
          <HeroImage alt={post.title} fluid={post.heroImage.fluid} />
        </Hero>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block'
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
