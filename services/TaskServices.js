const TaskDao = require('../dao/TaskDao')

module.exports = {
    async getTasks(user) {
        return await TaskDao.getTasks(user[0]._id)
    },

    async getCount(user, params) {
        let totalTasks = await TaskDao.getTaskCount(user[0]._id, params, { type: 'all' })
        let completedTasks = await TaskDao.getTaskCount(user[0]._id, params, { type: 'complete' })
        let inCompletedTasks = await TaskDao.getTaskCount(user[0]._id, params, { type: 'incomplete' })
        
        return {
            total: totalTasks,
            complete: completedTasks,
            incomplete: inCompletedTasks
        }

    },

    async deleteTask(params) {
        return await TaskDao.deleteTask(params)
    },

    async saveTask(user, params) {
        let data = {
            userId: user[0]._id,
            name: params.name
        }
        return await TaskDao.saveTask(data)
    },

    async getDashboardData(user) {
        let taskList = await TaskDao.getTasks(user[0]._id)

        let totalTasks = await TaskDao.getTaskCount(user[0]._id, { type: 'all' })
        let completedTasks = await TaskDao.getTaskCount(user[0]._id, { type: 'complete' })
        let inCompletedTasks = await TaskDao.getTaskCount(user[0]._id, { type: 'incomplete' })

        return {
            taskList: taskList,
            total: totalTasks,
            complete: completedTasks,
            incomplete: inCompletedTasks
        }
    },

    async changeTaskStatus(user, params) {
         await TaskDao.changeTaskStatus(params)
         return await TaskDao.getTasks(user[0]._id)
    },

    async updateTask(params) {
        return await TaskDao.updateTask(params)
    }
}