//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


//iniciando o express
const server = express()
server  
//ultilizar body do req
.use(express.urlencoded({ extended: true}))
//ultilizando os arquivos estaticos
.use(express.static('public'))

//
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


//ligar servidor 
server.listen(5500)  