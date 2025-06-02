import { Router } from 'express';
import { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer, previewAudience } from '../controller/customerController.js';

const router = Router();

/**
 * @route POST /customers
 * @desc Ingest a new customer
 * @access Protected
 */
router.post('/', createCustomer);

/**
 * @route GET /customers
 * @desc Get all customers
 * @access Protected
 */
router.get('/', getAllCustomers);

/**
 * @route GET /customers/:id
 * @desc Get customer by ID
 * @access Protected
 */
router.get('/:id', getCustomerById);

/**
 * @route PUT /customers/:id
 * @desc Update customer
 * @access Protected
 */
router.put('/:id', updateCustomer);

/**
 * @route DELETE /customers/:id
 * @desc Delete customer
 * @access Protected
 */
router.delete('/:id', deleteCustomer);

/**
 * @route POST /customers/preview
 * @desc Preview audience size
 * @access Protected
 */
router.post('/preview', previewAudience);

export default router;
