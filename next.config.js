// // next.config.js
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssModules: true
// })

// module.exports = {
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' }
//     }
//   }
// }

// const withCSS = require('@zeit/next-css')

// const config = {
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' }
//     }
//   }
// }

// module.exports = withCSS(config, {
//   cssModules: true
// });

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
})