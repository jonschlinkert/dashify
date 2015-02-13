/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function dashify(str) {
  if (typeof str !== 'string') {
    throw new TypeError('dashify expects a string.');
  }
  str = str.replace(/[A-Z]/g, '-$&');
  str = str.replace(/[ \t]/g, '-');
  return str.toLowerCase();
};
