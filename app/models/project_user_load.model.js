module.exports = (sequelize, Sequelize) => {
    const Project_User_Load = sequelize.define("project_user_load", {
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
  
    return Project_User_Load;
  };