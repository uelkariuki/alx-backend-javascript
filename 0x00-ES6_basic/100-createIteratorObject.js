export default function* createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);

  // eslint-disable-next-line no-restricted-syntax
  for (const department of departments) {
    // eslint-disable-next-line no-restricted-syntax
    for (const employee of report.allEmployees[department]) {
      yield employee;
    }
  }
}
