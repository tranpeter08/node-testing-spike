const { expect } = require('chai');
const isEven = require('../../utils/isEven');

describe('function isEven()', () => {
  it('returns true if a number is even', () => {
    expect(isEven(8)).to.equal(true);
    expect(isEven(13435435647575852)).to.be.true;
  });

  it('return false if a number is odd', () => {
    expect(isEven(901)).to.be.false;
    expect(isEven(13)).to.be.false;
  });

  it('throws with a non integer argument', () => {
    const message = 'Must be an integer';

    expect(() => isEven(9.1)).to.throw(message);
    expect(() => isEven(0.090909909901)).to.throw(message);
    expect(() => isEven('apple')).to.throw(message);
    expect(() => isEven(true)).to.throw(message);
  });
});
