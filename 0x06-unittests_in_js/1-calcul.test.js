const assert = require('assert');
const calculateNumber = require('./1-calcul');

// > const calculateNumber = require("./1-calcul.js");
// > calculateNumber('SUM', 1.4, 4.5)
// 6
// > calculateNumber('SUBTRACT', 1.4, 4.5)
// -4
// > calculateNumber('DIVIDE', 1.4, 4.5)
// 0.2
// > calculateNumber('DIVIDE', 1.4, 0)
// 'Error'

describe('calculateNumber', function () {
  it('sum of float a and float b', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('sum of negative float a and float b', function () {
    assert.equal(calculateNumber('SUM', -1.4, -4.5), -5);
  });
  it('subraction of float a and float b', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('subraction of negative float a and float b', function () {
    assert.equal(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
  });
  it('division of float a and float b', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('division of float a and float b being 0', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('negative division of float a and float b being 0', function () {
    assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
  });

});
