import { Router } from 'express';

import productsRoute from './productsRoute';
import usersRoute from './usersRoute';
import ordersRoute from './ordersRoute';

const router = Router();
  
router.use('/products', productsRoute);
router.use('/users', usersRoute);
router.use('/orders', ordersRoute);

export default router;