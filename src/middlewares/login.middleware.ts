import { NextFunction, Request, Response } from 'express';
import HttpStatus from '../helpers/httpStatus';

const validateLogin = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { username, password } = req.body;
  if (!username) return res.status(HttpStatus.BAD_REQUEST).json({ message: '"username" is required' });
  if (!password) return res.status(HttpStatus.BAD_REQUEST).json({ message: '"password" is required' });
  next();
};

export default validateLogin;