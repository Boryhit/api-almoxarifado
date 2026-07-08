import movimentacaoService from "../services/movimentacao.service.js";

export default {
  async create(req, res, next) {
    try {
      const movimentacao = await movimentacaoService.createMovimentacao(req.body, req.user.id);
      res.status(201).json(movimentacao);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const movimentacao = await movimentacaoService.listMovimentacoes();
      res.json(movimentacao);
    } catch (error) {
      next(error);
    }
  },

}; 
