import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/users', userController.create);
router.get('/users', requireRole('ADMIN', 'READER'), userController.list);
router.get('/users/:id', requireRole('ADMIN', 'READER'), ensureValidId, userController.get);
router.put('/users/:id', requireRole('ADMIN'), ensureValidId, userController.update);
router.delete('/users/:id', requireRole('ADMIN'), ensureValidId, userController.remove);

export default router;
