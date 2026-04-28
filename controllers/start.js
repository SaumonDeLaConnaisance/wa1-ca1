'use strict';

import logger from "../utils/logger.js";
import perfumes from "../models/perf-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "CA1 Starter App",
      info: perfumes.getPerfInfo()
    };
    
    response.render('start', viewData);   
  },
};

export default start;
