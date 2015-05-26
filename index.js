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
  
  // dashify
  str = str.toLowerCase();
  str = str.replace(/\W+/g, '-');
  // trim dash
  str = str.replace(/^-+/, '');
  str = str.replace(/-+$/, '');
  
  return str;
};
