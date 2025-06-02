import asyncHandler from 'express-async-handler';

export const updateDeliveryStatus = asyncHandler(async (req, res) => {
    const { logId, status } = req.body;
    const log = await findByIdAndUpdate(
        logId,
        { status },
        { new: true }
    );
    if (!log) {
        res.status(404).json({ message: 'Log not found' });
    } else {
        res.json(log);
    }
});
