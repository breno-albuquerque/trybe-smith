import { Response, NextFunction } from 'express';
import HttpError from '../helpers/httpError';
import HttpStatus from '../helpers/httpStatus';
import JwtToken from '../helpers/JwtToken';
import IRequest from '../interfaces/Request.interface';

const auth = (req: IRequest, res: Response, next: NextFunction):Response | void => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const user = JwtToken.verifyToken(token);
  if (typeof user === 'string') throw new HttpError(HttpStatus.UNAUTHORIZED, 'Invalid Token');
  
  req.userId = user.id;
  next();
};

export default auth;