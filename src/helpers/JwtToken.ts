import { JwtPayload, sign, SignOptions, verify } from 'jsonwebtoken';
import IUser from '../interfaces/userInterface';
import HttpError from './httpError';

const SECRET = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
};

const generateToken = (payload: Omit<IUser, 'password'>): string => {
  const token: string = sign(payload, SECRET, jwtConfig);
  return token;
};

const verifyToken = (token: string): string | JwtPayload => {
  try {
    const decrypted = verify(token, SECRET, jwtConfig);
    return decrypted;
  } catch (err) {
    throw new HttpError(401, 'Invalid Token');
  }
};

export default {
  generateToken,
  verifyToken,
};