'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import perfumes from "../models/perf-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");

    let perfumeCollection = perfumes.getPerfInfo();
    let perfumeCount = 0;

    for(let house of perfumeCollection){
      perfumeCount += house.perfumes.length;
    }
    
    const viewData = {
      title: "CA1 Starter App",
      appStore: appStore.getAppInfo(),
      perfumeCount: perfumeCount
    };
    
    response.render('start', viewData);  
  },
};

export default start;
