var HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy
  // AuthService = require('../services/AuthServices')

module.exports = function (passport) {
  passport.use(new HeaderAPIKeyStrategy({ header: 'Authorization', prefix: 'Api-Key ' }, true, function (apiKey, done, req) {
    AuthService.authenicateApiUser(apiKey, req.headers.passcode).then(r => {
      return done(null, true)
    }).catch(e => {
      return done(e, false)
    })
  }));
};