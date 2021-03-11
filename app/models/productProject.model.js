module.exports = (sequelize, Sequelize) => {
    const ProductProject = sequelize.define("productProject", {
        product: {
          type: Sequelize.INTEGER,
        },
        project: {
            type: Sequelize.INTEGER,
        },
        estimatedHours: {
            type: Sequelize.INTEGER,
        }
      });
  
    return ProductProject;
  };