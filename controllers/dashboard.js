'use strict'

import Logger from "../utils/logger.js"
import perfStore from '../models/perf-store.js'

const dashboard = {
    createView(request, response) {
        Logger.info("About page loading!");

        const viewData = {
            title: "Perfumes",
            houses: perfStore.getPerfInfo()
        };

        Logger.debug(viewData.houses);
        
        response.render('dashboard', viewData);
    },
};

export default dashboard;