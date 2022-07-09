import { Request, Response } from 'express';
import IProduct from '../interfaces/productsInterface';
import productsService from '../services/productsService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const products: IProduct[] = await productsService.getAll();
  return res.status(200).json(products);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const product: IProduct = req.body;
  const newProduct = await productsService.create(product);
  return res.status(201).json(newProduct);
};

export default {
  getAll,
  create,
};