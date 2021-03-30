module.exports = app => {
    const project_users = require("../controllers/project_user.controller.js");
  
    var router = require("express").Router();
  
    // Agregar load a project_user
    router.post("/addLoad", project_users.addLoad);
  
    // Listar todos los Rol
    router.get("/", project_users.findAll);
  
  
    app.use('/api/project_users', router);
  };