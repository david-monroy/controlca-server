const { response } = require("express");
const db = require("./app/models");
const Rol = db.rols;
const User = db.users;
const Project = db.projects;
const Product = db.products;
const Project_Product = db.project_products;
const Project_User = db.project_users;
const Offer = db.offers;
const Offer_User = db.offer_users;
const Area = db.areas;
const Area_Product = db.area_products;
const Budget = db.budgets;

// ROLES
rolSeed = [
    { id: 1, name: "Administrador" },
    { id: 2, name: "Proyectos" },
    { id: 3, name: "Horas" },
]
function insertRoles(rolSeed){
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
}
// USUARIOS
userSeed = [
    { 
        id: 1,
        name: "David", 
        lastname: "Monroy", 
        username: "david.monroy", 
        password: "admins",
        carnet: "12345",
        rol_id: 1
    },
    { 
        id: 2,
        name: "Pedro", 
        lastname: "Pérez", 
        username: "pedro.perez", 
        password: "admins",
        carnet: "2222",
        rol_id: 2
    },
    { 
        id: 3,
        name: "María", 
        lastname: "Martínez", 
        username: "maria.martinez", 
        password: "admins",
        carnet: "3333",
        rol_id: 3
    }
]
function insertUsers(userSeed){
    userSeed.forEach(user => {

        var data = {
            name: user.name,
            lastname: user.lastname,
            username: user.username,
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
}
// PROYECTOS
projectSeed = [
    { 
        name: "Proyecto Inicial", 
        description: "Prueba de proyecto", 
        code: "7001", 
        areas: 1,
        leader_id: 1
    }
]
function insertProjects(projectSeed){
    projectSeed.forEach(project => {
        var data = {
            name: project.name,
            description: project.description,
            code: project.code,
            areas: project.areas,
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
}
// PRODUCTOS
productSeed = [
    { 
        id: 1,
        code: "001",
        name: "Generales"
    },
    { 
        id: 2,
        code: "010",
        name: "Cableado Estructurado"
    },
    { 
        id: 3,
        code: "020",
        name: "Telefonía"
    },
    { 
        id: 4,
        code: "030",
        name: "Networking"
    },
    { 
        id: 5,
        code: "040",
        name: "CCTV"
    },
    { 
        id: 6,
        code: "050",
        name: "Control de acceso"
    },
    { 
        id: 7,
        code: "060",
        name: "Intrusión"
    },
    { 
        id: 8,
        code: "070",
        name: "Detección de incendios"
    },
    { 
        id: 9,
        code: "080",
        name: "Sonorización"
    },
    { 
        id: 10,
        code: "090",
        name: "Edificio Inteligente"
    },
    { 
        id: 11,
        code: "100",
        name: "Otros"
    },
]
function insertProducts(productSeed){
    productSeed.forEach(product => {
        var data = {
            code: product.code,
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
}
// AREAS EN PROYECTOS
areaSeed = [
    { 
        project_id: 1,
        name: "A01",
    },
    { 
        project_id: 1,
        name: "A02",
    },
]
function insertAreas(areaSeed){
    areaSeed.forEach(area => {
        var data = {
            name: area.name,
            project_id: area.project_id,
          };
        
        Area.create(data)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    });
}
// PRODUCTOS EN AREAS
productAreaSeed = [
    { 
        estimated_hours: 5,
        product_id: 1,
        area_id: 1,
    },
    { 
        estimated_hours: 15,
        product_id: 1,
        area_id: 2,
    },
]
function insertProductAreas(productAreaSeed){
    productAreaSeed.forEach(pp => {
        var data = {
            estimated_hours: pp.estimated_hours,
            area_id: pp.area_id,
            product_id: pp.product_id,
          };
        
        Area_Product.create(data)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    });
}
// USUARIOS EN PROYECTOS
userProjectSeed = [
    { 
        roster: "Director",
        worker_id: 1,
        project_id: 1
    },
    { 
        roster: "Gerente",
        worker_id: 2,
        project_id: 1
    }
]
function insertUserProjects(userProjectSeed){
    userProjectSeed.forEach(pp => {
        var data = {
            roster: pp.roster,
            worker_id: pp.worker_id,
            project_id: pp.project_id,
          };
        
        Project_User.create(data)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    });
}
// BUDGETS EN PROYECTOS
budgetSeed = [
    { 
        project_id: 1,
        area: "Suministro",
        price: 50
    },
    { 
        project_id: 1,
        area: "Instalación",
        price: 75
    },
]
function insertBudgets(budgetSeed){
    budgetSeed.forEach(budget => {
        var data = {
            area: budget.area,
            project_id: budget.project_id,
            price: budget.price
          };
        
        Budget.create(data)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    });
}
// OFERTAS
offerSeed = [
    { 
        name: "Oferta inicial", 
        description: "Prueba de oferta", 
        code: "X301",
        department: "SIT", 
        leader_id: 1
    }
]
function insertOffers(offerSeed){
    offerSeed.forEach(offer => {
        var data = {
            name: offer.name,
            description: offer.description,
            code: offer.code,
            department: offer.department,
            leader_id: offer.leader_id
          };
        
        Offer.create(data)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    });
}
// USUARIOS EN PROYECTOS
userOfferSeed = [
    { 
        roster: "Gerente",
        worker_id: 2,
        offer_id: 1
    }
]
function insertUserOffers(userOfferSeed){
    userOfferSeed.forEach(pp => {
        var data = {
            roster: pp.roster,
            worker_id: pp.worker_id,
            offer_id: pp.offer_id,
          };
        
        Offer_User.create(data)
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    });
}

insertRoles(rolSeed);
insertUsers(userSeed);
insertProjects(projectSeed);
insertAreas(areaSeed);
insertProducts(productSeed);
insertProductAreas(productAreaSeed);
insertUserProjects(userProjectSeed);
insertOffers(offerSeed);
insertUserOffers(userOfferSeed);
insertBudgets(budgetSeed);