const Webpack = require("webpack")
const path = require("path")

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
    config.loader('modernizr', {
      test: /\.modernizrrc$/,
      loader: 'modernizr-loader!json-loader'
    })
    config.loader('custom-font', {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    })
    config.merge({
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
    config.loader('null', {
      test: /\.modernizrrc$/,
      loader: 'null-loader'
    })
    config.merge({
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