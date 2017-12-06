const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const user = require('../models').user;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {
    user.findOne({
      where: { email },
    }).then((user) => {
      if(!User) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      if (passwordsMatch(password, User.password_hash) === false) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, User, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((User, done) => {
  done(null, User.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((User) => {
    if (!User) {
      return done(null, false);
    }

    return done(null, User);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.User ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.User ? next() : res.redirect(route));

module.exports = passport;
