var express = require('express');
var router = express.Router();
const SessionController = require('../controllers/SessionController')
const loginController = require('../controllers/loginController')

router.get('/' , SessionController.movies);

router.get('/logout', loginController.logout)

module.exports = router;
