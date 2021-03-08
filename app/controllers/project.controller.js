const db = require("../models");
const Project = db.projects;
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
  const project = {
    name: req.body.name,
    description: req.body.description,
    code: req.body.code,
    area: req.body.area,
    leader: req.body.leader
  };

  // Guardar Project en BD
  Project.create(project)
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

  
    Project.findAll()
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
      
        Project.findByPk(id)
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

    Project.update(req.body, {
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
  
    Project.destroy({
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
    Project.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Projects elimnados correctamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrió un error mientras se eliminaban los Projects."
        });
      });
  };