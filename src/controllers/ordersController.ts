import { Request, Response } from 'express';
import JwtToken from '../helpers/JwtToken';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const fullOrder = await ordersService.getAll();
  return res.status(200).json(fullOrder);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const decrypted = JwtToken.verifyToken(token)
  const newOrder = await ordersService.create(req.body);
  return res.status(200).json(newOrder);
};

export default {
  getAll,
  create,
};