const db = require("../models");
const Budget_Offer = db.budget_offers;
const Area_Product = db.area_products;
const Project = db.projects;
const Load_Budget_Offer = db.load_budget_offers;
const Product = db.products;
const Offer = db.offers;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Area
exports.create = (req, res) => {

  // Crear un Project
  const budget = {
    area: req.body.area,
    price: req.body.price,
    offer_id: req.body.offer,
  };

  // Guardar Project en BD
  Budget_Offer.create(budget)
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

// Listar todos los users
exports.findAll = (req, res) => {
    Budget_Offer.findAll({
      include: [{
        model: Offer,
        as: "offer",
        attributes: ["id", "code", "name"],
      },
      {
        model: Load_Budget_Offer,
        as: "load_budget_offers",
        attributes: ["id", "description", "paid", "budget", "observations", "date", "area", "status"],
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
      
        Budget_Offer.findByPk(id, { 
            include: [{
                model: Offer,
                as: "offer",
                attributes: ["id", "code", "name"],
              },
              {
                model: Load_Budget_Offer,
                as: "load_budgets",
                attributes: ["id", "description", "paid", "budget", "observations", "date", "area","status"],
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

    Budget_Offer.update(req.body, {
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
  
    Budget_Offer.destroy({
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
    Budget_Offer.destroy({
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

  exports.load = (req, res) => {

    const lh = {
      date: req.body.date,
      description: req.body.description,
      observations: req.body.observations,
      paid: req.body.paid,
      budget: req.body.budget,
      budget_offer_id: req.body.budget_offer_id,
      area: req.body.area,
      status: req.body.status,
    }

    Load_Budget_Offer.create(lh)
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

