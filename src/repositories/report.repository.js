import Product from '../models/product.model.js';
import StockMovement from '../models/stock-movement.model.js';

export default {
  async getAllBalances() {
    return await Product.find()
        .select('name stock')
        .sort({ name: 1 });
  },

  async getProductBalances(productId) {
    return await Product.findById(productId);
  },

  async getProductHistory(_productId) {
    return await StockMovement.find({ productId: _productId })
        .populate('userId', 'name email -_id')
        .populate('productId', 'name -_id')
        .sort({ createdAt: -1 });
  },
}