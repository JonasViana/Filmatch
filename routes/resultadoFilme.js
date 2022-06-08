var express = require('express')
var router = express.Router()
const models = require('../database/models/index')
let filmesController = require ('../controllers/filmesController')

router.get('/', filmesController.movies)

router.get('/:id',filmesController.movies )

module.exports = router

