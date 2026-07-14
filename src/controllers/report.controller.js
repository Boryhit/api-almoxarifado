import reportService from '../services/report.service.js';

export default {
  async getAllBalances(req, res, next) {
    try {
      const products = await reportService.getAllBalances();
      res.json(products);
    } catch (error) {
      next(error);
    }
  },
  async getProductBalances(req, res, next) {
    try {
      const productId = req.params.id;
      const balances = await reportService.getProductBalances(productId);
      res.json(balances);
    } catch (error) {
      next(error);
    }
  },

  async getProductHistory(req, res, next) {
    try {
      const productId = req.params.id;
      const history = await reportService.getProductHistory(productId);
      res.json(history);
    } catch (error) {
      next(error);
    }
  },
}