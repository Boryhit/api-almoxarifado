import StockMovement from '../models/stock-movement.model.js';

export default {
  create(data) {
    return StockMovement.create(data);
  },
  findAll() {
    return StockMovement.find();
  },

  findById(id) {
    return StockMovement.findById(id);
  },
};
