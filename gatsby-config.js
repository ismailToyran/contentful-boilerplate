require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

const googleTagManagerId = process.env.GTM_ID;

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
    siteUrl: 'https://www.ismailtoyran.com',
    description: 'A simple description about pandas eating lots...',
    author: 'ismail Toyran',
    keywords: ['gatsby', 'contentful', 'portfolio']
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: googleTagManagerId,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preload-link-crossorigin',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components',
          '@layout': './components/layout',
          '@images': './images',
          '@pages': './pages',
          '@styles': './styles',
          '@theme': './styles/theme',
          '@templates': './templates'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.ismailtoyran.com',
        sitemap: 'https://www.ismailtoyran.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Cool Application',
        short_name: 'Cool App',
        description:
          'The application does cool things and makes your life better.',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/images/icon.png',
        cache_busting_mode: 'none',
        lang: 'en',
        localize: [
          {
            start_url: '/de/',
            lang: 'de',
            name: 'Die coole Anwendung',
            short_name: 'Coole Anwendung',
            description:
              'Die Anwendung macht coole Dinge und macht Ihr Leben besser.'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    }
  ]
};
