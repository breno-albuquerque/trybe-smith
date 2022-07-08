import { Request, Response } from 'express';
import JwtToken from '../helpers/JwtToken';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const fullOrder = await ordersService.getAll();
  return res.status(200).json(fullOrder);
};

const create = async (req: Request, res: Response): Promise<Response | undefined> => {
  const token = req.headers.authorization;
  if (token) {
    const decrypted = JwtToken.verifyToken(token);
    if (typeof decrypted !== 'string') {
      const newOrder = await ordersService.create(decrypted.id, req.body.productsIds);
      return res.status(201).json(newOrder);
    }
  }
};

export default {
  getAll,
  create,
};