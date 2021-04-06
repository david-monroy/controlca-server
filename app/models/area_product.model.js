module.exports = (sequelize, Sequelize) => {
    const Area_Product = sequelize.define("area_product", {

        estimated_hours: {
          type: Sequelize.INTEGER,
        },
        observations: {
          type: Sequelize.STRING
        },
        completed:{
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      });
  
    return Area_Product;
  };