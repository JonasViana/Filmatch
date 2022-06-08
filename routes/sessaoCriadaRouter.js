var express = require('express')
var router = express.Router()
const SessionController = require('../controllers/SessionController')


router.get('/', function(req, res, next) {
    res.render('sessaocriada');
  }) ;

router.get('/:id',SessionController.sessions )

module.exports = router