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
          allowNull: false
        },
        area: {
          type: Sequelize.STRING,
          allowNull: false
        },
        leader: {
            type: Sequelize.INTEGER
        }
      });
  
    return Project;
  };