const db = require("../models");
const Offer_User = db.offer_users;
const User = db.users;
const Bitacora_Offer = db.bitacora_offers;
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
      {
        model: Bitacora_Offer,
        as: "bitacora_offers",
        attributes: [ "id", "date",  "note"],
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
      {
        model: Bitacora_Offer,
        as: "bitacora_offers",
        attributes: [ "id", "date",  "note"],
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

// Actualizar un Project por ID
exports.update = (req, res) => {
  const id = req.params.id;

  Offer_User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Project con el id=${id}. Es posible que el Project no haya sido encontraodo o la petición esté vacía!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrió un error mientras se actualizaba el Project " + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Offer_User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Project eliminado correctamente!"
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Project con el id=${id}. Es posible que el Project no haya sido encontraodo o la petición esté vacía!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrió un error mientras se actualizaba el Project " + id
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

  exports.addBitacora = (req, res) => {

    const bitacora = {
      offer_user_id: req.body.offer_user,
      date: req.body.date,
      note: req.body.note,
    }

    Bitacora_Offer.create(bitacora)
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