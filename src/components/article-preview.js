import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ArticlePreview = ({ article }) => {
  return (
    <div>
      <Img alt="" fluid={article.heroImage.fluid} />
      <PreviewTitle>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </PreviewTitle>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html
        }}
      />
      {article.tags && article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </div>
  );
};

const PreviewTitle = styled.h3`
  font-size: 1.5em;
`;

const Tag = styled.p`
  color: #767676;
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #767676;
  margin-right: 0.5em;
`;

export default ArticlePreview;
