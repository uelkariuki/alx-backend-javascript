const utils = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await utils.readDatabase();
      let output = 'This is the list of our students\n';
      Object.keys(data).sort().forEach((field) => {
        output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      return Promise.resolve(response.status(200).send(output));
    } catch (error) {
      return Promise.reject(response.status(500).send('Cannot load the database'));
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      return Promise.reject(response.status(500).send('Major parameter must be CS or SWE'));
    }
    try {
      const data = await utils.readDatabase();
      const output = `List: ${data[major].join(', ')}`;
      return Promise.resolve(response.status(200).send(output));
    } catch (error) {
      return Promise.reject(response.status(500).send('Cannot load the database'));
    }
  }
}

module.exports = StudentsController;
