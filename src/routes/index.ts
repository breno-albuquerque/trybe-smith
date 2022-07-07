import { Router } from 'express';

import productsRoute from './productsRoute';
import usersRoute from './usersRoute';

const router = Router();
  
router.use('/products', productsRoute);
router.use('/users', usersRoute);

export default router;