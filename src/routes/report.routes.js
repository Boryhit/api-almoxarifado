import { Router } from 'express';
import reportController from '../controllers/report.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/report/balances', requireRole('ADMIN', 'READER'), reportController.getAllBalances);
router.get('/report/balances/:id', requireRole('ADMIN', 'READER'), ensureValidId, reportController.getProductBalances);
router.get('/report/history/:id', requireRole('ADMIN', 'READER'), ensureValidId, reportController.getProductHistory);

export default router;
