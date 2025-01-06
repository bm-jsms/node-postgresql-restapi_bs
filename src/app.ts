import express from 'express';
import router from './routes/users.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(router);

app.listen(PORT, () => {
	console.log('Server started on port 3000');
});
