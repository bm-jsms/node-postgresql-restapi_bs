import type { Request, Response } from 'express';

type Controller = (req: Request, res: Response) => Promise<Response | void>;
interface DBError extends Error {
	code?: string;
	detail?: string;
}

export type { Controller, DBError };
