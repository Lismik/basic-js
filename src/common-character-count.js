const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let testee = s2.split('');
  for (let letter of s1) {
    if (testee.includes(letter)) {
      count++;
      testee.splice(testee.indexOf(letter), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};