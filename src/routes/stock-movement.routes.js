import { Router } from 'express';
import stockMovementController from '../controllers/stock-movement.controller.js';
import { requireRole } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/stock-movements', requireRole('ADMIN'), stockMovementController.create);
router.get('/stock-movements', requireRole('ADMIN', 'READER'), stockMovementController.list);

export default router;
