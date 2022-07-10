import ordersModel from '../models/order.model';
import productsService from './product.service';
import IFullOrder from '../interfaces/FullOrder.interface';
import productsModel from '../models/product.model';

const getAll = async (): Promise<IFullOrder[]> => {
  const products = await productsService.getAll();
  const orders = await ordersModel.getAll();

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
