require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

const siteMetadata = {
  title: 'ismail Toyran | Front-End Developer',
  siteUrl: 'https://www.ismailtoyran.com',
  description:
    'ismail Toyran is a Front-End developer based in Turkey who specialized on building modern PWA / commercial websites and mobile applications, now works for remote aswell.',
  author: 'ismail Toyran',
  keywords: [
    'gatsby',
    'contentful',
    'netlify',
    'front-end',
    'web developer',
    'react'
  ]
};

const GatsbyPluginGoogleTagmanager = {
  resolve: 'gatsby-plugin-google-tagmanager',
  options: {
    id: process.env.GTM_ID,
    includeInDevelopment: false,
    defaultDataLayer: { platform: 'gatsby' }
  }
};

const GatsbyPluginI18n = {
  resolve: 'gatsby-plugin-i18n',
  options: {
    langKeyDefault: 'en',
    useLangKeyLayout: false,
    prefixDefault: false
  }
};

const GatsbyPluginRobotsTxt = {
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
};

const GatsbySourceContentful = {
  resolve: 'gatsby-source-contentful',
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};

const GatsbyPluginManifest = {
  resolve: 'gatsby-plugin-manifest',
  options: {
    name: 'ismail Toyran Portfolio',
    short_name: 'ismailToyran',
    description:
      'ismail Toyran is a Front-End developer based in Turkey who specialized on building modern PWA / commercial websites and mobile applications, now works for remote aswell.',
    start_url: '/',
    background_color: '#663399',
    theme_color: '#fff',
    display: 'standalone',
    icon: 'src/images/icon.png',
    cache_busting_mode: 'none',
    lang: 'en',
    localize: [
      {
        start_url: '/tr/',
        lang: 'tr',
        name: 'ismail Toyran',
        short_name: 'ismailToyran',
        description:
          'ismail Toyran is a Front-End developer based in Turkey who specialized on building modern PWA / commercial websites and mobile applications, now works for remote aswell.'
      }
    ]
  }
};

const GatsbyPluginOffline = {
  resolve: 'gatsby-plugin-offline',
  options: {
    workboxConfig: {
      globPatterns: ['**/*']
    }
  }
};

module.exports = {
  siteMetadata,
  plugins: [
    GatsbyPluginGoogleTagmanager,
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preload-link-crossorigin',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    GatsbyPluginI18n,
    GatsbyPluginRobotsTxt,
    GatsbySourceContentful,
    GatsbyPluginManifest,
    GatsbyPluginOffline
  ]
};
