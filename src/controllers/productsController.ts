import { Request, Response } from 'express';
import Iproduct from '../interfaces/productsInterface';
import productsService from '../services/productsService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const products: Iproduct[] = await productsService.getAll();
  return res.status(200).json(products);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const product: Iproduct = req.body;
  const newProduct = await productsService.create(product);
  return res.status(201).json(newProduct);
};

export default {
  getAll,
  create,
};