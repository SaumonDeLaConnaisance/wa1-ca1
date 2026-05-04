'use strict';

import logger from '../utils/logger.js';

const PerfumesList = {
    createView(request, response) {
        const viewData = {
            title: 'Perfume'
        };
        response.render('perfume',viewData)
    }
}

export default PerfumesList;