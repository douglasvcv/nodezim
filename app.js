require('dotenv').config()

const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')



//Config
    //Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Connection with MySQL database
    const sequelize = new Sequelize('testenovo', 'root', process.env.MYSQLPASSWORD, {
        host: 'localhost',
        dialect: 'mysql'
    })

    //Routes
    app.get('/bak', (req, res) =>{
        res.render('formulario')
    })

    app.post('/add', (req, res) =>{
        req.body.conteudo
        res.send("Título: "+req.body.titulo+" Conteúdo: "+req.body.conteudo)
    })

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/html/index.html")
// })
// app.get("/novo", (req, res) =>{
//     res.send("Bem-vindo")
// })

// app.get("/ola/:nome/:cargo", (req, res) => {
//     res.send(`<h1>Olá ${req.params.nome}, você trabalha como ${req.params.cargo}</h1>`)
// })

app.listen(3081, () => console.log("Servidor rodando na url http://localhost:3081"))




// const http = require("http")

// http.createServer((req, res) =>{
//     res.end("Hello world")
// }).listen(9005)

// console.log("Servidor rodando")