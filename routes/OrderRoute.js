const express = require('express'),
    router = express.Router(),
    OrderController = require("../controllers/OrderController"),
    passport = require('passport');
require('../config/passport')(passport);

router.post('/findUserByEmail', passport.authenticate('headerapikey', {session: false }), OrderController.findUserByEmail )


module.exports.router = router