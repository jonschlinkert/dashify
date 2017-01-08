'use strict';

require('mocha');
var assert = require('assert');
var dashify = require('./');

describe('dashify', function() {
  it('should convert camelcase to dashes:', function() {
    assert.strictEqual(dashify('fooBar'), 'foo-bar');
    assert.strictEqual(dashify('fooBarBaz'), 'foo-bar-baz');
  });

  it('should strip dashes from oes and sos', function() {
    assert.strictEqual(dashify('-foo'), 'foo');
    assert.strictEqual(dashify('foo-'), 'foo');
    assert.strictEqual(dashify('-foo-'), 'foo');
  });

  it('should convert slashes to dashes', function() {
    assert.strictEqual(dashify('/foo'), 'foo');
    assert.strictEqual(dashify('foo/'), 'foo');
    assert.strictEqual(dashify('foo/bar'), 'foo-bar');
  });

  it('should convert spaces to dashes:', function() {
    assert.strictEqual(dashify('foo bar'), 'foo-bar');
    assert.strictEqual(dashify('foo barBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('foo barBaz quux'), 'foo-bar-baz-quux');
  });

  it('should convert space followed by uppercase letter to a single dash:', function() {
    assert.strictEqual(dashify('foo Bar'), 'foo-bar');
    assert.strictEqual(dashify('Foo BarBaz quux'), 'foo-bar-baz-quux');
  });

  it('should convert non-word characters to dashes:', function() {
    assert.strictEqual(dashify('foo*bar'), 'foo-bar');
    assert.strictEqual(dashify('foo`barBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('foo^barBaz^quux'), 'foo-bar-baz-quux');
  });

  it('should strip leading non-word characters:', function() {
    assert.strictEqual(dashify('#^foo*bar'), 'foo-bar');
    assert.strictEqual(dashify('#^foo`barBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('#^foo^barBaz^quux'), 'foo-bar-baz-quux');
  });

  it('should work when leading character is uppercase:', function() {
    assert.strictEqual(dashify('Foo barBaz quux'), 'foo-bar-baz-quux');
  });

  it('should throw an error if a string is not passed:', function(cb) {
    try {
      dashify();
      cb(new Error('expected an error'));
    } catch (err) {
      assert.equal(err.message, 'expected a string');
      cb();
    }
  });

  it('should work with russian characters:', function() {
    assert.strictEqual(dashify(', Перев1од*1f'), 'перев1од-1f');
  })

});
