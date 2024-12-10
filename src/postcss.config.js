module.exports = {
    plugins: [
      require('autoprefixer'), // Adds vendor prefixes to CSS rules
      require('cssnano')({ preset: 'default' }) // Minifies the CSS
    ]
  }