var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TP-WorkerWellbeing' });
});

router.get('/all_users', function (req, res, next) {

});

module.exports = router;