module.exports = app => {
    const budgets = require("../controllers/budget.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", budgets.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", budgets.findOne);

    // Agregar producto a budget
    router.post("/", budgets.create);
  
    // Actualizar un Rol por id
    router.put("/:id", budgets.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", budgets.delete);
  
    // Eliminar todos los Rol
    router.delete("/", budgets.deleteAll);
  
    app.use('/api/budgets', router);
  };