import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Iproducts from '../interfaces/productsInterface';

const getAll = async (): Promise<Iproducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute<RowDataPacket[]>(query);
  console.log(result);
  return result as Iproducts[];
};

export default { 
  getAll,
};
