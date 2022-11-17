const output = require('./outputController')

//rota raiz, apresentação da API
const principal = (app) => {
    app.get('/', async (req, res) => {
        res.send(output)
    })
}

module.exports = principal