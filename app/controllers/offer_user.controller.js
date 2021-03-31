const db = require("../models");
const Offer_User = db.offer_users;
const User = db.users;
const Load_Offer = db.load_offers;
const Op = db.Sequelize.Op;

// Listar todos los roles
exports.findAll = (req, res) => {
    Offer_User.findAll({
      include: [{
        model: Load_Offer,
        as: "load_offers",
        attributes: [ "id", "date", "hours", "observations"],
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
  
    Offer_User.findByPk(id, { 
      include: [{
        model: Load_Offer,
        as: "load_offers",
        attributes: [ "id", "date", "hours", "observations"],
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
      offer_user_id: req.body.offer_user,
      date: req.body.date,
      hours: req.body.hours,
      observations: req.body.observations,
    }

    Load_Offer.create(load)
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