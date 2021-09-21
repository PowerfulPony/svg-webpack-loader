const { optimize } = require('svgo');

module.exports = function loader(source) {
  const callback = this.async();

  const { data } = optimize(source, {
    path: this.resourcePath,
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: this.query,
        },
      },
    ],
  });

  callback(null, data);
};
