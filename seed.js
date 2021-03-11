const { response } = require("express");
const db = require("./app/models");
const Rol = db.rols;
const User = db.users;
const Project = db.projects;
const Product = db.products;
const Project_Product = db.project_products;
const Project_User = db.project_users;

// ROLES
rolSeed = [
    { id: 1, name: "Administrador" },
    { id: 2, name: "Proyectos" },
    { id: 3, name: "Horas" },
]

rolSeed.forEach(rol => {
    var data = {
        name: rol.name,
      };
    
    Rol.create(data)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.log(e);
    });
});

// USUARIOS
userSeed = [
    { 
        id: 1,
        name: "David", 
        lastname: "Monroy", 
        email: "david@gmail.com", 
        password: "admins",
        carnet: "12345",
        rol_id: 1
    },
    { 
        id: 2,
        name: "Jose", 
        lastname: "Monroy", 
        email: "jose@gmail.com", 
        password: "admins",
        carnet: "2222",
        rol_id: 2
    },
    { 
        id: 3,
        name: "Bea", 
        lastname: "Gil", 
        email: "bea@gmail.com", 
        password: "admins",
        carnet: "3333",
        rol_id: 3
    }
]

userSeed.forEach(user => {

    var data = {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        carnet: user.carnet,
        rol_id: user.rol_id,
        password: user.password
      };
    
    User.create(data)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.log(e);
    });
});

// PROYECTOS
projectSeed = [
    { 
        name: "Proyecto Inicial", 
        description: "Prueba de proyecto", 
        code: "001", 
        area: "Cables",
        leader_id: 1
    }
]

projectSeed.forEach(project => {
    var data = {
        name: project.name,
        description: project.description,
        code: project.code,
        area: project.area,
        leader_id: project.leader_id
      };
    
    Project.create(data)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.log(e);
    });
});

// PRODUCTOS
productSeed = [
    { 
        name: "Primer Producto"
    }
]

productSeed.forEach(product => {
    var data = {
        name: product.name
      };
    
    Product.create(data)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.log(e);
    });
});

// PRODUCTOS EN PROYECTOS
productProjectSeed = [
    { 
        estimated_hours: 5,
        project_id: 1,
        product_id: 1
    }
]

productProjectSeed.forEach(pp => {
    var data = {
        estimated_hours: pp.estimated_hours,
        project_id: pp.project_id,
        product_id: pp.product_id,
      };
    
    Project_Product.create(data)
    .then(response => {
        console.log(response)
    })
    .catch(e => {
        console.log(e);
    });
});