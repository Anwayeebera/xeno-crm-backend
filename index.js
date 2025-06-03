import  'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import customerRoutes from './routes/customerRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import campaignRoutes from './routes/campaignRoutes.js';
import communicationLogRoutes from './routes/communicationLogRoutes.js';
import deliveryReceiptRoutes from './routes/deliveryReceiptRoutes.js';
import userRoutes from './routes/userRoutes.js';
// import aiRoutes from './routes/aiRoutes.js';
import { protect } from './middleware/authMiddleware.js';
// import dotenv from  'dotenv';


// dotenv.config(); 



const app = express();
connectDB();

app.use((req, res, next) => {
    console.log('\n=== Incoming Request ===');
    console.log('URL:', req.url);
    console.log('Method:', req.method);
    next();
});

app.use(cors());
app.use(express.json());

// Public routes
app.use('/users', userRoutes); // login/signup/google-login should be public
// app.use('/ai', aiRoutes);      // if you want AI routes public, keep here

// Protect all routes below this middleware
app.use(protect);

app.use('/customers', customerRoutes);         // For audience/segment logic, preview, etc.
app.use('/orders', orderRoutes);               // For order/spend-based rules
app.use('/campaigns', campaignRoutes);         // For creating and listing campaigns
app.use('/logs', communicationLogRoutes);      // For campaign delivery logs/stats
app.use('/delivery-receipts', deliveryReceiptRoutes); // For updating delivery status

app.use((req, res) => {
    console.log('404 Not Found:', req.url);
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error('Global error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});