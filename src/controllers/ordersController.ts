import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const fullOrder = await ordersService.getAll();
  return res.status(200).json(fullOrder);
};

export default {
  getAll,
};