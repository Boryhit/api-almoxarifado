import productService from "../services/product.service";

export default {
  async create(req, res, next) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  async list(req, res, next) {
    try {
      const products = await productService.listProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  },

  async get(req, res, next) {
    try {
      const product = await productService.getProduct(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const product = await productService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    try {
      await productService.removeProduct(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
}; 
