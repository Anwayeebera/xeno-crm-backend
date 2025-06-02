import { Router } from 'express';
import { createLogEntry, getLogsByCampaign, getLogsByCustomer } from '../controller/communicationLogController.js';

const router = Router();

router.post('/', createLogEntry); 
router.get('/campaign/:campaignId', getLogsByCampaign); 
router.get('/customer/:customerId', getLogsByCustomer); 

export default router;
