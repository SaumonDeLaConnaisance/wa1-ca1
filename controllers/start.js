'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import perfumes from "../models/perf-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");

    
    
    const viewData = {
      title: "CA1 Starter App",
      appStore: appStore.getAppInfo(),
      pperfumes: {
        perfumeCount: perfumes.getPerfInfo(),
      },
    };
    
    response.render('start', viewData);  
  },
};

export default start;
