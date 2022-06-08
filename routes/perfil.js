const { application } = require('express');
var express = require('express');
var router = express.Router();
const multer = require('multer')
const {Usuario} = require('../database/models')

const storage = multer.diskStorage({
  destination: function(req,file,cb){
      cb(null,'public/images/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  }
})

const upload = multer({storage: storage})

router.post('/avatar', upload.single('avatar'), (req,res) =>{
  const file = req.file

  if(!file){
    const error = new Error ('Por favor, selecione um arquivo !')
    error.httpStatusCode = 400
    return next(error) 
  }

  res.redirect('/perfil')
})

const storage1 = multer.diskStorage({

  destination: function(req,file,cb){
      cb(null,'public/images/uploads/capa')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  }
})
const upload1 = multer({storage: storage1})

router.post('/capa', upload1.single("avatar"), (req,res) =>{
  const file = req.file

  if(!file){
    const error = new Error ('Por favor, selecione um arquivo !')
    error.httpStatusCode = 400
    return next(error) 
  }

  res.redirect('/perfil')
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('perfil', {
    ...(req.session.usuario && {usuario:req.session.usuario})
  });
});

module.exports = router;