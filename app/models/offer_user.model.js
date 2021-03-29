module.exports = (sequelize, Sequelize) => {
    const Offer_User = sequelize.define("offer_user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        roster: {
          type: Sequelize.STRING,
        },
        hours_done: {
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      });
  
    return Offer_User;
  };