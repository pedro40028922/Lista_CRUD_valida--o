const express = require('express')

const Router = express.Router()

let ListaPessoas =[
{
    id: 1,
    nome: "Kessyde",
    idade: 19,
    email: "Kessyde@gmail.com",
    telefone: "61900010002"
},
{
    id: 2,
    nome: "Wanessa",
    idade: 23,
    email: "Wanessa@gmail.com",
    telefone: "61900015281"
},
{
    id: 3,
    nome: "Jussara",
    idade: 19,
    email: "Sara@gmail.com",
    telefone: "61900015288"  
}]

function validacaoPessoa(req, res, next) {
let id = req.params.id
let pessoas = ListaPessoas.find(pessoas => pessoas.id == id)
let index = ListaPessoas.findIndex(pessoas => pessoas.id == id)
        if(pessoas) {
        res.pessoas = pessoas
            res.index = index
                            return next()
}
return res.status(404).json({mensagem: "Pessoa não encontrada!!"})
}

function ValidaçãoAtributos (req,res,next){
    const dados = req.body
    if(!dados.nome || !dados.idade || !dados.email || !dados.telefone){
        return res.status(404).json({mensagem:"campo obrigatorio não assinado"})
    }
return next()
}
   Router.get("/pessoas", (req, res) =>{
    res.json(ListaPessoas)
})
 
Router.get('/pessoas/:id',validacaoPessoa, (req, res) =>{
    res.json(res.pessoas)
})


Router.post('/pessoas', ValidaçãoAtributos, (req, res) =>{
    const id = req.body
        console.log(req.body)
const pessoasMod = {
    id: Math.round(Math.random() * 1000),
    nome: dados.nome,
    idade: dados.idade,
    email: dados.email,
    telefone: dados.telefone
}
ListaPessoas.push(pessoasMod)

res.json({
    mensagem:"carro cadastrado com sucesso!",
    carro:carro
})
})
Router.put('/pessoas/:id',ValidaçãoAtributos, validacaoPessoa, (req, res) =>{
    const dados = req.body

    const updados = {
    id: req.pessoas.id,
    nome: dados.nome,
    idade: dados.idade,
    email: dados.email,
    telefone: dados.telefone
    }

    ListaPessoas[res.index] = updados

    res.json({
    mensagem:'Dados atualizados!',
    pessoas: updados
    })
})

Router.delete('/pessoas/:id', validacaoPessoa, (req,res) =>{
    ListaPessoas.splice(res.index,1)
    res.json({mensagem:"Pessoa excluia com sucesso!!!"})
})

Router.get('/pessoas/nome/:nome',(req, res) =>{
    const nome= req.params.nome
    const pessoas = ListaPessoas.filter(pessoas => pessoas.nome.toLowerCase() == nome.toLowerCase())
    res.json(pessoas)
})

module.exports = Router