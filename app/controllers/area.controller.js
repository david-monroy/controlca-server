const db = require("../models");
const Area = db.areas;
const Area_Product = db.area_products;
const Project = db.projects;
const Product = db.products;
const Offer = db.offers;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Area
exports.create = (req, res) => {

  // Validar
  if (!req.body.name) {
    res.status(400).send({
      message: "¡El nombre no puede estar vacío!"
    });
    return;
  }

  // Crear un Project
  const area = {
    name: req.body.name,
  };

  // Guardar Project en BD
  Area.create(area)
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
    Area.findAll({
      include: [{
        model: Project,
        as: "project",
        attributes: ["id", "code", "name"],
      },
      {
        model: Product,
        as: "products",
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
      
        Area.findByPk(id, { 
            include: [{
                model: Project,
                as: "project",
                attributes: ["id", "code", "name"],
              },
              {
                model: Product,
                as: "products",
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

    Area.update(req.body, {
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
  
    Area.destroy({
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
    Area.destroy({
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

  exports.addProduct = (req, res) => {

    const ap = {
      area_id: req.body.area,
      product_id: req.body.product,
      estimated_hours: req.body.estimated_hours,
      observations: req.body.observations
    }

    Area_Product.create(ap)
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

  exports.updateProduct = (req, res) => {
  
    const id = req.params.id;

    const pp = {
      area_id: req.body.area,
      product_id: req.body.product,
      estimated_hours: req.body.estimated_hours,
      observations: req.body.observations
    }

    Area_Product.update(pp, {
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
