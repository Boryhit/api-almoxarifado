import express from 'express';
import errorMiddleware from './middleware/error.middleware.js';
import logMiddleware from './middleware/logger.middleware.js';
import healthcheckRoutes from './routes/healthcheck.routes.js';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import authMiddleware from './middlewares/auth-middleware.js';
import movimentacaoRoutes from './routes/movimentacao.routes.js';


const app = express();
app.use(express.json());
app.use(logMiddleware);

app.use('/api', healthcheckRoutes);
app.use('/api', userRoutes);

app.use('/api', authMiddleware, productRoutes);
app.use('/api', authMiddleware, movimentacaoRoutes);

app.use(errorMiddleware);

export default app;
