import { Router } from 'express';
import productsController from '../controllers/product.controller';
import { validateProductName, validateProductAmount } from '../middlewares/product.middleware';

const router = Router();

router.get('/', productsController.getAll);
router.post('/', validateProductName, validateProductAmount, productsController.create);

export default router;