const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user.model');

// Configuración de Autenticación
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, passport, done) => {
    await User.findOne({email: email},
    function(err, users) {
        if (err) { return done(err); }
        if (!users) {
        return done(null, false, { message: 'Incorrect username.' });
        }
        if (!users.password === password) {
        return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, users);
    });
}))