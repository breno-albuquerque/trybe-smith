import connection from './connection';
import IUser from '../interfaces/User.interface';

const getOne = async (user: Omit<IUser, 'classe' | 'level'>) => {
  const { username, password } = user;
  const query = 'SELECT id, username, classe, level FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [result] = await connection.execute(query, [username, password]);
  return result as Omit<IUser, 'password'>[];
};

export default {
  getOne,
};