import IUser from '../interfaces/userInterface';
import usersModel from '../models/usersModel';
import JwtToken from '../helpers/JwtToken';

const create = async (user: IUser) => {
  const insertId = await usersModel.create(user);
  const { username, classe, level } = user;
  const token: string = JwtToken.generateToken({ id: insertId, username, classe, level });
  return token;
};

export default {
  create,
};