// Imagine that calling the function Utils.calculateNumber is actually calling
//  an API or a very expensive method. You don’t necessarily want to do that on every test run
// Stub the function Utils.calculateNumber to always return the same number 10
// Verify that the stub is being called with type = SUM, a = 100, and b = 20
// Add a spy to verify that console.log is logging the correct message The total is: 10

const chai = require('chai');
const Utils = require('./utils');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('Test suit for stub', function () {
  it('should handle stub of function Utils.calculateNumber', function () {
    let calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
    let logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledWith('The total is: 10')).to.be.true;
    calculateNumberStub.restore();
    logSpy.restore();
  });
});
