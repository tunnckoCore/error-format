/*!
 * error-format <https://github.com/tunnckoCore/error-format>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var errorBase = require('error-base')
var errorFormat = require('./index')

var MineError = errorBase('TypeError', function (msg, name) {
  this.name = name || this.name
  this.message = msg
  errorFormat(this)
})

test('should work as normal error .toString', function (done) {
  var err1 = new MineError('foo bar')
  var err2 = new TypeError('foo bar')

  test.strictEqual(err1.name, err2.name)
  test.strictEqual(err1.message, err2.message)
  test.strictEqual(err1.toString(), err2.toString())
  done()
})

test('should throw TypeError if not an error passed', function (done) {
  function fixture () {
    errorFormat(1234)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `err` to be error object/)
  done()
})

test('should allow passing format function to modify toString method output', function (done) {
  var err = new MineError('baz qux', 'MyError')

  err = errorFormat(err, function fmt (headline) {
    if (this.message.indexOf('baz') !== -1) {
      headline += ' --- Line: ' + this.line
    }
    if (this.message.indexOf('qux') !== -1) {
      headline += ' --- Column: ' + this.column
    }
    return headline
  })

  test.strictEqual(err.name, 'MyError')
  test.strictEqual(err.message, 'baz qux')

  var expected = process.env.running_under_istanbul
    ? 'MyError: baz qux --- Line: 9 --- Column: 1878'
    : 'MyError: baz qux --- Line: 43 --- Column: 13'

  test.strictEqual(err.toString(), expected)
  test.strictEqual(err.filename.indexOf('test.js') !== -1, true)
  done()
})

test('should add `line`, `filename` and `column` properties', function (done) {
  var err = new Error('qux xyz')
  err = errorFormat(err)

  test.ok(err.name)
  test.ok(err.line)
  test.ok(err.column)
  test.ok(err.message)
  test.ok(err.filename)
  test.strictEqual(err.name, 'Error')
  test.strictEqual(err.message, 'qux xyz')
  test.strictEqual(err.filename.indexOf('test.js') !== -1, true)
  done()
})
