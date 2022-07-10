import { Request, Response } from 'express';
import HttpStatus from '../helpers/httpStatus';
import productsService from '../services/product.service';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAll();
  return res.status(HttpStatus.OK).json(products);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const newProduct = await productsService.create(req.body);
  return res.status(HttpStatus.CREATED).json(newProduct);
};

export default {
  getAll,
  create,
};