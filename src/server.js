const express = require('express')
const route = require('./route')
const path = require('path')

//iniciando o express
const server = express()

//falando para o server que a view engine sera o EJS
server.set('view engine', 'ejs')

//falando para o express usar o conteudo da pasta public
server.use(express.static('public'))

//path é o caminho ate a pasta raiz do projeto,
//essa linha aponta o local onde esta a views 
server.set('views', path.join(__dirname,'views'))

//criando o middleware que vai receber o que vem do formulario 
//para a rota e vai para o controller
server.use(express.urlencoded({extended: true}))

//usar o arquivo route que contem as rotas
server.use(route)

//para usar a porta 3000
server.listen(3000, () => console.log('Server started'))

