const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user.model');

// Configuración de Autenticación
passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, passport, done) => {
    await User.findOne({username: username},
    function(err, users) {
        if (err) { return done(err); }
        if (!users) {
        return done(null, false, { message: 'Usuario incorrecto' });
        }
        if (!users.password === password) {
        return done(null, false, { message: 'Contraseña incorrecta' });
        }
        return done(null, users);
    });
}))