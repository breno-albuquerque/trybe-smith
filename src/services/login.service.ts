import HttpError from '../helpers/httpError';
import JwtToken from '../helpers/JwtToken';
import IUser from '../interfaces/User.interface';
import loginModel from '../models/login.model';

const login = async (user: Omit<IUser, 'classe' | 'level'>): Promise<string> => {
  const loggedUser = await loginModel.getOne(user);

  if (loggedUser.length === 0) {
    throw new HttpError(401, 'Username or password invalid');
  } 
  
  const { id, username, classe, level } = loggedUser[0];
  const token: string = JwtToken.generateToken({ id, username, classe, level });
  return token;
};

export default {
  login,
};