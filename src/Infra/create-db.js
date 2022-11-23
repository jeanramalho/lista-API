const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq)


//variavel com codico sql para criação da tabela
const ITEM_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ITEM" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(70),
    "VALOR" REAL,
    "QTD" INTEGER
)`

//variavel com codigo sql para popular tabela com usuario teste
const ADD_ITEM_TESTE = `
INSERT INTO USUARIOS (ID, NOME, VALOR, QTD)
VALUES 
    (1, 'Teste Testando', 22,50, '2')    
`

//função que cria tabela utilizando a variavel com codigo
function criaTabelaItem() {
    db.run(ITEM_SCHEMA, (error) => {
       if (error) console.log("Erro ao criar tabela de item")
    })
}

//função que popula tabela utilizando a variavel com codigo
function populaTabelaItem() {
    db.run(ADD_ITEM_TESTE, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários")
    })
}

//ordena a execução das funções
db.serialize(() => {
    criaTabelaItem();
    populaTabelaItem();
})



