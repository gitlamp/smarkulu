const Webpack = require("webpack")
const path = require("path")
const _ = require("lodash")
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var languages = require('./src/data/languages')

exports.modifyWebpackConfig = ({ config, stage }) => {
  const baseStyles = new ExtractTextPlugin('styles/styles.css', { allChunks: true })
  const main = new ExtractTextPlugin('styles/main.css', { allChunks: true })
  const rtlMain = new ExtractTextPlugin('styles/main-rtl.css', { allChunks: true })

  switch (stage) {
    case 'develop':
      config.loader('modernizr', {
        test: /\.modernizrrc$/,
        loaders: ['modernizr-loader', 'json-loader']
      })
      config.merge({
        module: {
          loaders: [
            {
              test: /\.(sass|scss)$/,
              exclude: [/\.useable\.scss$/, /\.rtl\.useable\.scss$/],
              loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader']
            },
            {
              test: /\.useable\.scss$/,
              exclude: /\.rtl\.useable\.scss$/,
              loaders: ['style-loader/useable', 'css-loader?sourceMap', 'sass-loader']
            },
            {
              test: /\.rtl\.useable.scss$/,
              loaders: ['style-loader/useable', 'rtlcss-loader?sourceMap', 'sass-loader']
            }
          ]
        },
        resolve: {
          alias: {
            normalize: 'normalize.scss/normalize.scss',
            owlcarousel: 'react-owl-carousel2/lib',
            modernizr$: path.resolve(__dirname, '.modernizrrc'),
            TweenLite: 'gsap',
            CSSPlugin: 'gsap',
            Draggable: path.resolve(__dirname, '/node_modules/gsap/src/uncompressed/utils/Draggable.js'),
            ScrollToPlugin: path.resolve(__dirname, '/node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js')
          }
        }
      })
      config.plugin('jquery', Webpack.DefinePlugin, [{
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }])
      config.plugin('gsap', Webpack.DefinePlugin, [{
        TweenMax: 'gsap'
      }])
      break;

    case 'develop-html':
      break;

    case 'build-css':
    config.loader('style', {
      test: /\.(sass|scss)$/,
      exclude: [/\.useable\.scss$/, /\.rtl\.useable\.scss$/],
      loader: baseStyles.extract(['css-loader', 'sass-loader?minimize'])
    })
    config.loader('usable-style', {
      test: /\.useable\.scss$/,
      exclude: /\.rtl\.useable\.scss$/,
      loader: main.extract(['css-loader', 'sass-loader?minimize'])
    })
    config.loader('rtl-style', {
      test: /\.rtl\.useable.scss$/,
      loader: rtlMain.extract(['rtlcss-loader', 'sass-loader?minimize'])
    })
    config.merge({
      resolve: {
        alias: {
          normalize: 'normalize.scss/normalize.scss',
          owlcarousel: 'react-owl-carousel2/lib'
        }
      },
      plugins : [
        baseStyles,
        main,
        rtlMain
      ]
    })
    break;

    case 'build-html':
      config.loader('style', {
        test: /\.(sass|scss)$/,
        loader: 'null-loader'
      })
      config.loader('owl.carousel', {
        test: /owl\.carousel\.js/,
        loader: 'null-loader'
      })
      config.merge({
        module: {
          loaders: {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=/fonts/[name].[ext]'
          }
        },
        resolve: {
          alias: {
            normalize: 'normalize.scss/normalize.scss',
            owlcarousel: 'react-owl-carousel2/lib'
          }
        }
      })
      break;

    case 'build-javascript':
      config.loader('style', {
        test: /\.(sass|scss)$/,
        loader: 'null-loader'
      })
      config.merge({
        resolve: {
          alias: {
            normalize: 'normalize.scss/normalize.scss',
            owlcarousel: 'react-owl-carousel2/lib'
          }
        }
      })
      break;
  }
  return config
}

exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createRedirect, createPage } = boundActionCreators

  // ==== Redirects ====
  const langs = languages.langs
  let redirectBatch = []

  langs.forEach((lang) => {
    if (lang == 'en') {
      lang = ''
    } else {
      lang = '/fa'
    }
    redirectBatch.push(
      {f: `${lang}/industries`, t: `${lang}/our-users`},
      {f: `${lang}/industries/marketing`, t: `${lang}/our-users`},
      {f: `${lang}/industries/software-development`, t: `${lang}/our-users`},
      {f: `${lang}/industries/construction`, t: `${lang}/our-users`},
      {f: `${lang}/industries/media-production`, t: `${lang}/our-users`},
      {f: `${lang}/industries/game-development`, t: `${lang}/our-users`},
      {f: `/fa/shahrdari`, t: `/fa/ebook/shahrdari-mashhad`},
      {f: `${lang}/security`, t: `${lang}/product/security`},
      {f: `${lang}/integrations`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/github-commit`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/gitlab-commit`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/dropbox`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/email`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/appearin`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/gdrive`, t: `${lang}/product/integrations`},
      {f: `${lang}/integrations/gcal`, t: `${lang}/product/integrations`},
      {f: `/fa/product/??????????????-????????????`, t: `/fa/product/performance-analytics`},
      {f: `/fa/????????-??????`, t: `/fa/timesheet`},
      {f: `/fa/????????????-????????`, t: `/fa/product/time-management`},
      {f: `/fa/????????????-????????????-??????????-????????????`, t: `/fa/ebook/digital-construction`},
      {f: `/fa/????????????-????????????-????????????`, t: `/fa/ebook/preformance-analytics`},
      {f: `/fa/????????????-??????????`, t: `/fa/product/task-management`}
    )
  })

  redirectBatch.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      isPermanent: true,
      toPath: t
    })
  })
  // ==== End Redirects ====

  // ==== Blog Posts ====
  return new Promise((resolve, reject) => {
      graphql(
        `
          {
            allWordpressPost {
              edges {
                node {
                  id
                  categories {
                    name
                  }
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        let postCategory

        _.each(result.data.allWordpressPost.edges, edge => {

          edge.node.categories.map(category => {
            postCategory = category.name
          })

          let slug = decodeURIComponent(postCategory + '/' + edge.node.slug)

          createPage({
            path: `/fa/${slug}/`,
            component: path.resolve('./src/templates/blog-post.js'),
            layout: 'fa',
            context: {
              id: edge.node.id
            }
          })
        })
      })
      // ==== End Blog Posts ====

      // ==== Blog Tags ====
      .then(() => {
        graphql(
          `
            {
              allWordpressTag {
                edges {
                  node {
                    id
                    name
                    count
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          _.each(result.data.allWordpressTag.edges, edge => {
            const decodedTag = decodeURIComponent(edge.node.name)
            createPage({
              path: `/fa/blog/tags/${decodedTag}`,
              component: path.resolve('./src/templates/tag.js'),
              layout: 'fa',
              context: {
                id: edge.node.id,
                name: edge.node.name,
                count: edge.node.count
              }
            })
          })
        })
      })
        // ==== End Blog Tags ====

      resolve()
  })
}
