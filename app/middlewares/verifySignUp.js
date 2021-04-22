const db = require("../models");
const Rol = db.rols;
const User = db.users;

checkDuplicateUsername = (req, res, next) => {
  // Username
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Username ya registrado"
        });
        return;
      }
      next();
    });
};


const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername
};

module.exports = verifySignUp;