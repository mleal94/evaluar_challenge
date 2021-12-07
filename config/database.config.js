module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'evaluar_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'evaluar_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'evaluar_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
