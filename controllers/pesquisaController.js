let models = require('../database/models/index')

const PesquisaController = {
    search: async (req,res,) =>{

        let { pesquisa } = req.body

        let result = await models.filme.findOne({ where: { nome: pesquisa } })

        let resultSessions = await models.sessoes.findAll({ where: { nome: pesquisa } , order: [ [ 'id', 'DESC' ]]})

        console.log(resultSessions)

        let filmes = await models.filme.findAll()

        if(pesquisa === ""){
            res.render('todosfilmes', { filmes,  usuario:req.session.usuario })
        }
        else{
            res.render('resultadobusca', { result, resultSessions,  usuario:req.session.usuario })

            console.log(result)
        }
    }
}

module.exports = PesquisaController