import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { getAllUser } from '../controllers/userController.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUser);

export default router;