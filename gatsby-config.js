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
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
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
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'rajdhani',
          'nunito',
          'archivo black'
        ]
      }
    }
  ]
}
