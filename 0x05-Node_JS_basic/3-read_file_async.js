const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n');
      const students = lines
        .filter((line, index) => index !== 0 && line.trim() !== '')
        .map((line) => line.split(','));

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      for (let i = 0; i < students.length; i += 1) {
        const field = students[i][3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(students[i][0]);
      }
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(
            `Number of students in ${field}: ${fields[field].length
            }. List: ${fields[field].join(', ')}`,
          );
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
