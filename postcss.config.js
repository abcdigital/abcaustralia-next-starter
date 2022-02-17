const queries = require.resolve('@abcaustralia/nucleus/css/media-queries');

module.exports = {
  plugins: [
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        importFrom: [
          {
            customMedia: queries,
          },
        ],
        features: {
          'custom-properties': false,
          'nesting-rules': false,
        },
      },
    ],
  ],
};
