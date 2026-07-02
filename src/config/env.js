import dotenv from 'dotenv';

dotenv.config();

const env = {
    app_name: process.env.APP_NAME || 'api-almoxarifado',
    port: process.env.PORT || 3000,

    db_uri: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase',
};

export { env };
