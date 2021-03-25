module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
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