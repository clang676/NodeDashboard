var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/typography', function(req, res, next) {
  res.render('typography', { title: 'Typography' });
});

module.exports = router;
