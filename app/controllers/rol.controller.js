const db = require("../models");
const Rol = db.rols;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Rol
exports.create = (req, res) => {

  // Validar
  if (!req.body.name) {
    res.status(400).send({
      message: "¡El nombre no puede estar vacío!"
    });
    return;
  }

  // Crear un Rol
  const rol = {
    name: req.body.name
  };

  // Guardar Rol en BD
  Rol.create(rol)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error mientras se guardaba el rol en base de datos."
      });
    });
};

// Listar todos los roles
exports.findAll = (req, res) => {

  
    Rol.findAll()
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

// Buscar un rol por ID
exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Rol.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Ocurrió un error mientras se consultaba el rol " + id
            });
          });
};

// Actualizar un rol por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Rol.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Rol actualizado correctamente."
          });
        } else {
          res.send({
            message: `No se pudo actualizar el rol con el id=${id}. Es posible que el Rol no haya sido encontraodo o la petición esté vacía!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se actualizaba el rol " + id
        });
      });
};

// Eliminar un rol por ID
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Rol eliminado correctamente!"
          });
        } else {
          res.send({
            message: `No se pudo eliminar el rol con el id=${id}. Es posible que el Rol no haya sido encontraodo o la petición esté vacía!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ocurrió un error mientras se actualizaba el rol " + id
        });
      });
  };

// Eliminar todos los rol
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Roles elimnados correctamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error mientras se eliminaban los roles."
        });
      });
  };
