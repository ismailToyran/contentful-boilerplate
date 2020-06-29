import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            keywords
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
