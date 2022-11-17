var id = 0

//Classe que modela a criação do usuario 
class Usuario {
    constructor(nome, telefone, email, endereco, senha, administrador, array, idExistente) {
        if(array){
            if(idExistente) {
                this.id = idExistente
            } else {
                this.id = id++
            }
        }

        this.nome = nome
        this.telefone = telefone
        this.email = this._verificaEmail(email)
        this.endereco = endereco
        this.senha = this._verificaSenha(senha)
        this.administrador = administrador
       
    }

    //Função de verificação de senha
    _verificaSenha(senha) {
        if(senha.length <= 8) {
            return senha
        } else {
            throw new Error("A Senha deve conter no máximo 8 caracteres")
        }
    }

    //Função de verificação de email
    _verificaEmail(email) {
        var emailVerificador = email.includes('@')

        if(emailVerificador === true) {
            return email
        } else {
            throw new Error("O email inserido precisa ser válido")
        }
    }
}




module.exports = Usuario