const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  let head = Number.parseInt(num.toString().slice(1));
  let footer = Number.parseInt(num.toString().slice(0, -1));
  return Math.max(head, footer);
}

module.exports = {
  deleteDigit
};
