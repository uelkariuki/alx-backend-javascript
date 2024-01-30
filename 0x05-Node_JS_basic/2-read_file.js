const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

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
}
module.exports = countStudents;
