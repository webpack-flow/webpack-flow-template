const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (templatePath, options) => {
  return {
    plugins: [new HtmlWebpackPlugin(Object.assign({
      template: templatePath
    }, options))]
  }
}
