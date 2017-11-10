const Webpack = require("webpack")
const path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.modifyWebpackConfig = ({ config, stage }) => {
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
          modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
      }
    })
    config.plugin('webpack-define', Webpack.DefinePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }])
    break;

    case 'develop-html':
    break;

    case 'build-css':
    config.merge({
      resolve: {
        alias: {
          normalize: 'normalize.scss/normalize.scss',
        }
      }
    })
    break;

    case 'build-html':
    config.loader('modernizr', {
      test: /\.modernizrrc$/,
      loader: 'null-loader'
    })
    config.loader('sass', {
      test: /\.(sass|scss)$/,
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
          modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
      }
    })
    break;

    case 'build-javascript':
    break;
  }
  return config
}