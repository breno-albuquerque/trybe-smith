import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Iorder from '../interfaces/orderInterface';

const getAll = async (): Promise<Iorder[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [result] = await connection.execute<RowDataPacket[]>(query);
  return result as Iorder[];
};

export default {
  getAll,
};