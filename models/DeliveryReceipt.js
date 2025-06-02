import { Schema, model } from 'mongoose';

const deliveryReceiptSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
    communication_log_id: { type: Schema.Types.ObjectId, ref: 'CommunicationLog', required: true },
    status: { type: String, enum: ['Delivered', 'Failed'], required: true },
    received_at: { type: Date, default: Date.now }
});

export default model('DeliveryReceipt', deliveryReceiptSchema);
