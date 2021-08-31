const AuthService = require("../services/AuthServices")

module.exports = {
    login: async function(req, res) {
        try {
            let user = await AuthService.login(req.body)
            let token = user.tempToken
            user.tempToken = undefined
            res.status(200).send({ user: user, token: `Bearer ${token}`})
        } catch (error) {
            res.status(400).send({ message: error.message})
        }
    },

    logout: async function(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}