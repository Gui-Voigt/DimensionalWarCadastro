/**
 * 
 * File: ficha.js
 * Description: arquivo responsável pela criação do objeto ficha
 * Author: Guilherme Voigt
 * 
 */

// importação das dependências
const mongoose = require('mongoose')

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
 *  -> mana: Number     //Recurso para cast de skills
 *  -> pDef: Number     //Defesa física
 *  -> mDef: Number     //Defesa mágica
 */

const Ficha = mongoose.model('Ficha', {
    nome : String,
    origem : String,
    classe: String,

    
    str : Number,
    wis : Number,
    dex : Number,
    spd : Number,
    con : Number,
    mana : Number,
    pDef : Number,
    mDef : Number,
})


//exportar objeto
module.exports = Ficha;