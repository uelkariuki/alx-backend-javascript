/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
