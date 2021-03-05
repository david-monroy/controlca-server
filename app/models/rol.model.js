module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Rol;
  };