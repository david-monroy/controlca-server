module.exports = (sequelize, Sequelize) => {
    const Project_User = sequelize.define("project_user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        roster: {
          type: Sequelize.STRING,
        }
      });
  
    return Project_User;
  };