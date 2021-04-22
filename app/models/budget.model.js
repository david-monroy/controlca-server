module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
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
  
    return Budget;
  };