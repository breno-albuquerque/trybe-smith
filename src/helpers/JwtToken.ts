import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

const jwtConfig: object = {
  algorithm: 'HS256',
};

const generateToken = (payload: object): string => {
  const token: string = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

const verifyToken = (token: string): string | JwtPayload => (
  jwt.verify(token, SECRET, jwtConfig));

export default {
  generateToken,
  verifyToken,
};