'use strict';

require('mocha');
require('should');
var dashify = require('./');

describe('dashify', function () {
  it('should:', function () {
    dashify('fooBar').should.equal('foo-bar');
    dashify('fooBarBaz').should.equal('foo-bar-baz');
    dashify('foo bar').should.equal('foo-bar');
    dashify('foo barBaz').should.equal('foo-bar-baz');
    dashify('foo barBaz quux').should.equal('foo-bar-baz-quux');
    dashify('Foo barBaz quux').should.equal('foo-bar-baz-quux');
  });

  it('should throw an error if a string is not passed:', function () {
    (function () {
      dashify();
    }).should.throw('dashify expects a string.');
  });
});
