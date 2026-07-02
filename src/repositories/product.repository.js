import Product from '../models/product.model.js';

export default {
  create(data) {
    return Product.create(data);
  },
  findAll() {
    return Product.find();
  },

  findById(id) {
    return Product.findById(id);
  },
  
  updateById(id, data) {
    return Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return Product.findByIdAndDelete(id);
  },
};
