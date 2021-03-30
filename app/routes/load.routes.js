module.exports = app => {
    const loads = require("../controllers/load.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", loads.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", loads.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", loads.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", loads.delete);
  
    // Eliminar todos los Rol
    router.delete("/", loads.deleteAll);
  
    app.use('/api/loads', router);
  };