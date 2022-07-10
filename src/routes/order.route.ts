import { Router } from 'express';
import ordersController from '../controllers/order.controller';
import validateOrder from '../middlewares/order.middleware';
import auth from '../middlewares/auth.middleware';

const router = Router();

router.get('/', ordersController.getAll);
router.post('/', auth, validateOrder, ordersController.create);

export default router;