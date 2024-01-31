const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function() {
  it("checks if calculateNumber returns the sum of a and b", function() {
	assert.equal(calculateNumber(1, 3), 4)
  });
  it('checks if calculateNumber returns the sum of a and floating point no. b', function () {
	assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('checks if calculateNumber returns the sum of floating point no. a and floating point no. b', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('checks if calculateNumber returns the sum of different floating point no. a and floating point no. b', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

});
