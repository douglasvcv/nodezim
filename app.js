const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Alooowwww")
})
app.get("/novo", (req, res) =>{
    res.send("Bem-vindo")
})

app.get("/ola/:nome/:cargo", (req, res) => {
    res.send(`<h1>Olá ${req.params.nome}, você trabalha como ${req.params.cargo}</h1>`)
})

app.listen(3081, () => console.log("Servidor rodando na url http://localhost:3081"))




// const http = require("http")

// http.createServer((req, res) =>{
//     res.end("Hello world")
// }).listen(9005)

// console.log("Servidor rodando")