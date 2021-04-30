var express = require('express');
var router = express.Router();

router.get('/brook', function(req, res, next){
	res.render('blog/brook', {title: 'Brook Zero Pi Header Soldering' });
});

module.exports = router;

