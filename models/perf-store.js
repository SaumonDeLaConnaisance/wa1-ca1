'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const perfumes = {

  store: new JsonStore('./models/perfCollection.json', { perfumeCollection: [ {} ] }),
  collection: 'perfumeCollection',
  array: 'perfumes',

  getPerfInfo() {
    return this.store.findAll(this.collection);
  },

  getPerfCount() {
    // getPerfInfo() already returns the array of houses
    const collection = this.getPerfInfo(); 
    let total = 0;

    // Check if collection exists and is an array before looping
    if (collection && Array.isArray(collection)) {
      for (const house of collection) {
        total += house.perfumes.length;
      }
    }

    return total;
  }

};

export default perfumes;
