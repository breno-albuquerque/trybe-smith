import Iuser from '../interfaces/userInterface';
import usersModel from '../models/usersModel';
import JwtToken from '../helpers/JwtToken';

const create = async (user: Iuser) => {
  await usersModel.create(user);
  const { username, classe, level } = user;
  const token: string = JwtToken.generateToken({ username, classe, level });
  return token;
};

export default {
  create,
};