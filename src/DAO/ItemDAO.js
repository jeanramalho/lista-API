class ItemDAO {
    constructor(bd) {
        this.bd = bd
    }
 
 //funções assincronas que realizam operações CRUD   

 //Lista todos os Itens
    async getAllItens() {
        try {
            return new Promise((resolve, reject) => {
                const sql = 'SELECT * FROM ITEM'
    
                this.bd.all(sql, (error, rows) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "usuarios" : rows,
                            "count" : rows.length,
                            "erro" : false
                        })
                    }
                })
    
            })
        } catch(error){
            throw new Error(error.message)
        }
        
    }


    //lista somente item cadastrado com o nome solicitado
    async getItemName(name) {
       try{
        const sql = `SELECT * FROM ITEM WHERE NOME = ?`

        return new Promise((resolve, reject) => {
            this.bd.all(sql, name, (error, rows) => {
                if(error) {
                    reject({
                        "mensagem" : error.message,
                        "erro" : true
                        })
                } else {
                    resolve({
                        "requisicao" : rows,
                        "erro" : false
                    })
                }
            })
        })
       } catch(error){
            throw new Error(error.message)
       }
       
    }


    //lista somente item cadastrado com id solicitado
    async getItemId(id) {
        try{
            const sql = `SELECT * FROM ITEM WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.bd.all(sql, id, (error, rows) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "requisicao" : rows,
                            "erro" : false
                        })
                    }
                })
            })
        } catch(error) {
            throw new Error(error.message)
        }
        
    }

    //Insere novo item no banco de dados
    async putItem(novoItem) {

        try {
            const sql = 'INSERT INTO ITEM (nome, valor, qtd) VALUES (?,?,?)'
                
            return new Promise((resolve, reject) => {
                this.bd.run(sql, [novoItem.nome, novoItem.valor, novoItem.qtd], 
                    (error) => {
                        if(error) {
                            reject({
                                "mensagem" : error.message,
                                "erro" : true
                            })
                        } else {
                            resolve({
                                "requisicao" : novoItem,
                                "erro" : false
                            })
                        }
                    })
            })
        } catch(error) {
            throw new Error(error.message)
        }
 
    }


    //deleta Item do banco de dados
    async deleteItem(id) {
        try {
            const item = await this.getItemId(id)
            if(item.requisicao.length) {
                const sql = `DELETE FROM ITEM WHERE ID = ?`

                return new Promise((resolve, reject) => {
                    this.bd.run(sql, id, (error) => {
                        if(error){
                            reject({
                                "mensagem" : error.message,
                                "erro" : true
                            })
                        } else {
                            resolve({
                                "mensagem" : `Item com ID ${id} foi deletado`,
                                "erro" : false
                            })
                        }
                    })
                })
            } else {
                throw new Error(`Item com ID ${id} não foi encontrado`)
            }
        } catch(error) {
            throw new Error(error.message)
        }
    }
    


    //atualiza item
    async updateItem(id, newitem){
        try {
            const sql = `UPDATE ITEM SET NOME = ?, VALOR = ?, QTD = ?, WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.bd.run(sql, [newitem.NOME, newitem.VALOR, newitem.QTD, id], (error) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "mensagem" : `Item com ID ${id} foi atualizado com sucesso!`,
                            "usuario" : newitem,
                            "erro" : false
                        })
                    }
                })
            })
        } catch(error) {
            throw new Error(error.message)
        }
    }

    
}

module.exports = ItemDAO