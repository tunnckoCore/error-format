/*!
 * error-format <https://github.com/tunnckoCore/error-format>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var metadata = require('stacktrace-metadata')
var isError = require('is-typeof-error')
var define = require('define-property')

/**
 * > Adds bypassed `.toString` which you can customize
 * through the `fmt` function.
 *
 * @param  {Error} `<err>` error object/instance
 * @param  {Function} `[fmt]` custom format function
 * @return {Error} what comes from input (instance of error)
 * @api public
 */

module.exports = function errorFormat (err, fmt) {
  err = err || this
  if (!isError(err)) {
    throw new TypeError('error-format: expect `err` to be error object/instance')
  }

  fmt = typeof fmt !== 'function' ? defaultFormat : fmt
  err = metadata(err)
  define(err, 'toString', factory(fmt))
  return err
}

/**
 * > Default `.toString` behaving, but with option
 * to add/format the output.
 *
 * @param  {Function} `format`
 * @return {Function}
 */

function factory (format) {
  return function toString () {
    var defaultLine = this.message && this.message.length
      ? this.name + ': ' + this.message
      : this.name

    return format.call(this, defaultLine)
  }
}

/**
 * > Default format function.
 *
 * @param  {String} `headline`
 * @return {String}
 */

function defaultFormat (headline) {
  return headline
}
