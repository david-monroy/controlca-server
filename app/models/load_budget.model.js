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
            type: Sequelize.FLOAT,
            allowNull: false
          },
        budget: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING
        },
      });
  
    return Load_Budget;
  };