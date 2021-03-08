module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo User
    router.post("/", users.create);
  
    // Listar todos los User
    router.get("/", users.findAll);
  
    // Listar un solo User por id
    router.get("/:id", users.findOne);

    // Listar un solo User por email
    router.get("/email/:email", users.findByEmail);
  
    // Actualizar un User por id
    router.put("/:id", users.update);
  
    // Eliminar un User por id
    router.delete("/:id", users.delete);
  
    // Eliminar todos los User
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };