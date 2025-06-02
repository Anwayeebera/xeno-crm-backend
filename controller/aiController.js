import OpenAI from 'openai';
import asyncHandler from 'express-async-handler';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const convertToSegmentRules = asyncHandler(async (req, res) => {
    const { prompt } = req.body;
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
            role: 'user',
            content: `Convert this into logical segment rules: "${prompt}"`,
        }],
        max_tokens: 50,
    });
    res.json({ rules: completion.choices[0].message.content.trim() });
});

export const generateMessageVariants = asyncHandler(async (req, res) => {
    const { campaignObjective } = req.body;
    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
            role: 'user',
            content: `Generate 3 personalized message variants for the following campaign objective: "${campaignObjective}"`,
        }],
        max_tokens: 100,
    });
    res.json({ messages: completion.choices[0].message.content.trim().split('\n') });
});