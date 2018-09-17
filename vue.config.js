const { resolve } = require('./utils/path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': resolve('.')
      }
    }
  }
}
