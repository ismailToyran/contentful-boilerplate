import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from "../components/layout/index"
import ArticlePreview from '../components/article-preview'

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

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout title={siteTitle}>
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
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
`
