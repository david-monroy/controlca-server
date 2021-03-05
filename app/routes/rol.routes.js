module.exports = app => {
    const rols = require("../controllers/rol.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo Rol
    router.post("/", rols.create);
  
    // Listar todos los Rol
    router.get("/", rols.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", rols.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", rols.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", rols.delete);
  
    // Eliminar todos los Rol
    router.delete("/", rols.deleteAll);
  
    app.use('/api/rols', router);
  };