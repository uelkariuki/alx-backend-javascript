const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id([0-9]+)', (req, res, next) => {
  id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});
app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
