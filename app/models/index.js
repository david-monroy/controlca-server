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
db.project_products = require("./project_product.model.js")(sequelize, Sequelize);
db.project_users = require("./project_user.model.js")(sequelize, Sequelize);

// Relación 1 a Muchos entre Rol y Usuarios
db.rols.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.rols, {
  foreignKey: "rol_id",
  as: "rol",
});

// Relación 1 a Muchos entre Usuario (Líder) y Proyectos
db.users.hasMany(db.projects, { as: "projects" });
db.projects.belongsTo(db.users, {
  foreignKey: "leader_id",
  as: "leader",
});

// Relación Muchos a Muchos entre Proyectos y Productos
db.products.belongsToMany(db.projects, {
  through: db.project_products,
  as: "projects",
  foreignKey: "product_id",
});

db.projects.belongsToMany(db.products, {
  through: db.project_products,
  as: "products",
  foreignKey: "project_id",
});

// Relación Muchos a Muchos entre Proyectos y Usuarios
db.users.belongsToMany(db.projects, {
  through: db.project_users,
  as: "working_projects",
  foreignKey: "worker_id",
});

db.projects.belongsToMany(db.users, {
  through: db.project_users,
  as: "working_users",
  foreignKey: "project_id",
});

module.exports = db;