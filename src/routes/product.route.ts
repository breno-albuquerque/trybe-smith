import { Router } from 'express';
import productsController from '../controllers/product.controller';
import auth from '../middlewares/auth.middleware';
import { validateProductName, validateProductAmount } from '../middlewares/product.middleware';

const router = Router();

router.get('/', auth, productsController.getAll);
router.post('/', auth, validateProductName, validateProductAmount, productsController.create);

export default router;