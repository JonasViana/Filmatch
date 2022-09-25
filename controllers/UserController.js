const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const {check, validationResult, body} = require ('express-validator')
const {Usuario} = require('../database/models')


let UserController = {
    registroForm: (req,res)=> {
        res.render('login')
    },
    salvarForm: async (req,res)=>{
        let listaDeErrors = validationResult(req)
        if(listaDeErrors.isEmpty()){

            let {nome, email, senha, dataDeNascimento, genero} = req.body

            let senhaC = bcrypt.hashSync(senha, 10)
            
            let usuario = await Usuario.create({nome,email,senha:senhaC,nasc:dataDeNascimento,genero})

            
            return res.redirect('/login')
            
        }
        else{
            res.render('paginaCadastro', {errors:listaDeErrors.mapped(), old:req.body})
        }
    },

    editarPefil:async (req,res) => {
        let user = await Usuario.findOne({ where: {email:req.session.usuario.email}})

        let {sobremim, ocupacao, interesses, filme} = req.body

        user.set({
            bio:sobremim,
            ocupacao,
            hobbies:interesses,
            filmePref:filme 
        })

        await user.save()

        let usuario = await Usuario.findOne({ where: {email:req.session.usuario.email}})

     

        res.render('perfil' , { usuario })
    }
}
module.exports = UserController