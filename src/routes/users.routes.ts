import { Router } from 'express';

const router: Router = Router();

router.get('/users', (req, res) => {
	res.send('Get users');
});

export default router;
