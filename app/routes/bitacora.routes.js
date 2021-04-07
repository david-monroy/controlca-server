module.exports = app => {
    const bitacoras = require("../controllers/bitacora.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", bitacoras.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", bitacoras.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", bitacoras.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", bitacoras.delete);
  
    // Eliminar todos los Rol
    router.delete("/", bitacoras.deleteAll);
  
    app.use('/api/bitacoras', router);
  };