import { Request, Response } from 'express';
import HttpStatus from '../helpers/httpStatus';
import userService from '../services/user.service';

const create = async (req: Request, res: Response) => {
  const token = await userService.create(req.body);
  res.status(HttpStatus.CREATED).json({ token });
};

export default {
  create,
};
