module.exports = function (context, options) {
  return {
    name: 'docusaurus-custom-config',
    configureWebpack(config, isServer, utils) {
      return {
        // module: {
        //   rules: [
        //     {
        //       test: /\.(?:ico|jpe?g|png|gif|webp|avif)(?:\?.*)?$/i,
        //       use: [
        //         {
        //           loader: 'file-loader',
        //           options: {
        //             name: 'assets/images/[name].[ext]',
        //           },
        //         },
        //       ],
        //     },
        //   ],
        // },
      };
    },
  };
};
