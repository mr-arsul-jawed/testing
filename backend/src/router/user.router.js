import express from 'express';
import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

export default router; 