import CommunicationLog from '../models/CommunicationLog.js';
import asyncHandler from 'express-async-handler';

export const createLogEntry = asyncHandler(async (req, res) => {
    const { campaignId, customerId, status, message } = req.body;
    const logEntry = await CommunicationLog.create({ campaign_id: campaignId, customer_id: customerId, delivery_status: status, message });
    res.status(201).json(logEntry);
});

export const getLogsByCampaign = asyncHandler(async (req, res) => {
    const logs = await CommunicationLog.find({ campaign_id: req.params.campaignId });
    res.json(logs);
});

export const getLogsByCustomer = asyncHandler(async (req, res) => {
    const logs = await CommunicationLog.find({ customer_id: req.params.customerId });
    res.json(logs);
});
