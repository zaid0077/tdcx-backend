const User = require('../models/User')

module.exports = {
      
      findUserByEmail: async function (email) {
        let user = await User.findOne({
          "email": email
        });
        return user;
      },
}