const template = require('../')

test('main', () => {
  const obj = template('lol.template', {filename: '../index.html'})
  const plugin = obj.plugins[0]
  expect(plugin.constructor.name).toBe('HtmlWebpackPlugin')
  expect(plugin.options.filename).toBe('../index.html')
  expect(plugin.options.template).toBe('lol.template')
})
