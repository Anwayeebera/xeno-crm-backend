import { Router } from 'express';
import { googleOAuthLogin, getUserProfile, loginUser, signupUser } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/login', loginUser); // Email/password login
router.post('/signup', (req, res, next) => {
    console.log('Signup endpoint hit', req.body);
    next();
}, signupUser); // Email/password signup
router.post('/google-login', googleOAuthLogin);
router.get('/profile', protect, getUserProfile); 

export default router;