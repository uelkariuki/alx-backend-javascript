const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should handle sum of float a and float b', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should handle sum of negative float a and float b', function () {
    assert.equal(calculateNumber('SUM', -1.4, -4.5), -5);
  });
  it('should handle subraction of float a and float b', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should handle subraction of negative float a and float b', function () {
    assert.equal(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
  });
  it('should handle division of float a and float b', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should handle division of float a and float b being 0', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('should handle negative division of float a and float b being 0', function () {
    assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
  });

});
