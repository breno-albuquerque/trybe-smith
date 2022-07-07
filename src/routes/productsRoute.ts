import { Router } from 'express';
import productsController from '../controllers/productsController';
import { validateProductName, validateProductAmount } from '../middlewares/validateProduct';

const router = Router();

router.get('/', productsController.getAll);
router.post('/', validateProductName, validateProductAmount, productsController.create);

export default router;