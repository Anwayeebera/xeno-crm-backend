import Customer from '../models/customer.js';
import asyncHandler from 'express-async-handler';

export const createCustomer = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    const customer = await Customer.create({ name, email, phone });
    res.status(201).json(customer);
});

export const getAllCustomers = asyncHandler(async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
});

export const getCustomerById = asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(404).json({ message: 'Customer not found' });
    } else {
        res.json(customer);
    }
});

export const updateCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customer) {
        res.status(404).json({ message: 'Customer not found' });
    } else {
        res.json(customer);
    }
});

export const deleteCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
        res.status(404).json({ message: 'Customer not found' });
    } else {
        res.json({ message: 'Customer deleted successfully' });
    }
});

export const previewAudience = asyncHandler(async (req, res) => {
    // Example: count customers matching rules (implement your logic)
    const { rules, logic } = req.body;
    // For demo, just return total count
    const size = await Customer.countDocuments();
    res.json({ size });
});
