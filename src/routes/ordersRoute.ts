import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import validateOrder from '../middlewares/orderValidate';
import auth from '../middlewares/auth';

const router = Router();

router.get('/', ordersController.getAll);
router.post('/', auth, validateOrder, ordersController.create);

export default router;