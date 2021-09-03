var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  AuthenticationService = require('../services/AuthServices'),
  settings = require('./config');

module.exports = function (passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = settings.secret;
  opts.passReqToCallback = true

  passport.use('user-rule', new JwtStrategy(opts, function (req, payload, done) {
    AuthenticationService.findUser(payload).then(user => {
      if (user == null) {
        return req.res.status(401).send({ error: true, message: "Data tempered detected. Details do not match - 3" })
      } 
      /**
       * Need to set these properties to the local user from the central user to be displayed on the frontend
       */
      let rUser = JSON.parse(JSON.stringify(user))
      rUser.email = user[0].email
      rUser.name = user[0].name

      return done(null, rUser)
    }).catch(e => {
        console.log(`in passport. exception : ${JSON.stringify(e)}`)
      return req.res.status(409).send({ error: true, message: "User not found. Please contact us for support." })
    });
  }));
};