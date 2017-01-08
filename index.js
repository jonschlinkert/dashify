/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = dashify

function dashify(string) {
  if (typeof string !== 'string') {
    throw new TypeError('expected a string');
  }

  var sentence = []
  var needsDash = false

  for(var i=0; i<string.length; i++) {
    var char = string[i];

    var isNumber = !Number.isNaN(parseFloat(char));

    if (isNumber) {
      lower = char
    } else {
      var upper = char.toUpperCase();
      var lower = char.toLowerCase();
      var isLetter = upper != lower;
    } 

    var isAlphaNumeric = isNumber || isLetter;

    if (isNumber) {
      var isUpper = false;
    } else if (isLetter) {
      var isUpper = (char == upper);
    } else {
      var isUpper = false;
    }

    if (needsDash && isAlphaNumeric) {
      sentence.push("-");
      needsDash = false;
    } else if (isUpper && sentence.length) {
      sentence.push("-");
    }

    if (isAlphaNumeric) {
      if (lower == "*") {
        throw new Error("daf")
      }
      sentence.push(lower);
    } else if (sentence.length && !isAlphaNumeric) {
      needsDash = true;
    }
  }

  return sentence.join("");
};
