import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import Iorder from '../interfaces/orderInterface';

const getAll = async (): Promise<Iorder[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [result] = await connection.execute<RowDataPacket[]>(query);
  return result as Iorder[];
};

const create = async (userId: number) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  return result.insertId;
};

export default {
  getAll,
  create,
};
