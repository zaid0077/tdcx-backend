const UserDao = require("../dao/UserDao")
const bcrypt = require('bcryptjs');
let Util = require("./../Util");

module.exports = {
    login: async function(params) {
        let userData = await UserDao.findUser(params.email.toLowerCase())
        let user = userData[0]
        
        if (undefined == user) {
            throw new Error("Email and password not found")
        }

        if (!bcrypt.compareSync(params.password, user.password)) {
            throw new Error("Password do not match")
        }

        user.loggedIn = true

        let token = await Util.setupTokenForJwt(user)

        await UserDao.updateUser(user)

        user.token = token

        let returnObj = {}

        returnObj.id = user._id
        returnObj.tempToken = token
        returnObj.name = user.name
        returnObj.email = user.email

        return returnObj
    },

    findUser: async function(payload) {
        return await UserDao.findUserForAuthentication(payload._id)
    }


}