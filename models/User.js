'use strict';
var mongoose = require('mongoose');
var db = require('../db');


var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  loggedIn: { type: Boolean, default: false }

});

UserSchema.index({ name: 1, email: 1 }, { unique: true });
module.exports = db.model('User', UserSchema);