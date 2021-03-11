const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rols = require("./rol.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.projects = require("./project.model.js")(sequelize, Sequelize);

// Relación 1 a Muchos entre Rol y Usuarios
db.rols.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.rols, {
  foreignKey: "rol_id",
  as: "rol",
});

// Relación Muchos a Muchos entre Proyectos y Productos
db.products.belongsToMany(db.projects, {
  through: "project_product",
  as: "projects",
  foreignKey: "product_id",
});

db.projects.belongsToMany(db.products, {
  through: "project_product",
  as: "products",
  foreignKey: "project_id",
});

module.exports = db;