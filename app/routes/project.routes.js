module.exports = app => {
    const projects = require("../controllers/project.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo project
    router.post("/", projects.create);
  
    // Listar todos los project
    router.get("/", projects.findAll);
  
    // Listar un solo project por id
    router.get("/:id", projects.findOne);

    // Agregar producto a proyecto
    router.post("/addProduct", projects.addProduct);
  
    // Actualizar un project por id
    router.put("/:id", projects.update);
  
    // Eliminar un project por id
    router.delete("/:id", projects.delete);
  
    // Eliminar todos los project
    router.delete("/", projects.deleteAll);
  
    app.use('/api/projects', router);
  };