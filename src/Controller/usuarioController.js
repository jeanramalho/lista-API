const Usuario = require('../Models/Usuario')
const UsuarioDAO = require('../DAO/UsuarioDAO')


//lista de rotas utilizadas na API que realizam operções CRUD com verbos HTTP com as funções assincronas do aquivo usuariosDAO.js 
const usuario = (app, bd) => {
    const novoUsuarioDAO = new UsuarioDAO(bd)

    //get da rota usuários lista todos os usuários
    app.get('/usuarios', async (req, res) => {
        
        try {            
            const resposta = await novoUsuarioDAO.getAllUsers()
            res.json(resposta)
    } catch(error) {

        res.status(404).json(error)
    }
    })

    //get da rota usuário/:email lista somente usuarios com o email solicitado
    app.get('/usuario/:email', async (req, res) => {
        const email = req.params.email

        try {
            const resposta = await novoUsuarioDAO.getUserEmail(email)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })

    //get da rota usuarioid/:id lista somente usuário com id solicitado
    app.get('/usuarioid/:id', async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await novoUsuarioDAO.getUserId(id)
            res.json(resposta)
        } catch(error) {
            res.status(404).json(error)
        }
    })


    //post da rota usuario insere novo registro de usuário no banco de dados
    app.post('/usuario', async (req, res) => {       
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.telefone, body.email, body.endereco, body.senha, body.administrador)

            const resposta = await novoUsuarioDAO.putUser(novoUsuario)
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