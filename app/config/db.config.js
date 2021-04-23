// const config = require("../enviroment");

module.exports = {
    HOST: config.DB_HOST,
    USER: config.DB_USER,
    PASSWORD: config.DB_PASSWORD,
    DB: config.DB_NAME,
    dialect: config.DBMS,
    // HOST: 'ec2-23-21-229-200.compute-1.amazonaws.com',
    // USER: 'iwtyjfxwnpiszm',
    // PASSWORD: '2f009b29348367247221cc86aa9b55f9b7fa66ca4fdb6cf43edfb1c778363b5a',
    // DB: 'd5h997lm1373co',
    // dialect: 'postgres',
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };