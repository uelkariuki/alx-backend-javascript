// eslint-disable-next-line import/extensions
import getNeighborhoodsList from './2-arrow.js';

// eslint-disable-next-line new-cap
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
// eslint-disable-next-line no-console
console.log(res);
