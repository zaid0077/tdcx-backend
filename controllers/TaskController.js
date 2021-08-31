const TaskService = require('../services/TaskServices')


module.exports = {
    getTasks: async function (req, res) {
        try {
            let tasks = await TaskService.getTasks(req.body);
            res.status(200).send({ tasks })
        } catch (e) {
            return res.status(500).send({ error: true, message: e.message })
        }
    },

    getCount: async function (req, res) {
        try {
            let count = await TaskService.getCount(req.body);
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
            await TaskService.saveTask(req.body);
            res.status(200).send({ message: "Successfully saved task" })
        } catch (e) {
            return res.status(500).send({ error: true, message: e.message })
        }
    },

}