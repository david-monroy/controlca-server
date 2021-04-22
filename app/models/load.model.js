module.exports = (sequelize, Sequelize) => {
    const Load = sequelize.define("load", {
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        hours: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        observations: {
            type: Sequelize.STRING,
          },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
      });
  
    return Load;
  };