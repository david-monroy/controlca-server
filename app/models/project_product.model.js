module.exports = (sequelize, Sequelize) => {
    const Project_Product = sequelize.define("project_product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        estimated_hours: {
          type: Sequelize.INTEGER,
        }
      });
  
    return Project_Product;
  };