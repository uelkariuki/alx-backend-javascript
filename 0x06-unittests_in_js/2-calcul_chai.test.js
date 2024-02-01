const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  it('should handle sum of float a and float b', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.eq(6);
  });
  it('should handle sum of negative float a and float b', function () {
    expect(calculateNumber('SUM', -1.4, -4.5)).to.be.eq(-5);
  });
  it('should handle subraction of float a and float b', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.eq(-4);
  });
  it('should handle subraction of negative float a and float b', function () {
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.be.eq(3);
  });
  it('should handle division of float a and float b', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.eq(0.2);
  });
  it('should handle division of float a and float b being 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.eq('Error');
  });
  it('should handle negative division of float a and float b being 0', function () {
    expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.be.eq(0.25);
  });
});
