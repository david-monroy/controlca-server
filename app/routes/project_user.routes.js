module.exports = app => {
    const project_users = require("../controllers/project_user.controller.js");
  
    var router = require("express").Router();
  
    // Agregar load a project_user
    router.post("/addLoad", project_users.addLoad);

    // Agregar bitacora a project_user
    router.post("/addBitacora", project_users.addBitacora);
  
    // Listar todos los Rol
    router.get("/", project_users.findAll);

    // Actualizar un product por id
    router.put("/:id", project_users.update);
  
    // Eliminar un product por id
    router.delete("/:id", project_users.delete);

    app.use('/api/project_users', router);
  };