const User = require("../models/User")

module.exports = {
    findUser: async function(email) {
        return await User.find({
            'email': email
        }).select('name email password')
    },

    updateUser: async function(user) {
        await User.findOneAndUpdate({'_id': user._id}, user)
    },
}