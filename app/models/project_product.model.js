module.exports = (sequelize, Sequelize) => {
    const Project_Product = sequelize.define("project_product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        estimated_hours: {
          type: Sequelize.INTEGER,
        },
        area: {
          type: Sequelize.STRING,
        },
        observations: {
          type: Sequelize.STRING
        },
      });
  
    return Project_Product;
  };