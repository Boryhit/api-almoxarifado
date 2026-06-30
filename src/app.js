import express from 'express';
import logMiddleware from './middleware/logger.middleware.js';
import healthcheckRoutes from './routes/healthcheck.routes.js';


const app = express();

app.use(healthcheckRoutes);

app.use(logMiddleware);


export default app;
