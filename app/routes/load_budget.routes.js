module.exports = app => {
    const load_budgets = require("../controllers/load_budget.controller.js");
  
    var router = require("express").Router();
  
    // Listar todos los Rol
    router.get("/", load_budgets.findAll);
  
    // Listar un solo Rol por id
    router.get("/:id", load_budgets.findOne);
  
    // Actualizar un Rol por id
    router.put("/:id", load_budgets.update);
  
    // Eliminar un Rol por id
    router.delete("/:id", load_budgets.delete);
  
    // Eliminar todos los Rol
    router.delete("/", load_budgets.deleteAll);
  
    app.use('/api/load_budgets', router);
  };