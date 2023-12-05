export default function cleanSet(set, startString) {
  if (
    !set
    || !(set instanceof Set)
    || typeof startString !== 'string'
    || !startString
  ) {
    return '';
  }
  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .filter(Boolean)
    .join('-');
}
