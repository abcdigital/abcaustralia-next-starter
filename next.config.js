const { patchWebpackConfig } = require('next-global-css');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  experimental: {
    esmExternals: true,
  },
  future: {
    // Allow css to be cachable across builds
    // https://github.com/vercel/next.js/pull/20914
    strictPostcssConfiguration: true,
  },
  webpack: (config, options) => {
    patchWebpackConfig(config, options);

    if (options.isServer) {
      config.externals = webpackNodeExternals({
        // Uses list to add this modules for server bundle and process.
        allowlist: [/@abcaustralia/],
      });
    }

    return config;
  },
};
