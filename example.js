'use strict'

var errorFormat = require('./index')
var err = new TypeError('baz qux')

console.log(err.toString())
// => TypeError: baz qux

err = errorFormat(err, function fmt (headline) {
  if (this.message.indexOf('baz') !== -1) {
    headline += ' --- Line: ' + this.line
  }
  if (this.message.indexOf('qux') !== -1) {
    headline += ' --- Column: ' + this.column
  }
  return headline
})

console.log(err.toString())
// => TypeError: baz qux --- Line: 4 --- Column: 11
