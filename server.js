/**
 * 
 * File: server.js
 * Description: Arquivo responsável pelas conexões e rotas
 * Author: Guilherme Voigt
 *
 */

//Setup do app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const dbconnect = require('./dbconnect');

//Configurar a variável app para usar o bodyParser():
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//Definir porta da aplicação
var port = process.env.port || 8000;

//Iniciar a aplicação(Server)
app.listen(port);
console.log("inciando a app na porta " + port);   

//Iniciando banco de dados
dbconnect();