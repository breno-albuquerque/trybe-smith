import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/orderInterface';

const getAll = async (): Promise<IOrder[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [result] = await connection.execute<RowDataPacket[]>(query);
  return result as IOrder[];
};

const create = async (userId: number): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  return result.insertId;
};

export default {
  getAll,
  create,
};
