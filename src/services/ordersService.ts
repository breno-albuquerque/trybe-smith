import IOrder from '../interfaces/orderInterface';
import IProduct from '../interfaces/productsInterface';
import ordersModel from '../models/ordersModel';
import productsService from './productsService';
import IFullOrder from '../interfaces/fullOrderInterface';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<IFullOrder[]> => {
  const products: IProduct[] = await productsService.getAll();
  const orders: IOrder[] = await ordersModel.getAll();

  const fullOrder = orders.map((item) => ({
    id: item.id,
    userId: item.userId,
    productsIds: products.filter((product) => product.orderId === item.id)
      .map((filteredProd) => filteredProd.id),
  }));

  return fullOrder as IFullOrder[];
};

const create = async (userId: number, productsIds: number[]): Promise<object> => {
  const orderId = await ordersModel.create(userId);
  
  const productsPromises: Promise<void>[] = [];
  productsIds.forEach((productId) => {
    productsPromises.push(productsModel.update(orderId, productId));
  });
  await Promise.all(productsPromises);

  return {
    userId,
    productsIds,
  };
};

export default {
  getAll,
  create,
};
