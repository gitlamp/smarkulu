const siteMetadata = require('./src/data/siteMetadata')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/img`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logos',
        path: `${__dirname}/static/logos`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-meta-redirect',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        id: 'UA-108848426-1'
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-5C4L775',
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: { // Default options
        langKeyForNull: 'any',
        langKeyDefault: 'en',
        useLangKeyLayout: true
      }
    },
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: 'lt4p09ux',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lato',
          'Open Sans'
        ]
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'taskulu.com/fa',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        excludedRoutes: [
          '/yoast/*/configurator',
          '/*/*/settings',
          '/*/*/pages'
        ]
      }
    },
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: `https://comments-for-taskulu-com.talkyard.net/`
      }
    }
  ]
}
