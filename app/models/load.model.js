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
          }
      });
  
    return Load;
  };