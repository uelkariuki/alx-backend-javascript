export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpoint) {
    throw new Error('No argument');
  }
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
