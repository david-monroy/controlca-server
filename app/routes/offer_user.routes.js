module.exports = app => {
    const offer_users = require("../controllers/offer_user.controller.js");
  
    var router = require("express").Router();
  
    // Agregar load a project_user
    router.post("/addLoad", offer_users.addLoad);
  
    // Listar todos los Rol
    router.get("/", offer_users.findAll);
  
    // Actualizar un product por id
    router.put("/:id", offer_users.update);
  
    // Eliminar un product por id
    router.delete("/:id", offer_users.delete);

    app.use('/api/offer_users', router);
  };