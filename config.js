module.exports = {
  db: {
    host: process.env.APP_DB_HOST || 'localhost',
    user: process.env.APP_DB_USER || 'postgres',
    password: process.env.APP_DB_PASSWORD || 'root',
    database: process.env.APP_DB_NAME || 'test_api',
  },
};
