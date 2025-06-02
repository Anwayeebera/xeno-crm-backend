import asyncHandler from 'express-async-handler';

export const createOrder = asyncHandler(async (req, res) => {
    const { customerId, total, items } = req.body;
    // Pub-Sub: Instead of direct DB write, publish to a message broker here
    // e.g., await publishToBroker('order.create', { customerId, total, items });
    // For now, fallback to direct DB write:
    const order = await create({ customer: customerId, total, items });
    res.status(201).json(order);
});

export const getOrdersByCustomer = asyncHandler(async (req, res) => {
    const orders = await find({ customer: req.params.customerId });
    res.json(orders);
});

export const getOrderById = asyncHandler(async (req, res) => {
    const order = await findById(req.params.id);
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
    } else {
        res.json(order);
    }
});

export const updateOrder = asyncHandler(async (req, res) => {
    const order = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
    } else {
        res.json(order);
    }
});

export const deleteOrder = asyncHandler(async (req, res) => {
    const order = await findByIdAndDelete(req.params.id);
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
    } else {
        res.json({ message: 'Order deleted successfully' });
    }
});
