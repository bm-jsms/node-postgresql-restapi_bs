import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from '../controllers/users.controllers.js';

const router: Router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
