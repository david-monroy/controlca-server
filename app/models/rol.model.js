module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Rol;
  };