export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  return result.slice(0, -3);
}
