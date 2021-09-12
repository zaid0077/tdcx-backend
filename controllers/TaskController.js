const TaskService = require('../services/TaskServices')


module.exports = {
    getTasks: async function (req, res) {
        try {
            let tasks = await TaskService.getTasks(req.user);
            res.status(200).send({ tasks })
        } catch (e) {
            return res.status(500).send({ error: true, message: e.message })
        }
    },

    getCount: async function (req, res) {
        try {
            let count = await TaskService.getCount(req.user, req.body);
            res.status(200).send({ count })
        } catch (e) {
            return res.status(500).send({ error: true, message: e.message })
        }
    },

    deleteTask: async function (req, res) {
        try {
            await TaskService.deleteTask(req.body);
            res.status(200).send({ message: "Successfully deleted task" })
        } catch (e) {
            return res.status(500).send({ error: true, message: e.message })
        }
    },

    saveTask: async function (req, res) {
        try {
            await TaskService.saveTask(req.user, req.body);
            res.status(200).send({ message: "Successfully saved task" })
        } catch (e) {
            return res.status(500).send({ error: true, message: e.message })
        }
    },

    getDashboardData: async function (req, res) {
        try {
            let dashboardData = await TaskService.getDashboardData(req.user)
            res.status(200).send({ dashboardData })
        } catch (error) {
            return res.status(500).send({ error: true, message: error.message })
        }
    },

    changeTaskStatus: async function (req, res) {
        try {
            let updatedTasks = await TaskService.changeTaskStatus(req.user, req.body)
            res.status(200).send({ updatedTasks })
        } catch (error) {
            return res.status(500).send({ error: true, message: error.message })
        }
    },

    updateTask: async function (req, res) {
        try {
            await TaskService.updateTask(req.body)
            res.status(200).send({ message: "Success" })
        } catch (error) {
            return res.status(500).send({ error: true, message: error.message })
        }
    },

    

}