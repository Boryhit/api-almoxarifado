import { Router }from 'express';

const healthcheckRoutes = Router();

healthcheckRoutes.get('/healthcheck/ping', (req, res) => {
  return res.status(200).json({ 
    message: 'OK',
    time: process.uptime()
  });
});

export default healthcheckRoutes;
