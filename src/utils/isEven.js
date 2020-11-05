function isEven(num = 0) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error('Must be an integer');
  }

  return num % 2 === 0;
}

module.exports = isEven;
