import { Router } from 'express';
import userController from '../controllers/userController';

import { 
  validateUserName,
  validateUserClass,
  validateUserLevel,
  validateUserPassword,
} from '../middlewares/validateUser';

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