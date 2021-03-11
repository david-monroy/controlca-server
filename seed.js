const db = require("./app/models");
const Rol = db.rols;
const User = db.users;

rolSeed = [
    { name: "Administrador" },
    { name: "Proyectos" },
    { name: "Horas" },
]

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