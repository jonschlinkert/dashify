/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function dashify(str) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
  str = str.replace(/[ \t\W]/g, '-');
  str = str.replace(/^-+|-+$/g, '');
  return str.toLowerCase();
};
