var id = 0

//Classe que modela a criação do usuario 
class Item {
    constructor(nome, valor, qtd, idExistente) {
        if(array){
            if(idExistente) {
                this.id = idExistente
            } else {
                this.id = id++
            }
        }

        this.nome = nome
        this.valor = valor
        this.qtd = qtd
        
    
       
       
    }
}




module.exports = Item