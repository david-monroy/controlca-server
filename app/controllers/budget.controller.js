const db = require("../models");
const Budget = db.budgets;
const Area_Product = db.area_products;
const Project = db.projects;
const Product = db.products;
const Offer = db.offers;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Area
exports.create = (req, res) => {

  // Crear un Project
  const budget = {
    area: req.body.area,
    price: req.body.price,
    project_id: req.body.project,
  };

  // Guardar Project en BD
  Budget.create(budget)
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
    Budget.findAll({
      include: [{
        model: Project,
        as: "project",
        attributes: ["id", "code", "name"],
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
      
        Budget.findByPk(id, { 
            include: [{
                model: Project,
                as: "project",
                attributes: ["id", "code", "name"],
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

    Budget.update(req.body, {
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
  
    Budget.destroy({
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
    Budget.destroy({
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

