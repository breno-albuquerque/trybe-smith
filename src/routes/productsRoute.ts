import { Router } from 'express';
import productsController from '../controllers/productsController';

const router = Router();

router.get('/', productsController.getAll);

export default router;