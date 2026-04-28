'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const perfumes = {

  store: new JsonStore('./models/app-store.json', { perfumeCollection: {} }),
  collection: 'perfumeCollection',
  array: 'perfumes',

  getPerfInfo() {
    return this.store.findAll(this.collection);
  },

};

export default perfumes;
