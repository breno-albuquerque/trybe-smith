import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Iuser from '../interfaces/userInterface';

const getOne = async (user: Omit<Iuser, 'classe' | 'level'>) => {
  const { username, password } = user;
  const query = 'SELECT username FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [result] = await connection.execute<ResultSetHeader>(query, [username, password]);
  return result;
};

export default {
  getOne,
};