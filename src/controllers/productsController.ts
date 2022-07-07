import { Request, Response } from 'express';
import Iproducts from '../interfaces/productsInterface';
import productsService from '../services/productsService';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const products: Iproducts[] = await productsService.getAll();
  return res.status(200).json(products);
};

export default {
  getAll,
};