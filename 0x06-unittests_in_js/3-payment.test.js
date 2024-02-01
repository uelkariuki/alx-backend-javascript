// By using sinon.spy, make sure the math used for
// sendPaymentRequestToApi(100, 20) is the same as
// Utils.calculateNumber('SUM', 100, 20) (validate the usage
// of the Utils function)

const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const { utils } = require('mocha');
const sinon = require('sinon');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  it('should handle Utils function well', function () {
	let endPaymentRequestToApiSpy= sinon.spy(utils, 'endPaymentRequestToApi');
	utils.calculateNumber('SUM', 100, 20);
	// console.log(utils.calculateNumber);
	expect(utils.calculateNumber.calledOnce).to.be.Arguments(true);
	endPaymentRequestToApiSpy.restore();

  });
});
