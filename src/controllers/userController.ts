import { Request, Response } from 'express';
import userService from '../services/userService';

const create = async (req: Request, res: Response) => {
  const result = await userService.create(req.body);
  res.status(201).json(result);
};

export default {
  create,
};
