const config = require("../enviroment");

module.exports = {
    secret: config.JWT_KEY
}