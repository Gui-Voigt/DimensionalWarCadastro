/**
 * 
 * File: server.js
 * Description: Arquivo responsável pelas conexões e rotas
 * Author: Guilherme Voigt
 *
 */

//Setup do app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fichaRoutes = require('./routes/fichaRoutes');
const dbconnect = require('./dbconnect');

//Configurar a variável app para usar o bodyParser():
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//Definir end-point padrão
app.get('/', (req, res) => {
    res.json({ message : "Preparado(a) para defender o plano de Gaia nas Guerras Dimensionais?"})
})

app.use('/ficha', fichaRoutes);

//Definir porta da aplicação
var port = process.env.port || 8000

//Iniciando banco de dados e então a aplicação(Server)

dbconnect()
.then(
    () => {
        app.listen(port);
        console.log("aplicação iniciada na porta " + port);
    })
.catch(
    (err) => {
        console.error(err)
        .json({message : "Erro ao iniciar a aplicação na porta " + port})
    }
);