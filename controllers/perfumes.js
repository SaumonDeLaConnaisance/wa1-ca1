'use strict';

import logger from '../utils/logger.js';
import perfStore from '../models/perf-store.js';

const PerfumesList = {
    createView(request, response) {
        const perfumeId = request.params.id;
        logger.debug(`perfume id = ${perfumeId}`);

        const viewData = {
            title: 'Perfume',
            singlePerfume: perfStore.getPerfume(perfumeId)
        };
        response.render('perfumes', viewData);
    },
};

export default PerfumesList;