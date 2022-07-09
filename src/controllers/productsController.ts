import { Request, Response } from 'express';
import productsService from '../services/productsService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const newProduct = await productsService.create(req.body);
  return res.status(201).json(newProduct);
};

export default {
  getAll,
  create,
};