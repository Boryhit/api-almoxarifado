import { env } from './config/env.js';
import app from './app.js';
import connect from './config/db.js';

const port = env.port || 3000;

(async () => {
  try {
    await connect(env.db_uri);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
})();

