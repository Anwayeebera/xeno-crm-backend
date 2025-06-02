import Campaign from '../models/Campaign.js';
import AudienceSegment from '../models/AudienceSegment.js';
import asyncHandler from 'express-async-handler';

// Create a campaign and its audience segment
export const createCampaign = asyncHandler(async (req, res) => {
    const { name, message_template, rules } = req.body;
    // 1. Create the audience segment
    const segment = await AudienceSegment.create({
        name: name + ' Segment',
        rules: JSON.stringify(rules),
        created_by: req.user._id
    });
    // 2. Create the campaign
    const campaign = await Campaign.create({
        name,
        audience_segment_id: segment._id,
        message_template,
        created_by: req.user._id
    });
    res.status(201).json(campaign);
});

// Get all campaigns
export const getAllCampaigns = asyncHandler(async (req, res) => {
    const campaigns = await Campaign.find().sort({ created_at: -1 });
    res.json(campaigns);
});

export const getCampaignById = asyncHandler(async (req, res) => {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
        res.status(404).json({ message: 'Campaign not found' });
    } else {
        res.json(campaign);
    }
});

export const deleteCampaign = asyncHandler(async (req, res) => {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) {
        res.status(404).json({ message: 'Campaign not found' });
    } else {
        res.json({ message: 'Campaign deleted successfully' });
    }
});
