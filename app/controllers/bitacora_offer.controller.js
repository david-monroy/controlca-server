const db = require("../models");
const Bitacora_Offer = db.bitacora_offers;
const Project = db.projects;
const Offer = db.offers;
const Offer_User = db.offer_users;
const Op = db.Sequelize.Op;

// Listar todos los users
exports.findAll = (req, res) => {
    Bitacora_Offer.findAll({
      include: [{
        model: Offer_User,
        as: "offer_user",
        attributes: ["id", "worker_id", "offer_id", "roster"],
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


// Buscar un user por ID
exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Bitacora_Offer.findByPk(id, { 
            include: [{
                model: Offer_User,
                as: "offer_user",
                attributes: ["id", "worker_id", "offer_id", "roster"],
              },
              ]
    })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Ocurrió un error mientras se consultaba el User " + id
            });
          });
};

// Actualizar un User por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Bitacora_Offer.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User actualizado correctamente."
          });
        } else {
          res.send({
            message: `No se pudo actualizar el User con el id=${id}. Es posible que el User no haya sido encontraodo o la petición esté vacía!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se actualizaba el User " + id
        });
      });
};

// Eliminar un User por ID
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Bitacora_Offer.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User eliminado correctamente!"
          });
        } else {
          res.send({
            message: `No se pudo eliminar el User con el id=${id}. Es posible que el User no haya sido encontraodo o la petición esté vacía!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se actualizaba el User " + id
        });
      });
  };

// Eliminar todos los User
exports.deleteAll = (req, res) => {
    Bitacora_Offer.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Useres elimnados correctamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error mientras se eliminaban los Useres."
        });
      });
  };

