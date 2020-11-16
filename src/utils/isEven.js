/**
 * Determines if an integer is even.
 * @param {number} num - An integer
 * @returns {boolean}
 */

function isEven(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error('Must be an integer');
  }

  return num % 2 === 0;
}

module.exports = isEven;
