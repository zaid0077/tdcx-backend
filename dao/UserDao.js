const User = require("../models/User")
var mongoose = require('mongoose');

module.exports = {
    findUser: async function(email) {
        return await User.find({
            'email': email
        }).select('name email password')
    },

    updateUser: async function(user) {
        await User.findOneAndUpdate({'_id': user._id}, user)
    },

    findUserForAuthentication: async function(id) {
        return await User.find({
            _id: new mongoose.Types.ObjectId(id)
        })
    }
}