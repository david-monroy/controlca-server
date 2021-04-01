module.exports = (sequelize, Sequelize) => {
    const Area = sequelize.define("area", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
      });
  
    return Area;
  };