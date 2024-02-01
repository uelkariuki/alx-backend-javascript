const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Async Test Suite', function () {
  it('should return data: Successful response from the API if success is true', function (done) {
    getPaymentTokenFromAPI(true).then(successResult => {
      expect(successResult).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
