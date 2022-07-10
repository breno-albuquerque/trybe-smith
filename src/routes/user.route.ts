import { Router } from 'express';
import userController from '../controllers/user.controller';

import { 
  validateUserName,
  validateUserClass,
  validateUserLevel,
  validateUserPassword,
} from '../middlewares/user.middleware';

const router = Router();

router.post(
  '/',
  validateUserName,
  validateUserClass,
  validateUserLevel,
  validateUserPassword,
  userController.create,
);

export default router;