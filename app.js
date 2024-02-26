require('dotenv').config()

const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')



//Config
    //Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


    //Connection with MySQL database
    const sequelize = new Sequelize('testenovo', 'root', process.env.MYSQLPASSWORD, {
        host: 'localhost',
        dialect: 'mysql'
    })

    //Routes
    app.get('/bak', (req, res) =>{
        res.send("han han cheguei")
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