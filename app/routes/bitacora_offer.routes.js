module.exports = app => {
    const bitacora_offers = require("../controllers/bitacora_offer.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", bitacora_offers.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", bitacora_offers.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", bitacora_offers.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", bitacora_offers.delete);
  
    // Eliminar todos los Rol
    router.delete("/", bitacora_offers.deleteAll);
  
    app.use('/api/bitacora_offers', router);
  };