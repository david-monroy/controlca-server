module.exports = app => {
    const load_offers = require("../controllers/load_offer.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", load_offers.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", load_offers.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", load_offers.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", load_offers.delete);
  
    // Eliminar todos los Rol
    router.delete("/", load_offers.deleteAll);
  
    app.use('/api/load_offers', router);
  };