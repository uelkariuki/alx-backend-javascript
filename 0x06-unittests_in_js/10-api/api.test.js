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
  it('should validate GET /cart/:id works well', function (done) {
    const id = 1;
    request(`http://localhost:7865/cart/${id}`, function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${id}`);
      done();
    });
  });
  it('should validate GET /cart/:id does not work well if id is not a number', function (done) {
    const id = 'id';
    request(`http://localhost:7865/cart/${id}`, function (err, res) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it('should validate POST /login works well', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' },
    };
    request(options, function (err, res, body) {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
  it('should validate GET /available_payments works well', function (done) {
    request(
      'http://localhost:7865/available_payments',
      function (err, res, body) {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      }
    );
  });
});
