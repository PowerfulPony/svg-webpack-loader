const path = require('path');

const ctxPath = path.resolve(__dirname);
const rootPath = path.resolve(ctxPath, '..');
const distPath = path.resolve(rootPath, 'dist');
const loaderPath = path.resolve(rootPath, 'loader.js');

module.exports = {
  context: ctxPath,
  entry: './entry.js',
  output: {
    path: distPath,
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/resource',
        use: [
          {
            loader: loaderPath,
            options: {
              removeEmptyAttrs: false,
            },
          },
        ],
      },
    ],
  },
};
