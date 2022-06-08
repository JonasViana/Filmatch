const bcrypt = require ('bcryptjs')
const { response } = require('express')

var  { Usuario }  = require ('../database/models/index')

const loginController = {
    user: async(req,res) =>{
        const {email, senha} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email: email,
            }
        }).then(result => result.dataValues)
        console.log(req.body)
        console.log(usuario.senha)
        console.log(bcrypt.compareSync(senha, usuario.senha))

        if (!usuario) {
            return res.render('login', {erro:'Email e/ou senha estão incorretos. Tente novamente'})
        }

        if(!bcrypt.compareSync(senha, usuario.senha)){
            console.log('senha')
            console.log(senha)
            return res.render('login', {erro:'Email e/ou senha estão incorretos. Tente novamente'})
        }
        
        req.session.usuario = {
            ...usuario, senha:null
        }

        res.redirect('/movies')
    },
    logout: async(req,res) => {
        req.session.destroy()

        return res.redirect('/movies')
    }
}
module.exports = loginController


