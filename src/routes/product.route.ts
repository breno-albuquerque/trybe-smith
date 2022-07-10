import { Router } from 'express';
import productsController from '../controllers/product.controller';
import { validateProductName, validateProductAmount } from '../middlewares/validateProduct';

const router = Router();

router.get('/', productsController.getAll);
router.post('/', validateProductName, validateProductAmount, productsController.create);

export default router;