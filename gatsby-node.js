const Webpack = require("webpack")
const path = require("path")
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
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
          {
            test: /\.(sass|scss)$/,
            exclude: [/\.useable\.scss$/, /\.rtl\.useable\.scss$/],
            loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.useable\.scss$/,
            exclude: /\.rtl\.useable\.scss$/,
            loaders: ['style-loader/useable', 'css-loader', 'sass-loader']
          },
          {
            test: /\.rtl\.useable.scss$/,
            loaders: ['style-loader/useable', 'rtlcss-loader', 'sass-loader']
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
      Popper: ['popper.js', 'default']
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
      loader: baseStyles.extract(['css-loader?minimize', 'sass-loader'])
    })
    config.loader('usable-style', {
      test: /\.useable\.scss$/,
      exclude: /\.rtl\.useable\.scss$/,
      loader: main.extract(['css-loader?minimize', 'sass-loader'])
    })
    config.loader('rtl-style', {
      test: /\.rtl\.useable.scss$/,
      loader: rtlMain.extract(['rtlcss-loader?minimize', 'sass-loader'])
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

exports.createPages = ({ boundActionCreators }) => {

  const { createRedirect } = boundActionCreators
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
      {f: `${lang}/product/%D8%AA%D8%AD%D9%84%DB%8C%D9%84%DA%AF%D8%B1-%D8%B9%D9%85%D9%84%DA%A9%D8%B1%D8%AF`, t: `${lang}/product/performance-analytics`},
      {f: `${lang}/%d8%aa%d8%a7%db%8c%d9%85-%d8%b4%db%8c%d8%aa`, t: `${lang}/timesheet`},
      {f: `${lang}/%d9%85%d8%af%db%8c%d8%b1%db%8c%d8%aa-%d8%b2%d9%85%d8%a7%d9%86`, t: `${lang}/time-management`},
      {f: `/time-management`, t: `/fa/time-management`},
      {f: `${lang}/security`, t: `${lang}/product/security`}
    )
  })

  redirectBatch.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t
    })
  })
}