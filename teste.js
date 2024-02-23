require('dotenv').config()

 const Sequelize = require('sequelize')
 const sequelize = new Sequelize('testenovo', 'root', process.env.MYSQLPASSWORD, {
    host: "localhost",
    dialect: 'mysql'
 } )

sequelize.authenticate().then(() => console.log("funcionou")).catch((error) => console.log("não funcionou: "+error))