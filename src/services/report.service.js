import repo from '../repositories/report.repository.js';

export default {
  getAllBalances() {
    return repo.getAllBalances();
  },

  async getProductBalances(productId) {
    const product_Id = await repo.getProductBalances(productId);
    if (!product_Id) throw createError('Produto não encontrado.', 404);
    return product_Id;
  },

  async getProductHistory(productId) {
    const product_Id = await repo.getProductHistory(productId);
    if (!product_Id) throw createError('Produto não encontrado.', 404);
    return product_Id;
  },
}