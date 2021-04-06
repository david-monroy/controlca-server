module.exports = (sequelize, Sequelize) => {
    const Load_Admin = sequelize.define("load_admin", {
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        initial_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
          },
        final_date: {
            type: Sequelize.DATEONLY,
          },
        hours: {
            type: Sequelize.INTEGER,
          },
        observations: {
          type: Sequelize.STRING,
        },
    });
  
    return Load_Admin;
  };