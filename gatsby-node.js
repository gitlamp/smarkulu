exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
    config.merge({
      resolve: {
        alias: {
          normalize: 'normalize.scss/normalize.scss',
        }
      }
    })
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
    break;

    case 'build-javascript':
    break;
  }
  return config
}