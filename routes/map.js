var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/map', function(req, res, next) {
  res.render('maps', { title: 'Maps' });
});

module.exports = router;
