
var express = require('express');
var router = express.Router();

router.get('/glinskis', function(req, res, next){
	res.render('projects/glinskis', {title: 'Glinski\'s Hexagonal Chess' });
});

module.exports = router;

