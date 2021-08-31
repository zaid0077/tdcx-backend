var express = require('express');
var router = express.Router();
compileSass = require('express-compile-sass'),
root = process.cwd();


router.use('/auth', require('./AuthRoute').router);
router.use('/task', require('./taskRoute').router);


router.use(compileSass({
    root: root,
    sourceMap: true, // Includes Base64 encoded source maps in output css
    sourceComments: true, // Includes source comments in output css
    watchFiles: true, // Watches sass files and updates mtime on main files for each change
    logToConsole: false // If true, will log to console.error on errors
}));


router.use(express.static(root));
router.use("/assets", express.static(__dirname + '/assets'));

module.exports.router = router;


