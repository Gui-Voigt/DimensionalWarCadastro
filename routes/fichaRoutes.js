//importando dependências
const router = require('express').Router();
const Ficha = require('../models/Ficha');

//Rota POST - Criação de Ficha
router.post('/', async (req, res) => {
    //Receber dados de body descontruindo-os
    
    var {nome, origem, classe, str, wis, dex, spd, con, mana, pDef, mDef} = req.body
    //Criar objeto "Ficha" com os parâmetros desconstruídos
    
    const ficha = {
        nome, origem, classe, str, wis, dex, spd, con, mana, pDef, mDef
    }

    //Teste de preenchimento e valores padrão -> Verificar alternativa do MongoDB ou Mongoose para valores padrão

    if (!ficha.nome) {
        res.json({message:"Nome obrigatório"})
    }
    if (!ficha.origem) {
        res.json({message:"Origem obrigatória"})
    }
    if (!ficha.classe) {
        res.json({message:"Classe obrigatória"})
    }

    if (!ficha.str) {
        ficha.str = 0
    }
    if (!ficha.wis) {
        ficha.wis = 0
    }
    if (!ficha.dex) {
        ficha.dex = 0
    }
    if (!ficha.spd) {
        ficha.spd = 0
    }
    if (!ficha.con) {
        ficha.con = 0
    }
    if (!ficha.mana) {
        ficha.mana = 0
    }
    if (!ficha.pDef) {
        ficha.pDef = 0
    }
    if (!ficha.mDef) {
        ficha.mDef = 0
    }
    
    //Salva o objeto como elemento no banco de dados
    try{

        await Ficha.create(ficha) //Cria o elemento do Schema Ficha utilizando os dados do objeto ficha
        res.status(201).json({ message : `Cadastro do personagem ${nome} realizado com sucesso!`})
        return
   
    } catch(err) {

        res.status(500).json({ 
            error : err,
            message : "Erro ao cadastrar personagem"
        })
        return
  
    }

    
})

// Rota Get - 

    //Leitura geral de dados
router.get('/', async (req,res) => {

    try{

        const fichas = await Ficha.find()
        res.status(200).json(fichas)
        return

    } catch (err) {
        res.status(500).json({
            error : err,
            message : "Erro ao carregar fichas"
        })
        return
    }
})

    //Leitura por ID
router.get('/:id', async (req,res) => {
    const id = req.params.id

    try{

        const ficha = await Ficha.findOne({ _id : id })
        
        if(!ficha){
            res.status(422).json({ message : "Ficha não encontrada"})
            return
        }

        res.status(200).json(ficha)
        return

    } catch (err) {
        res.status(500).json({
            error: err,
            message : "Erro ao carregar Ficha"
        })
        return
    }


})

//Atualização de dados (PUT e PATCH)
    //Patch faz atualização parcial dos dados
router.patch('/:id', async (req,res) => {

    const id = req.params.id
    const {nome, origem, classe, str, wis, dex, spd, con, mana, pDef, mDef} = req.body

    var ficha = {
        nome, origem, classe, str, wis, dex, spd, con, mana, pDef, mDef
    }

    try{

        const fichaUpdate = await Ficha.updateOne({ _id : id}, ficha)

        if (fichaUpdate.modifiedCount === 0) {
            res.status(422).json({ message : "Nenhuma ficha encontrada para atualização"})
            return
        }

        ficha = await Ficha.findOne({ _id : id})
        res.status(200).json(ficha)
        return
        

    } catch (err) {

        res.status(500).json({ error : err, message : "Erro ao atualizar ficha"})
        return

    }
    
})

//Exportar Rota
module.exports = router;