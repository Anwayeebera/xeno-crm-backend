import { Schema, model } from 'mongoose';

const communicationLogSchema = new Schema({
    campaign_id: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    message: { type: String, required: true },
    delivery_status: { type: String, enum: ['Sent', 'Failed'], default: 'Sent' },
    sent_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default model('CommunicationLog', communicationLogSchema);
