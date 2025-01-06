import 'dotenv/config';

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const HOST = process.env.HOST;

const DB_PORT = process.env.DB_PORT;

export { PORT, DB_USER, DB_PASSWORD, DB_NAME, HOST, DB_PORT };
