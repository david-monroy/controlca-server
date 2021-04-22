module.exports = (sequelize, Sequelize) => {
    const Bitacora = sequelize.define("bitacora", {
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        note: {
            type: Sequelize.STRING,
        },
      });
  
    return Bitacora;
  };