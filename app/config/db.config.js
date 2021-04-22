const config = require("../enviroment");

module.exports = {
    HOST: config.DB_HOST,
    USER: config.DB_USER,
    PASSWORD: config.DB_PASSWORD,
    DB: config.DB_NAME,
    dialect: config.DBMS,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };