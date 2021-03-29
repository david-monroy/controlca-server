const db = require("../models");
const User = db.users;
const Project = db.projects;
const Offer = db.offers;
const Project_User = db.project_users;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo User
exports.create = (req, res) => {

  // Validar
  if (!req.body.name) {
    res.status(400).send({
      message: "¡El nombre no puede estar vacío!"
    });
    return;
  }

  // Crear un User
  const user = {
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    carnet: req.body.carnet,
    rol_id: req.body.rol_id
  };
  

  // Guardar User en BD
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error mientras se guardaba el user en base de datos."
      });
    });
};

// Listar todos los users
exports.findAll = (req, res) => {
    User.findAll({
      include: ["rol",
      {
        model: Project,
        as: "working_projects",
        attributes: ["id", "name", "code"],
        through: {
          attributes: ["roster"],
        }
      },
      {
        model: Offer,
        as: "working_offers",
        attributes: ["id", "name", "code", "number", "codification"],
        through: {
          attributes: ["roster"],
        }
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

  // Listar todos los users
exports.findByRol = (req, res) => {
  const rol_id = req.params.rol_id;
  User.findAll({
    where: {
      rol_id: rol_id
    },
    include: ["rol",
    {
      model: Project,
      as: "working_projects",
      attributes: ["id", "name", "code"],
      through: {
        attributes: ["roster"],
      }
    },
    {
      model: Offer,
      as: "working_offers",
      attributes: ["id", "name", "code", "number", "codification"],
      through: {
        attributes: ["roster"],
      }
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
      
        User.findByPk(id, { include: ["rol", "projects",
        {
          model: Project,
          as: "working_projects",
          attributes: ["id", "name", "code"],
          through: {
            attributes: [],
          }
        },
        {
          model: Offer,
          as: "working_offers",
          attributes: ["id", "name", "code", "number", "codification"],
          through: {
            attributes: ["roster"],
          }
        },
      ] })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Ocurrió un error mientras se consultaba el User " + id
            });
          });
};

// Buscar un user por username
exports.findByUsername = (req, res) => {
  const username = req.params.username;

  User.findAll({where: {username: username}}, { include: ["rol", "projects",
  {
    model: Project,
    as: "working_projects",
    attributes: ["id", "name", "code"],
    through: {
      attributes: [],
    }
  },
  {
    model: Offer,
    as: "working_offers",
    attributes: ["id", "name", "code", "number", "codification"],
    through: {
      attributes: ["roster"],
    }
  },
  ] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrió un error mientras se consultaba el User " + username
      });
    });
};

// Actualizar un User por ID
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
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
  
    User.destroy({
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
    User.destroy({
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

