import generateToken from '../utils/generateToken.js';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import { OAuth2Client } from 'google-auth-library';
import bcrypt from 'bcryptjs';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleOAuthLogin = asyncHandler(async (req, res) => {
    const { tokenId } = req.body;

    try {
        // Verify Google token and get user info
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const { email, name, sub: googleId } = payload;

        // Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({
                name,
                email,
                googleId
            });
        }

        // Generate JWT token
        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token
        });
    } catch (err) {
        console.error('Google OAuth error:', err);
        res.status(401).json({ message: 'Google authentication failed', error: err.message });
    }
});

export const getUserProfile = asyncHandler(async (req, res) => {
    res.json(req.user);
});

export const signupUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        auth_provider: 'Local'
    });
    const token = generateToken(user._id);
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token
    });
});

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.password) {
        res.status(401);
        throw new Error('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401);
        throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id);
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token
    });
});