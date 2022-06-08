var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('homeForum')
})

module.exports = router
