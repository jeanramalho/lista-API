const Item = require('../Models/Item')
const ItemDAO = require('../DAO/ItemDAO')


//lista de rotas utilizadas na API que realizam operções CRUD com verbos HTTP com as funções assincronas do aquivo itemDAO.js 
const item = (app, bd) => {
    const novoItemDAO = new ItemDAO(bd)

    //get da rota itens lista todos os itens
    app.get('/itens', async (req, res) => {
        
        try {            
            const resposta = await novoItemDAO.getAllItens()
            res.json(resposta)
    } catch(error) {

        res.status(404).json(error)
    }
    })

    //get da rota item/:name lista somente itens com o nome solicitado
    app.get('/item/:name', async (req, res) => {
        const name = req.params.name

        try {
            const resposta = await novoItemDAO.getItemName(name)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })

    //get da rota itemid/:id lista somente item com id solicitado
    app.get('/itemid/:id', async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await novoItemDAO.geItemId(id)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })


    //post da rota item insere novo registro de item no banco de dados
    app.post('/item', async (req, res) => {       
        try {
            const body = req.body
            const novoItem = new Item(body.nome, body.valor, body.qtd)

            const resposta = await novoItemDAO.putItem(novoItem)
            res.json(resposta)
            

        } catch (error) {
            res.json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })


    //put da roata usuarioup/:id atualiza usuario com id informado 
    app.put('/usuarioup/:id', async (req, res) => {
        const id = req.params.id
        const body = req.body

        try {
            
            const respostaGet = await novoUsuarioDAO.getUserId(id)
            const usuarioAntigo = respostaGet.requisicao[0]

            if(usuarioAntigo) {
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.NOME,
                    body.telefone || usuarioAntigo.TELEFONE,
                    body.email || usuarioAntigo.EMAIL,
                    body.endereco || usuarioAntigo.ENDERECO,
                    body.senha || usuarioAntigo.SENHA,
                    body.administrador || usuarioAntigo.ADMINISTRADOR
                    ) 

                    const resposta = await novoUsuarioDAO.updateUser(id, usuarioAtualizado)
                    res.json(resposta)
            } else {
                res.json({
                    "mensagem" : `Usuario com ID ${id} não foi encontrado`,
                    "error" : true
                })
            }
        } catch(error) {
            res.json({
                "mensagem" : error.message,
                "error" : true
            })
        }
    })


    //delete da rota usuariodel/:id deleta usuario com id informado
    app.delete('/usuariodel/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const resposta = await novoUsuarioDAO.deleteUser(id)
            res.json(resposta)
        } catch(error) {
            res.status(404).json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })
}




module.exports = usuario