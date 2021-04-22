module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo product
    router.post("/", products.create);
  
    // Listar todos los product
    router.get("/", products.findAll);
  
    // Listar un solo product por id
    router.get("/:id", products.findOne);
  
    // Actualizar un product por id
    router.put("/:id", products.update);
  
    // Eliminar un product por id
    router.delete("/:id", products.delete);
  
    // Eliminar todos los product
    router.delete("/", products.deleteAll);
  
    app.use('/api/products', router);
  };