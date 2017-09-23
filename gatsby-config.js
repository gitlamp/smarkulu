module.exports = {
  siteMetadata: {
    title: `Taskulu`,
    siteUrl: `https://www.taskulu.com`,
    description: `Testing site`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: { // Default options
        postPage: 'src/templates/blog-post.js',
        langKeyForNull: 'any',
        langKeyDefault: 'en'
      }
    }
  ]
}
