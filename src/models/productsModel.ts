import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import Iproduct from '../interfaces/productsInterface';

const getAll = async (): Promise<Iproduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute<RowDataPacket[]>(query);
  return result as Iproduct[];
};

const create = async (product: Iproduct): Promise<number> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUE (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return result.insertId;
};

export default { 
  getAll,
  create,
};