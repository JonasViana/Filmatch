var express = require('express')
var router = express.Router()
let UserController = require ('../controllers/UserController')

router.get('/', function (req, res, next) {
  res.render('perfilUsuario', {
    ...(req.session.usuario && {usuario:req.session.usuario})
  })
})

module.exports = router
