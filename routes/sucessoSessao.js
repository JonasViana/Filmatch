var express = require('express');
var router = express.Router();
let SessionController = require('../controllers/SessionController')

router.get('/', SessionController.findOne)
module.exports = router;