module.exports = (sequelize, Sequelize) => {
    const Project_User = sequelize.define("project_user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        rol_in_project: {
          type: Sequelize.STRING,
        }
      });
  
    return Project_User;
  };