import Iuser from '../interfaces/userInterface';
import usersModel from '../models/usersModel';

const create = async (user: Iuser) => {
  const result = await usersModel.create(user);
  return result;
};

export default {
  create,
};