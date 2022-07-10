import IUser from '../interfaces/User.interface';
import usersModel from '../models/user.model';
import JwtToken from '../helpers/JwtToken';

const create = async (user: IUser): Promise<string> => {
  const insertId = await usersModel.create(user);
  const token = JwtToken.generateToken({ id: insertId, ...user });
  return token;
};

export default {
  create,
};