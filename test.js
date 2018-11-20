'use strict';

require('mocha');
const assert = require('assert');
const dashify = require('./');

describe('dashify', () => {
  it('should convert camelcase to dashes:', () => {
    assert.strictEqual(dashify('fooBar'), 'foo-bar');
    assert.strictEqual(dashify('fooBarBaz'), 'foo-bar-baz');
  });

  it('should support diacritics', () => {
    assert.strictEqual(dashify('São Tomé and Príncipe'), 'são-tomé-and-príncipe');
  });

  it('should condense multiple subsequent dashes to one', () => {
    assert.strictEqual(dashify('Foo----Bar'), 'foo----bar');
    assert.strictEqual(dashify('Foo----Bar', {condense: true}), 'foo-bar');
  });

  it('should strip dashes from oes and sos', () => {
    assert.strictEqual(dashify('-foo'), 'foo');
    assert.strictEqual(dashify('foo-'), 'foo');
    assert.strictEqual(dashify('-foo-'), 'foo');
  });

  it('should convert slashes to dashes', () => {
    assert.strictEqual(dashify('/foo'), 'foo');
    assert.strictEqual(dashify('foo/'), 'foo');
    assert.strictEqual(dashify('foo/bar'), 'foo-bar');
  });

  it('should convert spaces to dashes:', () => {
    assert.strictEqual(dashify('foo bar'), 'foo-bar');
    assert.strictEqual(dashify('foo barBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('foo barBaz quux'), 'foo-bar-baz-quux');
  });

  it('should convert space followed by uppercase letter to a single dash:', () => {
    assert.strictEqual(dashify('foo Bar'), 'foo-bar');
    assert.strictEqual(dashify('Foo BarBaz quux'), 'foo-bar-baz-quux');
  });

  it('should convert non-word characters to dashes:', () => {
    assert.strictEqual(dashify('foo*bar'), 'foo-bar');
    assert.strictEqual(dashify('foo`barBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('foo^barBaz^quux'), 'foo-bar-baz-quux');
  });

  it('should strip leading non-word characters:', () => {
    assert.strictEqual(dashify('#^foo*bar'), 'foo-bar');
    assert.strictEqual(dashify('#^foo`barBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('#^foo^barBaz^quux'), 'foo-bar-baz-quux');
  });

  it('should work when leading character is uppercase:', () => {
    assert.strictEqual(dashify('Foo barBaz quux'), 'foo-bar-baz-quux');
    assert.strictEqual(dashify('FooBarBaz'), 'foo-bar-baz');
    assert.strictEqual(dashify('Foo Bar'), 'foo-bar');
  });

  it('should throw an error if a string is not passed:', () => {
    assert.throws(() => dashify(), /expected/);
  });
});
