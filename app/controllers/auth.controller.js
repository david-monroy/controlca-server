const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Rol = db.rols;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    name: req.body.name,
    lastname: req.body.lastname,
    rol_id: req.body.rol_id,
    carnet: req.body.carnet,
    password: bcrypt.hashSync(req.body.password)
  })
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      if(user.id > 3) {
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Contraseña inválida"
          });
        }
      } else {
        var passwordIsValid = false;
        if (user.password == req.body.password) passwordIsValid = true
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Contraseña inválida"
          });
      }
    }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          username: user.username,
          rol_id: user.rol_id,
          name: user.name,
          lastname: user.lastname,
          carnet: user.carnet,
          accessToken: token,
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};