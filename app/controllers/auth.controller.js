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
    email: req.body.email,
    name: req.body.name,
    lastname: req.body.lastname,
    rol: req.body.rol,
    carnet: req.body.carnet,
    password: bcrypt.hashSync(req.body.password)
  })
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

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

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });


        res.status(200).send({
          id: user.id,
          email: user.email,
          rol: user.rol,
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