import IUser from '../interfaces/User.interface';
import usersModel from '../models/user.model';
import JwtToken from '../helpers/JwtToken';
import HttpError from '../helpers/httpError';
import HttpStatus from '../helpers/httpStatus';

const getByUserName = async (username: string): Promise<IUser | undefined> => {
  const user = await usersModel.getByUserName(username);
  return user;
};

const create = async (user: IUser): Promise<string> => {
  const findUser = await getByUserName(user.username);
  if (findUser) {
    throw new HttpError(HttpStatus.CONFLICT, 'Username not available');
  } 
  
  const insertId = await usersModel.create(user);
  const token = JwtToken.generateToken({ id: insertId, ...user });
  return token;
};

export default {
  create,
};