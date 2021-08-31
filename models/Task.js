'use strict';
var mongoose = require('mongoose');
var db = require('../db');


var TaskSchema = new mongoose.Schema({
  name: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});


module.exports = db.model('Task', TaskSchema);