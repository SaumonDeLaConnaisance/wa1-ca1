'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const perfumes = {

  store: new JsonStore('./models/perfCollection.json', { perfumeCollection: [ {} ] }),
  collection: 'perfumeCollection',
  array: "perfumes",

  getPerfInfo() {
    return this.store.findAll(this.collection);
  },

  getPerfCount() {
    const perfCol = perfumes.getPerfInfo();
  },

  getPerfume(id) {
    return this.store.findOneBy(this.collection, (perfumeCollection => perfumeCollection.id === id));
  }
};

export default perfumes;
