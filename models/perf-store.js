'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const perfumes = {

  store: new JsonStore('./models/app-store.json', { perfumeCollection: [] }),
  collection: 'perfumeCollection',
  array: 'perfumes',

  getPerfInfo() {
    return this.store.findAll(this.collection);
  },

  getPerfCount() {
    const collection = this.store.findAll(this.collection);
    let total = 0;

    for (const house of collection) {
      total += house.perfumes.length;
    }

    return total;
  }

};

export default perfumes;
