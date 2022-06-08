var express = require('express')
var router = express.Router()
let CriarSessaoController = require ('../controllers/criarSessaoController')


router.get('/' , CriarSessaoController.findAll) ;

router.post('/criar', CriarSessaoController.create )


module.exports = router
