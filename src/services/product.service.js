import repo from '../repositories/product.repository.js';
import createError from '../utils/app-error.js';

function ensureValidPayload({ name, description, price, }) {
  if (!name?.trim()) throw createError('Nome é obrigatório.', 400);
  if (!description?.trim()) throw createError('Descrição é obrigatória.', 400);
  if (price === undefined || price < 0) throw createError('Preço inválido.', 400);
}

export default {
  async createProduct(data) {
    ensureValidPayload(data);

    return repo.create({
      name: data.name.trim(),
      id_product: data.id_product.trim(),
      description: data.description.trim(),
      price: data.price,
      category: data.category.trim(),
    });
  },

  async listProducts() {
    return repo.findAll();
  },

  async getProduct(id) {
    const product = await repo.findById(id);
    if (!product) throw createError('Produto não encontrado.', 404);
    return product;
  },

  async updateProduct(id, data) {
    const payload = { ...data };

    if (payload.id_product) {
      const existing = await repo.findById(payload.id_product);
      if (existing && existing.id !== id) {
        throw createError('ID do produto já cadastrado.', 409);
      }
    }

    if (payload.name) {
      payload.name = payload.name.trim();
    }

    if (payload.description) {
      payload.description = payload.description.trim();
    }

    if (payload.category) {
      payload.category = payload.category.trim();
    }

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    if (Object.keys(payload).length === 0) {
      throw createError('Nenhum campo informado para atualização.', 400);
    }

    const updated = await repo.updateById(id, payload);
    if (!updated) throw createError('Produto não encontrado.', 404);
    return updated;
  },

  async removeProduct(id) {
    const deleted = await repo.deleteById(id);
    if (!deleted) throw createError('Produto não encontrado.', 404);
  },
};
