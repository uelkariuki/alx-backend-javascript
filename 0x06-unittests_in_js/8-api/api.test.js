const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('GET /', function () {
  it('should validate GET / works well', function (done) {
    request('http://localhost:7865', function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
