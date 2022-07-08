import Iorder from '../interfaces/orderInterface';
import Iproduct from '../interfaces/productsInterface';
import ordersModel from '../models/ordersModel';
import productsService from './productsService';
import IfullOrder from '../interfaces/fullOrderInterface';

const getAll = async (): Promise<IfullOrder[]> => {
  const products: Iproduct[] = await productsService.getAll();
  const orders: Iorder[] = await ordersModel.getAll();

  const fullOrder = orders.map((item) => ({
    id: item.id,
    userId: item.userId,
    productsIds: products.filter((product) => product.orderId === item.id)
      .map((filteredProd) => filteredProd.id),
  }));

  return fullOrder as IfullOrder[];
};

/* const create = async () */

export default {
  getAll,
};
