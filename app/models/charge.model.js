module.exports = (sequelize, Sequelize) => {
    const Charge = sequelize.define("charge", {
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
  
    return Charge;
  };