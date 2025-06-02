import { Schema, model } from 'mongoose';

const audienceSegmentSchema = new Schema({
    name: { type: String, required: true },
    rules: { type: String, required: true },
    preview_size: { type: Number, default: 0 },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default model('AudienceSegment', audienceSegmentSchema);
