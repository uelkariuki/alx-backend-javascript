export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    result.push(appendString + value);
  }

  return result;
}
