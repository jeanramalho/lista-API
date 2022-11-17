const request = require('supertest')
const app = require('../app')


describe('Teste rota Get Usuários',()=>{
    test('Testando status 200', ()=>{
        return request(app).get('/usuarios')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('Teste rota Get Usuário por email',()=>{
    test('Testando status 200', ()=>{
        return request(app).get('/usuario/teste@testando.com')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('Teste rota Get Usuário por id',()=>{
    test('Testando status 200', ()=>{
        return request(app).get('/usuarioid/1')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})