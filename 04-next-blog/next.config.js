const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      webpack(config) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false,
        };

        return config;
      },
      env: {
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }
};
