const fs = require('fs').promises;

function readDatabase(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n');
      const students = lines
        .filter((line, index) => index !== 0 && line.trim() !== '')
        .map((line) => line.split(','));
      const numberOfStudents = students.length;
      console.log(`Number of students: ${numberOfStudents}`);
      const fields = {};
      for (let i = 0; i < students.length; i += 1) {
        const field = students[i][3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(students[i][0]);
      }
      const fieldData = [];
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const output = `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}`;
          console.log(output);
          fieldData.push(output);
        }
      }
      return [`Number of students: ${numberOfStudents}`, ...fieldData];
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = readDatabase;
