const AdminDao = require('../dao/OrderDao')

module.exports = {
    async findUserByEmail(searchCriteria) {
        let data = await AdminDao.findUserByEmail(searchCriteria)
        return data
    },
}