'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// add your own routes below

import start from './controllers/start.js';
router.get('/', start.createView);
import dashboard from './controllers/dashboard.js';
router.get('/dashboard', dashboard.createView);
import PerfumesList from './controllers/perfumes.js';
router.get('/perfumes/:id', PerfumesList.createView);
router.post('/perfumes/:id/addperfume', PerfumesList.addPerfume);

router.get('/error', (request,response) => response.status(404).end('Page not found'));


export default router;
