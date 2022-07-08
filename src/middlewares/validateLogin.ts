import { NextFunction, Request, Response } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name, password } = req.body;
  if (!name) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
};

export default validateLogin;