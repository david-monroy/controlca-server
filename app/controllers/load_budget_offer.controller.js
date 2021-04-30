const db = require("../models");
const Load_Budget_Offer = db.load_budget_offers;
const Project = db.projects;
const Offer = db.offers;
const Budget_Offer = db.budget_offers;
const Op = db.Sequelize.Op;

// Listar todos los users
exports.findAll = (req, res) => {
    Load_Budget_Offer.findAll({
      include: [{
        model: Budget_Offer,
        as: "budget_offers",
        attributes: ["id", "area", "price", "offer_id"],
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
      
        Load_Budget_Offer.findByPk(id, { 
            include: [{
                model: Budget_Offer,
                as: "budget_offers",
                attributes: ["id", "area", "price", "offer_id"],
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

    Load_Budget_Offer.update(req.body, {
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
  
    Load_Budget_Offer.destroy({
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
    Load_Budget_Offer.destroy({
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

