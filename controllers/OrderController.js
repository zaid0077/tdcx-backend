const AdminServices = require('../services/OrderServices')


module.exports = {
    findUserByEmail: async function (req, res) {
        try {
            let data = await AdminServices.findUserByEmail(req.body);
            res.status(200).send({ data, length: data.length })
        } catch (e) {
            console.log(`${e.message}`)
            return res.status(500).send({ error: true, message: e.message })
        }
    },

}