import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String }, // Only for local auth
    auth_provider: { type: String, enum: ['Google', 'Local'], default: 'Google' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default model('User', userSchema);
