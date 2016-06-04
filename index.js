/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var re = {
  capital: /[A-Z]|[\u00C0-\u00D6\u00D8-\u00DD]/,
  small: /[a-z]|[\u00DF-\u00F6\u00F8-\u00FF]/,
  space: /[ \t]/,
  nonWord: /[^A-Za-z0-9\u00C0-\u00D6\u00D8-\u00DD\u00DF-\u00F6\u00F8-\u00FF]/
};

var camelCase = new RegExp('(' + re.small.source + ')(' + re.capital.source + ')', 'g');
var spaceOrNonWord = new RegExp(re.space.source + '|' + re.nonWord.source, 'g');

module.exports = function dashify(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  str = str.replace(camelCase, '$1-$2');
  str = str.replace(spaceOrNonWord, '-');
  str = str.replace(/^-+|-+$/g, '');
  return str.toLowerCase();
};
