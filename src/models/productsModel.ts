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
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUE (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return result.insertId;
};

const update = async (orderId: number, productId: number): Promise<void> => {
  const query = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?';
  await connection.execute(query, [orderId, productId]);
};

export default { 
  getAll,
  create,
  update,
};