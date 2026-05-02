'use strict';

import logger from '../utils/logger.js';

const perfumes = {
    createView(request, response) {
        const viewData = {
            title: 'Perfume'
        };
        response.render('playlist',viewData)
    }
}

export default perfumes;