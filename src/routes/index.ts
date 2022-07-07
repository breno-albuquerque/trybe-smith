import { Router } from 'express';

import productsRoute from './productsRoute';

const router = Router();
  
router.use('/products', productsRoute);

export default router;