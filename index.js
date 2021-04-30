const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const config = require('./app/config/auth.config');

const app = express();

const db = require("./app/models");
// Descomentar si quiero eliminar la BD
// -------------------------------------
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
// db.sequelize.sync();

var corsOptions = {
  origin: [ "http://controlca-client.herokuapp.com", "https://controlca-client.herokuapp.com" ]
};

// var corsOptions = {
//   origin: "http://localhost:8081" 
// };

// const whitelist = ['http://controlca-client.herokuapp.com', 'http://example2.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
// }


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.set('key', config.key);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to controlca application." });
});

require("./app/routes/rol.routes")(app);
require("./app/routes/user.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/project.routes')(app);
require('./app/routes/product.routes')(app);
require('./app/routes/offer.routes')(app);
require('./app/routes/project_user.routes')(app);
require('./app/routes/load.routes')(app);
require('./app/routes/offer_user.routes')(app);
require('./app/routes/load_offer.routes')(app);
require('./app/routes/area.routes')(app);
require('./app/routes/load_admin.routes')(app);
require('./app/routes/bitacora.routes')(app);
require('./app/routes/budget.routes')(app);
require('./app/routes/load_budget.routes')(app);
require('./app/routes/bitacora_offer.routes')(app);
require('./app/routes/budget_offer.routes')(app);
require('./app/routes/load_budget_offer.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});