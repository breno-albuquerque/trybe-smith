import Iproduct from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<Iproduct[]> => {
  const products: Iproduct[] = await productsModel.getAll();
  return products;
};

const create = async (product: Iproduct): Promise<Iproduct> => {
  const insertId: number = await productsModel.create(product);
  return { id: insertId, ...product };
};

export default {
  getAll,
  create,
};
