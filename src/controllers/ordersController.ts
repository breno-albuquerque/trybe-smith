import { Request, Response } from 'express';
import HttpError from '../helpers/httpError';
import IRequest from '../interfaces/requestInterface';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const fullOrder = await ordersService.getAll();
  return res.status(200).json(fullOrder);
};

const create = async (req: IRequest, res: Response): Promise<Response | undefined> => {
  const id = req.userId;
  if (!id) throw new HttpError(401, 'Invalid Token'); 
  const newOrder = await ordersService.create(id, req.body.productsIds);
  return res.status(201).json(newOrder);
};

export default {
  getAll,
  create,
};