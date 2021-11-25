module.exports = {
  webpack: function (config, env) {
    /*    config.module.rules.push({
      test: /\.(png|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[hash].[ext]',
          },
        },
      ],
    }); */
    return config;
  },
};
