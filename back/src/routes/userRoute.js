import { Router } from 'express';
import { register, login, getAllUser } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUser);

export default router;