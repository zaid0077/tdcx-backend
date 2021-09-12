const Tasks = require('../models/Task')
const mongoose = require('mongoose')

module.exports = {
    getTasks: async function(id) {
        return await Tasks.find({
            userId: new mongoose.Types.ObjectId(id)
        })
    },

    getTaskCount: async function(id, data) {
        let searchObj = {}
        searchObj.userId = new mongoose.Types.ObjectId(id)
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
    },

    changeTaskStatus: async function(params) {
        return await Tasks.update({
         _id: new mongoose.Types.ObjectId(params.id)
        }, {
          $set: {
            completed: params.toUpdate
          }
        })
    },

    updateTask: async function(params) {
        return await Tasks.findOneAndUpdate({
            _id: new mongoose.Types.ObjectId(params._id)
        }, params)
    }
}