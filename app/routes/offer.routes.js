module.exports = app => {
    const offers = require("../controllers/offer.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo offer
    router.post("/", offers.create);
  
    // Listar todos los offer
    router.get("/", offers.findAll);
  
    // Listar un solo offer por id
    router.get("/:id", offers.findOne);

    // Listar un solo offer por líder
    router.get("/leader/:id", offers.findByLeader);

    // Agregar usuario a proyecto
    router.post("/addUser", offers.addUser);

    // Actualizar usuario a proyecto
    router.put("/updateUser/:id", offers.updateUser);
  
    // Actualizar un offer por id
    router.put("/:id", offers.update);
  
    // Eliminar un offer por id
    router.delete("/:id", offers.delete);
  
    // Eliminar todos los offer
    router.delete("/", offers.deleteAll);
  
    app.use('/api/offers', router);
  };