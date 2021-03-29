const db = require("../models");
const Offer = db.offers;
const Offer_User = db.offer_users;
const User = db.users;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Project
exports.create = (req, res) => {

  // Validar
  if (!req.body.name) {
    res.status(400).send({
      message: "¡El nombre no puede estar vacío!"
    });
    return;
  }

  // Crear un Project
  const offer = {
    name: req.body.name,
    description: req.body.description,
    code: req.body.code,
    number: req.body.number,
    codification: req.body.codification,
    leader_id: req.body.leader
  };

  // Guardar Project en BD
  Offer.create(offer)
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

// Listar todos los Projectes
exports.findAll = (req, res) => {

    Offer.findAll({
      include: [
        {
          model: User,
          as: "working_users",
          attributes: ["id", "name", "lastname"],
          through: {
            attributes: [
              "roster"
            ],
          }
        },
        "leader"
      ],
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

// Buscar un Project por ID
exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Offer.findByPk(id, {
        include: [
          {
            model: User,
            as: "working_users",
            attributes: ["id", "name", "lastname"],
            through: {
              attributes: [
                "roster"
              ],
            }
          },
        "leader"
        ]
      })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Ocurrió un error mientras se consultaba el Project " + id
            });
          });
};

// Buscar un Project por ID
exports.findByLeader = (req, res) => {
  const leader_id = req.params.id;

  Offer.findAll({where: {leader_id: leader_id}, 
  include: [
    {
      model: User,
      as: "working_users",
      attributes: ["id", "name", "lastname"],
      through: {
        attributes: [
          "roster"
        ],
      }
    },
    "leader"
  ]
})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrió un error mientras se consultaba el Project " + id
      });
    });
};

// Actualizar un Project por ID
exports.update = (req, res) => {
    const id = req.params.id;

    const offer = {
      name: req.body.name,
      description: req.body.description,
      code: req.body.code,
      number: req.body.number,
      codification: req.body.codification,
      leader_id: req.body.leader
    }

    Offer.update(offer, {
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

// Eliminar un Project por ID
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Offer.destroy({
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

// Eliminar todos los Project
exports.deleteAll = (req, res) => {
    Offer.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} offers elimnados correctamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error mientras se eliminaban los offers."
        });
      });
  };

  exports.addUser = (req, res) => {

    const ou = {
      offer_id: req.body.offer,
      worker_id: req.body.worker,
      roster: req.body.roster
    }

    Offer_User.create(ou)
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

  exports.updateUser = (req, res) => {

    const id = req.params.id;

    const ou = {
      offer_id: req.body.offer,
      worker_id: req.body.worker,
      roster: req.body.roster
    }

    Offer_User.update(ou, {
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
