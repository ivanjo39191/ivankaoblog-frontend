const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
  }
  
const name = 'Vue Blog Index' // page title

module.exports = {
    publicPath: '/index',
    outputDir: 'dist',
    devServer: {
        disableHostCheck: true,
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
    }
}