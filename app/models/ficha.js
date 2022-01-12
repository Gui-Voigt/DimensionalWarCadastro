/**
 * 
 * File: ficha.js
 * Description: arquivo responsável pela criação do objeto ficha
 * Author: Guilherme Voigt
 * 
 */

// importação das dependências
var mongoose = require('mongoose');

//criação do Schema
var Schema = mongoose.Schema;

//Criação do objeto Ficha
/**
 *  FICHA
 *  -> ID: int
 *  -> nome: String
 *  -> origem: String
 *  -> classe: String
 *  
 *  -> str: Number      //Força, dano físico
 *  -> wis: Number      //Sabedoria, dano mágico
 *  -> dex: Number      //Destreza, ações por turno e habilidade com armas
 *  -> spd: Number      //Velocidade, ordem de ataque, fuga ou esquiva
 *  -> con: Number      //Constuição, Fatal Bônus
 *  -> mana: Number
 *  -> pDef: Number
 *  -> mDef: Number
 */

var FichaSchema = new Schema({
    //ID já incluso
    nome: String,
    origem: String,
    classe: String,
    
    str: Number,
    wis: Number,
    dex: Number,
    spd: Number,
    con: Number,
    mana: Number,
    pDef: Number,
    mDef: Number
});

//Exportar o objeto
module.exports = mongoose.model('Ficha', FichaSchema);