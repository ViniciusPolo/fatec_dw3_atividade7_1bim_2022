const express = require('express')
const http = require('http')

require('./src/database/indexDB');


// instanciar o express
const app = express();

app.use(express.json())

const departamentosRoutes = require('./src/api/routes/departamentosRoutes')
const empregadosRoutes = require('./src/api/routes/empregadosRoutes')

app.use('/departamentos', departamentosRoutes)
app.use(empregadosRoutes)

//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3002);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;