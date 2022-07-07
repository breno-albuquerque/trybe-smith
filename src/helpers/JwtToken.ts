import { JwtPayload, sign, SignOptions, verify } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
};

const generateToken = (payload: object): string => {
  const token: string = sign(payload, SECRET, jwtConfig);
  return token;
};

const verifyToken = (token: string): string | JwtPayload => (
  verify(token, SECRET, jwtConfig));

export default {
  generateToken,
  verifyToken,
};