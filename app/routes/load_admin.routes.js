module.exports = app => {
    const load_admins = require("../controllers/load_admin.controller.js");
  
    var router = require("express").Router();

    // Crear un nuevo Rol
    router.post("/", load_admins.create);
  
    // Listar todos los Rol
    router.get("/", load_admins.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", load_admins.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", load_admins.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", load_admins.delete);
  
    // Eliminar todos los Rol
    router.delete("/", load_admins.deleteAll);
  
    app.use('/api/load_admins', router);
  };