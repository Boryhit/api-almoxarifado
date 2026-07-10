import mongoose, { Types } from 'mongoose';

const stockMovementSchema = new mongoose.Schema({
  productId: { 
    type: Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  userId: { 
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
  type: { 
    type: String,
    enum: ['IN', 'OUT'],
    required: true,
    uppercase: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const StockMovement = mongoose.model('StockMovement', stockMovementSchema);

export default StockMovement;
