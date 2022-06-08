var express = require('express');
var router = express.Router();
const UserController = require ('../controllers/UserController.js')
const {check, validationResult, body} = require ('express-validator');
const app = require('../app.js');

const validateRegister = [
  check('nome')
    .notEmpty().withMessage('Deve preencher o nome').bail()
    .isLength({min:4 }).withMessage('O nome deve ser maior'),
  check('email')
    .notEmpty().withMessage('Deve preencher o email').bail()
    .isEmail().withMessage('Deve preencher com um email válido'),
  check('senha')
    .notEmpty().withMessage('Deve preencher sua senha').bail()
    .isLength({min: 6 }).withMessage('A senha deve ser maior'),
  check('dataDeNascimento')
    .notEmpty().withMessage('Deve selecionar sua data de nascimento')
]

router.get('/criar', UserController.registroForm)
router.post('/criar' ,validateRegister, UserController.salvarForm)

module.exports = router;
