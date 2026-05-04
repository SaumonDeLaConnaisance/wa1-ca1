'use strict';

import logger from '../utils/logger.js';
import perfStore from '../models/perf-store.js';
import { v4 as uuidv4 } from 'uuid';

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
    
    addPerfume(request, response) {
        const perfumeId = request.params.id;
        const perfumes = perfStore.getPerfume(perfumeId)
        const newPerfume = {
        id: uuidv4(),
        houseName: request.body.houseName,
        name: request.body.name,
        target: request.body.target,
        concentration: request.body.concentration,
        topNotes: request.body.topNotes,
        middleNotes: request.body.middleNotes,
        baseNotes: request.body.baseNotes
        };

        perfStore.addPerfume(perfumeId,newPerfume);
        response.redirect('/perfumes/' + perfumeId);
},

};

export default PerfumesList;