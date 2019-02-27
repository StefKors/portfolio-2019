// // next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true
})

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