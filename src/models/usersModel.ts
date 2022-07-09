import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/userInterface';

const create = async (user: IUser): Promise<number> => {
  const { username, classe, level, password } = user;
  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUE (?, ?, ?, ?)';

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  return result.insertId;
};

export default {
  create,
};