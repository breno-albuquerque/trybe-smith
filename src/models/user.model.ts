import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/User.interface';

const create = async (user: IUser): Promise<number> => {
  const { username, classe, level, password } = user;
  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUE (?, ?, ?, ?)';

  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);

  return result.insertId;
};

const getByUserName = async (username: string): Promise<IUser> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [username]);
  return result[0] as IUser;
};

export default {
  create,
  getByUserName,
};