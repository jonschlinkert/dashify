# add-dashes

> Convert a camelcase or space-separated string to a dash-separated string.

This library has a couple nice properties not all dashifying libraries have:

* It works in any language that has upper- and lower-case letters

* It works for both "camelCase" and "space separated" strings

```js
var addDashes = require('add-dashes');

addDashes('fooBar');
//=> 'foo-bar'
addDashes('fooBarBaz');
//=> 'foo-bar-baz'
addDashes('foo bar');
//=> 'foo-bar'
addDashes('foo barBaz');
//=> 'foo-bar-baz'
addDashes('foo barBaz quux');
//=> 'foo-bar-baz-quux'
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Contributers

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
