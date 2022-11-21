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
    async geItemId(id) {
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

    //Insere novo usuario no banco de dados
    async putUser(novoUsuario) {

        try {
            const sql = 'INSERT INTO USUARIOS (nome, telefone, email, endereco, senha, administrador) VALUES (?,?,?,?,?,?)'
                
            return new Promise((resolve, reject) => {
                this.bd.run(sql, [novoUsuario.nome, novoUsuario.telefone, novoUsuario.email, novoUsuario.endereco, novoUsuario.senha, novoUsuario.administrador], 
                    (error) => {
                        if(error) {
                            reject({
                                "mensagem" : error.message,
                                "erro" : true
                            })
                        } else {
                            resolve({
                                "requisicao" : novoUsuario,
                                "erro" : false
                            })
                        }
                    })
            })
        } catch(error) {
            throw new Error(error.message)
        }
 
    }


    //deleta usuario do banco de dados
    async deleteUser(id) {
        try {
            const user = await this.getUserId(id)
            if(user.requisicao.length) {
                const sql = `DELETE FROM USUARIOS WHERE ID = ?`

                return new Promise((resolve, reject) => {
                    this.bd.run(sql, id, (error) => {
                        if(error){
                            reject({
                                "mensagem" : error.message,
                                "erro" : true
                            })
                        } else {
                            resolve({
                                "mensagem" : `Usuário com ID ${id} foi deletado`,
                                "erro" : false
                            })
                        }
                    })
                })
            } else {
                throw new Error(`Usuário com ID ${id} não foi encontrado`)
            }
        } catch(error) {
            throw new Error(error.message)
        }
    }
    


    //atualiza usuario
    async updateUser(id, newUser){
        try {
            const sql = `UPDATE USUARIOS SET NOME = ?, TELEFONE = ?, EMAIL = ?, ENDERECO = ?, SENHA = ? WHERE ID = ?`

            return new Promise((resolve, reject) => {
                this.bd.run(sql, [newUser.nome, newUser.telefone, newUser.email, newUser.endereco, newUser.Senha, id], (error) => {
                    if(error) {
                        reject({
                            "mensagem" : error.message,
                            "erro" : true
                        })
                    } else {
                        resolve({
                            "mensagem" : `Usuário com ID ${id} foi atualizado com sucesso!`,
                            "usuario" : newUser,
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

module.exports = UsuarioDAO