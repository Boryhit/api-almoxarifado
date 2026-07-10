import repo from '../repositories/stock-movement.repository.js';
import repoProduct from '../repositories/product.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ productId, type, quantity }) {
  if (!productId) throw createError('ID do produto é obrigatório.', 400);
  if (!type || ['IN', 'OUT'].indexOf(type) == -1) throw createError('Tipo inválido.', 400);
  if (!quantity || (typeof quantity) !== 'number' || quantity <= 0) throw createError('Quantidade inválida.', 400);
}

export default {
  async createStockMovement(data, _userId) {
    ensureValidPayload(data);
    const product = await repoProduct.findById(data.productId);
    if (!product) throw createError('Produto não cadastrado.', 409);

    let newStock;

    if (data.type === 'OUT') {
      newStock = product.stock - data.quantity;
    } else {
      newStock = product.stock + data.quantity;
    }

    if (newStock < 0) throw createError('Quantidade insuficiente em estoque.', 400);

    const stockMovement = await repo.create({
      productId: data.productId,
      userId: _userId,
      type: data.type.trim().toUpperCase(),
      quantity: data.quantity,
    });

    if (stockMovement) {
      await repoProduct.updateById(
        data.productId, { 
          stock: newStock 
        });
    }

    return stockMovement;
  },

  async listStockMovements() {
    return repo.findAll();
  },
  async getStockMovement(id) {
    const stockMovement = await repo.findById(id);
    if (!stockMovement) throw createError('Movimentação não encontrada.', 404);
    return stockMovement;
  },
  async getStockMovementsByProduct(productId) {
    const stockMovements = await repo.findAll();
    if (!stockMovements || stockMovements.length === 0) throw createError('Nenhuma movimentação encontrada para este produto.', 404);
    const filteredMovements = stockMovements.filter(movement => movement.productId.toString() === productId.toString());
    if (filteredMovements.length === 0) throw createError('Nenhuma movimentação encontrada para este produto.', 404);
    return filteredMovements;
  },
};