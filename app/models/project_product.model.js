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
        consecutive: {
          type: Sequelize.INTEGER,
          allowNull: false,
        }
      });
  
    return Project_Product;
  };