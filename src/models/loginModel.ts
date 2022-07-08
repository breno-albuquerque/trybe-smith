import connection from './connection';
import Iuser from '../interfaces/userInterface';

const getOne = async (user: Omit<Iuser, 'classe' | 'level'>) => {
  const { username, password } = user;
  const query = `
  SELECT username, classe, level FROM Trybesmith.Users WHERE username = ? AND password = ?
  `;
  const [result] = await connection.execute(query, [username, password]);
  return result as Omit<Iuser, 'password'>[];
};

export default {
  getOne,
};