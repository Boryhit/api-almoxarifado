import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/products', requireRole('ADMIN'), productController.create);
router.get('/products', requireRole('ADMIN', 'READER'), productController.list);
router.get('/products/:id', requireRole('ADMIN', 'READER'), productController.get);
router.put('/products/:id', requireRole('ADMIN'), ensureValidId, productController.update);
router.delete('/products/:id', requireRole('ADMIN'), ensureValidId, productController.remove);

export default router;
