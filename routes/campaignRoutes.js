import { Router } from 'express';
import { createCampaign, getAllCampaigns, getCampaignById, deleteCampaign } from '../controller/campaignController.js';

const router = Router();

router.post('/', createCampaign); 
router.get('/', getAllCampaigns); 
router.get('/:id', getCampaignById); 
router.delete('/:id', deleteCampaign); 

export default router;
