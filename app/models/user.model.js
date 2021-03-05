const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        carnet: {
          type: Sequelize.INTEGER,
          unique: true,
          allowNull: false
        },
        rol: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      }, {
        instanceMethods: {
          hashSync(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
          compareSync(password, p) {
            return bcrypt.compare(password, p);
        }
        }
      });
  
    return User;
  };