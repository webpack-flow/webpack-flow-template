# webpack-flow-template

## Install

```bash
$ npm install --save webpack-flow-template
```

## Usage

```js
const template = require('webpack-flow-template')

module.exports = flow(
  //...
  template('template.html', options)
)
```

## API

### template(templatePath, [options])

#### templatePath

Type: `string`

Path to your custom template, use ejs syntax by default. A short hand for setting `options.template`.

#### options

[html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) option.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
