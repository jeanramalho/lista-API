const express = require('express')
const app = express()
const cors = require('cors')

//Importa a controller com rotas
const item = require('./Controller/itemController')

//Importa rota principal
const principal = require('./Controller/principalController')

//Importa o Banco de dados SQLite
const bd = require('./Infra/sqlite-db')

//Utilizando Middlewares
app.use(express.json())
app.use((req, res, next) => {
    next()
})
//Utilizando o Cors para liberar a comunicação externa
app.use(cors())

//Rotas
item(app,bd)
principal(app)

module.exports = app