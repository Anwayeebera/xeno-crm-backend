// import { create, find, findByIdAndDelete } from '../models/AudienceSegment';
import asyncHandler from 'express-async-handler';

export const createSegment = asyncHandler(async (req, res) => {
    const { name, rules } = req.body;
    const segment = await create({ name, rules });
    res.status(201).json(segment);
});

export const previewSegment = asyncHandler(async (req, res) => {
    const { rules } = req.body;
    const size = await calculateSegmentSize(rules); // Implement this logic
    res.json({ size });
});

export const getAllSegments = asyncHandler(async (req, res) => {
    const segments = await find();
    res.json(segments);
});

export const deleteSegment = asyncHandler(async (req, res) => {
    const segment = await findByIdAndDelete(req.params.id);
    if (!segment) {
        res.status(404).json({ message: 'Segment not found' });
    } else {
        res.json({ message: 'Segment deleted successfully' });
    }
});
