var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/icon', function(req, res, next) {
  res.render('icons', { title: 'Icons' });
});

module.exports = router;
