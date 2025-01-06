import { pool } from '../db.js';
import type { Controller, DBError } from '../types/controller.type.js';

const getUsers: Controller = async (req, res) => {
	const { rows } = await pool.query('SELECT * FROM users');

	res.send(rows);
};

const getUser: Controller = async (req, res) => {
	const { id } = req.params;
	const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

	if (rows.length === 0) {
		return res.status(404).json({ message: 'User not found' });
	}

	res.send(rows);
};

const createUser: Controller = async (req, res) => {
	try {
		const data = req.body;
		console.log(data);

		const { rows } = await pool.query(
			'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
			[data.name, data.email],
		);

		res.send(rows);
	} catch (error: unknown) {
		const err = error as DBError;

		console.log(err);

		if (err.code === '23505')
			return res.status(409).json({ message: 'User already exists' });

		return res.status(500).json({ message: 'Internal server error' });
	}
};

const updateUser: Controller = async (req, res) => {
	const { id } = req.params;

	const { rows } = await pool.query(
		`UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
		[req.body.name, req.body.email, id],
	);

	if (rows.length === 0)
		return res.status(404).json({ message: 'User not found' });

	res.send(rows);
};

const deleteUser: Controller = async (req, res) => {
	const { id } = req.params;

	const { rows, rowCount } = await pool.query(
		`DELETE FROM users WHERE id = $1 RETURNING *`,
		[id],
	);

	if (rowCount === 0)
		return res.status(404).json({ message: 'User not found' });

	console.log(rows);
	res.json({ message: 'User deleted' });
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
