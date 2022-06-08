var express = require('express');
var router = express.Router();
let filmesController = require('../controllers/filmesController')

router.get('/', filmesController.todosfilmes);

module.exports = router;