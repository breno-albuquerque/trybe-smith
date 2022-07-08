import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import JwtToken from '../helpers/JwtToken';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const fullOrder = await ordersService.getAll();
  return res.status(200).json(fullOrder);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const decrypted: JwtPayload | string = JwtToken.verifyToken(token);
  if (typeof decrypted === 'string') {
    return res.status(401).json({ message: 'Invalid token' });
  }
  
  await ordersService.create(decrypted.id, req.body.productsIds);
  return res.status(201).json(decrypted);
};

export default {
  getAll,
  create,
};