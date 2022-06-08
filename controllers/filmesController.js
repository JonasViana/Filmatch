
const models = require('../database/models/index')

const filmesController = {
    movies: async (req,res,) =>{

    const sessoes = await  models.sessoes.findAll()

    const  filmes =  await models.filme.findAll()

    const mensagem = await models.Mensagems.findAll()

    let filmeID = req.params.id
    
    const lastSession = await models.sessoes.findOne({where: {nome: filmes[filmeID].nome} , order: [ [ 'id', 'DESC' ]]})

    console.log(lastSession)

    return res.render('resultadoFilme' ,{lastSession, sessoes, filmes, mensagem, filmeID, usuario:req.session.usuario}) 
    },

    todosfilmes: async(req,res) => {
        const filmes = await models.filme.findAll()

        return res.render('todosfilmes', { filmes})
    }
}

module.exports = filmesController