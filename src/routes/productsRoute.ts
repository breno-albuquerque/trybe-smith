import { Router } from 'express';
import productsController from '../controllers/productsController';

const router = Router();

router.get('/products', productsController.getAll);

export default router;