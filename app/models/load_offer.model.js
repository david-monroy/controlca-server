module.exports = (sequelize, Sequelize) => {
    const LoadOffer = sequelize.define("load_offer", {
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
      });
  
    return LoadOffer;
  };