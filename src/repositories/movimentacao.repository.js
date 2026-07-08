import Movimentacao from '../models/movimentacao.model.js';

export default {
  create(data) {
    return Movimentacao.create(data);
  },
  findAll() {
    return Movimentacao.find();
  },

  findById(id) {
    return Movimentacao.findById(id);
  },
};
