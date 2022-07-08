import { Request, Response, NextFunction } from 'express';
import JwtToken from '../helpers/JwtToken';

const auth = (req: Request, res: Response, next: NextFunction):Response | void => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    JwtToken.verifyToken(token);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default auth;