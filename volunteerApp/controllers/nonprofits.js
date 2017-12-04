const express = require('express');
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifLoggedIn('/nonprofits'), this.index);
    router.post('/', this.login);

    return router;
  },
  index(req, res) {
    res.render('nonprofits', { error: req.flash('error') });
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/nonprofits',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};
