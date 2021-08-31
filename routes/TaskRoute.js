var express = require('express');
var router = express.Router();
var taskController = require("../controllers/TaskController");
var passport = require('passport');
require('../config/passport')(passport);

router.post('/getTasks', taskController.getTasks);

router.post('/getCount', taskController.getCount);

router.post('/deleteTask', taskController.deleteTask);

router.post('/saveTask', taskController.saveTask)


module.exports.router = router;