import { NextFunction, Request, Response } from 'express';
import HttpStatus from '../helpers/httpStatus';

const validateOrder = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { productsIds } = req.body;
  if (productsIds === undefined) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"productsIds" is required' });
  } 
  if (!Array.isArray(productsIds)) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export default validateOrder;