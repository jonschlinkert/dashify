'use strict';

require('mocha');
require('should');
var dashify = require('./');

describe('dashify', function () {
  it('should convert camelcase to dashes:', function () {
    dashify('fooBar').should.equal('foo-bar');
    dashify('fooBarBaz').should.equal('foo-bar-baz');
  });

  it('should convert spaces to dashes:', function () {
    dashify('foo bar').should.equal('foo-bar');
    dashify('foo barBaz').should.equal('foo-bar-baz');
    dashify('foo barBaz quux').should.equal('foo-bar-baz-quux');
  });
  
  it('should convert space followed by uppercase letter to a single dash:', function() {
    dashify('foo Bar').should.equal('foo-bar');
    dashify('Foo BarBaz quux').should.equal('foo-bar-baz-quux');
  });

  it('should convert non-word characters to dashes:', function () {
    dashify('foo*bar').should.equal('foo-bar');
    dashify('foo`barBaz').should.equal('foo-bar-baz');
    dashify('foo^barBaz^quux').should.equal('foo-bar-baz-quux');
  });

  it('should strip leading non-word characters:', function () {
    dashify('#^foo*bar').should.equal('foo-bar');
    dashify('#^foo`barBaz').should.equal('foo-bar-baz');
    dashify('#^foo^barBaz^quux').should.equal('foo-bar-baz-quux');
  });

  it('should work when leading character is uppercase:', function () {
    dashify('Foo barBaz quux').should.equal('foo-bar-baz-quux');
  });

  it('should throw an error if a string is not passed:', function () {
    (function () {
      dashify();
    }).should.throw('dashify expects a string.');
  });
});
