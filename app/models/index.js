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
db.area_products = require("./area_product.model.js")(sequelize, Sequelize);
db.project_users = require("./project_user.model.js")(sequelize, Sequelize);
db.offers = require("./offer.model.js")(sequelize, Sequelize);
db.offer_users = require("./offer_user.model.js")(sequelize, Sequelize);
db.project_user_loads = require("./project_user_load.model.js")(sequelize, Sequelize);
db.offer_user_loads = require("./offer_user_load.model.js")(sequelize, Sequelize);
db.loads = require("./load.model.js")(sequelize, Sequelize);
db.load_offers = require("./load_offer.model.js")(sequelize, Sequelize);
db.load_admins = require("./load_admin.model.js")(sequelize, Sequelize);
db.areas = require("./area.model.js")(sequelize, Sequelize);
db.bitacoras = require("./bitacora.model.js")(sequelize, Sequelize);
db.bitacora_offers = require("./bitacora_offer.model.js")(sequelize, Sequelize);
db.budgets = require("./budget.model.js")(sequelize, Sequelize);
db.load_budgets = require("./load_budget.model.js")(sequelize, Sequelize);
db.budget_offers = require("./budget_offer.model.js")(sequelize, Sequelize);
db.load_budget_offers = require("./load_budget_offer.model.js")(sequelize, Sequelize);

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


// Relación Muchos a Muchos entre Ofertas y Usuarios (Carga)
db.users.belongsToMany(db.offers, {
  through: db.offer_user_loads,
  as: "working_offers_load",
  foreignKey: "worker_id",
});

db.offers.belongsToMany(db.users, {
  through: db.offer_user_loads,
  as: "working_users_load",
  foreignKey: "offer_id",
});

// Relación 1 a Muchos entre Project_User y Loads
db.project_users.hasMany(db.loads, { foreignKey: "project_user_id", as: "loads" });
db.loads.belongsTo(db.project_users, {
  foreignKey: "project_user_id",
  as: "project_user",
});

// Relación 1 a Muchos entre Offer_User y load_offers
db.offer_users.hasMany(db.load_offers, { foreignKey: "offer_user_id", as: "load_offers" });
db.load_offers.belongsTo(db.offer_users, {
  foreignKey: "offer_user_id",
  as: "offer_user",
});

// Relación 1 a Muchos entre Proyectos y Areas
db.projects.hasMany(db.areas, { foreignKey: "project_id", as: "project_areas" });
db.areas.belongsTo(db.projects, {
  foreignKey: "project_id",
  as: "project",
});

// Relación Muchos a Muchos entre Areas y Productos
db.products.belongsToMany(db.areas, {
  through: db.area_products,
  as: "areas",
  foreignKey: "product_id",
});

db.areas.belongsToMany(db.products, {
  through: db.area_products,
  as: "products",
  foreignKey: "area_id",
});

// Relación 1 a Muchos entre User y Admin loads
db.users.hasMany(db.load_admins, { foreignKey: "user_id", as: "load_admins" });
db.load_admins.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "user",
});

// Relación 1 a Muchos entre Project_User y Bitacora
db.project_users.hasMany(db.bitacoras, { foreignKey: "project_user_id", as: "bitacoras" });
db.bitacoras.belongsTo(db.project_users, {
  foreignKey: "project_user_id",
  as: "project_user",
});

// Relación 1 a Muchos entre Offer_User y Bitacora
db.offer_users.hasMany(db.bitacora_offers, { foreignKey: "offer_user_id", as: "bitacora_offers" });
db.bitacora_offers.belongsTo(db.offer_users, {
  foreignKey: "offer_user_id",
  as: "offer_user",
});

// Relación 1 a Muchos entre project y budgets
db.projects.hasMany(db.budgets, { foreignKey: "project_id", as: "budgets" });
db.budgets.belongsTo(db.projects, {
  foreignKey: "project_id",
  as: "project",
});

// Relación 1 a Muchos entre offer y budget_offers
db.offers.hasMany(db.budget_offers, { foreignKey: "offer_id", as: "budget_offers" });
db.budget_offers.belongsTo(db.offers, {
  foreignKey: "offer_id",
  as: "offer",
});

// Relación 1 a Muchos entre budget y load_budgets
db.budgets.hasMany(db.load_budgets, { foreignKey: "budget_id", as: "load_budgets" });
db.load_budgets.belongsTo(db.budgets, {
  foreignKey: "budget_id",
  as: "budgets",
});

// Relación 1 a Muchos entre budget y load_budgets
db.budget_offers.hasMany(db.load_budget_offers, { foreignKey: "budget_offer_id", as: "load_budget_offers" });
db.load_budget_offers.belongsTo(db.budget_offers, {
  foreignKey: "budget_offer_id",
  as: "budget_offers",
});

module.exports = db;