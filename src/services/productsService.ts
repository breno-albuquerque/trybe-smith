import Iproducts from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<Iproducts[]> => {
  const products: Iproducts[] = await productsModel.getAll();
  return products;
};

export default {
  getAll,
};
