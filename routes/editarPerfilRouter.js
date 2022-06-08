var express = require('express')
var router = express.Router()
let UserController = require ('../controllers/UserController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('editarPerfil',{
    ...(req.session.usuario && {usuario:req.session.usuario})
  })
})

router.post('/editar', UserController.editarPefil)

module.exports = router
