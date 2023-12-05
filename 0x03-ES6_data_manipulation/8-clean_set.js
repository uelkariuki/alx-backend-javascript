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
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.substring(startString.length))
    .filter(Boolean)
    .join('-');
}
