const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

const { expect } = chai;
const sendPaymentRequestToApi = require('./5-payment');

describe('Test suite for hooks', () => {
  let calculateNumberStub;
  let logSpy;
  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calculateNumberStub.restore();
    logSpy.restore();
  });
  it('should handle hooks on first sendPaymentRequestToApi function call', () => {
    calculateNumberStub.returns('The total is: 120');

    sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledOnce).to.be.true;
  });
  it('should handle hooks on second sendPaymentRequestToApi function call', () => {
    calculateNumberStub.returns('The total is: 20');

    sendPaymentRequestToApi(100, 10);

    expect(logSpy.calledOnce).to.be.true;
  });
});
