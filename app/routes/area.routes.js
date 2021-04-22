module.exports = app => {
    const areas = require("../controllers/area.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", areas.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", areas.findOne);

    // Agregar producto a area
    router.post("/", areas.create);

    // Agregar producto a area
    router.post("/addProduct", areas.addProduct);

    // Actualizar producto a area
    router.put("/updateProduct/:id", areas.updateProduct);
  
    // Actualizar un Rol por id
    router.put("/:id", areas.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", areas.delete);
  
    // Eliminar todos los Rol
    router.delete("/", areas.deleteAll);
  
    app.use('/api/areas', router);
  };