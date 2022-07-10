import { Request, Response } from 'express';
import userService from '../services/user.service';

const create = async (req: Request, res: Response) => {
  const token = await userService.create(req.body);
  res.status(201).json({ token });
};

export default {
  create,
};
