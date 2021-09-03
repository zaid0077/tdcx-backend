var express = require('express');
var router = express.Router();
var taskController = require("../controllers/TaskController");
var passport = require('passport');
require('../config/passport')(passport);

router.post('/getTasks', passport.authenticate('user-rule', { session: false }), taskController.getTasks);

router.post('/getCount', passport.authenticate('user-rule', { session: false }), taskController.getCount);

router.post('/deleteTask', passport.authenticate('user-rule', { session: false }), taskController.deleteTask);

router.post('/saveTask', passport.authenticate('user-rule', { session: false }), taskController.saveTask);

router.post('/getDashboardData', passport.authenticate('user-rule', { session: false }), taskController.getDashboardData)

router.post('/changeTaskStatus', passport.authenticate('user-rule', { session: false }), taskController.changeTaskStatus)

router.post('/updateTask', passport.authenticate('user-rule', { session: false }), taskController.updateTask)


module.exports.router = router;