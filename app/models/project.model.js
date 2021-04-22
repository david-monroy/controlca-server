module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING
        },
        code: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        areas: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: "En proceso"
        }
      });
  
    return Project;
  };