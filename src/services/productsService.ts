import Iproduct from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<Iproduct[]> => {
  const products: Iproduct[] = await productsModel.getAll();
  return products;
};

export default {
  getAll,
};
