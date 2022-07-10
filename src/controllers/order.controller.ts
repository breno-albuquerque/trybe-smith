import { Request, Response } from 'express';
import HttpError from '../helpers/httpError';
import HttpStatus from '../helpers/httpStatus';
import IRequest from '../interfaces/Request.interface';
import ordersService from '../services/order.service';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const fullOrder = await ordersService.getAll();
  return res.status(HttpStatus.OK).json(fullOrder);
};

const create = async (req: IRequest, res: Response): Promise<Response | undefined> => {
  const id = req.userId;
  if (!id) throw new HttpError(401, 'Invalid Token'); 
  const newOrder = await ordersService.create(id, req.body.productsIds);
  return res.status(HttpStatus.CREATED).json(newOrder);
};

export default {
  getAll,
  create,
};