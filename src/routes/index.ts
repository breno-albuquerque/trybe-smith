import { Router } from 'express';

import productsRoute from './product.route';
import usersRoute from './user.route';
import ordersRoute from './order.route';
import loginRoute from './login.route';

const router = Router();
  
router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.use('/orders', ordersRoute);
router.use('/login', loginRoute);

export default router;