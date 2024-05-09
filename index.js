const express = require('express')
const app = express()

app.use(express.json())

const pessoasRouters = require('./Routers/pessoas')

app.use(pessoasRouters)

app.listen(3000, () => {
console.log('http://localhost:3000 rodando')
})