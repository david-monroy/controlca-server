module.exports = (sequelize, Sequelize) => {
    const Budget = sequelize.define("budget", {
        area: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        paid: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
          },
      });
  
    return Budget;
  };