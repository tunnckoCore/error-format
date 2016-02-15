# [error-format][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Allows you to customize the toString method of passed `err`. Also adds useful properties like `line`, `filename` and `column` to the `err` object.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i error-format --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const errorFormat = require('error-format')
```

### [errorFormat](index.js#L24)

> Adds bypassed `.toString` which you can customize
through the `fmt` function.

**Params**

* `<err>` **{Error}**: error object/instance    
* `[fmt]` **{Function}**: custom format function    
* `returns` **{Error}**: what comes from input (instance of error)  

## Related
* [error-base](https://www.npmjs.com/package/error-base): Create custom Error classes. | [homepage](https://github.com/doowb/error-base)
* [is-typeof-error](https://www.npmjs.com/package/is-typeof-error): Check that given value is any type of error and instanceof Error. | [homepage](https://github.com/tunnckocore/is-typeof-error)
* [is-kindof](https://www.npmjs.com/package/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types… [more](https://www.npmjs.com/package/is-kindof) | [homepage](https://github.com/tunnckocore/is-kindof)
* [kind-error](https://www.npmjs.com/package/kind-error): Base class for easily creating meaningful and quiet by default Error classes with sane… [more](https://www.npmjs.com/package/kind-error) | [homepage](https://github.com/tunnckocore/kind-error)
* [kind-of](https://www.npmjs.com/package/kind-of): Get the native type of a value. | [homepage](https://github.com/jonschlinkert/kind-of)
* [kind-of-extra](https://www.npmjs.com/package/kind-of-extra): Additional functionality to `kind-of` type check utility, support promises, generators… [more](https://www.npmjs.com/package/kind-of-extra) | [homepage](https://github.com/tunnckocore/kind-of-extra)
* [kind-of-types](https://www.npmjs.com/package/kind-of-types): List of all javascript types. Used and useful for checking, validation, sanitizing and… [more](https://www.npmjs.com/package/kind-of-types) | [homepage](https://github.com/tunnckocore/kind-of-types)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/error-format/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[define-property]: https://github.com/jonschlinkert/jonschlinkert/define-property
[is-typeof-error]: https://github.com/tunnckocore/tunnckocore/is-typeof-error
[stacktrace-metadata]: https://github.com/tunnckocore/tunnckocore/stacktrace-metadata

[npmjs-url]: https://www.npmjs.com/package/error-format
[npmjs-img]: https://img.shields.io/npm/v/error-format.svg?label=error-format

[license-url]: https://github.com/tunnckoCore/error-format/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/error-format
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/error-format.svg

[travis-url]: https://travis-ci.org/tunnckoCore/error-format
[travis-img]: https://img.shields.io/travis/tunnckoCore/error-format.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/error-format
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/error-format.svg

[david-url]: https://david-dm.org/tunnckoCore/error-format
[david-img]: https://img.shields.io/david/tunnckoCore/error-format.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckoCore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckoCore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

