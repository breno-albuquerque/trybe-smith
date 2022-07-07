import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Iuser from '../interfaces/userInterface';

const create = async (user: Iuser): Promise<number | null> => {
  const { username, classe, level, password } = user;
  const query = `
  INSERT INTO Trybesmith.Users (username, classe, level, password) VALUE (?, ?, ?, ?)
  `;
  const [result] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId } = result;
  return insertId;
};

export default {
  create,
};