var express = require('express');
var router = express.Router();
var authController = require("../controllers/AuthController");
var passport = require('passport');
require('../config/passport')(passport);

router.post('/login', authController.login);

router.post('/logout', passport.authenticate('user-rule', { session: false }), authController.logout);


module.exports.router = router;