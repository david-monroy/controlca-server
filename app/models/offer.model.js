module.exports = (sequelize, Sequelize) => {
    const Offer = sequelize.define("offer", {
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
        department: {
          type: Sequelize.STRING,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: "En proceso"
        }
      });
  
    return Offer;
  };