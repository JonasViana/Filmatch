var express = require ('express')
var router = express.Router()


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('paginaCadastro',{ usuario:req.session.usuario })
})

module.exports = router
