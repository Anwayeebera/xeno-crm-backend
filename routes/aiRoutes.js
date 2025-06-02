import { Router } from 'express';
import { convertToSegmentRules, generateMessageVariants } from '../controller/aiController.js';

const router = Router();

router.post('/convert-to-rules', convertToSegmentRules); 
router.post('/generate-messages', generateMessageVariants); 

export default router;
