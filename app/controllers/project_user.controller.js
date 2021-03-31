const db = require("../models");
const Project_User = db.project_users;
const User = db.users;
const Load = db.loads;
const Op = db.Sequelize.Op;

// Listar todos los roles
exports.findAll = (req, res) => {
    Project_User.findAll({
      include: [{
        model: Load,
        as: "loads",
        attributes: [ "id", "date", "hours", "observations", "product_id"],
      },

      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error mientras se consultaba en base de datos."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Project_User.findByPk(id, { 
      include: [{
        model: Load,
        as: "loads",
        attributes: [ "id", "date", "hours", "observations", "product_id"],
      },

      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se consultaba el rol " + id
        });
      });
};


exports.addLoad = (req, res) => {

    const load = {
      project_user_id: req.body.project_user,
      date: req.body.date,
      hours: req.body.hours,
      observations: req.body.observations,
      product_id: req.body.product,
    }

    Load.create(load)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error mientras se guardaba el Project en base de datos."
      });
    });
  };