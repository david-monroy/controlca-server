const db = require("./app/models");
const Rol = db.rols;
const User = db.users;
const Project = db.projects;
const Product = db.products;

// ROLES
rolSeed = [
    { name: "Administrador" },
    { name: "Proyectos" },
    { name: "Horas" },
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
        name: "David", 
        lastname: "Monroy", 
        email: "david@gmail.com", 
        password: "admin",
        carnet: "12345",
        rol_id: 3
    }
]

userSeed.forEach(user => {

    // var rol_name = user.rol;
    // var rol_id = null;

    // Rol.findByName(rol_name)
    // .then(response => {
    //     this.rol_id = response;
    // })
    // .catch(e => {
    //     console.log(e);
    // });

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
        leader: 1
    }
]

projectSeed.forEach(project => {
    var data = {
        name: project.name,
        description: project.description,
        code: project.code,
        area: project.area,
        leader: project.leader
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