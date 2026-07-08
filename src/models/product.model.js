import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true,
  },   
  description: { 
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: [{ 
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  }],
  saldo: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
