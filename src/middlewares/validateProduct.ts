import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../helpers/httpStatus';

const validateProductName = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { name } = req.body;

  if (!name) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"name" is required' });
  } 
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  } 
  if (name.length < 3) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

const validateProductAmount = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"amount" is required' });
  } 
  if (typeof amount !== 'string') {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"amount" must be a string' });
  } 
  if (amount.length < 3) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
};

export { 
  validateProductName,
  validateProductAmount,
};