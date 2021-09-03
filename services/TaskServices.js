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

    async saveTask(params) {
        return await TaskDao.saveTask(params)
    },

    async getDashboardData(params) {
        let taskList = await TaskDao.getTasks()

        let totalTasks = await TaskDao.getTaskCount(params, { type: 'all' })
        let completedTasks = await TaskDao.getTaskCount(params, { type: 'complete' })
        let inCompletedTasks = await TaskDao.getTaskCount(params, { type: 'incomplete' })

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