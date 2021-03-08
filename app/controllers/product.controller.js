const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Product
exports.create = (req, res) => {

  // Validar
  if (!req.body.name) {
    res.status(400).send({
      message: "¡El nombre no puede estar vacío!"
    });
    return;
  }

  // Crear un Product
  const product = {
    name: req.body.name
  };

  // Guardar Product en BD
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error mientras se guardaba el Product en base de datos."
      });
    });
};

// Listar todos los Productes
exports.findAll = (req, res) => {

    Product.findAll()
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

// Buscar un Product por ID
exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Product.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Ocurrió un error mientras se consultaba el Product " + id
            });
          });
};

// Actualizar un Product por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product actualizado correctamente."
          });
        } else {
          res.send({
            message: `No se pudo actualizar el Product con el id=${id}. Es posible que el Product no haya sido encontraodo o la petición esté vacía!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se actualizaba el Product " + id
        });
      });
};

// Eliminar un Product por ID
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product eliminado correctamente!"
          });
        } else {
          res.send({
            message: `No se pudo eliminar el Product con el id=${id}. Es posible que el Product no haya sido encontraodo o la petición esté vacía!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se actualizaba el Product " + id
        });
      });
  };

// Eliminar todos los Product
exports.deleteAll = (req, res) => {
    Product.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Products elimnados correctamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error mientras se eliminaban los Products."
        });
      });
  };
