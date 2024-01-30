const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const students = await countStudents(path);
    res.send(`${message}${students.join('\n')}`);
  } catch (error) {
    res.send(`${message}${error.message}`);
  }
});
app.listen(1245, () => {
});
module.exports = app;
