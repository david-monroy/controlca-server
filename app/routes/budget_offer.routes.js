module.exports = app => {
    const budget_offers = require("../controllers/budget_offer.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", budget_offers.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", budget_offers.findOne);

    // Agregar producto a budget_offer
    router.post("/", budget_offers.create);

    // Cargar horas a proyecto
    router.post("/load", budget_offers.load);
  
    // Actualizar un Rol por id
    router.put("/:id", budget_offers.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", budget_offers.delete);
  
    // Eliminar todos los Rol
    router.delete("/", budget_offers.deleteAll);
  
    app.use('/api/budget_offers', router);
  };