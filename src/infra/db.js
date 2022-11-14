/* 
    Esse arquivo deve ser executado apenas uma vez para que o banco seja criado e populado
*/

//aquivo responsável por criar a tabela e popular o banco de dados
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const caminhoArq = path.resolve(__dirname, 'database.db')
//importante que o caminho abaixo seja o mesmo que o indicado no arquivo
//que exporta db (sqlite-db.js)
const db = new sqlite3.Database(caminhoArq)


//=== Cria tabela
const LISTA_ITENS = `
    CREATE TABLE IF NOT EXISTS "LISTA"(
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "ITEM" VARCHAR,
        "QTD" INTEGER,
        "VALOR" FLOAT
    );
`;

const ADD_ITEM_DATA = `
    INSERT INTO LISTA (ID, ITEM, QTD, VALOR)
    VALUES
        (1, 'Arroz', 3, 10,50),
        (2, 'Feijao', 1, 6,50)
`;

