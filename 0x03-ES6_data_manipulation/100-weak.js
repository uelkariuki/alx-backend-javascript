export const weakMap = new WeakMap();

const MAX_CALLS = 5;

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (count >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
