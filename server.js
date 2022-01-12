/**
 * 
 * File: server.js
 * Description: Arquivo responsável pelas conexões e rotas
 * Author: Guilherme Voigt
 *
 */

//Configuração do Setup do app:

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Ficha = require('./app/models/ficha');
const res = require('express/lib/response');

//Conexão com o banco de dados
    //Ainda não há banco de dados

//Configurar a varpiavel app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Definir porta onde a API será execeutada:
var port = process.env.port || 8000;

//Definir rotas via Express
var router = express.Router();

router.get('/', function(req, res) {
    res.json({"message" : "Rota Criada"})
});

//Definir padrão de prefiso das rotas:
app.use('/api', router);

//Iniciar a aplicação (servidor):
app.listen(port);
console.log("INICIANDO A APP NA PORTA " + port);