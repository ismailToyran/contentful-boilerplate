import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
const SEO = ({ lang, title, description, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'author',
          content: site.siteMetadata.author
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(', ')
        }
        // {
        //   property: `og:title`,
        //   content: title,
        // },
        // {
        //   property: `og:description`,
        //   content: metaDescription,
        // },
        // {
        //   property: `og:type`,
        //   content: `website`,
        // },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        // {
        //   name: `twitter:title`,
        //   content: title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
      ].concat(meta)}
    />
  );
};
SEO.defaultProps = {
  lang: 'en',
  meta: []
};
SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.array,
  meta: PropTypes.arrayOf(PropTypes.object)
};
export default SEO;
