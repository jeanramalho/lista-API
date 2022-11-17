const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq)


//variavel com codico sql para criação da tabela
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(70),
    "TELEFONE" varchar(70),
    "EMAIL" varchar(70),
    "ENDERECO" varchar(100),
    "SENHA" varchar(15),
    "ADMINISTRADOR" varchar(7)
)`

//variavel com codigo sql para popular tabela com usuario teste
const ADD_USUARIO_TESTE = `
INSERT INTO USUARIOS (ID, NOME, TELEFONE, EMAIL, ENDERECO, SENHA, ADMINISTRADOR)
VALUES 
    (1, 'Teste Testando','0000-0000', 'teste@testando.com', 'Rua do teste,15', '12345678', 'true')    
`

//função que cria tabela utilizando a variavel com codigo
function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error) => {
       if (error) console.log("Erro ao criar tabela de usuários")
    })
}

//função que popula tabela utilizando a variavel com codigo
function populaTabelaUser() {
    db.run(ADD_USUARIO_TESTE, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários")
    })
}

//ordena a execução das funções
db.serialize(() => {
    criaTabelaUsr();
    populaTabelaUser();
})



