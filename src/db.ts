import pg from 'pg';
import { DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, HOST } from './config.js';

const pool: pg.Pool = new pg.Pool({
	user: DB_USER,
	host: HOST,
	database: DB_NAME,
	password: DB_PASSWORD,
	port: DB_PORT ? Number.parseInt(DB_PORT) : 3000,
});

export { pool };
