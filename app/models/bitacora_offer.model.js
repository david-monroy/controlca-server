module.exports = (sequelize, Sequelize) => {
    const Bitacora_Offer = sequelize.define("bitacora_offer", {
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        note: {
            type: Sequelize.STRING,
        },
      });
  
    return Bitacora_Offer;
  };