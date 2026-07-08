import mongoose, { Types } from 'mongoose';

const movimentacaoSchema = new mongoose.Schema({
  product_id: { 
    type: Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  user_id: { 
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
  tipo: { 
    type: String,
    enum: ['ENTRADA', 'SAIDA'],
    required: true,
    uppercase: true,
    trim: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Movimentacao = mongoose.model('Movimentacao', movimentacaoSchema);

export default Movimentacao;
