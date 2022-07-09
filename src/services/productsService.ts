import IProduct from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAll();
  return products;
};

const create = async (product: IProduct): Promise<IProduct> => {
  const insertId = await productsModel.create(product);
  return { id: insertId, ...product };
};

export default {
  getAll,
  create,
};
