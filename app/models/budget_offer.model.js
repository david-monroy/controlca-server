module.exports = (sequelize, Sequelize) => {
    const Budget_Offer = sequelize.define("budget_offer", {
        area: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        paid: {
            type: Sequelize.FLOAT,
            defaultValue: 0,
          },
      });
  
    return Budget_Offer;
  };