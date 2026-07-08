import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';

const router = Router();

router.post('/products', ensureValidId, productController.create);
router.get('/products', productController.list);
router.get('/products/:id', productController.get);
router.put('/products/:id', ensureValidId, productController.update);
router.delete('/products/:id', ensureValidId, productController.remove);

export default router;
