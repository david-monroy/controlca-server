const db = require("../models");
const Project = db.projects;
const Product = db.products;
const Area = db.areas;
const Project_User = db.project_users;
const Project_User_Load = db.project_user_loads;
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
  const project = {
    name: req.body.name,
    description: req.body.description,
    code: req.body.code,
    areas: req.body.areas,
    leader_id: req.body.leader
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

    Project.findAll({
      include: [
        {
          model: Area,
          as: "project_areas",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "working_users",
          attributes: ["id", "name", "lastname"],
          through: {
            attributes: [
              "roster", "id", "hours_done"
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
      
        Project.findByPk(id, {
        include: [
          {
            model: Area,
            as: "project_areas",
            attributes: ["id", "name"],
          },
          {
            model: User,
            as: "working_users",
            attributes: ["id", "name", "lastname"],
            through: {
              attributes: [
                "roster", "id", "hours_done"
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

  Project.findAll({where: {leader_id: leader_id}, 
  include: [
    {
      model: Area,
      as: "project_areas",
      attributes: ["id", "name"],
    },
    {
      model: User,
      as: "working_users",
      attributes: ["id", "name", "lastname"],
      through: {
        attributes: [
          "roster", "id", "hours_done"
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

    Project.update(project, {
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

  

  exports.addUser = (req, res) => {

    const pu = {
      project_id: req.body.project,
      worker_id: req.body.worker,
      roster: req.body.roster
    }

    Project_User.create(pu)
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

    Project_User.update(pu, {
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

  exports.loadHour = (req, res) => {

    const lh = {
      project_id: req.body.project,
      worker_id: req.body.worker,
      date: req.body.date,
      hours: req.body.hours,
      observations: req.body.observations,
    }

    Project_User_Load.create(lh)
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

  exports.addArea = (req, res) => {

    const area = {
      project_id: req.body.project,
      name: req.body.name,
    }

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
