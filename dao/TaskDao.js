const Tasks = require('../models/Task')
const mongoose = require('mongoose')

module.exports = {
    getTasks: async function(params) {
        return await Tasks.find({
            userId: new mongoose.Types.ObjectId('612b0efd86c11b1dd0ff5c91')
        })
    },

    getTaskCount: async function(params, data) {
        let searchObj = {}
        searchObj.userId = new mongoose.Types.ObjectId('612b0efd86c11b1dd0ff5c91')
        if (data.type == "complete") {
            searchObj.completed = true 
        }

        if (data.type == "incomplete") {
            searchObj.completed = false 
        }

        return await Tasks.find(searchObj).count()
    },

    deleteTask: async function(params) {
        return await Tasks.findByIdAndDelete(new mongoose.Types.ObjectId(params.taskId))
    },

    saveTask: async function(params) {
        return await Tasks.create(params)
    }
}