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
db.offers = require("./offer.model.js")(sequelize, Sequelize);
db.offer_users = require("./offer_user.model.js")(sequelize, Sequelize);
db.project_user_loads = require("./project_user_load.model.js")(sequelize, Sequelize);

// Relación 1 a Muchos entre Rol y Usuarios
db.rols.hasMany(db.users, { foreignKey: "rol_id", as: "users" });
db.users.belongsTo(db.rols, {
  foreignKey: "rol_id",
  as: "rol",
});

// Relación 1 a Muchos entre Usuario (Líder) y Proyectos
db.users.hasMany(db.projects, { foreignKey: "leader_id", as: "projects" });
db.projects.belongsTo(db.users, {
  foreignKey: "leader_id",
  as: "leader",
});

// Relación 1 a Muchos entre Usuario (Líder) y Ofertas
db.users.hasMany(db.offers, { foreignKey: "leader_id", as: "offers" });
db.offers.belongsTo(db.users, {
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

// Relación Muchos a Muchos entre Ofertas y Usuarios
db.users.belongsToMany(db.offers, {
  through: db.offer_users,
  as: "working_offers",
  foreignKey: "worker_id",
});

db.offers.belongsToMany(db.users, {
  through: db.offer_users,
  as: "working_users",
  foreignKey: "offer_id",
});

// Relación Muchos a Muchos entre Proyectos y Usuarios (Carga)
db.users.belongsToMany(db.projects, {
  through: db.project_user_loads,
  as: "working_projects_load",
  foreignKey: "worker_id",
});

db.projects.belongsToMany(db.users, {
  through: db.project_user_loads,
  as: "working_users_load",
  foreignKey: "project_id",
});


module.exports = db;