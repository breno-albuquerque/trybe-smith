import { NextFunction, Request, Response } from 'express';
import loginService from '../services/login.service';

// eslint-disable-next-line max-len
const login = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const token = await loginService.login(req.body);
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

export default {
  login,
};