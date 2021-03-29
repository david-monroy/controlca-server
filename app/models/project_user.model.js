module.exports = (sequelize, Sequelize) => {
    const Project_User = sequelize.define("project_user", {
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
  
    return Project_User;
  };