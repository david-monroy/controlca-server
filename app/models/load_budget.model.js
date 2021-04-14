module.exports = (sequelize, Sequelize) => {
    const Load_Budget = sequelize.define("load_budget", {
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false
        },
        observations: {
            type: Sequelize.STRING,
          },
        area: {
          type: Sequelize.STRING,
        },
        paid: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
        budget: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
      });
  
    return Load_Budget;
  };