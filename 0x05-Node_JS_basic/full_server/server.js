const express = require('express');

const app = express();
const routes = require('./routes/index');

app.use('/', routes);

const port = 1245;
app.listen(port, () => {
});

export default app;
