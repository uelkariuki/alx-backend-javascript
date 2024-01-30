const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(path);
    res.send(`This is the list of our students\n${students.join('\n')}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.listen(1245, () => {
});
module.exports = app;
