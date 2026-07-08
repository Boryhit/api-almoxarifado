import { Router } from 'express';
import movimentacaoController from '../controllers/movimentacao.controller.js';

const router = Router();

router.post('/products', movimentacaoController.create);
router.get('/products', movimentacaoController.list);

export default router;
