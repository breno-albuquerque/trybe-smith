import { Request, Response, NextFunction } from 'express';
import HttpStatus from '../helpers/httpStatus';

const validateUserName = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { username } = req.body;

  if (!username) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"username" is required' });
  } 
  if (typeof username !== 'string') {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"username" length must be at least 3 characters long' });
  }

  next();
};

const validateUserClass = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { classe } = req.body;

  if (!classe) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"classe" is required' });
  } 
  if (typeof classe !== 'string') {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"classe" must be a string' });
  } 
  if (classe.length < 3) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"classe" length must be at least 3 characters long' });
  }

  next();
};

const validateUserLevel = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { level } = req.body;

  if (level === undefined) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"level" is required' });
  } 
  if (typeof level !== 'number') {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"level" must be a number' });
  } 
  if (level < 1) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
};

const validateUserPassword = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { password } = req.body;

  if (!password) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: '"password" is required' });
  } 
  if (typeof password !== 'string') {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"password" must be a string' });
  } 
  if (password.length < 8) {
    return res.status(HttpStatus.UNPROCESSABLE).json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
};

export { 
  validateUserName,
  validateUserClass,
  validateUserLevel,
  validateUserPassword,
};
