var express = require('express');
const { user } = require('../controllers/loginController');
var router = express.Router();
const loginController = require ('../controllers/loginController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', loginController.user)

module.exports = router;