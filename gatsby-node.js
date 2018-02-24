const Webpack = require("webpack")
const path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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