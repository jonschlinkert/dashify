/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = (str, options) => {
  if (typeof str !== 'string') throw new TypeError('expected a string');

  if (options && options.groupCaps)
    str = str
    .replace(/([a-z])([A-Z]+)/g, (m, s1, s2) => s1 + ' ' + s2)
    .replace(/([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/, (m, s1, s2, s3) => s1 + s2.toLowerCase() + s3)
    .replace(/([A-Z]+)([A-Z][a-z])/g, 
        (m, s1, s2) => s1.toLowerCase() + ' ' + s2);

  return str.trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\W/g, m => /[À-ž]/.test(m) ? m : '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, m => options && options.condense ? '-' : m)
    .toLowerCase();
};
