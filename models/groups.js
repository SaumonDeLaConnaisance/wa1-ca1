'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const groups = {

  store: new JsonStore('./models/app-store.json', { groups: {} }),
  collection: 'employee',
  array: 'employee',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default groups;
