import { Request, Response, NextFunction } from 'express';

const validateUserName = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

const validateUserClass = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { classe } = req.body;

  if (!classe) return res.status(400).json({ message: '"classe" is required' });
  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  } 
  if (classe.length < 3) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }

  next();
};

const validateUserLevel = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { level } = req.body;

  if (!level) return res.status(400).json({ message: '"level" is required' });
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  } 
  if (level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
};

const validateUserPassword = (req: Request, res: Response, next: NextFunction):Response | void => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  } 
  if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
};

export { 
  validateUserName,
  validateUserClass,
  validateUserLevel,
  validateUserPassword,
};
