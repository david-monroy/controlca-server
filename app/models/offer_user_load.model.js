module.exports = (sequelize, Sequelize) => {
    const Offer_User_Load = sequelize.define("offer_user_load", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
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
  
    return Offer_User_Load;
  };