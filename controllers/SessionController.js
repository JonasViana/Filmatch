
const models = require('../database/models/index')

const SessionController = {
    movies: async (req,res,) =>{
    const sessoes = await  models.sessoes.findAll()

    const  filmes =  await models.filme.findAll()

    let findSession = await models.sessoes.findAll({
        order: [ [ 'id', 'DESC' ]],
        })
    
    res.render('movies' ,{ sessoes, filmes, usuario:req.session.usuario, findSession})
    
    },

    sessions: async (req,res,) =>{
        const sessoes = await  models.sessoes.findAll({
            order: [ [ 'id', 'DESC' ]],
            })

        let filmeID = req.params.id
     
        res.render('sessaocriada' ,{ sessoes, filmeID, usuario:req.session.usuario})
        
    },
    findOne: async (req,res,) =>{
        let findSession = await models.sessoes.findOne({
            order: [ [ 'id', 'DESC' ]],
            })

        return res.render('sucessosessao', {findSession, usuario:req.session.usuario})
    }
}

module.exports = SessionController