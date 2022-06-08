var express = require('express')
var router = express.Router()
let PesquisaController = require('../controllers/pesquisaController')

router.get('/', function (req, res, next) {
  res.render('resultadoBusca')
})

router.post('/pesquisa', PesquisaController.search)

module.exports = router