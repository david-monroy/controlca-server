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
        status: {
          type: Sequelize.STRING,
          default: "En proceso"
        },
        leader: {
            type: Sequelize.INTEGER
        }
      });
  
    return Project;
  };