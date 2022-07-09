import { Request, Response, NextFunction } from 'express';
import HttpError from '../helpers/httpError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = error as HttpError;
  console.log(status, message);
  return res.status(status || 500).json({ message } || { message: 'Internal error' });
};

export default errorMiddleware;