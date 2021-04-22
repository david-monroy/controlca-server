module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        code: {
          type: Sequelize.STRING,
          unique: true,
        },
      });
  
    return Product;
  };