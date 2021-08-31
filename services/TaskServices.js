const TaskDao = require('../dao/TaskDao')

module.exports = {
    async getTasks(params) {
        return await TaskDao.getTasks(params)
    },

    async getCount(params) {
        let totalTasks = await TaskDao.getTaskCount(params, { type: 'all' })
        let completedTasks = await TaskDao.getTaskCount(params, { type: 'complete' })
        let inCompletedTasks = await TaskDao.getTaskCount(params, { type: 'incomplete' })
        
        return {
            total: totalTasks,
            complete: completedTasks,
            incomplete: inCompletedTasks
        }

    },

    async deleteTask(params) {
        return await TaskDao.deleteTask(params)
    },

    async saveTask(params) {
        return await TaskDao.saveTask(params)
    }
}