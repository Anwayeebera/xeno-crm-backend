import { Schema, model } from 'mongoose';

const campaignSchema = new Schema({
    name: { type: String, required: true },
    audience_segment_id: { type: Schema.Types.ObjectId, ref: 'AudienceSegment', required: true },
    message_template: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default model('Campaign', campaignSchema);
