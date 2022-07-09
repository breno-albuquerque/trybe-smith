import JwtToken from '../helpers/JwtToken';
import IUser from '../interfaces/userInterface';
import loginModel from '../models/loginModel';

const login = async (user: Omit<IUser, 'classe' | 'level'>): Promise<string | null> => {
  const loggedUser = await loginModel.getOne(user);
  if (loggedUser.length === 0) return null;
  
  const { id, username, classe, level } = loggedUser[0];
  const token: string = JwtToken.generateToken({ id, username, classe, level });
  return token;
};

export default {
  login,
};