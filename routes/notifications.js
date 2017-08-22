var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/notifications', function(req, res, next) {
  res.render('notifications', { title: 'Notifications' });
});

module.exports = router;
