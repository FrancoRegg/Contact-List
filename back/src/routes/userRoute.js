import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { getAllUsers, getUser, updateUser } from '../controllers/userController.js';


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/update/user/:id', updateUser);

export default router;