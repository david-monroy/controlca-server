const db = require("../models");
const Rol = db.rols;
const User = db.users;

checkDuplicateEmail = (req, res, next) => {
  // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Email ya registrado"
        });
        return;
      }
      next();
    });
};


const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail
};

module.exports = verifySignUp;