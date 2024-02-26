// require('dotenv').config();

//  const Sequelize = require('sequelize')
//  const sequelize = new Sequelize('testenovo', 'root', process.env.MYSQLPASSWORD, {
//     host: "localhost",
//     dialect: 'mysql'
//  } );

// sequelize.authenticate()
// .then(() => console.log("funcionou"))
// .catch((error) => console.log("não funcionou: "+error));

// const Postagem = sequelize.define('postagens', {
//     Titulo: {
//         type: Sequelize.STRING
//     },
//     Conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// // Postagem.sync({force:true})
// // Postagem.create({
// //     Titulo: "Tomale tomale",
// //     Conteudo: "Vai tomando ta so tomaleadasdadasd"
// // })

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })

// // Usuario.sync({force:true})

// Usuario.create({
//     nome: "Monaco",
//     idade: 29,
//     email:"monacofk@gmail.com"
// })