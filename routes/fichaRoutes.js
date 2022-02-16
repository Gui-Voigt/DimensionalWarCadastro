//importando dependências
const router = require('express').Router();
const Ficha = require('../models/Ficha');

//Rota POST
router.post('/', async (req, res) => {
    //Receber dados de body descontruindo-os
    var {nome, origem, classe, str, wis, dex, spd, con, mana, pDef, mDef} = req.body
 
    //Teste de preenchimento e valores padrão -> Verificar alternativa do MongoDB ou Mongoose para valores padrão
    if (!nome) {
        res.json({message:"Nome obrigatório"})
    }
    if (!origem) {
        res.json({message:"Origem obrigatória"})
    }
    if (!classe) {
        res.json({message:"Classe obrigatória"})
    }
    
    if (!str) {
        str = 0
    }
    if (!wis) {
        wis = 0
    }
    if (!dex) {
        dex = 0
    }
    if (!spd) {
        spd = 0
    }
    if (!con) {
        con = 0
    }
    if (!mana) {
        mana = 0
    }
    if (!pDef) {
        pDef = 0
    }
    if (!mDef) {
        mDef = 0
    }
    
    //Criar objeto "Ficha" com os parâmetros desconstruídos
    const ficha = {
        nome, origem, classe, str, wis, dex, spd, con, mana, pDef, mDef
    }

    //Salva o objeto como elemento no banco de dados
    try{

        await Ficha.create(ficha) //Cria o elemento do Schema Ficha utilizando os dados do objeto ficha
        res.status(201).json({ message : `Cadastro do personagem ${nome} realizado com sucesso!`})
   
    } catch(err) {

        res.status(500).json({ 
            message : "Erro ao cadastrar personagem"})
  
    }
})

//Exportar Rota
module.exports = router;