module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo User
    router.post("/", users.create);
  
    // Listar todos los User
    router.get("/", users.findAll);

    // Listar todos los User de un rol
    router.get("/rol/:rol_id", users.findByRol);
  
    // Listar un solo User por id
    router.get("/:id", users.findOne);

    // Listar un solo User por email
    router.get("/username/:username", users.findByUsername);
  
    // Actualizar un User por id
    router.put("/:id", users.update);
  
    // Eliminar un User por id
    router.delete("/:id", users.delete);
  
    // Eliminar todos los User
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };