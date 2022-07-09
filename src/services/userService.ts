import IUser from '../interfaces/userInterface';
import usersModel from '../models/usersModel';
import JwtToken from '../helpers/JwtToken';

const create = async (user: IUser): Promise<string> => {
  const insertId = await usersModel.create(user);
  const token = JwtToken.generateToken({ id: insertId, ...user });
  return token;
};

export default {
  create,
};