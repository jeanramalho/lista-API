const app = require('./app')
const port = process.env.PORT || 3003

//inicia  o servidor na porta designada
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}/`)
})