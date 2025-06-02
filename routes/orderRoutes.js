import { Router } from 'express';
import { createOrder, getOrdersByCustomer, getOrderById, updateOrder, deleteOrder } from '../controller/orderController.js';

const router = Router();

/**
 * @route POST /orders
 * @desc Ingest a new order
 * @access Protected
 */
router.post('/', createOrder);

/**
 * @route GET /orders
 * @desc Get all orders (optionally by customer)
 * @access Protected
 */
router.get('/', getOrdersByCustomer);

/**
 * @route GET /orders/:id
 * @desc Get order by ID
 * @access Protected
 */
router.get('/:id', getOrderById);

/**
 * @route PUT /orders/:id
 * @desc Update order
 * @access Protected
 */
router.put('/:id', updateOrder);

/**
 * @route DELETE /orders/:id
 * @desc Delete order
 * @access Protected
 */
router.delete('/:id', deleteOrder);

export default router;
