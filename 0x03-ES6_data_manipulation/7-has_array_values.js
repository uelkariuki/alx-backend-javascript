/* eslint-disable no-restricted-syntax */
export default function hasValuesFromArray(set, array) {
  for (const elem of array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
