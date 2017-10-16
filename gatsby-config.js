const siteMetadata = require('./src/data/siteMetadata')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GA_tracking_ID',
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
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
          {
            allSitePage {
              edges {
                node {
                  fields {
                    langKey
                  }
                }
              }
            }
          }
          `
        }
      }
    }
  ]
}
