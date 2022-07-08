import JwtToken from '../helpers/JwtToken';
import Iuser from '../interfaces/userInterface';
import loginModel from '../models/loginModel';

const login = async (user: Omit<Iuser, 'classe' | 'level'>): Promise<string | null> => {
  const loggedUser = await loginModel.getOne(user);

  if (loggedUser.length === 0) {
    return null;
  }
  
  const token: string = JwtToken.generateToken(loggedUser[0]);
  return token;
};

export default {
  login,
};