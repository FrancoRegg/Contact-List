import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { getAllUsers, getUser } from '../controllers/userController.js';


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);

export default router;