import repo from '../repositories/movimentacao.repository.js';
import repoProduct from '../repositories/product.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ product_id, tipo, quantidade }) {
  if (!product_id) throw createError('ID do produto é obrigatório.', 400);
  if (!tipo || !['ENTRADA', 'SAIDA'].indexOf(tipo) == -1) throw createError('Tipo inválido.', 400);
  if (!quantidade || quantidade <= 0) throw createError('Quantidade inválida.', 400);
}

export default {
  async createMovimentacao(data, user_id) {
    ensureValidPayload(data);
    const product = await repoProduct.findById(data.product_id);
    if (!product) throw createError('Produto não cadastrado.', 409);

    let quantidadeNova;

    if (data.tipo === 'SAIDA') {
      quantidadeNova = product.saldo - data.quantidade;
    } else {
      quantidadeNova = product.saldo + data.quantidade;
    }

    if (quantidadeNova < 0) throw createError('Quantidade insuficiente em estoque.', 400);

    const movimentacao = await repo.create({
      product_id: data.product_id,
      user_id: user_id,
      tipo: data.tipo.trim().toUpperCase(),
      quantidade: data.quantidade,
    });

    if (movimentacao) {
      await repoProduct.updateById(
        data.product.id, { 
          saldo: quantidadeNova 
        });
    }

    return movimentacao;
  },

  async listMovimentacoes() {
    return repo.findAll();
  },
  async getMovimentacao(id) {
    const movimentacao = await repo.findById(id);
    if (!movimentacao) throw createError('Movimentação não encontrada.', 404);
    return movimentacao;
  },
};