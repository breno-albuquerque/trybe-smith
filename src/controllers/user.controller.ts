import { NextFunction, Request, Response } from 'express';
import HttpStatus from '../helpers/httpStatus';
import userService from '../services/user.service';

const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = await userService.create(req.body);
    res.status(HttpStatus.CREATED).json({ token });
  } catch (err) {
    next(err);
  }
};

export default {
  create,
};
