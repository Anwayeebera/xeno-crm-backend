import { Router } from 'express';
import { updateDeliveryStatus } from '../controller/deliveryReceiptController.js';

const router = Router();

router.post('/', updateDeliveryStatus); 

export default router;
