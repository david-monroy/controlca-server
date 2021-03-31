module.exports = app => {
    const offer_users = require("../controllers/offer_user.controller.js");
  
    var router = require("express").Router();
  
    // Agregar load a project_user
    router.post("/addLoad", offer_users.addLoad);
  
    // Listar todos los Rol
    router.get("/", offer_users.findAll);
  
  
    app.use('/api/offer_users', router);
  };